let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {    //pilihan 
    let randomNumber = Math.floor (Math.random() * 3);
    let computerChoice;
    if (randomNumber === 0){
        computerChoice = "batu"
    } else if (randomNumber === 1){
        computerChoice = "kertas"
    } else {
        computerChoice = "gunting"
    }
    return computerChoice 
}

function getHumanChoice() {
    return prompt ("Pilih batu, gunting, atau kertas: ").toLowerCase();
}

function playRound (humanChoice, computerChoice) {   //penentu
   if (humanChoice === "batu" && computerChoice === "gunting"){ humanScore++;
        return humanChoice + " vs " + computerChoice + ' menang'
    } else if (humanChoice === "gunting" && computerChoice === "kertas"){humanScore++;
        return humanChoice + " vs " + computerChoice + " menang"
    } else if (humanChoice === "kertas" && computerChoice === "batu"){humanScore++;
        return humanChoice + " vs " + computerChoice + ' menang'
    } else if (humanChoice === computerChoice){
        return humanChoice + " vs " + computerChoice + " seri"
    } else {
        computerScore++;
        return humanChoice + " vs " + computerChoice + " kalah"
    }
}

function playGame (){ 
    for (let i=0; i<5; i++){
        let humanChoice = getHumanChoice ()
        let computerChoice = getComputerChoice ()
        let hasil = playRound(humanChoice, computerChoice)
        console.log (hasil)
    }
    if (humanScore> computerScore){
        console.log ("player menang!")
    } else if (humanScore < computerScore){
        console.log ("Player kalah!")
    } else {
        console.log ("Seri!")
    } 
}
playGame ();
