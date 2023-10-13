'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  _name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex,
    mainIndex,
    time = '20:00',
    address,
  }) {
    console.log(
      `Time is ${time} at ${address} with ${this.starterMenu[starterIndex]} first then ${this.mainMenu[mainIndex]}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
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
