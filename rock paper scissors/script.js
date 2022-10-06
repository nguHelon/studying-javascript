/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

const playerScore = document.getElementById("player-score");
const hands = document.getElementById("hands");
const result = document.getElementById("result");
const rpsButtons = Array.from(document.querySelectorAll(".rpsButton"));
const endGameBtn = document.getElementById("endGameButton");

const choicesArray = ['rock', 'paper', 'scissors'];

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const compChoice = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[compChoice];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost

  let score;

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    score = 1;
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    score = 1;
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    score = 1;
  } else {
    // Otherwise human loses (aka set score to -1)
    score = -1;
  }
  // return score
  return score;
  // console.log(score);
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!

  switch (score) {
    case -1:
      result.innerText = `You Lose!`
      break;
    case 0:
      result.innerText = `It's a Draw!`
      break;
    case 1:
      result.innerText = `You Win!`
      break;
  }

  playerScore.innerText = `${Number(playerScore.innerText) + score}`;
  hands.innerText = `👨 ${playerChoice} Vs 🤖 ${computerChoice}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice.value, computerChoice);
  showResult(score, playerChoice.value, computerChoice);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  rpsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      onClickRPS(button);
    });
  });



  // Add a click listener to the end game button that runs the endGame() function on click
  endGameBtn.addEventListener("click", endGame);
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  playerScore.textContent = '';
  hands.textContent = '';
  result.textContent = '';
}

playGame();