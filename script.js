let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = "batu";
    } else if (randomNumber === 1) {
        computerChoice = "kertas";
    } else {
        computerChoice = "gunting";
    }
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "batu" && computerChoice === "gunting") {
        humanScore++;
        return "Player menang!";
    } else if (humanChoice === "gunting" && computerChoice === "kertas") {
        humanScore++;
        return "Player menang!";
    } else if (humanChoice === "kertas" && computerChoice === "batu") {
        humanScore++;
        return "Player menang!";
    } else if (humanChoice === computerChoice) {
        return "Seri!";
    } else {
        computerScore++;
        return "Komputer menang!";
    }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultDisplay = document.querySelector("#result");
const scoreDisplay = document.querySelector("#score");
const computerImg = document.querySelector("#computer-img");
const playerImg = document.querySelector("#player-img");

function handleChoice(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    playerImg.src = humanChoice + ".png";
    computerImg.src = computerChoice + ".png";
    resultDisplay.textContent = result;
    scoreDisplay.textContent = "Your score: " + humanScore;
    document.querySelector("#computer-score").textContent="Computer score: " + computerScore;
}

rockBtn.addEventListener("click", function() {
    handleChoice("batu");
});

paperBtn.addEventListener("click", function() {
    handleChoice("kertas");
});

scissorsBtn.addEventListener("click", function() {
    handleChoice("gunting");
});