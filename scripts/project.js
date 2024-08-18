// generate a random number between 1 and 100
const generateRandomNumber = () => {
  let computerSelection = Math.floor(Math.random() * 100) + 1;
  return computerSelection;
};

const validationPlayerSelection = (playerSelection) => {
  return (
    Number.isInteger(playerSelection) &&
    playerSelection >= 1 &&
    playerSelection <= 100
  );
};

const getPlayerGuess = () => {
  let playerSelection;

  do {
    playerSelection = +prompt("Enter your guess between 1 and 100");
    if (!validationPlayerSelection(playerSelection)) {
      console.log("Invalid input, please enter a number between 1 and 100");
    }
  } while (!validationPlayerSelection(playerSelection));

  return playerSelection;
};

const checkGuess = (playerSelection, computerSelection) => {
  if (playerSelection > computerSelection) {
    return "Too high!";
  } else if (playerSelection < computerSelection) {
    return "Too low!";
  } else {
    return "Correct!";
  }
};
