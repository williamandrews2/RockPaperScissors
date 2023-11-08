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
            return ("Draw! Try again.");
        }
        if(computerSelection=="paper"){
            return ("You lose! Paper wins over rock.");
        }
        if(computerSelection=="scissors"){
            return ("You win! Rock wins over scissors.");
        }
    }

    // if statements for player choosing paper
    if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            return ("You win! Paper wins over rock.");
        }
        if(computerSelection=="paper"){
            return ("Draw! Try again.");
        }
        if(computerSelection=="scissors"){
            return ("You lose! Scissors win over paper.");
        }
    }
    
    // if statements for player choosing scissors
    if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            return ("You lose! Rock wins over scissors.");
        }
        if(computerSelection=="paper"){
            return ("You win! Scissors win over paper.");
        }
        if(computerSelection=="scissors"){
            return ("Draw! Try again.");
        }
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));