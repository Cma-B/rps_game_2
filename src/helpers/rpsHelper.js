export const playGame = (playerChoice) => {
  const computerChioce = getComputerChoice();
  const winner = getWinner(playerChoice, computerChioce);
  return winner;
}

function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'rock';
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  } else if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}