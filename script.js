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

/* The code block is responsible for prompting the user to enter their choice of "rock", "paper", or
"scissors" and storing it in the variable `playerChoice`. The `while` loop ensures that the user's
input is valid by checking if the entered choice is present in the `GAME_CHOICES` array. If the
entered choice is not found in the array, the prompt will be displayed again until a valid choice is
entered. The `.toLowerCase()` method is used to convert the user's input to lowercase for
case-insensitive comparison. */

function getPlayerChoice() {
  let playerChoice
  while (!GAME_CHOICES.find((e) => e === playerChoice)) {
    playerChoice = prompt(
      'Write your choice: Rock, paper or scissors'
    ).toLowerCase()
  }
  return playerChoice
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

function game() {
  for (let i = 0; i < 5; i++) {
    let playerChoice = getPlayerChoice()
    let computerChoice = getComputerChoice()

    if (playerChoice === computerChoice) {
      console.log("it's a draw") //1) if it's a draw
      i--
    } else {
      console.log(playRound(playerChoice, computerChoice))
    }
  }
  console.log(score)
}

game()
