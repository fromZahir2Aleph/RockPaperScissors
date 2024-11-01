function getComputerChoice() {
  num = Math.random();
  if (num < 1/3) {
    return "rock";
  } else if (1/3 <= num && num < 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let hand = prompt().toLowerCase();
  if (hand === "rock" || hand === "paper" || hand === "scissors") {
    return hand;
  } else {
    alert("Invalid input");
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beat Paper");
    computerScore++;
  } else if (humanChoice === "scissors" && computeChoice === "paper") {
    console.log("You win! Scissors beat Paper");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors");
    humanScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound;
  }
  if (humanScore > computerScore) {
    console.log("You win");
  } else {
    console.log("You lose");
  }
}
