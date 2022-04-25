function computerPlay() {
    const throwables = ['rock', 'paper', 'scissors']

    let randomChoice = Math.floor(Math.random() * 3)
    return throwables[randomChoice]
}

function playRound(playerSelection = '', computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    playerSelection=playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1);
    computerSelection=computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1);

    if (playerSelection === computerSelection) {
        return `Draw! You both picked ${playerSelection}`
    }

    if (playerSelection === 'Rock' && computerSelection === 'Paper' 
    || playerSelection === 'Paper' && computerSelection === 'Scissors' 
    || playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

    return `You win! ${playerSelection} beats ${computerSelection}`
}

const playerSelection='rock'
const computerSelection=computerPlay()
console.log(playRound(playerSelection,computerSelection))