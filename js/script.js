function computerPlay() {
    const computerChoice = Math.floor(Math.random()*3) + 1
    switch(computerChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return "something went wrong"
    }
}

let playerTally = 0;
let computerTally = 0;
function playRound(playerChoice){
    // const playerChoice2 = playerChoice.toLowerCase();
    let computerChoice = computerPlay();
    console.log(computerChoice);
    let result;
    if (computerChoice === 'rock') {
        switch (playerChoice) {
            case 'rock':
                // return "Tie";
                result = "tie";
                break;
            case 'paper':
                // return "You win! Paper beats rock";
                result = "win";
                break;
            case 'scissors':
                // return "You lose! Rock beats scissors";
                result = "lose";
        }
    }
    else if (computerChoice === 'paper') {
        switch (playerChoice) {
            case 'paper':
                // return "Tie"; 
                result = "tie"
                break;
            case 'scissors':
                // return "You win! Scissors beat rock"; 
                result = "win";
                break;
            case 'rock':
                // return "You lose! Paper beats rock";  
                result = "lose";
        }
    }
    else if (computerChoice === 'scissors') {
        switch (playerChoice) {
            case 'scissors':
                // return "Tie";
                result = "tie"
                break;
            case 'rock':
                // return "You win! Rock beats scissors";
                result = "win";
                break;
            case 'paper':
                // return "You lose! Scissors beat paper";
                result = "lose";
        }
    }
    else {return "Input is invalid"}

if (result === "win") {
    const resultDisplay = document.querySelector(".result");
    resultDisplay.textContent = "You win";
    playerTally++;
    console.log(playerTally)
}
else if (result === "lose") {
    const resultDisplay = document.querySelector(".result");
    resultDisplay.textContent = "You lose";
    computerTally++;
}
else if (result === "tie") {
    const resultDisplay = document.querySelector(".result");
    resultDisplay.textContent = "It's a tie"
}
const finalResult = document.querySelector(".finalResult");

if (playerTally === 5) {
    finalResult.textContent = "Player wins!"
    playerTally = 0;
    computerTally = 0;
}
else if (computerTally === 5) {
    finalResult.textContent = "Computer wins!"
    playerTally = 0;
    computerTally = 0;
}
}


//game()
//use prompt() to get the playerChoice, and use the function computerPlay to get computerChoice
//for the counter you can check if the returned string contains "Tie", "win", or "lose"

/*const game =  () => {
 //initialize variables in loop since it needs to be reassigned each time. Use let, not const.
 let p = 0; //counters for who won
 let c = 0;
    for (let i=0; i < 5; i++) {
        let computerChoice = computerPlay();
        let playerChoice = prompt();
        let result = playRound(playerChoice, computerChoice);
        console.log(result)
        if (result.includes('win')) {
            p++;
        }
        else if (result.includes('lose')) {
            c++;
        }
    }
    
    if (p > c) {
        console.log('Congratulations, you win!')
    }
    else if ( p < c) {
        console.log('Too bad, you lose.')
    }
    else if (p === c) {
        console.log("It's a tie")
    }
} */


const rock = document.querySelector(".rock")

rock.addEventListener('click', function() {
    playRound('rock');
})

const paper = document.querySelector(".paper")

paper.addEventListener('click', function() {
    playRound('paper');
})

const scissors = document.querySelector(".scissors")

scissors.addEventListener('click', function() {
    playRound('scissors');
})


