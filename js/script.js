// The game should take two parameters, playerChoice and computerChoice.

// If playerChoice is paper and computerChoice is rock, then the function should
// output "You win! Paper beats rock" in the console

//function playerChoice parameter needs to be case-insensitive. They need to type
//a string to load into the function. function game(playerChoice) {}
// I cam make case-insensitive by taking whatever parameters are inputted and
// toLowerCase it
/* after all that I will need to write a new function with a playRound function
within it. That will need to include a loop of some sort to count rounds. Will also
need to keep score.
Use prompt() to get input from user

END result:
make something that allows the user to play against the computer. The game is
rock paper scissors and it will include 5 rounds. Whoever wins more rounds out of the 5
will be declared the winner.

1. Create a function that randomly outputs 1 of the 3 choices
2. Write a function for a single round --> this takes the two parameters and returns result
    a. //--This will be an intermediate. Will reuse conditions in the final game() function--
        (this function will go into the game function)
    b. need to take the input(of which will be taken in the brackets of said function) and
       make it lower case (done)
        can do this by passing that string through a toLowerCase function. *I should change below IF statements to
        check for playerSelection instead, so that at the end, I can use an else statement that says it is not a valid input
        or for player to check spelling.
    c. figure out how to make conditionals to test who won.
        IF computerSelection === "rock" {
            switch(playerSelection)
            case 'rock' {tie}                   for each, need to "return" to output the results for now.
            case 'paper' {you win!}
            case 'scissors' {you lose}
3. I think I misunderstood and the game() function and the single-round function need to work in conjunction; it
will need to take the output from the unnamed single-round function and store that result somewhere.

For each round I will need to tally who won. How can I do that?
I can use a variable that adds (++) whenever the respective competitor wins.
Can the return function make a more elegant solution?
At the end, I can do a simple comparison, e.g., if p > c then you win!. to output the winner after 5 rds.
**I should remember that each function need only perform one task. Separate the computerPlay() function and variable 
from the others. I should use the computerPlay() to store a variable that can be redeclared probably, i.e., use let.
// write a function that randomly outputs rock, paper, or scissors
*/


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

//computerPlay will return one of the three choices as a string


//testing if computerChoice has stored the right variable. Why does the variable not change if I rerun the function?
//maybe i should make it so that the variable is both declared and stored within the function that needs it**
//oh nevermind I run the playRound function somwhere else and the variables are declared in that function

function playRound(playerChoice, computerChoice){
    const playerChoice2 = playerChoice.toLowerCase()
    if (computerChoice === 'rock') {
        switch (playerChoice2) {
            case 'rock':
                return "Tie";
                break;
            case 'paper':
                return "You win! Paper beats rock";
                break;
            case 'scissors':
                return "You lose! Rock beats scissors";
        }
    }
    else if (computerChoice === 'paper') {
        switch (playerChoice2) {
            case 'paper':
                return "Tie";
                break;
            case 'scissors':
                return "You win! Scissors beat rock";
                break;
            case 'rock':
                return "You lose! Paper beats rock";
        }
    }
    else if (computerChoice === 'scissors') {
        switch (playerChoice2) {
            case 'scissors':
                return "Tie";
                break;
            case 'rock':
                return "You win! Rock beats scissors";
                break;
            case 'paper':
                return "You lose! Scissors beat paper";
        }
    }
    else {return "Input is invalid"}
}


//game()
//use prompt() to get the playerChoice, and use the function computerPlay to get computerChoice
//for the counter you can check if the returned string contains "Tie", "win", or "lose"

const game =  () => {
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
}

/*What went wrong? I expected to have a prompt each time and then the loop would be escaped, but the 
*/













