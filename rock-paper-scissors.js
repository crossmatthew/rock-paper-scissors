function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  const playersChoice = playerSelection.toLowerCase();
  if (playersChoice === computerSelection) {
    return `It's a tie!`;
  }
  if (playersChoice === 'rock') {
    if (computerSelection !== 'Paper') {
      return `You Win! Rock beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats Rock`;
    }
  }
  if (playersChoice === 'paper') {
    if (computerSelection !== 'Scissors') {
        return `You Win! Paper beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats Paper`
    }
  }
  if (playersChoice === 'scissors') {
    if (computerSelection !== 'Rock') {
        return `You Win! Scissors beat ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beat Scissors`
    }
  }
}
