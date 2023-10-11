'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     const output = `${firstName} are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var vartest = true;
//       const str = `xxxx ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(vartest);
//     add(2, 4);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'coder';
// const year = 1991;
// console.log(add(2, 3));
// console.log(add3(2, 3));
// function add(a, b) {
//   return a + b;
// }

//   add2 = function (a, b) {
//   return a + b;
// };
// const add3 = (a, b) => {
//   return a + b;
// };

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAge = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//     // const self = this;
//     // const isTrue = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >= 1981 && this.year <= 1996); // This wrong way
//     // };
//     const isTrue = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//       // console.log(this.year >= 1981 && this.year <= 1996); // This wrong way
//     };
//     isTrue();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.calcAge();

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me:', me);

let lastName = 'Kent';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Kent',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica);
console.log(marriedJessica);
// coppying object
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Kent',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(jessica2);
console.log(jessicaCopy);
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(jessica2);
console.log(jessicaCopy);
