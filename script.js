

const regEx = {
    rock: /^Rock$/i,
    scissor: /^Scissor|Scissors$/i,
    paper: /^Paper$/i
};

console.log(computerPlay());
console.log(checkPlayerInput(prompt("Enter Rock, Paper or scissor")));

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
function playRound(){

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