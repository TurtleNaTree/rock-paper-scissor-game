

const regEx = {
    rock: /^Rock$/i,
    scissor: /^Scissor|Scissors$/i,
    paper: /^Paper$/i
};
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

const playerChoice = Array.from(document.querySelectorAll(".playerChoice"));

console.log(playerChoice);
console.log(+document.querySelector("#playerScore").textContent + 1);
playerChoice.forEach(initPlayerChoice);

//game();


function initPlayerChoice(playerSelection){
    playerSelection.addEventListener("click", () => playRound(playerSelection.id, computerPlay()));
}

// returns a random string that is rock, paper or scissor
function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";
        default:
            console.error("Something went wrong in computerPlay();");
            console.error(`randomNum = ${randomNum}`);
            return null;
    }
}

// plays a game of rock paper scissors
function playRound(playerSelection, computerSelection){
    console.log(`computer chose ${computerSelection}`);
    console.log(`player chose ${playerSelection}`);
    if (playerSelection === computerSelection){
        return `Draw! ${playerSelection} and ${computerSelection} are even.`;
    }
    else {
        switch (playerSelection){
            case "Rock":
                if (computerSelection === "Paper"){
                    increaseScore("computer");
                    return `You lose! ${computerSelection} beats ${playerSelection}.`;
                }
                else{
                    increaseScore("player");
                    return `You win! ${playerSelection} beats ${computerSelection}`;
                }
            case "Paper":
                if (computerSelection === "Scissor"){
                    increaseScore("computer");
                    return `You lose! ${computerSelection} beats ${playerSelection}.`;
                }
                else{
                    increaseScore("player");
                    return `You win! ${playerSelection} beats ${computerSelection}`;
                }
            case "Scissor":
                if (computerSelection === "Rock"){
                    increaseScore("computer");
                    return `You lose! ${computerSelection} beats ${playerSelection}.`;
                }
                else{
                    increaseScore("player");
                    return `You win! ${playerSelection} beats ${computerSelection}`;
                }
            default:
                console.error(`Something went wrong in playRound. playerSelection is ${playerSelection} and computerSelection is ${computerSelection}.`);
        }
    }
}

// plays 5 rounds of rock paper scissors
function game(){
    let playerSelection;
    let roundCount = 0;
    
    while (roundCount !== 5){
        playerSelection = prompt("Enter Rock, Paper or Scissor.");
        playerSelection = checkPlayerInput(playerSelection);

        if (playerSelection === null){
            console.log("Invalid input try again.");
        }
        else{
            console.log(playRound(playerSelection, computerPlay()));
            roundCount++;
        }
    }

}


// checks if players input is valid (they must enter scissor, paper, or rock)
function checkPlayerInput(playerSelection){
    if (regEx.rock.test(playerSelection)){
        return "Rock";
    }
    else if (regEx.paper.test(playerSelection)){
        return "Paper";
    }
    else if (regEx.scissor.test(playerSelection)){
        return "Scissor";
    }
    else{
        console.error(`Wrong input found player selection is ${playerSelection}. In checkPlayerInput.`);
        return null;
    }

}

function increaseScore(user){
    if (user == "player"){
        playerScore.textContent = +playerScore.textContent + 1;
    }
    else
        computerScore.textContent = +computerScore.textContent + 1;
}