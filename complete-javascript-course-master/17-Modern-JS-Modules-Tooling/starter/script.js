// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// import * as ShoppingCart from './shoppingCart.js';
console.log('Importing module');

// addToCart('hihi', 3);
// console.log(price, tq);

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

import add, {
  addToCart,
  totalPrice as price,
  tq,
  cart,
} from './shoppingCart.js';

add('pizza', 6);
add('bread', 5);
add('aple', 4);
add('momo', 4);

// console.log(cart);
// console.log('Something1');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something2');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};
// const lastPost = getLastPost();
// console.log(lastPost);

//Not clean
// lastPost.then(res => console.log(res));

// // clean way - top level await
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2.cart);
*/
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);

console.log(stateClone);

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone);
console.log('cl');

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

// import 'core-js/stable';
import 'core-js/stable/array/find.js';
