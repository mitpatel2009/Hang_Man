let word = "hangman";
let word_length = word.length;
let guessedLetters = [];
let incorrectGuesses = 0;
const maxIncorrectGuesses = 6;
let progress = Array(word_length).fill("_");


function guess() {
    let guessedLetter = myInput.value;
    output.textContent = guessedLetter;
    if (!guessedLetters.includes(guessedLetter)) {
            guessedLetters.push(guessedLetter);
            if (word.includes(guessedLetter))
            for (let i = 0; i < word_length; i++) {
                if (word [i] === guessedLetter) {
                    progress[i] = guessedLetter;
                }
                
            }
                else {
                    incorrectGuesses++;
                    hangmanImage.src = "Images/costume"+ eval(incorrectGuesses+2) + ".svg";
                    if (incorrectGuesses === maxIncorrectGuesses) {
                        output.textContent = "You Lose !";
                        myButton.disabled = true;
                }
                
        }
        myProgress.textContent = progress.join(""); 
        myInput.value = "";
        myInput.focus();

        //checking wether we won
        if(word === progress.join("")) {
            output.textContent = "You Win !";
            myButton.disabled = true;
        }
    }
    else {
        output.textContent = "You havve already guessed that before";
    }




    
 
}

myProgress.textContent = progress.join("");
myButton.onclick = guess;

