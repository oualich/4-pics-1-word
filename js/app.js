/* es6 () => {}  es5 function(){} */
/* `` pour appeler une variable $(currentLevel)*/
// INITIALISATION
let result = '';
let selectedWord = '';
let currentLevel = 1;
let shuffledLetters = [];
let maxLettersIndex = 0;

const mysteryEl = document.getElementsByClassName('mystery')[0];
// MAIN
// const mysteryEl = document.getElementsByTagName('form')[0];

const buildLevel = (isReshuffle = true) => {
    /* reset */
    result = '';
    const titleEl = document.getElementsByClassName('level')[0];
    titleEl.textContent = `Niv. ${currentLevel}`;

    // API
    /* transforme la requete en api json a voir */

    // IMAGES recupere ce que il ta sur words.js 
    const wordObj = words[currentLevel - 1];
    if (typeof wordObj === 'undefined') {
        return;
    }

    wordObj.imgs.forEach((src, index) => {
        document.getElementsByTagName('img')[index].src = src;
        console.log("image insert");
    });

    selectedWord = wordObj.word;

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
};
// EVENT lISTERNERS
/* 26 lettre  = 90 charCodeAt */
const attachKeypressLetter = (e) => {
    if (e.key.toUpperCase().charCodeAt() >= 65 &&
        e.key.toUpperCase().charCodeAt() <= 90) {

    }
};

const attachClickLetter = (e) => {
    const letterEl = e.target;
    selectLetter(letterEl);
};

const selectLetter = (letterEl) => {
    const letter = letterEl.textContent;

    if (letterEl.style.opacity === '0') {
        return;
    }
    letterEl.style.opacity = 0;
    let isValueEntered = false;
    mysteryEl.childNodes.forEach((input, index) => {
        if (isValueEntered === false) {
            if (input.textContent === '-') {
                input.textContent = letter;
                isValueEntered = true;
                result += letter;
                if (index === maxLettersIndex) {
                    checkResult();
                }
            }
        }
    });
};
let button = document.querySelector(".tester"); 
button.addEventListener("click", function() {
    buildLevel(false);
});
// ANSWERE = VERIFIE
const checkResult = () => {
    console.log('result:', result);
    console.log('selectedWord:', selectedWord);
    if (result === selectedWord) {
        // alert('SUCCESS');
        showModal({ success: true });
        currentLevel++;
        buildLevel();
    } else {
        // alert('ERROR');
        showModal({ success: false });
        buildLevel(false);
    }
};

const attachEvents = () => {
    document.getElementsByTagName('body')[0].addEventListener('keypress', attachKeypressLetter);
    for (let i = 0; i < 12; i++) {
        document.getElementsByTagName('button')[i].addEventListener('click', attachClickLetter);
    }
}

// active le modal 
const showModal = ({ success } = {}) => {
    let title = 'ERROR';
    let panelClass = 'panel-danger';
    let text = "You didn't find the right word";
    if (success === true) {
        title = 'SUCCESS';
        panelClass = 'panel-success';
        text = "Yeah! Let's go to the next level";
    }

    $('#result').on('show.bs.modal', () => {
        const modal = $('#result');
        console.log(modal);
        const panel = modal.find('.panel');
        const panelHeading = modal.find('.panel-heading');
        const panelBody = modal.find('.panel-body');

        panel.removeClass('panel-success')
        panel.removeClass('panel-danger')
        panel.addClass(panelClass);

        panelHeading.text(title);
        panelBody.text(text);

        setTimeout(() => {
            modal.modal('hide');
        }, 2000);
    });
    $('#result').modal();
}

(() => {
    attachEvents();
    buildLevel();
})();