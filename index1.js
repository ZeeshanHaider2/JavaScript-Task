//ROCK, PAPAER SCISSORS

let humanScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");
const round = document.getElementById("round");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

rock.addEventListener("click", (e) => {
  console.log(determineGameWinner("rock", getcomputerChoice()));

});

paper.addEventListener("click", (e) => {
  console.log(determineGameWinner("paper", getcomputerChoice()));
});

scissors.addEventListener("click", (e) => {
  console.log(determineGameWinner("scissors", getcomputerChoice()));
});

const getcomputerChoice = () => {
  resultt = Math.floor(Math.random() * 3);
  if (resultt === 0) return "rock";
  else if (resultt === 1) return "paper";
  else return "scissors";
};

const determineGameWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) 
  return round.innerText = "Round Tied - O points";

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      lose();
      return round.innerText ="Computer chose Paper, Won this Round";
    } else if (computerChoice === "scissors") {
      win();

      return round.innerText ="Computer chose Scissors, Human Won this Round";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      lose();
      return round.innerText ="Computer chose Scissors, Won this Round";
    } else if (computerChoice === "rock") {
      win();
      return round.innerText ="Computer chose Rock, Human Won this Round";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      // computerScore++;
      lose();
      return round.innerText ="Computer chose Rock, Won this Round";
    } else if (computerChoice === "paper") {
      win();
      return round.innerText ="Computer chose Paper, Human Won this Round";
    }
  }
};

let win = () => {
  humanScore++;
  userScore.innerText = humanScore;
  endGame();
};

let lose = () => {
  computerScore++;
  compScore.innerText = computerScore;
  endGame();
};

let draw = () => {
};

let endGame = () => {
  if (humanScore === 5) {
    result.innerText = "Human Won 5 Rounds First ";
    resetGame(); 
  } else if (computerScore === 5) {
    result.innerText = "Computer Won 5 Rounds First";
    resetGame();
  }
};

let resetGame=()=>{
  humanScore = 0;
  computerScore = 0;
  userScore.innerText = humanScore;
  compScore.innerText = computerScore;
};

reset.addEventListener('click', (e)=>{
  resetResult();
});

let resetResult=()=>{
  result.innerText = "";
  round.innerText = ""
}


  
  

//console.log(determineGameWinner('rock', 'scissors'));

//ROCK, PAPAER SCISSORS using array and Math.random function (only user/computer choices)
/*
let choices  = ['rock', 'paper', 'scissors'];

let validInput = ()=>{

  let input = prompt("Choose rock, paper or scissors");
    choices.includes(input) ?
    console.log ( "you chose " + input):
    console.log("please select correct move");
}
validInput();

let computerPlay = ()=>{
  let random = Math.floor(Math.random()* choices.length);
     console.log("computer chose " + (choices[random]));
  }
  
  computerPlay();
*/

//Assignment (Main JavaScript Project):

/*const playGame = () => {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
  
    const getUserChoice = () => {
      let value = prompt(
        "Enter Your choice to play a 5 Round Game: 1.Rock, 2.Paper 3.Scissors "
      );
      userInput = value.toLowerCase(); //"rOCk" or PAPEr or scissors
  
      if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors"
      ) {
        return userInput;
      } else {
        return (
          userInput +
          " Please correct the spelling or enter Rock,Paper or Scissors to play the game. "
        );
      }
    };
    //console.log(getUserChoice("rock"));
  
  
    const getcomputerChoice = () => {
      result = Math.floor(Math.random() * 3);
      if (result === 0) {
        return "rock";
      } else if (result === 1) {
        return "paper";
      } else {
        return "scissors";
      }
    };
  
  
    const determineGameWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return "The game is a Tie!";
      }
      if (userChoice === "rock") {
        if (computerChoice === "paper") {
          computerScore++;
          return "Computer Won! Paper covers Rock";
        } else if (computerChoice === "scissors") {
          playerScore++;
          return "Player Won! Rock smashes Scissors";
        }
      }
  
      if (userChoice === "paper") {
        if (computerChoice === "scissors") {
          computerScore++;
          return "Computer Won! Scissors cuts Paper";
        } else if (computerChoice === "rock") {
          playerScore++;
          return "Player Won! Paper covers rock!";
        }
      }
  
      if (userChoice === "scissors") {
        if (computerChoice === "rock") {
          computerScore++;
          return "Computer Won! Rock smashes Scissors. ";
        } else if (computerChoice === "paper") {
          playerScore++;
          return "Player Won! Scissors cuts Paper";
        }
      }
    };
  
    
    //using for loop to run 5 rounds of game.
  
    for (let i = 1; i <= 5; i++) {
      const userChoice = getUserChoice();
      const computerChoice = getcomputerChoice();
      round = round + 1;
      
      console.log("Round No: " + round);
      console.log(
        `The player chose ${userChoice} || The computer chose ${computerChoice}`
      );
      console.log("Round " + i +" result:" +
          determineGameWinner(userChoice, computerChoice)
      );
      console.log("Player Score: " + playerScore);
      console.log("Computer Score: " + computerScore);
      console.log("--------------------------------------------");
    }
    console.log("****************** GAME OVER ******************");
  
    console.log("Final Player Score: " + playerScore);
    console.log("Final Computer Score: " + computerScore);
    if (playerScore > computerScore) {
      console.log("HUMAN is Winner");
    } else if (playerScore < computerScore) {
      console.log("COMPUTER is WINNER");
    } else {
      console.log("It's a Tie!");
      console.log("----------------------------------------------");
    }
  };
  
  playGame(); */
