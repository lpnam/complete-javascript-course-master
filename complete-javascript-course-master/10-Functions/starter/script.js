'use strict';
/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH1234', 4, 600);
createBooking('LH12344', undefined, 6010); //Skip for default
*/
/*
//How passing arguments work.
const flight = 'LH1234';
const jonas = {
  name: 'Test AAH',
  passport: 23453453453,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 23453453453) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(jonas);
checkIn(flight, jonas);
*/
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//Higher-order function
const transform = function (str, fn) {
  console.log(fn(str));
  console.log(fn.name);
};
transform('JavaScript at here', upperFirstWord);
transform('JavaScript at here', oneWord);

const high5 = function () {
  console.log('Hi');
};
document.body.addEventListener('click', high5);

['Adam', 'Curcus', 'Lily'].forEach(high5);

const calc = function (num1, num2) {
  return console.log((num1 + num2) / 2);
};

const action = function (num1, num2, func) {
  return func(num1, num2);
};

action(6, 8, calc);
//example
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hello');
greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('llll');

const test1 = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const testa = test1('AKA');

testa('ZZZ');
*/
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on  ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${this.flightNum}`, name });
    console.log(this.bookings);
  },
};

lufthansa.book(239, 'Jonathan XXX');
lufthansa.book(435, 'Akai YYY');
//Call method
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
//Not WORK
// book(23, 'Sarah HIHI');
book.call(eurowings, 23, 'Sarah HIHI');
//Aplly method
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);
book.call(eurowings, ...flightData);
console.log(eurowings);
//Bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(...flightData);
bookEW(155, 'Jever Hiue');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('This already pre-define 23');
bookEW23('HoHo');
//example with event-listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value *0.23
console.log(addVAT(100));

const addXXX = rate => value => value + value * rate;
const addAAA = addXXX(0.23);
console.log(addAAA(100));
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose,
 and an array with the number of replies for each option. 
 This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. 
  The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, 
  if the option is 3, increase the value AT POSITION 3 of the array by 1. 
  Make sure to check if the input is a number and if the number makes sense 
  (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. 
The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. 
If type is 'array', simply display the results array as it is, using console.log(). 
This should be the default option. If type is 'string', 
display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. 
Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! 
So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userInput = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    // if (
    //   typeof userInput === 'number' &&
    //   userInput >= 0 &&
    //   userInput < this.options.length
    // ) {
    //   this.answers[userInput]++;
    // } else alert('Your answer invalid');
    typeof userInput === 'number' &&
      userInput >= 0 &&
      userInput < this.options.length &&
      this.answers[userInput]++;
    return this.displayResults();
  },
  displayResults(type = 'array') {
    if (type === 'string') {
      // console.log(
      //   `Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`
      // );
      console.log(`Poll results are ${this.answers.join(',')}`);
    } else console.log(this.answers);
  },
};

const pollClick = poll.registerNewAnswer.bind(poll);
document.querySelector('.poll').addEventListener('click', pollClick);
//Bonus
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
*/

//Immediately invoke function expresstions

const runOnce = function () {
  console.log('this should only run once0');
};
runOnce();

(function () {
  console.log('this should only run once1');
})();

(() => console.log('this should only run once2'))();
