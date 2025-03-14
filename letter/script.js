// Initialize the current letter index
let currentLetter = 1;
const totalLetters = 4;

// Function to display the current letter and hide others
function showLetter(letterNumber) {
  for (let i = 1; i <= totalLetters; i++) {
    const letter = document.getElementById(`letter${i}`);
    if (i === letterNumber) {
      letter.style.display = 'block';
    } else {
      letter.style.display = 'none';
    }
  }
}

// Next Button functionality
document.getElementById('next-button').addEventListener('click', function () {
  currentLetter = (currentLetter % totalLetters) + 1;
  showLetter(currentLetter);
});

// Previous Button functionality
document.getElementById('prev-button').addEventListener('click', function () {
  currentLetter = (currentLetter - 2 + totalLetters) % totalLetters + 1;
  showLetter(currentLetter);
});

// Initially show the first letter
showLetter(currentLetter);
