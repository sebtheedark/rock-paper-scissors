let playerScore = 0; 
let compScore = 0; 

// Player Selection associated to buttons
const buttons = document.querySelectorAll('button')


/*function playerSelection() {
    const playerSelection = prompt("Lets play rock, paper, scissors. Which is yours?").toLowerCase();

    return playerSelection
}*/


// Computer Selection 
function computerPlay() {
    const pieces = ['rock', 'paper', 'scissors'];
    const piece = pieces[Math.floor(Math.random() * pieces.length)]
    
    return piece;
}

// Playing the Game

function playRound(playerSelection) {

    let compSelect = computerPlay(); 
    let result = ""
    
    if ((playerSelection == 'rock' && compSelect == 'scissors') ||
        (playerSelection == 'scissors' && compSelect == 'paper') ||
        (playerSelection == 'paper' && compSelect == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + compSelect + ' !!! '
            + '<br><br>Score - Player: ' + playerScore + ' Computer: ' + compScore)
        
        if (playerScore == 5) {
            result += '<br><br>You won!!!'
        }
    }
    else if (playerSelection == compSelect) {
        result = ('It\s a tie. You chose: ' + playerSelection + 'Computer chose: ' + compSelect +
        '<br><br>Score - Player: ' + playerScore + ' Computer Score: ' + compScore) 
    }
    else {
        compScore += 1 
        result = ('You lose! ' + compSelect + ' beats ' + playerSelection + ' !!!' + 
            '<br><br>Score - Player: ' + playerScore + ' Computer Score: ' + compScore)
        
        if (compScore == 5) {
            result += '<br><br> Computer wins!'
        }
    }
    document.getElementById('result').innerHTML = result
    return
        
}
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            playRound(button.value)
        })
    });

/*Game plays 5 times
function game() {
    
    for (let i =0 ; i < 5; i++){
    let computerSelection = computerPlay();
    let userInput = playerSelection();
        let rounds = playRound(computerSelection, userInput); 
        console.log(rounds); 
   
        
    } 
} */


//console.log(game())

//const rockButton = document.getElementById('rock');
//rockButton.addEventListener("click", playRound(playerSelection('rock')));