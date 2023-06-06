let word = "hangman";
let guessedLetters = [];
let incorrectGuesses = 0;
const maxIncorrectGuesses = 0;
let progress = "";








function guess() {
    let guessedLetter = myInput.value;
    output.textContent = guessedLetter;
}


myButton.onclick = guess;


