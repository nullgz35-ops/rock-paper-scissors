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
   if (humanChoice === "batu" && computerChoice === "gunting"){
        return humanChoice + " vs " + computerChoice + ' menang'
    } else if (humanChoice === "gunting" && computerChoice === "kertas"){
        return humanChoice + " vs " + computerChoice + " menang"
    } else if (humanChoice === "kertas" && computerChoice === "batu"){
        return humanChoice + " vs " + computerChoice + ' menang'
    } else if (humanChoice === computerChoice){
        return humanChoice + " vs " + computerChoice + " seri"
    } else {
        return humanChoice + " vs " + computerChoice + " kalah"
    }
}

function playGame (){ 
    let playerScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++){
        let humanChoice = getHumanChoice ()
        let computerChoice = getComputerChoice ()
        let hasil = playRound(humanChoice, computerChoice)
        console.log (hasil)

        if (hasil.includes ("menang")){  //score
            playerScore = playerScore +1;
        } else if (hasil.includes("kalah")){
            computerScore = computerScore +1;
        } else if (hasil.includes ("seri")){
        }
    }
    if (playerScore > computerScore){
        console.log ("player menang!")
    } else if (playerScore < computerScore){
        console.log ("Player kalah!")
    } else {
        console.log ("Seri!")
    } 
}
playGame ();
