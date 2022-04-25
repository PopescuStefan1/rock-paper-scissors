function computerPlay() {
    const throwables = ['rock', 'paper', 'scissors']

    let randomChoice = Math.floor(Math.random() * 3)
    return throwables[randomChoice]
}

function playRound(playerSelection = '', computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        return `Draw! You both picked ${playerSelection}`
    }

    if (playerSelection === 'rock' && computerSelection === 'paper' 
    || playerSelection === 'paper' && computerSelection === 'scissors' 
    || playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

    return `You win! ${playerSelection} beats ${computerSelection}`
}

const playerSelection='rock'
const computerSelection=computerPlay()
console.log(playRound(playerSelection,computerSelection))