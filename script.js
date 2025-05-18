let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';
  if (playerChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You Win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}`;
    playerScore++;
  } else {
    result = `You Lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}`;
    computerScore++;
  }

  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('result').textContent = result;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('player-score').textContent = 0;
  document.getElementById('computer-score').textContent = 0;
  document.getElementById('result').textContent = "Make your move!";
}
