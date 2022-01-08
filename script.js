console.log(computerPlay());

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