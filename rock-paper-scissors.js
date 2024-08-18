// const rockButton = document.querySelector('#rock');
// const paperButton = document.querySelector("#paper");
// const scissorsButton = document.querySelector("#scissors");

// rockButton.addEventListener('click', playRound('rock', getComputerChoice()));

function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * 3)];
};

function playGame(numOfRounds = 5) {
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;
  function playRound(playerSelection, computerSelection) {
    const playersChoice = playerSelection.toLowerCase();
    if (playersChoice === computerSelection.toLowerCase()) {
      console.log(`It's a tie!`);
      return `It's a tie!`;
    }
    if (playersChoice === "rock") {
      if (computerSelection !== "Paper") {
        console.log(`You Win! Rock beats ${computerSelection}`);
        return `You Win! Rock beats ${computerSelection}`;
      } else {
        console.log(`You Lose! ${computerSelection} beats Rock`);
        return `You Lose! ${computerSelection} beats Rock`;
      }
    }
    if (playersChoice === "paper") {
      if (computerSelection !== "Scissors") {
        console.log(`You Win! Paper beats ${computerSelection}`);
        return `You Win! Paper beats ${computerSelection}`;
      } else {
        console.log(`You Lose! ${computerSelection} beats Paper`);
        return `You Lose! ${computerSelection} beats Paper`;
      }
    }
    if (playersChoice === "scissors") {
      if (computerSelection !== "Rock") {
        console.log(`You Win! Scissors beat ${computerSelection}`);
        return `You Win! Scissors beat ${computerSelection}`;
      } else {
        console.log(`You Lose! ${computerSelection} beat Scissors`);
        return `You Lose! ${computerSelection} beat Scissors`;
      }
    }
  }
  for (let i = 0; i < numOfRounds; i++) {
    let games = playRound(prompt(`Let's Play Rock Paper Scissors!`), getComputerChoice());
    if (games.includes('Win')) {
      playerWins++
    }
    if (games.includes('Lose')) {
      computerWins++
    }
    if (games.includes('tie')) {
      ties++
    }
  }
  let scoreboard = `Player's wins: ${playerWins}, Computer's wins: ${computerWins}, Ties: ${ties}, Rounds Played: ${numOfRounds} ##### `
  if (playerWins > computerWins) {
    scoreboard += ' Player Wins!'
  }
  if (computerWins > playerWins) {
    scoreboard += " Computer Wins!";
  }
  if (playerWins === computerWins) {
    scoreboard += "Tied! No Winner!";
  }
  console.log(scoreboard);
}


playGame();