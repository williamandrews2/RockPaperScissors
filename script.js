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
            computerScore++;
            return ("You lose! Paper wins over rock.");
        }
        if(computerSelection=="scissors"){
            playerScore++;
            return ("You win! Rock wins over scissors.");
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
    for (let i = 0; i<5;i++){
        playerSelection = window.prompt("Choose rock, paper, or scissors.");
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        // Might add an alert in here to alert the user that they have
        // either lost or won. 
    }

    // Check to see who is the winner
    if(computerScore>playerScore){
        return "You Lose!";
    }
    else {
        return "You win!!!";
    }

}

// Define varaibles
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;

console.log(game());
console.log(computerScore);
console.log(playerScore);