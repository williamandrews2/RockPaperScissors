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
    if(playerSelection.equals("rock")){
        if(computerSelection.equals("rock")){
            return ("Draw! Try again.");
        }
        if(computerSelection.equals("paper")){
            return ("You lose! Paper wins over rock.");
        }
        if(computerSelection.equals("scissors")){
            return ("You win! Rock wins over scissors.");
        }
    }

    // if statements for player choosing paper
    if(playerSelection.equals("paper")){
        if(computerSelection.equals("rock")){
            return ("You win! Paper wins over rock.");
        }
        if(computerSelection.equals("paper")){
            return ("Draw! Try again.");
        }
        if(computerSelection.equals("scissors")){
            return ("You lose! Scissors win over paper.");
        }
    }
    
    // if statements for player choosing scissors
    if(playerSelection.equals("scissors")){
        if(computerSelection.equals("rock")){
            return ("You lose! Rock wins over scissors.");
        }
        if(computerSelection.equals("paper")){
            return ("You win! Scissors win over paper.");
        }
        if(computerSelection.equals("scissors")){
            return ("Draw! Try again.");
        }
    }
}

const computerSelection = getComputerChoice();