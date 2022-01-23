const buttons = Array.from(document.querySelectorAll('button'));
let userScore = 0; //global variable for storing user's score
let computerScore = 0; //global variable for storing computer's scoer
buttons.forEach(function(button) { button.addEventListener('click',playRound)});

// A function that returns rock paper scissor randomly
function computerPlay() {
    let randomNum = randomNumGen();
    if(randomNum >= 0 && randomNum < 33) return "Rock";
    else if (randomNum >= 33 && randomNum < 66) return "Paper";
    else return "Scissor";
}
//A function to generate random number between 0 to 100(exclusive)
let randomNumGen = () => {return Math.random() * 100};
// Play a round of rock paper scissor
function playRound(e) {
    // console.log(this.id);
    let playerSelection = userInput(this.id);
    let computerSelection = computerPlay().toUpperCase();
    if (playerSelection === "ROCK" && computerSelection === "SCISSOR") { 
        userScore++;
        return `You win!, ${playerSelection} beats ${computerSelection}`;
    }    
    else if (playerSelection === "Scissor" && computerSelection === "PAPER") {
        userScore++;
        return `You win!, ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        userScore++;
        return `You win!, ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === computerSelection) {
        return "Nani!!! Its a draw";
    }
    else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
// Function to get user Input
function userInput(buttonInput) {
    if(buttonInput == 'rock') return 'ROCK';
    if(buttonInput == 'paper') return 'PAPER';
    if(buttonInput == 'scissor') return 'SCISSOR';
}

function game() {
    console.log(`User : ${userScore}, Computer : ${computerScore}`)
    winnerAnnouncer();
}

function winnerAnnouncer() {
    if (userScore > computerScore) {
        console.log("User Wins!!!");    
    } else if (userScore < computerScore) {
        console.log("Computer Wins!!!");
    } else {
        console.log("Its A draw!!!")
    }
} 

// game();