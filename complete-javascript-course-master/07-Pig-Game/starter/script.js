'use strict';

// Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

let scoreRollValue0 = 0;
let scoreRollValue1 = 0;
let score0ElValue = 0;
let score1ElValue = 0;
//
let activePlayer;
let scoreRollValue;
let scores;
let playing;

//Define function
const rollDice = function () {
  const diceValue = Math.trunc(Math.random() * 6) + 1;
  // if()
  return diceValue;
};
const displayRollValue = function (diceValue) {
  diceEl.src = `dice-${diceValue}.png`;
};
const changePlayerTurn = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  scoreRollValue = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
const init = function () {
  playing = true;
  diceEl.classList.add('hidden');
  document.querySelectorAll('.score').forEach(x => (x.textContent = 0));

  document.querySelectorAll('.current-score').forEach(x => (x.textContent = 0));
  document
    .querySelectorAll('.player')
    .forEach(x => x.classList.remove('player--active'));
  document
    .querySelectorAll('.player')
    .forEach(x => x.classList.remove('player--winner'));
  player0.classList.add('player--active');
  activePlayer = 0;

  scores = [0, 0];
  scoreRollValue = 0;
};
init();

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (!playing) return;
  if (diceEl.classList.contains('hidden')) diceEl.classList.remove('hidden');
  const diceValue = rollDice();
  displayRollValue(diceValue);
  //   if (player0.classList.contains('player--active')) {
  //     if (diceValue === 1) {
  //       player0.classList.remove('player--active');
  //       player1.classList.add('player--active');
  //       score0ElValue += scoreRollValue0;
  //       score0El.textContent = score0ElValue;
  //       scoreRollValue0 = 0;
  //     } else {
  //       scoreRollValue0 += diceValue;
  //     }
  //     currentScore0.textContent = scoreRollValue0;
  //   } else if (player1.classList.contains('player--active')) {
  //     if (diceValue === 1) {
  //       player1.classList.remove('player--active');
  //       player0.classList.add('player--active');
  //       score1ElValue += scoreRollValue1;
  //       score1El.textContent = score1ElValue;
  //       scoreRollValue1 = 0;
  //     } else {
  //       scoreRollValue1 += diceValue;
  //     }
  //     currentScore1.textContent = scoreRollValue1;
  //   }

  if (diceValue !== 1) {
    scoreRollValue += diceValue;
    document.querySelector(`#current--${activePlayer}`).textContent =
      scoreRollValue;
    // score0ElValue += scoreRollValue0;
    // score0El.textContent = score0ElValue;
  } else {
    changePlayerTurn();
  }
});

btnHold.addEventListener('click', function () {
  if (!playing) return;
  //1. Add current score to active player's score
  scores[activePlayer] += scoreRollValue;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  //2. Check winner with score >= 100
  if (scores[activePlayer] >= 100) {
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    diceEl.classList.add('hidden');
  } else {
    changePlayerTurn();
  }
});

btnNew.addEventListener('click', init);
