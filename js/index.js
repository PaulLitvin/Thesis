window.addEventListener('DOMContentLoaded', function () {
    // Modal popup_engineer

    let popapEngineerBtn = document.querySelector('.popup_engineer_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        popupEngeneerClose = document.querySelectorAll('.popup_close');

    popapEngineerBtn.addEventListener('click', function () {
        popupEngineer.style.display = 'block';
    });

    popupEngeneerClose.forEach(element =>
        element.addEventListener('click', function () {
            popupEngineer.style.display = 'none';
        }));

    popupEngineer.addEventListener('click', function (event) {
        if (event.target.className == 'popup_engineer') {
            popupEngineer.style.display = 'none';
        }
    });

    // Modal popup
    let popupPhoneLink = document.querySelectorAll('.phone_link'),
        popup = document.querySelector('.popup');
        popupClose = document.querySelectorAll('.popup_close');

    popupPhoneLink.forEach(element =>
        element.addEventListener('click', function (event) {
            event.preventDefault();
            popup.style.display = "block";
        })
    )

    popupClose.forEach(element =>
        element.addEventListener('click', function () {
            popup.style.display = 'none';
        }));

    popup.addEventListener('click', function (event) {
        if (event.target.className == 'popup') {
            popup.style.display = 'none';
        }
    });

});