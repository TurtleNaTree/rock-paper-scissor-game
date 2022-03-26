

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

const playerChoice = Array.from(document.querySelectorAll(".playerChoice"));


playerChoice.forEach(initPlayerChoice);

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
    clearRound();
    showRound(playerSelection, computerSelection);
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

function showRound(playerSelection, computerSelection){
    const game = document.querySelector(".gameBody");
    const roundSection = document.createElement("ul"); 
    const playerGraphic = document.createElement("img");
    const computerGraphic = document.createElement("img");

    roundSection.classList.toggle("roundSection");
    playerGraphic.src = `imgs/${playerSelection}.png`;
    computerGraphic.src = `imgs/${computerSelection}.png`;
    computerGraphic.classList.toggle("computerChoice");

    for (let index = 0; index < 3; index++){
        const li = document.createElement("li");
        roundSection.appendChild(li);
    }

    roundSection.childNodes[0].appendChild(playerGraphic);
    roundSection.childNodes[1].innerText = "VS";
    roundSection.childNodes[2].appendChild(computerGraphic);

    game.appendChild(roundSection);
}

function clearRound (){
    const round = document.querySelector(".roundSection");

    if (round){
        const game = document.querySelector(".gameBody");
        game.removeChild(round);
    }
}

function increaseScore(user){
    if (user == "player"){
        playerScore.textContent = +playerScore.textContent + 1;
    }
    else
        computerScore.textContent = +computerScore.textContent + 1;
}

