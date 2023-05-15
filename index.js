
function getComputerChoice() {
    let myArray = ['rock', 'paper','scissors'];
    let randomNumber = Math.floor(Math.random()* 3);
    
    return myArray[randomNumber];
}



function playRound(uSelect, cSelction) {

        let userSelection = uSelect.toLowerCase();
        let computerSelection = cSelction;
        if(userSelection == 'rock' && computerSelection =="scissors") {
            return `You won! Rock beats Scissors`;
        } else if (userSelection == 'scissors' && computerSelection =="paper") {
            return `You won! scissors beats paper`;
        } else if (userSelection =="paper" && computerSelection =="rock") {
            return `Your won! paper beats Rock`;
        } else if (userSelection == computerSelection) {
            return `Tied! ${userSelection} can not beat ${computerSelection}`;
        }
        return `You lost ${computerSelection} beats ${userSelection}`;


}

function game() {

            let counter = 0;
            while (counter <5) {
                let userInput = prompt("Rock,paper,scissors");
               console.log( playRound(userInput,getComputerChoice()));
                counter +=1;

            }

}

game();