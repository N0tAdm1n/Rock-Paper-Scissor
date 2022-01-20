// A function that returns rock paper scissor randomly
function computerPlay() {
    let randomNum = randomNumGen();
    if(randomNum >= 0 && randomNum < 33) return "Rock";
    else if (randomNum >= 33 && randomNum < 66) return "Paper";
    else return "Scissor";
}
//A function to generate random number between 0 to 100(exclusive)
let randomNumGen = () => {return Math.random() * 100};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === "ROCK" && computerSelection === "SCISSOR") return `You win!, ${playerSelection} beats ${computerSelection}`;
    else if (playerSelection === "Scissor" && computerSelection === "PAPER") return `You win!, ${playerSelection} beats ${computerSelection}`;
    else if (playerSelection === "Paper" && computerSelection === "ROCK") return `You win!, ${playerSelection} beats ${computerSelection}`;
    else if (playerSelection === computerSelection) return "Nani!!! Its a draw";
    else return `You lose! ${computerSelection} beats ${playerSelection}`;
}

let playerSelection = prompt("Enter your choice : ");
let computerSelection = computerPlay();

function game() {
    console.log(playRound (playerSelection, computerPlay()) );
    console.log(playRound (playerSelection, computerSelection) );
    console.log(playRound (playerSelection, computerPlay()) );
    console.log(playRound (playerSelection, computerPlay()) );
    console.log(playRound (playerSelection, computerSelection) );
}

game();