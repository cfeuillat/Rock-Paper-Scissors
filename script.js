function computerPlay() {
    let result = Math.floor(Math.random() * 3)
    if (result == 0) {
        return "Rock";
    } else if (result == 1) {
        return "Paper";
    } else if (result == 2) {
        return "Scissor";
    }

}

let playerScore = 0;
let computerScore = 0;

function printScoreInfo(playerSelection, computerSelection = computerPlay()) {
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();
    console.log("Player : " + playerScore);
    console.log("Computer : " + computerScore);

    if (player == 'rock') {
        if (computer == 'rock') {
            return "It's a tie !"
        } else if (computer == 'paper') {
            computerScore += 1;
            return "You lost !"
        } else if (computer == 'scissor') {
            playerScore += 1;
            return "You won !"
        }
    } else if (player == 'paper') {
        if (computer == 'rock') {
            playerScore += 1;
            return "You won !"
        } else if (computer == 'paper') {
            return "It's a tie !"
        } else if (computer == 'scissor') {
            computerScore += 1;
            return "You lost !"
        }
    } else if (player == 'scissor') {
        if (computer == 'rock') {
            computerScore += 1;
            return "You lost !"
        } else if (computer == 'paper') {
            playerScore += 1;
            return "You won !"
        } else if (computer == 'scissor') {
            return "It's a tie !"
        }
    }

}

function printScoreMessage(playerSelection, computerSelection = computerPlay()) {
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();
    console.log("Player : " + playerScore);
    console.log("Computer : " + computerScore);

    if (player == 'rock') {
        if (computer == 'rock') {
            return "Rock ties with rock"
        } else if (computer == 'paper') {
            return "Paper beats rock"
        } else if (computer == 'scissor') {
            return "Rock beats scissor"
        }
    } else if (player == 'paper') {
        if (computer == 'rock') {
            return "Paper beats rock"
        } else if (computer == 'paper') {
            return "Paper ties with paper"
        } else if (computer == 'scissor') {
            return "Scissor beats paper"
        }
    } else if (player == 'scissor') {
        if (computer == 'rock') {
            return "Rock beats scissor"
        } else if (computer == 'paper') {
            return "Scissor beats paper"
        } else if (computer == 'scissor') {
            return "Scissor ties with scissor !"
        }
    }

}

function print_results() {
    if (computerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        alert("Computer won the game");
    } else if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        alert("You won the game");
    }
}


const buttons = document.querySelectorAll("button");
const scoreInfo = document.querySelector(".score-info");
const scoreMessage = document.querySelector(".score-message")
const compScore = document.querySelector(".computerScore");
const playScore = document.querySelector(".playerScore");



buttons.forEach((button) => {
    button.addEventListener('click', function() {
        computer = computerPlay();
        scoreInfo.textContent = printScoreInfo(button.id, computer);
        scoreMessage.textContent = printScoreMessage(button.id, computer);
        compScore.textContent = "Computer score : " + computerScore;
        playScore.textContent = "Player score : " + playerScore;
        print_results();
    }, false)
})