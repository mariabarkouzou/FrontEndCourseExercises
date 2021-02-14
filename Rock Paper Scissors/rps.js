"use strict";

/*ComputerPlay*/

let round = 0;

function computerPlay() {
  const choices = [ "Rock" , "Paper" , "Scissors"];
  const randomNumber = Math.floor(Math.random()*choices.length);
  return choices[randomNumber];
}


/*Single Round of Game*/

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return "It is a Tie!";
  }
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection + "!";
  }
  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    return "Computer Wins! " + computerSelection + " beats " + playerSelection + "!";
  }
}
let playerSelection = prompt ("Do you choose Rock , Paper or Scissors?");
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection))


/*Play 5 Times */

function game(){
  let playerScore = 0;
  let computerScore = 0;

  for ( let i=0; i < 5; i++ ){

if (playerScore < computerScore){
  console.log("You lose the game.");
} else if (playerScore > computerScore) {
  console.log("You win the game");
} else {
  console.log("You are tied");
}
}
}







    
  