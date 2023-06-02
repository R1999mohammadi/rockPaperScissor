//implement the complete logic here

function getComputerChoice() {
    const myArray = ['rock','paper','scissors'];

    let random = Math.floor(Math.random() * myArray.length);

    return myArray[random];
}



let winner = document.querySelector(".winner");

let uChoice = document.getElementById('uScore');

let cChoice = document.getElementById('cScore');


function play() {
let userChoice = 0;
let input = document.querySelectorAll('.select');
input.forEach(element => {
    element.onclick = () => {
     userChoice =  element.value;
     let computerChoice = getComputerChoice();
    

     if((userChoice == 'rock' && computerChoice =='scissors') ||
     (userChoice == "paper" && computerChoice == "rock") ||
     (userChoice == "scissors" && computerChoice =="paper")) {
        winner.textContent = `you won! ${userChoice} beats ${computerChoice}`;
        uChoice .textContent = `Your choice: ${userChoice}`;
        cChoice.textContent  = `Computer choice: ${computerChoice}`;
       
     } else if (userChoice == computerChoice) {
        winner.textContent = `Tie! ${userChoice} can not beat ${computerChoice}`;
        uChoice .textContent = `Your choice: ${userChoice}`;
        cChoice.textContent  = `Computer choice: ${computerChoice}`;
     } else {
        winner.textContent = `You lost ${computerChoice} beats ${userChoice}`;
        uChoice .textContent = `Your choice: ${userChoice}`;
        cChoice.textContent  = `Computer choice: ${computerChoice}`;
     }
    }
})
}

play();