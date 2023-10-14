'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekday[3]]: {
    open: 12,
    close: 22,
  },
  [weekday[4]]: {
    open: 11,
    close: 23,
  },
  [weekday[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  _name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time = '20:00', address }) {
    console.log(
      `Time is ${time} at ${address} with ${this.starterMenu[starterIndex]} first then ${this.mainMenu[mainIndex]}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...ortherIngredient) {
    console.log(mainIngredient, ortherIngredient);
  },

  //ES6 enhance
  openingHours,
};
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! 
This time, we have a map with a log of the events that happened during the game. 
The values are the events themselves, and the keys are the minutes 
in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened 
(no duplicates)
2. After the game has finished, 
is was found that the yellow card from minute 64 was unfair. 
So remove this event from the game events log.
3. Print the following string to 
the console: "An event happened, on average, every 9 minutes" 
(keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, 
marking whether it's in the first half or second half 
(after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
///1.
const events = [...new Set(gameEvents.values())];
console.log(events);
//2.
gameEvents.delete(64);
console.log(gameEvents);
//3.
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
//4.
for (const [time, event] of gameEvents) {
  // time > 45
  //   ? console.log(`[SECOND HALF] ${time}: ${event}`)
  //   : console.log(`[FIRST HALF] ${time}: ${event}`);
  const half = time <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${time}: ${event}`);
}
/*
////////////////////MAP///////////////////////////////
const rest = new Map();
rest.set('name1', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are close');

console.log(rest.get('name1'));
console.log(rest.get(false));
console.log(rest.get(0));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
const arrz = [1, 2];
rest.set(arrz, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arrz));
////////NEW MAP
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct >>'],
  [false, 'Try again <<'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer: '));
const answer = 3;
console.log(question.get(answer === question.get('correct'))); // rest.clear(); //CLEAR
//Convert map to array
console.log(...question);
// console.log(question.entries());
console.log(question.keys());
console.log(question.values());
console.log([...question.keys()]);
console.log([...question.values()]);

// console.log(rest);
*/
/*
/////////////////////SET//////////////////////////////
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);
console.log(new Set());
console.log(new Set('Jonass'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');

console.log(orderSet);
// orderSet.clear();

for (const order of orderSet) console.log(order);
//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);
console.log(new Set('asfsfghrthr').size);
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number 
(Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). 
HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties
, and the number of oals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/
//1. Function challenge2
/*const printGoals = function () {
  for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
  }
};
printGoals();
//2. calculate challenge2
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

//3 . challenge2
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
//Bonus
const scorers = {};
console.log(scorers);
for (const player of game.scored) {
  scorers[player] ? console.log('scorers[player]++') : (scorers[player] = 1);
}
console.log(scorers);
*/

/*
//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

/*
//Optional chaining
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours.fri?.open);
//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(open);
}
//Method
console.log(restaurant.order?.(0, 1) ?? 'Method not exist');
console.log(restaurant.orderZX?.(0, 1) ?? 'Method not exist');
//Array
const users = [{ name: 'Jonas', email: 'email' }];

console.log(users[0]?.name ?? 'User empty');
console.log(users[1]?.name ?? 'User empty');
*/
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
/*
//Coding Challenge
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// Create player list for 2 teams
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
const [players1, players2] = game.players;
//GK
const [gk, ...fieldPlayers] = [...game.players[0]];
//All players
const allPlayers = [...game.players[0], ...game.players[1]];
//FinalPlayer
const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
const allPlayersFinal = [...players1Final, ...game.players[1]];
//Create odd variables
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//Function
const printGoals = function (...numbersOfPlayer) {
  for (let i = 0; i < numbersOfPlayer.length; i++) {
    let numbersOfScored = 0;
    if (numbersOfPlayer[i] > allPlayersFinal.length) continue;
    else {
      for (let j = 0; j < game.scored.length; j++) {
        if (allPlayersFinal[numbersOfPlayer[i]] === game.scored[j])
          numbersOfScored += 1;
      }
      console.log(
        `Player: ${
          allPlayersFinal[numbersOfPlayer[i]]
        }, Scored: ${numbersOfScored}`
      );
    }
  }
};
printGoals(5, 6, 9, 10);
//Print team look like to win
team1 < team2 && console.log('Team1 likely to win');
*/

/*
//PRACTICE
const rest1 = {
  _name: 'Capri',
  // numGuest: 20,
  numGuest: 0,
};
const rest2 = {
  _name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
//OR assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

rest2.owner &&= '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';

console.log(rest1, rest2);
*/

/*
restaurant.numGuests = 0;

const guest = restaurant.numGuests || 10;
console.log(guest);

//Nullish: null and undefined (NOT 0 and '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
/////////////////Short circuiting/////////////////////////
//Use any data type, return ANY data type, short-curcuiting
console.log('-----OR-----');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

// restaurant.numGuests = 23;
console.log(undefined || 0 || '' || 'Hello' || 23 || null);
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('-----AND-----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');
///////////////////////////////////////////////////////
if (restaurant.orderPizza) {//Same way
  restaurant.orderPizza('AAA', 'BBBB');
}

restaurant.orderPizza && restaurant.orderPizza('AAA', 'BBBB'); //Same way
///////////////////////////////////////////////////////
*/
/*
//////////////////1.Destructuring
const arr = [1, 2, ...[3, 4]];
//REST, because on LEFT  side of =
const [a, b, ...z] = [1, 2, 3, 4, 5];
console.log(a, b, z); //1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//Objects
const { sat, ...weekday } = restaurant.openingHours;
console.log(weekday);
//////////////////2.Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 4, 6, 7);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('AAAA', 'BBBB', 'CCCC', 'DDDD');
restaurant.orderPizza('ZZZ');
*/
/*
//Unpacking all elements array in one
const arr = [7, 8, 9];
const basNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(basNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
//join 2 arrays
const _menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(_menu);

//Iterables: array, tring, map, sets. NOT object
//Real-world example
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt("let's make ing1"),
//   prompt("let's make ing2"),
//   prompt("let's make ing3"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects
// const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy._name = 'XXXXX';
// console.log(restaurantCopy._name);
// console.log(restaurant._name);
*/
/*
//////////////Destructuring Object////////////
const { _name, openingHours, categories } = restaurant;
console.log(_name, openingHours, categories);
const { _name: resName, openingHours: hours, categories: tags } = restaurant;
console.log(resName, hours, tags);
//Default value
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);
//Mutating variables
let a1 = 111;
let b1 = 999;
const obj = { a1: 23, b1: 7, c1: 14 };

({ a1, b1 } = obj);
console.log(a1, b1);
//Nested Object
const {
  fri: { open: oz, close: cz },
} = openingHours;
console.log(oz, cz);
//
restaurant.orderDelivery({
  time: '22:30',
  address: 'ZZ SS ZZZ, 21',
  mainIndex: 2,
  starterIndex: 2,
});
//////////////Destructuring Arrays////////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // THis is not an array, this is destructuring assignment
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//////////////////Switching variables/////////
// Instead do that
const temp = main;
main = secondary;
secondary = temp;
// We can do this
[secondary, main] = [main, secondary];
/////////////////////////////////////////////

//Receive 2 return values from a function
const [_start, _main] = restaurant.order(2, 0);
console.log(_start, _main);
//Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
