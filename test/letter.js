// LETTERS - INITIALISATION

const letters = [];
selectedWord.split('').forEach((letter) => {
    letters.push(letter);
});

let lettersLength = letters.length;
maxLettersIndex = lettersLength - 1;

// letters remove previous

let rmChild = mysteryEl.firstChild;
while (rmChild) {
    mysteryEl.removeChild(rmChild);
    rmChild = mysteryEl.firstChild;
}

// letters - mystere length
/* créer un p pour chaque lettre */
while (lettersLength > 0) {
    // const container = document.createElement('div');
    // container.className = 'col-xs-1';
    const letterEl = document.createElement('p');
    letterEl.className = 'mystery-box';
    letterEl.textContent = '-';
    // letterEl.maxLength = 1;
    // container.appendChild(letterEl);
    mysteryEl.appendChild(letterEl);

    lettersLength--;
}

// letters - shuffle (melanger)
while (letters.length < 12) {
    letters.push(getRandomLetter());
}
console.log('12 lettre ajouté', letters);

if (isReshuffle === true) {
    shuffle(letters);
    shuffledLetters = letters;
}

shuffledLetters.forEach((letter, index) => {
    const letterEl = document.getElementsByTagName('button')[index];
    letterEl.style.opacity = '1';
    letterEl.textContent = letter;
});