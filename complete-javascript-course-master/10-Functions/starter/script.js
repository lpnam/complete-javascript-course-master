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
