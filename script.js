let humanScore= 0;
let computerScore = 0;


for(let i=0; i<5 ; i++){
    let user = getHumanChoice();
    console.log("User's choice:", user);

    let computer = getComputerChoice();
    console.log("Computer's choice:", computer);
    playRound(user , computer);
}

function getComputerChoice(){
    let x = Math.random();
    if (x < 0.33) {
        return "Rock";
    } else if (x < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

if(humanScore>computerScore){
    console.log("You won!!!");
}
else{
    console.log("You lost :)")
}

function getHumanChoice() {
    let n;
    do {
        n = prompt("Enter your choice (Rock, Paper, or Scissors):");
        n = n.toLowerCase();
    } while (n !== "rock" && n !== "paper"  && n !== "scissors");
    return n;
}

function playRound(humanChoice, computerChoice){
    computerChoice= computerChoice.toLowerCase();
    if(computerChoice == "rock" && humanChoice == "scissors"){
        computerScore++;
        console.log("You lose! Rock beats Scissors");
    }
    else if(computerChoice == "paper" && humanChoice == "rock"){
        computerScore++;
        console.log("You lose! Paper beats Rock");
    }
    else if(computerChoice == "scissors" && humanChoice == "paper"){
        computerScore++;
        console.log("You lose! Scissors beats Paper");
    }
    else if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    }
    else{
        humanScore++;
        console.log(`You won! ${humanChoice} beats ${computerChoice}`)
    }

}