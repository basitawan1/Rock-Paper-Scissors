let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);

  updateResult(result, userChoice, computerChoice);
  updateScores(result);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "draw";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function updateResult(result, userChoice, computerChoice) {
  const resultText = document.getElementById("result");
  const gameResult = document.getElementById("game-result");

  if (result === "win") {
    resultText.textContent = "You Win!";
    gameResult.textContent = `Your ${capitalize(userChoice)} beats ${capitalize(
      computerChoice
    )}.`;
  } else if (result === "lose") {
    resultText.textContent = "You Lose!";
    gameResult.textContent = `${capitalize(computerChoice)} beats your ${capitalize(
      userChoice
    )}.`;
  } else {
    resultText.textContent = "It's a Draw!";
    gameResult.textContent = `Both chose ${capitalize(userChoice)}.`;
  }
}

function updateScores(result) {
  if (result === "win") userScore++;
  if (result === "lose") computerScore++;

  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
