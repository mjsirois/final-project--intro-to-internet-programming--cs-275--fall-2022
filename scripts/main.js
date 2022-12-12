window.onload = () => {
    let showModal = document.getElementById(`open-modal`);
    let modalBox = document.getElementsByClassName(`modal-panel`)[0];
    let showMenu = document.getElementById(`open-menu`);
    let menu = document.getElementsByClassName(`menu-box`)[0];

    showModal.addEventListener(`click`, () => {
        modalBox.style.display = `block`;
    });

    window.addEventListener(`click`, (exit) => {
        if(exit.target === modalBox) {
            modalBox.style.display = `none`;
        }
    });

    document.addEventListener(`keydown`, (esc) => {
        if(esc.key === `Escape`) {
            modalBox.style.display = `none`;
        }
    });

    showMenu.addEventListener(`click`, () => {
        menu.classList.toggle(`show`);
    });
};
