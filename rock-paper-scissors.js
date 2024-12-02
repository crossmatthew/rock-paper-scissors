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
    div.textContent = `Rounds Played: ${numOfRounds} Ties: ${scoreboard.ties} Player's Wins: ${scoreboard.playerWins} Computer's Wins: ${scoreboard.computerWins}`;
    let winMessage = ` You Win! ${playerSelection} beats ${computerSelection}`;
    let loseMessage = ` You Lose! ${computerSelection} beats ${playerSelection}`;
    if (playerSelection === computerSelection) {
      scoreboard.ties++;
      div.textContent += ` It's a tie`;
    } else {
      if (playerSelection === "Rock") {
        if (computerSelection !== "Paper") {
          scoreboard.playerWins++;
          div.textContent += winMessage;
        } else {
          scoreboard.computerWins++;
          div.textContent += loseMessage;
        }
      }
      if (playerSelection === "Paper") {
        if (computerSelection !== "Scissors") {
          scoreboard.playerWins++;
          div.textContent += winMessage;
        } else {
          scoreboard.computerWins++;
          div.textContent += loseMessage;
        }
      }
      if (playerSelection === "Scissors") {
        if (computerSelection !== "Rock") {
          scoreboard.playerWins++;
          div.textContent += winMessage;
        } else {
          scoreboard.computerWins++
          div.textContent += loseMessage;
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