
// Define varaibles
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;

const container = document.querySelector("#container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const player = document.querySelector("#player");
const opponent = document.querySelector("#opponent");

// Create new DOM elements
const result = document.createElement("div");
result.classList.add("result");
const playerScoreboard = document.createElement("h1");
playerScoreboard.classList.add("playerScoreboard");
const opponentScoreboard = document.createElement("h1");
opponentScoreboard.classList.add("opponentScoreboard");

// Append DOM elements
container.appendChild(result);
player.appendChild(playerScoreboard);
opponent.appendChild(opponentScoreboard);

// eventListeners
rock.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    console.log(playRound("rock", computerSelection));
});

paper.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    console.log(playRound("paper", computerSelection));
});

scissors.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    console.log(playRound("scissors", computerSelection));
});

// functions:

function getComputerChoice () {
    const options = ["rock", "paper", "scissors"];
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function displayScore () {
    playerScoreboard.textContent = playerScore;
    opponentScoreboard.textContent = computerScore;
}

function playRound (playerSelection, computerSelection) {
    // Make the user's selection case insensitive:
    playerSelection = playerSelection.toLowerCase();

    // if statements for player choosing rock
    if(playerSelection=="rock"){
        if(computerSelection=="rock"){
            result.textContent = "Draw! Try again.";
            displayScore();
        }
        if(computerSelection=="paper"){
            computerScore++;
            result.textContent = "You lose! Paper wins over rock.";
            displayScore();
        }
        if(computerSelection=="scissors"){
            playerScore++;
            result.textContent = "You win! Rock wins over scissors.";
            displayScore();
        }
    }

    // if statements for player choosing paper
    if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            playerScore++;
            result.textContent = "You win! Paper wins over rock.";
            displayScore();
        }
        if(computerSelection=="paper"){
            result.textContent =  "Draw! Try again.";
            displayScore();
        }
        if(computerSelection=="scissors"){
            computerScore++;
            result.textContent =  "You lose! Scissors win over paper.";
            displayScore();
        }
    }
    
    // if statements for player choosing scissors
    if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            computerScore++;
            result.textContent = "You lose! Rock wins over scissors.";
            displayScore();
        }
        if(computerSelection=="paper"){
            playerScore++;
            result.textContent = "You win! Scissors win over paper.";
            displayScore();
        }
        if(computerSelection=="scissors"){
            result.textContent =  "Draw! Try again.";
            displayScore();
        }
    }
}

function game () {
    // Play 5 rounds
    // for (let i = 0; i<5;i++){
    //     playerSelection = window.prompt("Choose rock, paper, or scissors.");
    //     computerSelection = getComputerChoice();
    //     playRound(playerSelection, computerSelection);
    // }

    // Check to see who is the winner
    // if(computerScore>playerScore){
    //     alert("You Lose!");
    // }
    // else {
    //     alert("You win!!!");
    // }

}

console.log(game());
console.log(computerScore);
console.log(playerScore);