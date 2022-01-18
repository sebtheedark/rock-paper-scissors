function computerPlay() {
    const pieces = ['rock', 'paper', 'scissors'];
    const piece = pieces[Math.floor(Math.random() * pieces.length)]
    
    return piece;
}

function playRound(playerSelection, computerSelection) {
    // Rock 
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            return 'You win! Rock beats Scissors!'
        } else if (computerSelection == 'paper') {
            return 'You lose! Paper beats rock!'
        } else if (computerSelection == 'rock') {
            return 'Its a tie!'
        }

    }

    // Scissors
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return 'You lose! Rock beats scissors!'
        } else if (computerSelection == 'paper') {
            return 'You win! Scissors beats paper!'
        } else if (computerSelection == 'scissors') {
            return 'Its a tie!'
        }
    }

    // Paper
    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'You win! Paper beats rock!'
        } else if (computerSelection == 'scissors') {
            return 'You lose! Scissors beats paper!'
        } else if (computerSelection == 'paper') {
            return 'Its a tie!'
        }
    }
}
const playerSelection = 'paper'
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

