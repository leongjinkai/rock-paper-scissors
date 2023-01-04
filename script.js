function getComputerChoice () {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerSelected = choices[Math.floor(Math.random()*choices.length)];
    return computerSelected;
}

const computerSelection = getComputerChoice();

function roundStart (computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        console.log("Draw")
    }
    else if (
        (computerSelection == "Rock" && playerSelection == "Scissors") ||
        (computerSelection == "Scissors" && playerSelection == "Paper") ||
        (computerSelection == "Paper" && playerSelection == "Rock")
    ) {
        console.log("You Lose!")
    }
    else {
        console.log("You Win! Hurray :D")
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        console.log("Game Start!")
        let playerSelection = prompt("Rock, Paper or Scissors?")
        roundStart(computerSelection, playerSelection)
        let roundNumber = i+1
        console.log(`This is round ${roundNumber}`)
    }

    console.log("Game Complete!")
}


game ()