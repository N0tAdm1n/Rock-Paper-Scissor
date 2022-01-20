let userScore = 0; //global variable for storing user's score
let computerScore = 0; //global variable for storing computer's scoer
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
function playRound() {
    let playerSelection = userInput();
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
        userScore++;
        computerScore++;
        return "Nani!!! Its a draw";
    }
    else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
// Function to get user Input
function userInput() {
    let result = prompt("Choose [Rock, Paper, Scissor] : ").toUpperCase();
    if(result === "ROCK" || result === "PAPER" || result === "SCISSOR") {
        return result;
    }
    else {
        userInput();
    }
}

function game() {
    console.log(playRound() );
    console.log(playRound() );
    console.log(playRound() );
    console.log(playRound() );
    console.log(playRound() );
}

game();