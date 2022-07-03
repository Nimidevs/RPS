const display = document.querySelector('#display')
const userScoreDisplay = document.querySelector('#userScore')
const compScoreDisplay = document.querySelector('#compScore')
const userChoiceDisplay = document.querySelector('#userChoice')
const compChoiceDisplay = document.querySelector('#compChoice')
const game = document.querySelector('#game')
let buttons = document.querySelectorAll('.btng')
let playerScore = 0;
let computerScore = 0;

function startGame(){
    playerScore = 0;
    computerScore = 0;
    userScoreDisplay.innerText = playerScore
    compScoreDisplay.innerText = computerScore
    display.innerText = "FIGHT!!!!"
    buttons.forEach(button => {
        button.setAttribute('onclick', 'playerChoice(value)')
    })
    game.classList.remove('replay')
}
function playerChoice(value){
    let playerSelection = value
    let computerSelection = computerPlay()
    let playerChoice = value
    let computerChoice = computerPlay()
    playRound(playerSelection, computerSelection)
    if(playRound(playerSelection, computerSelection) === true){
        playerScore += 1
        userScoreDisplay.innerText = playerScore
        console.log(`playerScore is ${playerScore}, computerScore is ${computerScore}`)
    }else if (playRound(playerSelection, computerSelection) === false){
        computerScore += 1
        compScoreDisplay.innerText = computerScore
        console.log(`computerScore is ${computerScore}, playerScore is ${playerScore}`)
    }else if(playRound(playerSelection, computerSelection) === 'IT\'S A TIE'){
        playerScore = playerScore
        computerScore = computerScore
        console.log(`scores are ${playerScore} ${computerScore}`)
    }
    choiceDisplay(playerChoice, computerChoice)
    if(playerScore === 5 || computerScore === 5){
        if (playerScore > computerScore){
            display.innerText = "WINNER"
        }else{
            display.innerText = "You loose"
        }
        buttons.forEach(button => {
            button.removeAttribute('onclick')
        })
        game.classList.add('replay');
        game.innerText="Replay"
    }
}
function computerPlay(min = 1, max = 3) {
    randomValue = Math.floor(Math.random() * (max - min + 1) + min)
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
    if (playerSelection === computerSelection){
        display.innerText = "Its a tie"
        return "IT'S A TIE"
    }
    if(playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        display.innerText = "You loose...paper covers rock"
        return false
    } else if(playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        display.innerText="You win... paper covers rock"
        return true
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        display.innerText="You win............scissors cuts paper"
        return true
    }else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
        display.innerText="you loose... scissors cuts paper"
        return false
    }else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        display.innerText="You win... rock crushes scissors"
        return true
    }else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        display.innerText="You loose....rock crushes scissors"
        return false
    }
}
function choiceDisplay(playerChoice, computerChoice){
    if(playerChoice === 'ROCK'){
        userChoiceDisplay.innerHTML = '✊'
    }else if(playerChoice === 'PAPER'){
        userChoiceDisplay.innerHTML = '✋'
    }else if(playerChoice === 'SCISSORS'){
        userChoiceDisplay.innerHTML = '✌'
    }
    if(computerChoice === 'ROCK'){
        compChoiceDisplay.innerHTML = '✊'
    }else if(computerChoice === 'PAPER'){
        compChoiceDisplay.innerHTML = '✋'
    }else if(computerChoice === 'SCISSORS'){
        compChoiceDisplay.innerHTML = '✌'
    }
    userChoiceDisplay.style.fontSize= '20px'
    compChoiceDisplay.style.fontSize= '20px'
}
