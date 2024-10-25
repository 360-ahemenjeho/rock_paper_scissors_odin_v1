const CHOICES = ['Rock', 'Paper', 'Scissors']

function playRound(humanChoice, computerChoice) {
    if (!humanChoice || !computerChoice) {
        window.alert('Opps! Enter your choices :(')
        reload()
    }

    const humanChoice_ = humanChoice.toLowerCase()
    const computerChoice_ = computerChoice.toLowerCase()

    const choiceRes = `COMPUTER: ${computerChoice_}, YOU: ${humanChoice_} - `

    if (humanChoice_ === computerChoice_) window.alert('Tie')
    else if (humanChoice_ === 'rock' && computerChoice_ === 'paper')
        window.alert(choiceRes + 'You loose!')
    else if (humanChoice_ === 'paper' && computerChoice_ === 'rock')
        window.alert(choiceRes + 'You win!')
    else if (humanChoice_ === 'scissors' && computerChoice_ === 'rock')
        window.alert(choiceRes + 'You loose!')
    else if (computerChoice_ === 'scissors' && humanChoice_ === 'rock')
        window.alert(choiceRes + 'You win!')
    else if (computerChoice_ === 'scissors' && humanChoice_ === 'paper')
        window.alert(choiceRes + 'You loose')
    else if (computerChoice_ === 'paper' && humanChoice_ === 'scissors')
        window.alert(choiceRes + 'You win!')

    const consent = window.confirm('Play another round?')
    if (!consent) return
    reload()
}

function getComputerChoice() {
    const i = Math.floor(Math.random() * 3)
    return CHOICES[i]
}

function getHumanChoice() {
    const choice = window.prompt('Enter choice: Rock, Paper or Scissors')
    if (!CHOICES.some((item) => item.toLowerCase() === choice.toLowerCase())) {
        window.alert('Invalid choice :(')
        return false
    }
    return choice
}

function reload() {
    window.location.reload()
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
