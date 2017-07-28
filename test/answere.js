// ANSWERE = VERIFIE
export const checkAnswer = () => {
    console.log('result:', result);
    console.log('selectedword:', selectedWord);
    if (result === selectedWord) {
        showModal({ succes: true });
        currentLevel++;
        buildLevel();

    } else {
        showModal({ succes: false });
        buildLevel(false);
    }
};
export const attachEvents = () => {
    document.getElementsByTagName('body')[0].addEventListener('keypress', attachKeypressLetter);
    for (let i = 0; i < 12; i++) {
        document.getElementsByTagName('button')[i].addEventListener('click', attachClickLetter);
    }
}

// reponse du resultat
export const showModal = ({ success } = {}) => {
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