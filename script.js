let userScore = 0; //global variable for storing user's score
let computerScore = 0; //global variable for storing computer's scoer
// A function that returns rock paper scissor randomly
function computerPlay() {
  let randomNum = randomNumGen();
  if (randomNum >= 0 && randomNum < 33) return "Rock";
  else if (randomNum >= 33 && randomNum < 66) return "Paper";
  else return "Scissor";
}
//A function to generate random number between 0 to 100(exclusive)
let randomNumGen = () => {
  return Math.random() * 100;
};
// Play a round of rock paper scissor
function playRound() {
  if (userScore < 5 && computerScore < 5) {
    let playerSelection = this.id.toUpperCase();
    let computerSelection = computerPlay().toUpperCase();
    if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
      userScore++;
      dialog.textContent = `You win!, ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === "Scissor" && computerSelection === "PAPER") {
      userScore++;
      dialog.textContent = `You win!, ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
      userScore++;
      dialog.textContent = `You win!, ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
      dialog.textContent = "Nani!!! Its a draw";
    } else {
      computerScore++;
      dialog.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    userScoreDiv.textContent = userScore.toString();
    compScoreDiv.textContent = `${computerScore}`;
  }
  if (userScore == 5 || computerScore == 5) {
    tally();
  }
}
// Function to get user Input
// function userInput() {
//     let result = prompt("Choose [Rock, Paper, Scissor] : ").toUpperCase();
//     if(result === "ROCK" || result === "PAPER" || result === "SCISSOR") {
//         return result;
//     }
//     else {
//         userInput();
//     }
// }

function tally() {
  if (userScore > computerScore) {
    resultDiv.textContent = "You have beaten the computer";
  } else {
    resultDiv.textContent = "You are bested by a computer";
  }
}

function game() {
  console.log(`User : ${userScore}, Computer : ${computerScore}`);
  winnerAnnouncer();
}

function winnerAnnouncer() {
  if (userScore > computerScore) {
    console.log("User Wins!!!");
  } else if (userScore < computerScore) {
    console.log("Computer Wins!!!");
  } else {
    console.log("Its A draw!!!");
  }
}

// game();

function replayGame() {
  userScore = 0;
  computerScore = 0;
  userScoreDiv.textContent = 0;
  compScoreDiv.textContent = 0;
  dialog.textContent = "";
}

const userScoreDiv = document.querySelector("#playerScore");
const compScoreDiv = document.querySelector("#compScore");
const dialog = document.querySelector("#dialog");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

const replay = document.querySelector("#replay");
replay.addEventListener("click", replayGame);

const resultDiv = document.querySelector("#result");
