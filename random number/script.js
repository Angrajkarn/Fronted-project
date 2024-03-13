const guessSubmit = document.querySelector('.guess-submit');
const message = document.querySelector('.message');

let attempts = 0;
let previousGuesses = [];

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
  const userGuess = parseInt(guessField.value);
  
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    setMessage('Invalid guess. Please enter a number between 1 and 100.');
    return;
  }
  
  attempts++;
  previousGuesses.push(userGuess);
  
  if (userGuess === randomNumber) {
    setMessage(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`);
    gameOver();
  } else if (attempts === 10) {
    setMessage(`Game over! The correct number was ${randomNumber}.`);
    gameOver();
  } else {
    const hint = userGuess < randomNumber ? 'too low' : 'too high';
    setMessage(`Wrong guess! Try again. Your guess is ${hint}. (Attempts: ${attempts})`);
  }
  
  guessField.value = '';
  guessField.focus();
}

function setMessage(msg) {
  message.textContent = msg;
}

function gameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
}
