 // Player buttons
 const buttons = document.querySelectorAll('.img-btn');

 // Results object
 const results = { 1: 'You win!',
                   2: 'You lose!', 
                   3:'Draw!'}

 // Scores 
 let playerScore = 0;
 let computerScore = 0;

// Add event listener, pass values, call play round function
buttons.forEach(button => button.addEventListener('click', () => {game(button)}))

 // Get computer selection function
function getComputerSelection() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
 }

 // Game function
 function game(button){

    // Scoreboard
    const playerScoreBoard = document.getElementById('player-score');
    const computerScoreBoard = document.getElementById('computer-score');
    playerScoreBoard.textContent = `${playerScore}`;
    if (playerScore === 0) {
        playerScoreBoard.textContent = "";
    }
    computerScoreBoard.textContent = `${computerScore}`
    if (computerScore === 0) {
        computerScoreBoard.textContent = "";
    }
    
    // Get selections
    const playerSelection = button.id;
    const computerSelection = getComputerSelection();
    
    // Play a round
    const round = playRound(playerSelection, computerSelection);
    
    // Record scores
    const gameHeader = document.getElementById('game-header');
    if (round === results[1]) {
        playerScore ++;
        gameHeader.textContent = `${results[1]} ${playerSelection} beats ${computerSelection}`;
    } else if (round == results[2]) {
        computerScore ++;
        gameHeader.textContent = `${results[2]} ${computerSelection} beats ${playerSelection}`;

    } else if (round == results[3]) {
        gameHeader.textContent = `${results[3]}`;
    }
    
 }

 // Play round function
 function playRound (playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    // Check for draw
    if (playerSelection === computerSelection) {
        return results[3];
    } else {
        // Check all other cases
        switch (playerSelection) {
            case 'rock':
            if (computerSelection === 'paper') {
                return results[2];
            } else if (computerSelection === 'scissors') {
                return results[1];
            }
            case 'paper':
                if (computerSelection === 'scissors') {
                    return results[2];
                } else if (computerSelection === 'rock') {
                    return results[1];
                }
            case 'scissors':
                if (computerSelection === 'rock') {
                    return results[2];
                } else if (computerSelection === 'paper') {
                    return results[3];
                }
            }
        }
    }










