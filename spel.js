// Constants
const MAX_TRIES = 6;
const WORDS = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Randomly select a word from the array
const randomIndex = Math.floor(Math.random() * WORDS.length);
const selectedWord = WORDS[randomIndex];

// Initialize variables
let tries = 0;
let guessedLetters = [];
let hiddenWord = '';

// Create the hidden word with underscores
for (let i = 0; i < selectedWord.length; i++) {
  hiddenWord += '_';
}

// Game loop
while (tries < MAX_TRIES && hiddenWord !== selectedWord) {
  // Prompt the user for a letter guess
  const guess = prompt(`Guess a letter (${hiddenWord}):`);

  // Check if the guess is a single letter
  if (guess.length !== 1) {
    alert('Please enter a single letter.');
    continue;
  }

  // Check if the letter has already been guessed
  if (guessedLetters.includes(guess)) {
    alert('You have already guessed that letter.');
    continue;
  }

  // Add the guess to the guessed letters array
  guessedLetters.push(guess);

  // Check if the guess is correct
  let foundMatch = false;
  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === guess) {
      hiddenWord = hiddenWord.substring(0, i) + guess + hiddenWord.substring(i + 1);
      foundMatch = true;
    }
  }

  // Increment the tries if the guess was incorrect
  if (!foundMatch) {
    tries++;
  }
}

// Display the final result
if (hiddenWord === selectedWord) {
  alert(`Congratulations! You won! The word was ${selectedWord}.`);
} else {
  alert(`Sorry, you lost. The word was ${selectedWord}.`);
}