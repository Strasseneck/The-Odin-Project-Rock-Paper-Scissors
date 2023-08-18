 // Player buttons
 const buttons = document.querySelectorAll('.btn');

// Add event listener, pass values, call play round function
buttons.forEach(button => button.addEventListener('click', () => {game(button)}))

 // Get computer selection function
function getComputerSelection() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
 }

 // Game function
 function game(button){
    
    // Get selections
    const playerSelection = button.id;
    const computerSelection = getComputerSelection();
    
    // Scores object call round
    let scores = {player: 0, computer: 0}
    let finalResult;

    // Play a round
    let round = playRound(playerSelection, computerSelection);
    
    // Record scores
    if (round.includes("You win!")) {
        scores.player ++;
    } else if (round.includes("You lose!")) {
        scores.computer ++;
    } else if (round === "It's a draw!") {
    }

    // Check for end of game and final winner
    if(scores.player >= 5) {
        finalResult = 'You win!'
        return finalWinner
    } else if (scores.computer >= 5) {
        finalResult = 'You lose!'
        return finalWinner
    }
 }

 // Play round function
 function playRound (playerSelection, computerSelection) {

    // Check for draw
    if (playerSelection === computerSelection) {
        result = 'It\'s a draw';
        return result;
    } else {

        // Check all other cases
        switch (playerSelection) {
            case 'rock':
            if (computerSelection === 'paper') {
                result = 'You lose! Paper beats rock!';
                return result;
            } else if (computerSelection === 'scissors') {
                results = 'You win! Rock beats scissors!';
                return result;
            }
            case 'paper':
                if (computerSelection === 'scissors') {
                    result = 'You lose! Scissors beat paper!';
                    return result;
                } else if (computerSelection === 'rock') {
                    result = 'You win! Paper beats rock!';
                    return result;
                }
            case 'scissors':
                if (computerSelection === 'rock') {
                    result = 'You lose! Rock beats scissors!';
                    return result;
                } else if (computerSelection === 'paper') {
                    result = 'You win! Scissors beat paper!';
                    return result;
                }
            }
        }
    }




