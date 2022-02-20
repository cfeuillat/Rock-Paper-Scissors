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

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();

    if (player == 'rock') {
        if (computer == 'rock') {
            return "It's a tie ! "
        } else if (computer == 'paper') {
            return "You lose, paper beats rock !"
        } else if (computer == 'scissor') {
            return "You win, rock beats scissor !"
        }
    } else if (player == 'paper') {
        if (computer == 'rock') {
            return "You win, paper beats rock ! "
        } else if (computer == 'paper') {
            return "It's a tie!"
        } else if (computer == 'scissor') {
            return "You lose, scissor beats paper !!"
        }
    } else if (player == 'scissor') {
        if (computer == 'rock') {
            return "You lose, rock beats scissor !"
        } else if (computer == 'paper') {
            return "You win, scissor beats paper !"
        } else if (computer == 'scissor') {
            return "It's a tie !"
        }
    }
}


function winnerRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();

    if (player == 'rock') {
        if (computer == 'rock') {
            return "Tie"
        } else if (computer == 'paper') {
            return "Computer"
        } else if (computer == 'scissor') {
            return "Player"
        }
    } else if (player == 'paper') {
        if (computer == 'rock') {
            return "Player"
        } else if (computer == 'paper') {
            return "Tie"
        } else if (computer == 'scissor') {
            return "Computer"
        }
    } else if (player == 'scissor') {
        if (computer == 'rock') {
            return "Computer"
        } else if (computer == 'paper') {
            return "Player"
        } else if (computer == 'scissor') {
            return "Tie"
        }
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Chose between rock, paper, scissor");
        let computerSelection = computerPlay();
        let round_number = i + 1;
        console.log("Round " + round_number + "\n");
        console.log(playRound(playerSelection, computerSelection));

        if (winnerRound(playerSelection, computerSelection) == "Player") {
            playerScore++;
        } else if (winnerRound(playerSelection, computerSelection) == "Computer") {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game.")
    } else if (playerScore < computerScore) {
        console.log("Computer win the game.")
    } else {
        console.log("It's a tie.")
    }
}


game();