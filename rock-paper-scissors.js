const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');

function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * 3)];
};

function playGame(numOfRounds = 0) {
  let scoreboard = {
    playerWins: 0,
    computerWins: 0,
    ties: 0
  }
  function playRound(playerSelection, computerSelection) {
    numOfRounds++;
    if (playerSelection === computerSelection) {
      scoreboard.ties++;
      console.log(`It's a tie!`);
    }
    if (playerSelection === "Rock") {
      if (computerSelection !== "Paper") {
        scoreboard.playerWins++;
        console.log(`You Win! Rock beats ${computerSelection}`);
      } else {
        scoreboard.computerWins++;
        console.log(`You Lose! ${computerSelection} beats Rock`);
      }
    }
    if (playerSelection === "Paper") {
      if (computerSelection !== "Scissors") {
        scoreboard.playerWins++;
        console.log(`You Win! Paper beats ${computerSelection}`);
      } else {
        scoreboard.computerWins++;
        console.log(`You Lose! ${computerSelection} beats Paper`);
      }
    }
    if (playerSelection === "Scissors") {
      if (computerSelection !== "Rock") {
        scoreboard.playerWins++;
        console.log(`You Win! Scissors beat ${computerSelection}`);
      } else {
        scoreboard.computerWins++
        console.log(`You Lose! ${computerSelection} beat Scissors`);
      } 
    }
  }
  
  for (let i = 0; i < numOfRounds; i++) {
  if (scoreboard.playerWins > scoreboard.computerWins) {
    console.log(' Player Wins!')
  }
  if (scoreboard.computerWins > scoreboard.playerWins) {
    console.log(" Computer Wins!");
  }
  if (
    scoreboard.playerWins === scoreboard.computerWins &&
    scoreboard.playerWins !== 0 &&
    scoreboard.computerWins !== 0) {
    console.log("Tied! No Winner!");
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
      console.log(
        `Player's wins: ${scoreboard.playerWins}, Computer's wins: ${scoreboard.computerWins}, Ties: ${scoreboard.ties}, Rounds Played: ${numOfRounds}`
      );
  });
});
};

playGame();