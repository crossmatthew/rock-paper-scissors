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
      div.textContent = `It's a tie`;
    } else {
      if (playerSelection === "Rock") {
        if (computerSelection !== "Paper") {
          scoreboard.playerWins++;
          div.textContent = `You Win! Rock beats ${computerSelection}`;
        } else {
          scoreboard.computerWins++;
          div.textContent = `You Lose! ${computerSelection} beats Rock`;
        }
      }
      if (playerSelection === "Paper") {
        if (computerSelection !== "Scissors") {
          scoreboard.playerWins++;
          div.textContent = `You Win! Paper beats ${computerSelection}`;
        } else {
          scoreboard.computerWins++;
          div.textContent = `You Lose! ${computerSelection} beats Paper`;
        }
      }
      if (playerSelection === "Scissors") {
        if (computerSelection !== "Rock") {
          scoreboard.playerWins++;
          div.textContent = `You Win! Scissors beat ${computerSelection}`;
        } else {
          scoreboard.computerWins++
          div.textContent = `You Lose! ${computerSelection} beat Scissors`;
        } 
      }
    }
     if (scoreboard.playerWins >= 5 || scoreboard.computerWins >= 5) {
      let winner = '';
      if (scoreboard.playerWins > scoreboard.computerWins) {
        winner = " Player Wins!";
      } else {
        winner = " Computer Wins!";
      }
       div.textContent = `${winner} Player's wins: ${scoreboard.playerWins}, Computer's wins: ${scoreboard.computerWins}, Ties: ${scoreboard.ties}, Rounds Played: ${numOfRounds}`;
     }
    }  
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});
}

playGame();