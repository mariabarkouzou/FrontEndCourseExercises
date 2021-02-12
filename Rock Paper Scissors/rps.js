"use strict";

/*ComputerPlay*/

const userScore = 0;
const computerScore = 0;
let enterChoice = prompt("Please place your choice here!");
enterChoice =
  enterChoice.slice(0, 1).toUpperCase() +
  enterChoice.slice(1, enterChoice.length).toLowerCase();
const choices = ["Rock", "Paper", "Scissors"];
const randomNumber = Math.floor(Math.random() * 3);

function computerPlay() {
  return choices[randomNumber];
}

/*Single Round of Game*/

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It is a Tie!";
  }
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You win! Rock beats Scissors";
  }

  if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You lose! Paper beats Rock!";
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();

function game(playRound) {
  if (playerSelection === computerSelection) {
    return "It is a Tie";
  }
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    return "You win Player!Way to go!";
  }
  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    return "You lost Player!Computer Won!Maybe Next Time!";
  }
}

console.log(playerSelection);
console.log(computerSelection);
