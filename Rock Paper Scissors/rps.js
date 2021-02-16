"use strict";

let playerScore = 0;
let computerScore = 0;
let draws = 0;

/*ComputerPlay*/

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

/*Single Round of Game*/

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return draw;
  }
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    return playerWinRound;
  }
  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    return computerWinRound;
  }
}

/*Round messages */

let playerWinRound = "You win this round!";
let computerWinRound = "Computer wins this round!";
let draw = "It's a tie!";
let playerWin = "You win the game! Way to go!";
let computerWin = "Computer wins the game! Try again!";

/*Play 5 Times */

for (let i = 0; i < 5; i++) {
  let playerSelection = prompt("Do you choose Rock , Paper or Scissors?");
  playerSelection =
    playerSelection.slice(0, 1).toUpperCase() +
    playerSelection.slice(1, playerSelection.length).toLowerCase();
  const computerSelection = computerPlay();
  let roundResult = playRound(playerSelection, computerSelection);
  console.log(roundResult);
  gameScore(roundResult);
  console.log("Your score is " + playerScore);
  console.log("The computer's score is " + computerScore);

  if (playerScore === 5 || computerScore === 5) {
    break;
  }
}

/*Keeping Score */

function gameScore(result) {
  if (result === playerWinRound) {
    playerScore++;
  } else if (result === draw) {
    draws++;
  } else {
    computerScore++;
  }

  if (playerScore === 5) {
    console.log(playerWin);
  }

  if (computerScore === 5) {
    console.log(computerWin);
  }
}
