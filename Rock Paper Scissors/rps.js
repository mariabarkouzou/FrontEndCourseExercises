"use strict";

/*ComputerPlay*/

let enterChoice = prompt("Please place your choice here!");
enterChoice = enterChoice.slice(0,1).toUpperCase() + enterChoice.slice(1,enterChoice.length).toLowerCase();
const choices = ["Rock", "Paper", "Scissors"];


function computerPlay() {
  return [Math.floor(Math.random() * choices.length)];
}

/*Single Round of Game*/

function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
return "Tie";
}
if (
(playerSelection === "Rock" && computerSelection === "Scissors") ||
(playerSelection === "Scissors" && computerSelection === "Paper") ||
(playerSelection === "Paper" && computerSelection === "Rock")
) {
return "Player";
}
if (
(computerSelection === "Rock" && playerSelection === "Scissors") ||
(computerSelection === "Scissors" && playerSelection === "Paper") ||
(computerSelection === "Paper" && playerSelection === "Rock")
) {
return "Computer";
}
}
const playerSelection = "rock";
const computerSelection = computerPlay();