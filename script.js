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
    playerSelection = userInput();
    computerSelection = computerPlay().toUpperCase();
    if (playerSelection === "ROCK" && computerSelection === "SCISSOR") return `You win!, ${playerSelection} beats ${computerSelection}`;
    else if (playerSelection === "Scissor" && computerSelection === "PAPER") return `You win!, ${playerSelection} beats ${computerSelection}`;
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") return `You win!, ${playerSelection} beats ${computerSelection}`;
    else if (playerSelection === computerSelection) return "Nani!!! Its a draw";
    else return `You lose! ${computerSelection} beats ${playerSelection}`;
}

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