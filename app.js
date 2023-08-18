 // Player buttons
 const buttons = document.querySelectorAll('.btn');

 // Scores object, result variable
 let scores = {Player: 0, Computer: 0}
 let result;

 // Get computer selection
 const computerSelection = () => {
    const choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
 }

 // Add event listener, pass values, call play round function
 buttons.forEach(button => button.addEventListener('click', () => {playRound(button.id, computerSelection)}))

 // Play round function
 function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = 'It\'s a draw';
        return result;
    } else {
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




