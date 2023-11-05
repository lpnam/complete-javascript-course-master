'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// const contry = document.querySelector('.country');
const renderErr = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // contry.style.opacity = 0;
  // countriesContainer.style.opacity = 1;
};
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${
          data.languages[Object.keys(data.languages)[0]]
        }</p>
        <p class="country__row"><span>💰</span>${
          data.currencies[Object.keys(data.currencies)[0]].name
        }</p>
    </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
/*
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${
          data.languages[Object.keys(data.languages)[0]]
        }</p>
        <p class="country__row"><span>💰</span>${
          data.currencies[Object.keys(data.currencies)[0]].name
        }</p>
    </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country
    const neighbour = data.borders?.[0];
    console.log(neighbour);
    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('usa');
*/
// getCountryAndNeighbour('brazil');
// getCountryAndNeighbour('usa');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

//Promise -> escape callback hell\
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errMsg = 'Some thing went wrong') {
  return fetch(url).then(response => {
    // console.log(response);
    if (!response.ok) {
      throw new Error(`${errMsg} ${response.status}`);
    }
    return response.json();
  });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'sdfsdfsdf';
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => renderErr(`Something went wrong -- ${err}. Try again!`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found');
      // const neighbour = 'sdfsdfsdf';
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => renderErr(`Something went wrong -- ${err}. Try again!`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });
///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' 
which renders a country ONLY based on GPS coordinates. 
For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as 
inputs a latitude value (lat) and a longitude value (lng) 
(these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. 
Reverse geocoding means to convert coordinates to a meaningful location, 
like a city and country name. Use this API to do reverse geocoding: 
https://geocode.xyz/api.
The AJAX call will be done to a URL with this 
format: https://geocode.xyz/52.508,13.381?geoit=json. 
Use the fetch API and promises to get the data. 
Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes 
that you recieved about the provided location. 
Then, using this data, log a messsage like this to the 
console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and 
log errors to the console
5. This API allows you to make only 3 requests per second. 
If you reload fast, you will get this error with code 403. 
This is an error with the request. 
Remember, fetch() does NOT reject the promise in this case. 
So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
// const user_key = '352014221411200607873x47606';
// fetch(`https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=${user_key}`)

const whereAmI = function (latitude, longitude) {
  fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
    .then(resp => {
      console.log(resp);
      if (!resp.ok) throw new Error(`Problem with geocoding ${resp.status}`);
      return resp.json();
    })
    .then(data => {
      if (data.city.includes('Throttled'))
        throw new Error(`You are get limitted`);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
      // console.log(data.city);
      // return getCountryData(data.country);
    })
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);
      }
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`Get error: ${err}`))
    .finally(() => (countriesContainer.style.opacity = 1));
};

// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381);
// });
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
/*
console.log('Test Start');

setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test End');
*/
/*
//Build Promise from scratch
const scratchPromise = new Promise(function (resolve, reject) {
  console.log('Starting random condition');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('Condition Success');
    } else {
      reject(new Error('Condition failed'));
    }
  }, 2000);
});

// scratchPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => {
    return console.log('4 second passed');
  });

Promise.resolve('abac').then(x => console.log(x));
Promise.reject('abvc').catch(err => console.error(err));
*/
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const newPosition = function () {
  getPosition()
    .then(pos => {
      const { latitude, longitude } = pos.coords;
      return fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
    })
    .then(resp => {
      console.log(resp);
      if (!resp.ok) throw new Error(`Problem with geocoding ${resp.status}`);
      return resp.json();
    })
    .then(data => {
      if (data.city.includes('Throttled'))
        throw new Error(`You are get limitted`);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
      // console.log(data.city);
      // return getCountryData(data.country);
    })
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);
      }
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`Get error: ${err}`))
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', newPosition);
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. 
Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. 
This function returns a promise which creates a new image (use document.createElement('img')) and 
sets the .src attribute to the provided image path. When the image is done loading, 
append it to the DOM element with the 'images' class, and resolve the promise. 
The fulfilled value should be the image element itself. 
In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), 
and load a second image 
(HINT: Use the image element returned by the createImage promise to hide the current image. 
  You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. 
Test the error handler by passing a wrong image path. 
Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
/*
const imagesElement = document.querySelector('.images');
let currentImage = 0;
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (url) {
  return new Promise(function (resolve, reject) {
    const al = document.createElement('img');
    al.src = url;
    al.addEventListener('load', () => {
      imagesElement.appendChild(al);
      return resolve(al);
    });
    al.addEventListener('error', () => {
      return reject(new Error('Can not find image'));
    });
  });
};

createImage('./img/img-1z.jpg')
  .then(resp => {
    currentImage = resp;
    return wait(2);
  })
  .then(() => createImage('./img/img-2.jpg'))
  .then(resp => {
    currentImage = resp;
    return wait(2);
  })
  .then(() => (imagesElement.style.display = 'none'))
  .catch(err => console.error(`Having error: ${err}`));
*/
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const c_whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude, longitude } = pos.coords;

    //reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    const { city: c_city, country: c_country } = dataGeo;

    //Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country.replace(' ', '')}`
    );
    if (!res.ok) throw new Error('Problem getting country data');
    const data = await res.json();

    renderCountry(data[0]);

    return `You are in ${c_city}, ${c_country}`;
  } catch (err) {
    renderErr(`Some thing went wrong: ${err.message}`);
    //Reject promise return from async function
    throw err;
  }
};

// console.log('1: Will get location');
// const city = c_whereAmI();
// console.log(city);

// **Async function return the promise
// c_whereAmI()
//   .then(city => console.log('2:', city))
//   .catch(err => console.error('2:', err))
//   .finally(() => console.log('3: Finish get location'));

//IIFE - immediately invoke function expressions
// (async function () {
//   try {
//     const dataResolve = await c_whereAmI();
//     console.log(`2: ${dataResolve}`);
//   } catch (error) {
//     console.error(`2: ${error}`);
//   } finally {
//     console.log('3: Finish get location');
//   }
// })();
/*
const getJSONz = function (url, errMsg = 'Some thing went wrong') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`${errMsg} ${response.status}`);
    }
    return response.json();
  });
};
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSONz(
    //   `https://restcountries.com/v3.1/name/${c1}`,
    //   'Cannot find country'
    // );
    // const [data2] = await getJSONz(
    //   `https://restcountries.com/v3.1/name/${c2}`,
    //   'Cannot find country'
    // );
    // const [data3] = await getJSONz(
    //   `https://restcountries.com/v3.1/name/${c3}`,
    //   'Cannot find country'
    // );

    //Running Promise in Parallel - Run in the same time
    const data = await Promise.all([
      await getJSONz(
        `https://restcountries.com/v3.1/name/${c1}`,
        'Cannot find country'
      ),

      await getJSONz(
        `https://restcountries.com/v3.1/name/${c2}`,
        'Cannot find country'
      ),

      await getJSONz(
        `https://restcountries.com/v3.1/name/${c3}`,
        'Cannot find country'
      ),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};
get3Countries('portugal', 'vietnam', 'usa');
*/

// Promise.race
(async function () {
  const resp = await Promise.race([
    getJSON(
      `https://restcountries.com/v3.1/name/vietnam`,
      'Cannot find country'
    ),
    getJSON(
      `https://restcountries.com/v3.1/name/canada`,
      'Cannot find country'
    ),
    getJSON(`https://restcountries.com/v3.1/name/japan`, 'Cannot find country'),
  ]);
  console.log(resp[0]);
})();

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, s * 1000);
  });
};

//Promise.race
// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/vietnam`, 'Cannot find country'),
//   timeout(1),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

//Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success1'),
//   Promise.reject('Error'),
//   Promise.resolve('Success2'),
// ]).then(res => console.log(res));

//Promise.any[ES2021]
// Promise.any([
//   Promise.resolve('Success1'),
//   Promise.reject('Error'),
//   Promise.resolve('Success2'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' 
that recreates Coding Challenge #2, 
this time using async/await (only the part where the promise is consumed). 
Compare the two versions, think about the big differences, 
and see which one you like more.
Don't forget to test the error handler, 
and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' 
that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images 
with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually 
get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'].
 To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
/*
const imagesElement = document.querySelector('.images');
let currentImage = 0;
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (url) {
  return new Promise(function (resolve, reject) {
    const al = document.createElement('img');
    al.src = url;
    al.addEventListener('load', () => {
      imagesElement.appendChild(al);
      return resolve(al);
    });
    al.addEventListener('error', () => {
      return reject(new Error('Can not find image'));
    });
  });
};

createImage('./img/img-1z.jpg')
  .then(resp => {
    currentImage = resp;
    return wait(2);
  })
  .then(() => createImage('./img/img-2.jpg'))
  .then(resp => {
    currentImage = resp;
    return wait(2);
  })
  .then(() => (imagesElement.style.display = 'none'))
  .catch(err => console.error(`Having error: ${err}`));
*/
const imagesElement = document.querySelector('.images');
// let currentImage = 0;
const wait = function (seconds) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, seconds * 1000);
  });
};
const createImage = function (url) {
  return new Promise(function (resolve, reject) {
    const al = document.createElement('img');
    al.src = url;
    al.addEventListener('load', () => {
      imagesElement.appendChild(al);
      return resolve(al);
    });
    al.addEventListener('error', () => {
      return reject(new Error('Can not find image'));
    });
  });
};
const loadNPause = async function () {
  try {
    let img = await createImage('./img/img-1.jpg');
    console.log('Loaded Image 1');
    await wait(2);
    img = await createImage('./img/img-2.jpg');
    console.log('Loaded Image 2');
    await wait(2);
    img = await createImage('./img/img-3.jpg');
    console.log('Loaded Image 3');
    await wait(2);
  } catch (error) {
    console.error(`Having error: ${error}`);
  } finally {
    imagesElement.style.display = 'none';
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const new_images = await Promise.all(imgArr.map(url => createImage(url)));

    // const images = imgArr.map(async img => await createImage(img));
    // const new_images = await Promise.all(images);

    new_images.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(`Getting error: ${err}`);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
