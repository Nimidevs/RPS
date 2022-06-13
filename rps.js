function computerPlay(min = 1, max = 3) {
    randomValue = Math.floor(Math.random() * (max - min + 1) + min)
    //return randomValue
    if (randomValue === 1) {
        console.log("ROCK")
        return "ROCK";
    } else if (randomValue === 2) {
        console.log("PAPER")
        return "PAPER";
    } else {
        console.log("SCISSORS")
        return "SCISSORS";
    }
}

function playRound(playerSelection , computerSelection) {
    if ((playerSelection === 'ROCK' && computerSelection === 'ROCK') || (computerSelection === 'PAPER' && playerSelection === 'PAPER') || (computerSelection === 'SCISSORS' && playerSelection === 'SCISSORS')) {
        console.log("Its a tie")
        return "IT'S A TIE"
    }
    if(playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        console.log("You loose...paper covers rock")
        return false
    } else if(playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        console.log("You win... paper covers rock")
        return true
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        console.log("You win............scissors cuts paper")
        return true
    }else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
        console.log("you loose... scissors cuts paper")
        return false
    }else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        console.log("You win... rock crushes scissors")
        return true
    }else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        console.log("You loose....rock crushes scissors")
        return false
    }
}

/*function game(){
    let playerScore = 0;
    let computerScore = 0;
    do{
        const playerSelection = prompt("ROCK ? PAPAER ? SCISSORS?").toUpperCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
        if(playRound(playerSelection, computerSelection) === true){
            playerScore += 1
            console.log(`playerScore is ${playerScore}, computerScore is ${computerScore}`)
        }else if (playRound(playerSelection, computerSelection) === false){
            computerScore += 1
            console.log(`computerScore is ${computerScore}, playerScore is ${playerScore}`)
        }else if(playRound(playerSelection, computerSelection) === 'IT\'S A TIE'){
            playerScore = playerScore
            computerScore = computerScore
            console.log(`scores are ${playerScore} ${computerScore}`)
        }
    }
    while(playerScore < 5 || computerScore < 5);
    console.log(playerScore , computerScore)
    if (playerScore > computerScore){
        console.log("You win")
    }else{
        console.log("You loose")
    }
}*/
function game(){
    let playerScore = 0;
    let computerScore = 0;
    while (true){
        const playerSelection = prompt("ROCK ? PAPAER ? SCISSORS?").toUpperCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
        if(playRound(playerSelection, computerSelection) === true){
            playerScore += 1
            console.log(`playerScore is ${playerScore}, computerScore is ${computerScore}`)
        }else if (playRound(playerSelection, computerSelection) === false){
            computerScore += 1
            console.log(`computerScore is ${computerScore}, playerScore is ${playerScore}`)
        }else if(playRound(playerSelection, computerSelection) === 'IT\'S A TIE'){
            playerScore = playerScore
            computerScore = computerScore
            console.log(`scores are ${playerScore} ${computerScore}`)
        }
       if(playerScore === 5 || computerScore === 5){
        break;
       }
    }
    console.log(playerScore , computerScore)
    if (playerScore > computerScore){
        console.log("You win")
    }else{
        console.log("You loose")
    }
    /*else if (playerScore < computerScore){
        console.log("You Loose")
    }else{
        console.log("ITS A TIE")
        game()
    }*/
} 
game()