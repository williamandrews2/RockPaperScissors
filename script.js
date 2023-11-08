// js for rock paper scissors
function getComputerChoice () {
    const options = ["Rock", "Paper", "Scissors"];
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

console.log(getComputerChoice());