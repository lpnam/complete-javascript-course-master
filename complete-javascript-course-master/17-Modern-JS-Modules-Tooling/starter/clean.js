'strict mode';
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  //Immute
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.jay = 200;
// console.log(spendingLimits);

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  // let lim = 0;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // }

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // const limit = getLimit(user);

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description: description, user: cleanUser }]
    : [...state];
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(budget);
console.log(newBudget3);

// budget[0].value = 1210;
// budget[9] = 'Jonnn';

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );
// for (const entry of state) {
//   if (entry.value < -getLimit(limits, entry.user)) {
//     entry.flag = 'limit';
//   }
// }

const finalBudget = checkExpenses(newBudget3, spendingLimits);

console.log(finalBudget);

const logBigExpenses = (state, bigLimit) =>
  state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
// .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');

const final = logBigExpenses(finalBudget, 1000);
console.log(final);
