/*
'use strict';

let haveKey = false;
const passTest = true;
*/
/*
function logger() {
     console.log('My name is ZZZ');
}

//calling / running / invoking function
logger();


function testFruit(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const testResult = testFruit(5, 0);
console.log(testResult);
console.log(testFruit(5, 0));
*/
/*
//Function Declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1997);

//Function Expression
const age2 = function(birthYear) {
    return 2037 - birthYear;
}

const aage2 = age2(1997);
console.log(age1, aage2);
*/
/*
//Arrow function
const caclAge3 = birthYear => 2037 - birthYear;

const test = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 56 - age;
    // return retirement;
    return `${firstName} retires in ${retirement}`;
};

console.log(caclAge3(1997), test(1997, 'Name'));
*/
/*
function cutFruit(fruit){
    return fruit * 4;
}

function testFruit(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(testFruit(2, 3)); 
*/
/*
//ARRAY
const no1 = 'A1';
const no2 = 'A2';
const no3 = 'A3';

const nox = ['A1', 'A2', 'A3'];

const newNox = new Array('A1', 'A2', 'A3');
const newNox2 = new Array(12, 23, 16);

const noxLength = nox.push('A4');// add to last - return number of new length
nox.unshift('A6'); // add to first - return number of new length

console.log(noxLength);
console.log(nox);
nox.pop();//Remove last - return removed element
console.log(nox);
nox.shift();//Remove first - return removed element
console.log(nox);
// console.log(nox.length);
// console.log(nox[nox.length-1]);
console.log(nox.indexOf('A2'));

console.log(nox.includes('A4')); // Return true false
*/

//object
const info = [
  "test",
  "test1",
  2037 - 1991,
  "teacher",
  ["Michael", "Paul", "Henry"],
];

const user = {
  //define new object
  firstName: "Jonas",
  lastName: "Join",
  age: 2037 - 1991,
  job: "coder",
  friends: ["Michael", "Paul", "Henry"],
};
/*
//Retrive data
console.log(user);
console.log(user.firstName);
console.log(user['firstName']);

const nameKey = 'Name'
console.log(user['first'+nameKey]);
console.log(user['last'+nameKey]);

const attribute = prompt('Choice between firstName, lastName, age, job, friends');
// console.log(user[attribute]);
if(user[attribute]){
    console.log(user[attribute]); 
} else {
    console.log('Wrong request!');
}
//Add attribute
user.location = 'Portugal';
user['gmail'] = 'kgzwhite@gmail.com';
console.log(user); 
console.log(user.friends.length);
console.log(user.friends[0]);
*/
/*
//Object method
const user2 = { //define new object
    firstName: 'Jonas',
    lastName: 'Join',
    birthYear: 1991,
    job: 'coder',
    friends: ['Michael', 'Paul', 'Henry'],
    hasDrive: true,

    calcAge: function(birthYear){
        return 2037-birthYear;
    },
    calcAge2: function(){
        return 2037 - this.birthYear;
    },
    calcAge3: function(){
        this.age = 2037 - this.birthYear
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge2()}-year ${this.job}, and he ${this.hasDrive?'has':'hasn\'t'} a driver's license`;
    }
}

console.log(user2.calcAge(1991));
console.log(user2['calcAge'](1991));

console.log(user2.calcAge2());
console.log(user2['calcAge2']());

console.log(user2.getSummary());
*/
/*
const user3 = [ 
    'Jonas',
    'Join',
     2037-1991,
    'coder',
    ['Michael', 'Paul', 'Henry'],
    true
]
const types = [];
for(let i=0;i<user3.length ;i++){
    console.log(user3[i]);
    // types[i] = typeof user3[i];
    types.push(typeof user3[i]);
}
console.log(types);
*/
const user4 = [
  "Jonas",
  "Join",
  2037 - 1991,
  "coder",
  ["Michael", "Paul", "Henry"],
];

for (let i = user4.length - 1; i >= 0; i--) {
  console.log(user4[i]);
  if (typeof user4[i] === "object") {
    for (let exercise = 0; exercise < user4[i].length; exercise++) {
      console.log(user4[i][exercise]);
    }
  }
}
let z = 0;

while (z < user4.length) {
  console.log(user4[z]);
  z++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
}
