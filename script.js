let choices = ["rock", "paper", "scissors"];

function getComputerChoice () {
  return choices[Math.floor(Math.random() * choices.length)]; 
}

function playSingleRound() {
  let playerSelection;
  let computerSelection;
  let combinedSelection;

  while (true) {
    while (true) { // user input. repeat as long as it is invalid.
      playerSelection = prompt("Your choice: ");
      playerSelection = playerSelection.toLowerCase().trim();
      if (["rock", "paper", "scissors"].includes(playerSelection)) break;
      else console.log("Invalid input.");
    }

    computerSelection = getComputerChoice();
    combinedSelection = playerSelection + "-" + computerSelection;

    if (playerSelection === computerSelection) { 
      console.log("Tie. Repeating round...");
      continue;
    }
    else if (["paper-rock", "rock-scissors", "scissors-paper"].includes(combinedSelection)) {
      console.log("Player wins.");
      return "player";
    }
    else {
      console.log("Computer wins.");
      return "computer";
    }
  }        
}

const NUMBER_OF_ROUNDS = 5; // must be set to an odd number!

function game() {
  let round_result;
  let scores = { player: 0, computer: 0 };
  let threshold = Math.ceil(NUMBER_OF_ROUNDS / 2);

  for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
    // find the winner of the round
    round_result = playSingleRound();
    if (round_result === "player") {
      scores.player += 1;
    }
    else {
      scores.computer += 1;
    }

    // check if there is a winner
    if (scores.player >= threshold) {
      console.log(`Player wins against computer ${scores.player}-${scores.computer}.`);
      break;
    }
    else if (scores.computer >= threshold) {
      console.log(`Computer wins against player ${scores.computer}-${scores.player}.`);
      break;
    }
  }
} 


game();
