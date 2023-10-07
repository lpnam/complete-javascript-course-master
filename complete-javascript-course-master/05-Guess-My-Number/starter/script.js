'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highestScore = 0;

const displayContent = function (_class, content) {
  document.querySelector(_class).textContent = content;
};

const guessWrongNumber = function (guess) {
  if (score > 1) {
    displayContent('.message', guess > secretNumber ? 'Too high!' : 'Too low!');
    score--;
    displayContent('.score', score);
  } else {
    displayContent('.score', 0);
    document.querySelector('.message').textContent = 'You Lost The Game!';
    displayContent('.message', 'You Lost The Game!');
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayContent('.message', '🥲 No number!');
  } else if (guess === secretNumber) {
    displayContent('.message', 'Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayContent('.number', secretNumber);
    if (score > highestScore) {
      highestScore = score;
      displayContent('.highscore', highestScore);
    }
  } else guessWrongNumber(guess);
});

document.querySelector('.again').addEventListener('click', function () {
  displayContent('.message', 'Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayContent('.number', '?');
  document.querySelector('.guess').value = '';
  score = 20;
  displayContent('.score', score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
