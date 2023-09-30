/*
let js = 'amazing2';
if (js === 'amazing') alert('Javascript is FUN');

console.log(40+8+23-10);

console.log('Jonas2');
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let _function = 27;
let $new = "new";

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = "Tester";
let myCurrentJob = "Coder"

/////////////////PracTice///////////////////////
// LECTURE: Values and Variables
let country = "VietNam";
let continent = "Asian";
let population = 97470000;

console.log(country);
console.log(continent);
console.log(population);
// LECTURE: Data Types
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
// LECTURE: let, const and var

language = "Vietnamese"
const NUMBER = 9;
// NUMBER = 10; Assignment to constant variable.

// LECTURE: Basic Operators
let halfOfPopulation = population/2;
console.log(halfOfPopulation);
let populationPlusOne = population + 1;
console.log(populationPlusOne);

const POPULATION_FINLAND = 6000000;
if(population > POPULATION_FINLAND) console.log("Bigger than POPULATION_FINLAND");
else console.log("Smaller");

const EVERAGE_POPULATION = 33000000;
if(population > EVERAGE_POPULATION) console.log(`'${country}'s population is above average`);
else console.log(`'${country}'s population is ${(EVERAGE_POPULATION-population)/1000000} million below average`);

let description = country + " is in " + continent + ", and its " + population/1000000 
+ " million people speak " + language;
console.log(description);

// LECTURE: Strings and Template Literals
description = `${country} is in ${continent}, and its ${population/1000000} million people speak ${language}`;
console.log(description);
// LECTURE: Taking Decisions: if / else Statements
// WORK At LECTURE: Basic Operators
// LECTURE: Type Conversion and Coercion
console.log('9' - '5');//4
console.log('19' - '13' + '17');//23
console.log('19' - '13' + 17);//23
console.log('123' < 57);//False
console.log(5 + 6 + '4' + 9 - 4 - 2);//18
// LECTURE: Equality Operators: == vs. ===
// let numNeighbours = prompt("How many neighbour countries does your country have?");

// if (numNeighbours == 1) console.log('Only 1 border!');
// else if (numNeighbours>1) console.log('More than 1 border');
// else console.log('No borders');
// LECTURE: Logical Operators
if(language === 'english' && population<50000000 && !isIsland){
    console.log(`You should live in ${country} :)`);
}
else console.log(`${country} does not meet your criteria :(`);
// LECTURE: The switch Statement

switch(language) {
    case 'chinese':
    case 'mandarin':
      console.log('MOST number of native speakers!');
      break;
    case 'spanish':
      console.log('2nd place in number of native speakers');
      break;
    case 'english':
      console.log('3rd place');
      break;
    case 'hindi':
      console.log('Number 4');
      break;
    default:
      console.log('Great language too :D');
  }
//   LECTURE: The Conditional (Ternary) Operator
// Done
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "lpnam");

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
// console.log(year);
// console.log(typeof year);

year = 1997;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/
/*
let age = 30;
age = 26;

const birthYear = 1997;
// birthYear = 2000; ERROR
// const TTT; ERROR

var job = 'programmer';
job = 'teacher';

//
lastName = "Le";
console.log(lastName);
console.log(typeof lastName);
*/
/*
//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarra = now - 2018;
console.log(ageJonas, ageSarra);
console.log(ageJonas*2, ageSarra/2, 2 ** 3); // 2**3 ~ 2 * 2 * 2

const firstname = "Nam";
const lastName = "Le";
console.log(firstname + ' ' + 
 lastName);
// Assignment operators
 let x = 10 + 5;
 x += 10; // x= x + 10
 x *= 4;
 x++; // x= x+1
 x--; // x= x-1
 console.log(x);
 // Comparison operators
 console.log(ageJonas > ageSarra); // >, <, >=, <=
 console.log(ageSarra >= 18);

 const isFullAge = ageSarra >= 28;
 */
/*
 const now = 2037;
 const ageJonas = now - 1991;
 const ageSarra = now - 2018;

 console.log(now - ageJonas > now - ageSarra);
 console.log(25 - 10 - 5);

 let x,y;
 x = y = 25 - 10 - 5;
 */
/*
 const firstName = "Nam";
 const job = "coder";
 const birthYear = 1997;
 const year = 2037;

 const nam = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
 console.log(nam);

 const namNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
 console.log(namNew);

 console.log("String with \n multiple \n line");
 */
/*
const age = 18;
// const isOldEnough = age >= 18;

if(age >= 18) {
  console.log("This true 😁");
} else {
  console.log("This false 😒");
}
*/
/*
//type conversion
const input = '1997';
console.log(Number(input ) + 18);

console.log(Number("lpnam")); // NaN - Not a Number - Invalid Number
console.log(typeof NaN);

console.log(String(88));

//type coercion


console.log("I'm " + 26); // '+' mean auto to change for String

console.log('10' - '5'); // =5 
console.log('10' / '5'); // =2
console.log('10' * '5'); // =50
// '-', '*', '/' mean auto to change for number
*/
/*
//5 falsy value: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Xx'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money){
  console.log("Don't spend it All!");
} else {
  console.log("Get job please!");
}

let height;
if(height){
  console.log("This variables is defined")
} else {
  console.log("This variables is undefined")
}
*/
/*
const age = 18;
if(age === 18) console.log("Equal");

const value = prompt("What's your favourite number?");
console.log(value);

if(value == 23){ // loose '23' == 23
  console.log("This is 23");
}

if(Number(value) === 23){//strict 23 === 23, not '23'
  console.log("This is 23 x");
}
*/
/*
const day = 'monday';
switch (day) {
  case 'monday':
    console.log('monday');
    break;
  case 'tuesday':
    console.log('tuesday');
    break;
  case 'tuesday':
    console.log('tuesday');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('wednesday and thursday');
    break; 
  case 'friday':
    console.log('friday');
    break;
  case 'saturday':
  case 'sunday':
    console.log('relax');  
    break; 
  default:
    console.log('not a valid day'); 
    break;
}
*/

const age = 23;

age >= 18 ? console.log('True') : console.log('False');

const result = age >= 18 ? 'True' : 'False';