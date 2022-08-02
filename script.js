game()

function computerPlay() {
    const throwables = ['rock', 'paper', 'scissors']

    let randomChoice = Math.floor(Math.random() * 3)
    return throwables[randomChoice]
}

function playRound(playerSelection = '', computerSelection) {

    if (playerSelection === computerSelection) {
        return 0
    }

    if (playerSelection === 'Rock' && computerSelection === 'Paper'
        || playerSelection === 'Paper' && computerSelection === 'Scissors'
        || playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return -1
    }

    return 1
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