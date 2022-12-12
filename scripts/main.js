window.onload = () => {
    let showModal = document.getElementById(`start-modal`);
    let modalBox = document.getElementsByClassName(`modal-panel`)[0];

    showModal.addEventListener(`click`, () => {
        modalBox.style.display = `block`;
    });

    window.addEventListener(`click`, (exit) => {
        if (exit.target === modalBox) {
            modalBox.style.display = `none`;
        }


    });


};
