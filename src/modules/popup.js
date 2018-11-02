function popupModule() {

    let popup = document.querySelector('.popup'),
        popupEngineer = document.querySelector('.popup_engineer');

    document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('header_btn')) {
            popupEngineer.style.display = "block";
        } else if (event.target.classList.contains('phone_link')) {
            event.preventDefault();
            popup.style.display = "block";
        } else if (event.target.classList.contains('popup')) {
            popup.style.display = "none";
        } else if (event.target.classList.contains('popup_engineer')) {
            popupEngineer.style.display = "none";
        } else if (event.target.parentNode.classList.contains('popup_close')) {
            popup.style.display = "none";
            popupEngineer.style.display = "none";
        }
    });
}

module.exports = popupModule;