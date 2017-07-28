    export const attachKeypressLetter = (e) => {
        if (e.key.toUpperCase().charCodeAt() >= 65 &&
            e.key.toUpperCase().charCodeAt() <= 90) {

        }
    };

    export const attachClickLetter = (e) => {
        const letterEl = e.target;
        selectLetter(letterEl);
    };
    export const selectLetter = (letterEl) => {
        const letter = letterEl.textContent;
        if (letterEl.style.opacity == '0') {
            return;
        }
        letterEl.style.opacity = 0;
        let isValueEntered = false;
        mysteryEL.childNodes.forEach((input, index) => {
            if (isValueEntered === false) {
                if (input.textContent === '-') {
                    input.textContent = letter;
                    isValueEntered = true;
                    answer += letter;
                    if (index === maxLettersIndex) {
                        checkAnswer();
                    }
                }
            }
        });
    };