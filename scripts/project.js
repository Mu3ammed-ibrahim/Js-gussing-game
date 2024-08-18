const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
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
    playerSelection = prompt("Hurry up warrior press ctrl+shift+i to play we need you to help us defeat Dr strange by guessing a number between 1 and 100");

    if (playerSelection === null) {
      console.log("You have exited the game.");
      return null;
    }

    playerSelection = Number(playerSelection);

    if (!validationPlayerSelection(playerSelection)) {
      console.log(
        "Oops! You have entered invalid input. Please enter a number between 1 and 100."
      );
    }
  } while (!validationPlayerSelection(playerSelection));

  return playerSelection;
};

const checkGuess = (playerSelection, computerSelection) => {
  if (playerSelection > computerSelection) {
    return "Your guess is too high!";
  } else if (playerSelection < computerSelection) {
    return "Your guess is too low!";
  } else {
    return "Congratulations! You have defeated Dr. Strange and guessed the correct number!";
  }
};

const game = () => {
  const playerReady = confirm(
    "Hello warrior, we need your help to beat Dr. Strange by guessing the correct number. Are you up for it?"
  );

  if (!playerReady) {
    const stayOrLeave = confirm(
      "You chose to leave the game. Do you want to exit(Cancle) or stay (ok)?"
    );

    if (stayOrLeave) {
      console.log("Glad you're staying! Let's start the game.");
    } else {
      console.log("You have exited the game.");
      return;
    }
  }

  const computerSelection = generateRandomNumber();
  let attempts = 0;
  let playerWon = false;

  while (attempts < 10 && !playerWon) {
    const playerSelection = getPlayerGuess();

    if (playerSelection === null) {
      console.log("Game exited. Thanks for playing!");
      return;
    }

    attempts++;

    const result = checkGuess(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("Congratulations")) {
      playerWon = true;
    }
  }

  if (!playerWon) {
    console.log(
      `Game over! You've used all 10 attempts. The correct number was ${computerSelection}.`
    );
  }

  console.log(`Number of attempts: ${attempts}`);
};

game();
