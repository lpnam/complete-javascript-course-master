// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// import * as ShoppingCart from './shoppingCart.js';
console.log('Importing module');

// addToCart('hihi', 3);
// console.log(price, tq);

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';

add('pizza', 6);
add('bread', 5);
add('aple', 4);

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
const lastPost = getLastPost();
// console.log(lastPost);

//Not clean
lastPost.then(res => console.log(res));

// clean way - top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
