function computerPlay() {
    const throwables = ['Rock', 'Paper', 'Scissors']

    let randomChoice = Math.floor(Math.random() * 3)
    return throwables[randomChoice];
}

