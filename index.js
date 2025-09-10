let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const values = ['Rock', 'Paper', 'Scissors'];
    return values[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    const choice = prompt('Rock, Paper, Scissors?', 'Rock');
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log(`The computer chose ${computerChoice}, the user chose ${humanChoice}`);

    switch(humanChoice){
        case 'rock':
            if(computerChoice === humanChoice) break;
            else if(computerChoice == 'scissors') {
                humanScore++;
            } else {
                computerScore++;
            }
            break;
        case 'paper':
            if(computerChoice === humanChoice) break;
            else if(computerChoice === 'scissors') {
                computerScore++;
            } else{
                humanScore++;
            }
            break;
        case 'scissors':
            if(computerChoice === humanChoice) break;
            else if(computerChoice === 'rock'){
                computerScore++;
            } else {
                humanScore++;
            }
            break;
    }

    console.log(`Current score: Human - ${humanScore}, Computer - ${computerScore}`);
}

const parent = document.querySelector('#parent');

parent.addEventListener('click', function(e){
    const humanChoice = e.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

})

// function playGame() {
//     const ROUNDS = 5;

//     for(let i = 0; i < ROUNDS; i++){
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();

//         playRound(humanChoice, computerChoice);
//     }

//     if(humanScore > computerScore){
//         console.log('Human wins!')
//     } else{
//         console.log('Computer wins!');
//     }
// }

// playGame();

