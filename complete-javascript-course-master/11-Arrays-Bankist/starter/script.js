'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      
      <div class="movements__value">${mov}€</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, item) => acc + item, 0);
  labelBalance.textContent = `${balance}€`;
};

// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, _, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(item => item[0])
      .join('');
  });
};
createUsernames(accounts);
//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear display infor login
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    //Display movements
    displayMovements(currentAccount.movements);
    //Display balance
    calcDisplayBalance(currentAccount.movements);
    //Display summary
    calcDisplaySummary(currentAccount);
  }
});
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. 
So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, 
and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, 
not dogs! So create a shallow copy of Julia's array, 
and remove the cat ages from that copied array 
(because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult 
("Dog number 1 is an adult, and is 5 years old") or a puppy 
("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const julia_data = [3, 5, 2, 12, 7];
const kate_data = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const correctDogsJulia = dogsJulia.slice(1, 3);
  // correctDogsJulia.forEach((dogAge, i) => {
  //   if (dogAge > 3)
  //     console.log(`Dog number ${i} is an adult, and is ${dogAge} years old`);
  //   else console.log(`Dog number ${i} is still a puppy 🐶`);
  // });
  const dogs = correctDogsJulia.concat(dogsKate);
  dogs.forEach((dogAge, i) => {
    if (dogAge >= 3)
      console.log(`Dog number ${i} is an adult, and is ${dogAge} years old`);
    else console.log(`Dog number ${i} is still a puppy 🐶`);
  });
};

checkDogs(julia_data, kate_data);
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. 
This time, they want to convert dog ages to human ages and calculate the average age 
of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'),
and does the following things in order:

1. Calculate the dog age in human years using the following formula: 
if the dog is <= 2 years old, humanAge = 2 * dogAge. 
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old 
(which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs 
(you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = function (ages) {
  const adultDogs = ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(item => item >= 18)
    .reduce((sumAge, dogAge, _, arr) => sumAge + dogAge / arr.length, 0);
  console.log(adultDogs);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
//SPLICE
console.log('SPLICE');
// console.log(arr.splice(2));
// console.log(arr);
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['f', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr2);
//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
//JOIN
console.log(letters.join('-'));
//AT()
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));
//getting last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]); //Don't know length
console.log(arr3.at(-1));
console.log('lpnam'.at(0));
console.log('lpnam'.at(-1));
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`At ${index + 1}: ${movement} > 0`);
  } else console.log(`At ${index + 1}: ${movement} < 0`);
}
console.log('---------FOREACH--------');
movements.forEach((mov, i) => {
  if (mov > 0) {
    console.log(`At ${i + 1}: ${mov} > 0`);
  } else console.log(`At ${i + 1}: ${mov} < 0`);
});

console.log('---------FOREACH ON MAP AND SETS--------');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}: ${value}`);
});
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementUS = movements.map(item => item * 1.1);
console.log(movementUS);
const movDecription = movements.map((mov, i, arr) => {
  return `At ${i + 1}: ${mov > 0 ? 'Deposited' : 'WithDrawal'} ${Math.abs(
    mov
  )}`;
  // if (mov > 0) {
  //   return `At ${i + 1}: ${mov} > 0`;
  // } else return `At ${i + 1}: ${Math.abs(mov)}`;
});
console.log(movDecription);
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(item => item > 0);
const withdrawal = movements.filter(item => item < 0);
console.log(deposits);
console.log(withdrawal);

///////REduce
const balance = movements.reduce((acc, item, index, array) => {
  console.log(`Iteration ${index}: ${acc}`);
  return acc + item;
}, 10);

const maxMovementsValue = movements.reduce((maxValue, item) => {
  if (item > maxValue) maxValue = item;
  return maxValue;
});
const minMovementsValue = movements.reduce((minValue, item) => {
  if (item < minValue) minValue = item;
  return minValue;
});
console.log(`Max movements value is: ${maxMovementsValue}`);
console.log(`Min movements value is: ${minMovementsValue}`);

const eurToUsd = 1.1;
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);
console.log(accounts);
const account_z = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account_z);

for (const x of accounts) {
  if (x.owner === 'Jessica Davis') console.log(x);
}

console.log(accounts.filter(acc => acc.owner === 'Jessica Davis'));
