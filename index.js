
// function getComputerChoice() {
//     let myArray = ['rock', 'paper','scissors'];
//     let randomNumber = Math.floor(Math.random()* 3);

//     return myArray[randomNumber];
// }



// function playRound(uSelect, cSelction) {

//         let userSelection = uSelect.toLowerCase();
//         let computerSelection = cSelction;
//         if(userSelection == 'rock' && computerSelection =="scissors") {
//             return `You won! Rock beats Scissors`;
//         } else if (userSelection == 'scissors' && computerSelection =="paper") {
//             return `You won! scissors beats paper`;
//         } else if (userSelection =="paper" && computerSelection =="rock") {
//             return `Your won! paper beats Rock`;
//         } else if (userSelection == computerSelection) {
//             return `Tied! ${userSelection} can not beat ${computerSelection}`;
//         }
//         return `You lost ${computerSelection} beats ${userSelection}`;

// }

// function game() {

//             let counter = 0;
//             while (counter <5) {
//                 let userInput = prompt("Rock,paper,scissors");//

//                console.log( playRound(userInput,getComputerChoice()));
//                 counter +=1;

//             }

// }

// game();

function getComputerChoice() {
    let myArray = ['rock', 'paper','scissors'];
    let randomNumber = Math.floor(Math.random() * myArray.length);

    return myArray[randomNumber];
}

let yourScore = document.getElementById('yourScore');
let score = 1, score1 = 1;
let show = document.getElementById('show');   
let showOne = document.getElementById('show1');
let result = '';
let showResult = document.getElementById('result');





let user = document.querySelectorAll('.text');
user.forEach(element => {
    element.onclick = () => {
       result =  element.value;
       let computer = getComputerChoice();
       if( result == computer ) {
         
        } else if (result =="rock" && computer =="scissors") {
            show.innerHTML = score ++;
      
       } else if(result == "paper" && computer =="rock") {
        show.innerHTML = score ++;
         
       } else if (result =="scissors" && computer =="paper") {
        
            show.innerHTML = score ++;
       } else {
                
            showOne.innerHTML = score1 ++;
        }
      
        console.log(score);
        console.log(score1);
        
    }
        
})

play = document.querySelector('.playAgain');