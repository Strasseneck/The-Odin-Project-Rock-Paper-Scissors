 // VARIABLES
 
 // Player buttons
 const buttonsContainer = document.getElementById('buttons-container');
 const buttons = document.querySelectorAll('.img-play-btn');

  // Add event listener, pass values, call play round function
buttons.forEach(button => button.addEventListener('click', () => {game(button)}))

 // Game header
 const gameHeader = document.getElementById('game-header');

 // End game header
 const gameOver = document.getElementById('game-over');
 const gameOverHeader = document.getElementById('game-over-header');

 // Scoreboards
 const endScore = 5;
 const playerScoreBoard = document.getElementById('player-score');
 const computerScoreBoard = document.getElementById('computer-score');

  // Scores Object 
  const scores = { 'player': 0,
                    'computer': 0
                 };

 // Results object
 const results = { 1: 'You win!',
                   2: 'You lose!', 
                   3: 'Draw!'
                };

// FUNCTIONS

 // Computer selection function
function getComputerSelection() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
 }

 // Score function
function scoreFunction(playerName) {
    
    // Calculate score
    console.log(playerName)
    let currentScore = scores[playerName]
    currentScore ++;
    scores[`${playerName}`]  = currentScore;
    
    // Update scoreboard

    playerScoreBoard.textContent = `${scores['player']}`;
    if (`${scores['player']}` === 0) {
        playerScoreBoard.textContent = "";
    }

    computerScoreBoard.textContent = `${scores['computer']}`;
    if (`${scores['computer']}` === 0) {
        computerScoreBoard.textContent = "";
    }

    checkForWinner();
}

 // Game function
 function game(button){

    // Get selections
    const playerSelection = button.id;
    const computerSelection = getComputerSelection();
    
    // Play a round
    const round = playRound(playerSelection, computerSelection);
    
    // Display result
    if (round === results[1]) {
        scoreFunction('player')
        gameHeader.textContent = `${results[1]} ${playerSelection} beats ${computerSelection}`;
    } else if (round == results[2]) {
        scoreFunction('computer')
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
                    return results[1];
                }
            }
        }
    }

function checkForWinner() {
    if(scores['player'] === endScore || scores['computer'] === endScore) {
        buttonsContainer.style.display = 'none';
        return endGame()
    }
}

function endGame() {
    gameHeader.style.display = 'none';
    gameOver.style.display = 'block';
    let winner;
    if(scores['player'] === endScore) {
       winner = 'player';
    } else if(scores['computer'] === endScore) {
        winner = 'computer';
    }
    gameOverHeader.textContent = `Game over! ${winner} wins!`;

    // New game button
    const newGameBtn = document.createElement('button');
    newGameBtn.classList.add('btn');
    newGameBtn.classList.add('btn-outline-dark')
    newGameBtn.textContent = 'Play Again';
    gameOver.appendChild(newGameBtn); 
    newGameBtn.addEventListener('click', () => {newGame()});


    console.log("game over" + winner)
    return winner;
}

function newGame() {
    location.reload()
}








