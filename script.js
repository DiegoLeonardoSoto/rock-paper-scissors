let score = {
  playerScore: 0,
  computerScore: 0
}

let GAME_CHOICES = ['paper', 'rock', 'scissors']

/**
 * The function "getComputerChoice" returns a random choice from an array of game choices.
 * @returns a random choice from the GAME_CHOICES array.
 */
function getComputerChoice() {
  return GAME_CHOICES[(Math.random() * 3) | 0]
}

// set computer choice

function playRound(playerSelection, computerSelection) {
  playerIndex = GAME_CHOICES.findIndex((e) => e === playerSelection) //2) get player choice index
  computerIndex = GAME_CHOICES.findIndex((e) => e === computerSelection) // 3) get computer choice index

  nextIndex = playerIndex < 2 ? ++playerIndex : 0 //next index choice based in player choice

  if (nextIndex === computerIndex) {
    //if next index is equal to cumputer index, player won
    score.playerScore += 1
    return `You Won! ${playerSelection} beats ${computerSelection}`
  } else {
    //else computer won
    score.computerScore += 1
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }
}

let result = document.querySelector('#result')
let computerChoiceDisplay = document.querySelector('#computerChoice')
let buttonsContainer = document.querySelector('#buttonsContainer')

let playerScore = document.querySelector('#playerScore')
let computerScore = document.querySelector('#computerScore')

function getSelecction(e) {
  const computerChoice = getComputerChoice()
  computerChoiceDisplay.textContent = computerChoice

  if (computerChoice === this.id) {
    result.textContent = "It's a draw"
  } else {
    result.textContent = playRound(this.id, computerChoice)
  }

  playerScore.textContent = score.playerScore
  computerScore.textContent = score.computerScore

  if (score.playerScore === 5) {
    buttonsContainer.innerHTML = `<h1>YOU WINS!</h1>`
  } else if (score.computerScore === 5) {
    buttonsContainer.innerHTML = `<h1>COMPUTER WINS!</h1>`
  }
}

const btns = document.querySelectorAll('button')

btns.forEach((btn) => btn.addEventListener('click', getSelecction))
