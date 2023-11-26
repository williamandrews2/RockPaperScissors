// js for rock paper scissors
function getComputerChoice () {
    const options = ["rock", "paper", "scissors"];
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function playRound (playerSelection, computerSelection) {
    // Make the user's selection case insensitive:
    playerSelection = playerSelection.toLowerCase();

    // if statements for player choosing rock
    if(playerSelection=="rock"){
        if(computerSelection=="rock"){
            result.textContent = "Draw! Try again.";
        }
        if(computerSelection=="paper"){
            computerScore++;
            result.textContent = "You lose! Paper wins over rock.";
        }
        if(computerSelection=="scissors"){
            playerScore++;
            result.textContent = "You win! Rock wins over scissors.";
        }
    }

    // if statements for player choosing paper
    if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            playerScore++;
            return ("You win! Paper wins over rock.");
        }
        if(computerSelection=="paper"){
            return ("Draw! Try again.");
        }
        if(computerSelection=="scissors"){
            computerScore++;
            return ("You lose! Scissors win over paper.");
        }
    }
    
    // if statements for player choosing scissors
    if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            computerScore++;
            return ("You lose! Rock wins over scissors.");
        }
        if(computerSelection=="paper"){
            playerScore++;
            return ("You win! Scissors win over paper.");
        }
        if(computerSelection=="scissors"){
            return ("Draw! Try again.");
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

// Define varaibles
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;

const container = document.querySelector("#container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.createElement("div");
result.classList.add("result");

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

container.appendChild(result);

console.log(game());
console.log(computerScore);
console.log(playerScore);