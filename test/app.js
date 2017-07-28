// INITIALISATION
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
    /* es6 () => {}  es5 function(){} */
    /* `` pour appeler une variable $(currentLevel)*/
    // API
    /* transforme la requete en api json a voir */
    /* IMAGES recupere ce que il ta sur words.js */
    const wordObj = words[currentLevel - 1];
    if (typeof wordObj === 'undefined') {
        return
    }
    console.log(wordObj.words);

    wordObj.imgs.forEach((src, index) => {
        document.getElementsByTagName('img')[index].src = src;
        console.log("image insert");
    });

    import letters, lettersLenght, rmChild, whiles from 'letter';
    import attachKeypressLetter, attachClickLetter from 'event';
    import checkAnswer, attachEvents, showModal from 'answere';

}
attachEvents();
buildLevel();