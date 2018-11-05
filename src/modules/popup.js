function popupModule() {

    let popup = document.querySelector('.popup'),
        popupEngineer = document.querySelector('.popup_engineer'),
        popupCalc = document.querySelector('.popup_calc'),
        popupCalcProfile = document.querySelector('.popup_calc_profile'),
        popupCalcEnd = document.querySelector('.popup_calc_end');

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
        } else if (event.target.parentNode.classList.contains('popup_calc_close')) {
            popupCalc.style.display = 'none';
        } else if (event.target.parentNode.classList.contains('popup_calc_profile_close')) {
            popupCalcProfile.style.display = 'none';
        } else if (event.target.parentNode.classList.contains('popup_calc_end_close')) {
            popupCalcEnd.style.display = 'none';
        }
    });

    let timeOut = setTimeout(function () {
        popup.style.display = 'block';
    }, 1000 * 60);
}

module.exports = popupModule;