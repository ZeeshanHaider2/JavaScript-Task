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

//Assignment (Mathematical Shapes):
//a. Write a JavaScript program to find the diagonal of a square where the length of each side is 9.

let diagonalSquare = (num) => num * Math.sqrt(2).toFixed(2);

console.log(
  "The diagonal of square with the length of 9 each side is :" +
    diagonalSquare(9)
);

//b. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.

const areaValue = (q, w, e) => {
  let peri = (q + w + e) / 2;

  let result = Math.sqrt(peri * (peri - q) * (peri - w) * (peri - e));
  return result;
};
console.log(
  "Area of Triangle using Heron's Formula is " + areaValue(5, 6, 7).toFixed(2)
);

//c. Write a JavaScript program to find the surface area of a circle whose radius is 4.

const pi = Math.PI;

let areaCircle = (r) => {
  return pi * Math.pow(r, 2);
};
console.log("Surface Area of the Circle is : " + areaCircle(4).toFixed(2));

//d. Write a JavaScript program to find the circumferencee area of a circle whose radius is 4.

let circumCircle = (r) => {
  return 2 * pi * r;
};

console.log(
  `Circumference of the Circle with radius is :`,
  circumCircle(3).toFixed(2)
);

//Assignment (Conditional Statements & Loops):
//a) Write a JavaScript program that accepts two integers and displays the larger of the two.

let bigger = (x, y) => (x > y) ? x : y ;

console.log("the larger integer is :" + bigger(49,38));

//b) Write a JavaScript program that checks whether an integer is an even or an odd number.

let evenOdd = (x) => (x % 2 === 0 ? "even" : "odd");

console.log("The entered number is : " + evenOdd(92));



