//game()

let playerScore = 0;
let computerScore = 0;

const score = document.querySelector('.score');
const roundResult = document.querySelector('.roundResult');

function computerPlay() {
    const throwables = ['Rock', 'Paper', 'Scissors'];

    let randomChoice = Math.floor(Math.random() * 3);
    return throwables[randomChoice];
}

function playRound(playerSelection = '', computerSelection) {

    if (playerSelection === computerSelection) {
        roundResult.textContent = `Draw! Your ${playerSelection} is just as strong as the computer's.`
        return;
    }

    if (playerSelection === 'Rock' && computerSelection === 'Paper'
        || playerSelection === 'Paper' && computerSelection === 'Scissors'
        || playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
        roundResult.textContent = `You've been defeated! The computer's ${computerSelection} utterly destroys your weak ${playerSelection}.`;
        return;
    }

    playerScore++;
    score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    roundResult.textContent = `You win this round! Your ${playerSelection} is triumphant. Good choice!`;
    return;
}

// function game() {
//     let playerScore = 0
//     let computerScore = 0

//     for (let i = 0; i < 5; i++) {
//         let playerSelection
//         while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
//             playerSelection = prompt('Choose Rock/Paper/Scissors', 'Rock')

//             playerSelection = playerSelection.toLowerCase()
//         }
//         let computerSelection = computerPlay()

//         playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
//         computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)

//         const result = playRound(playerSelection, computerSelection)

//         if (result === 0) {
//             console.log(`Draw! You both picked ${playerSelection}`)
//             i--
//         } else if (result === -1) {
//             console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
//             computerScore++
//         } else {
//             console.log(`You win! ${playerSelection} beats ${computerSelection}`)
//             playerScore++
//         }

//         console.log(`Score : You - ${playerScore} | Computer - ${computerScore}`)
//     }

//     if (playerScore > computerScore) {
//         console.log(`Congratulations!!! You won ${playerScore} to ${computerScore}`)
//     } else {
//         console.log(`Unlucky! You lost ${computerScore} to ${playerScore}`)
//     }
// }

const buttons = document.querySelectorAll('.choice');
buttons.forEach(button => button.addEventListener("click", function () { playRound(button.textContent, computerPlay()); }));