window.onload = () => {
    // Retrieving element for the open modal button
    let showModal = document.getElementById(`open-modal`);
    // Retrieving the modal panel class (the entire box)
    let modalBox = document.getElementsByClassName(`modal-panel`)[0];
    //Retrieving element for the open menu button
    let showMenu = document.getElementById(`open-menu`);
    // Retrieving nav with it's first element
    let menu = document.getElementsByClassName(`menu-box`)[0];

    // Event listener for checking a click on the open modal button
    showModal.addEventListener(`click`, () => {
        modalBox.style.display = `block`;
    });

    // If anywhere else but the modal itself on the view port is clicked, the modal closes
    window.addEventListener(`click`, (exit) => {
        if(exit.target === modalBox) {
            modalBox.style.display = `none`;
        }
    });

    // If escape key is pressed, the modal closes if open
    document.addEventListener(`keydown`, (esc) => {
        if(esc.key === `Escape`) {
            modalBox.style.display = `none`;
        }
    });

    // Clicking on the open menu button adds or removes "show" class
    showMenu.addEventListener(`click`, () => {
        menu.classList.toggle(`show`);
    });
};
