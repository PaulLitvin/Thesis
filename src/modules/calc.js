function calc() {
    let popupCalc = document.querySelector('.popup_calc'),
        popupCalcBtn = document.querySelectorAll('.popup_calc_btn'),
        popupCalcClose = document.querySelector('.popup_calc_close');

    popupCalcBtn.forEach(element =>
        element.addEventListener('click', function (event) {
            event.preventDefault();
            popupCalc.style.display = "block";
        })
    );

    popupCalcClose.addEventListener('click', function () {
        popupCalc.style.display = 'none';
    });

    popupCalc.addEventListener('click', function (event) {
        if (event.target.className == 'popup_calc') {
            popupCalc.style.display = 'none';
        }
    });

    //Calculator prevue

    let balconIcons = document.getElementsByClassName('balcon_icons')[0],
        balconImages = balconIcons.querySelectorAll('a'),
        bigImgClass = document.getElementsByClassName('big_img')[0],
        bigImg = bigImgClass.querySelectorAll('img');

    balconImages.forEach((element, i) => {

        element.addEventListener('click', function (event) {
            event.preventDefault();
            for (let j = 0; j < balconImages.length; j++) {
                if (j == i) {
                    element.children[0].style.width = '25%';
                }
                if (j != i) {
                    balconImages[j].children[0].style.width = '20%';
                }
            }

            bigImg.forEach((elem, key) => {
                if (i == key) {
                    elem.style.display = 'inline-block';
                }
                if (i != key) {
                    elem.style.display = "none";
                }
            });
        });

    });

    // Input

    let formControl = document.querySelectorAll('.form-control'),
        popupCalcButton = document.querySelector('.popup_calc_button');

    //Form validation
    formControl.forEach(element =>
        element.addEventListener('input', function () {
            if (isNaN(element.value)) {
                element.value = '';
            }
        })
    );






}

module.exports = calc;
