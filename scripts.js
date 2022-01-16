function computerPlay() {
    const pieces = ['rock', 'paper', 'scissors'];
    const piece = pieces[Math.floor(Math.random() * pieces.length)]
    
    return piece;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection > computerSelection)
        return "Player wins," + playerSelection + '!'
    
    return playerSelection
}
const playerSelection = 'rock'
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

