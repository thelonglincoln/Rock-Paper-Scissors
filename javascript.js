function getRandomStringFromArray(stringArray) {
    const randomSelection = Math.floor(Math.random() * stringArray.length);
    return stringArray[randomSelection];
};

const gameOptions = ["rock", "paper", "scissors"];
const playerSelection = "scissors";
const computerSelection = getRandomStringFromArray(gameOptions);



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's A Tie!";
    } else if (
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")
        ) {return "You Lose, Computer Wins";
    } else {
        return "You Win, Computer Loses";
    }

};

console.log(playRound(playerSelection, computerSelection));