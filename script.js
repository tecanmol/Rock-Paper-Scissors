let humanScore= 0;
let computerScore = 0;
let gameOver = false;   // To stop the game once someone wins

const resultD = document.createElement("div");
resultD.setAttribute("style", "color: red");
document.body.appendChild(resultD);

const scoreB = document.createElement("div");
scoreB.setAttribute("style", "color : blue");
document.body.appendChild(scoreB);

const btnrock = document.querySelector(".rock");
const btnpaper = document.querySelector(".paper");
const btnscissors = document.querySelector(".scissors")

 const textContent = resultD;
    const mainContent = document.createElement("h1");
    mainContent.classList.add("moveboard");
    mainContent.textContent = "Move Board";
    mainContent.setAttribute("style", "text-align: center; ,font-weight: bold;");
    textContent.append(mainContent);

btnrock.addEventListener("click", () => main("rock"));
btnpaper.addEventListener("click", () => main("paper"));
btnscissors.addEventListener("click", () => main("scissors"));

function main(buttonChoice){
    if (gameOver) return;

    let playerChoice = buttonChoice.toLowerCase();
    divadd(`Player's Choice:  ${playerChoice}`);

    let computerChoice = getComputerChoice();
    divadd(`Computer's Choice: ${computerChoice}`);

    playRound(playerChoice, computerChoice);
    // Determine game result after each round
   // Check if someone reached 5 points before displaying the score
   
    displayScore(`Player's Score: ${humanScore} | Computer's Score: ${computerScore}`);
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            divadd("You won!!!");
        } else {
            divadd("You lost :)");
        }
        gameOver = true;  // Set the gameOver flag to stop further clicks
    } 
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

function playRound(humanChoice, computerChoice){
    computerChoice= computerChoice.toLowerCase();
    if(computerChoice == "rock" && humanChoice == "scissors"){
        computerScore++;
        divadd("You lose! Rock beats Scissors");
    }
    else if(computerChoice == "paper" && humanChoice == "rock"){
        computerScore++;
        divadd("You lose! Paper beats Rock");
    }
    else if(computerChoice == "scissors" && humanChoice == "paper"){
        computerScore++;
        divadd("You lose! Scissors beats Paper");
    }
    else if (computerChoice === humanChoice) {
        divadd("It's a tie!");
    }
    else{
        humanScore++;
        divadd(`You won! ${humanChoice} beats ${computerChoice}`)
    }

}

function divadd(msg){
    const container = resultD;
    const content = document.createElement("h2");
    const space = document.createElement("hr");
    content.classList.add("moves");
    content.textContent =  msg;
    container.appendChild(content);
    container.appendChild(space);
}

function displayScore(score) {
    const container = scoreB;
    
    // Remove any previous score display
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Create and display the new score
    const content = document.createElement("h2");
    content.classList.add("scores");
    content.textContent = score;

    container.appendChild(content);
}