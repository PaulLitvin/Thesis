let objectCalc = {};

function calc() {

    let popupCalc = document.querySelector('.popup_calc'),
        popupCalcBtn = document.querySelectorAll('.popup_calc_btn');

    popupCalcBtn.forEach(element =>
        element.addEventListener('click', function (event) {
            event.preventDefault();
            popupCalc.style.display = "block";
        })
    );

    //Calculator prevue

    let balconIcons = document.getElementsByClassName('balcon_icons')[0],
        balconImages = balconIcons.querySelectorAll('a'),
        bigImgClass = document.getElementsByClassName('big_img')[0],
        bigImg = bigImgClass.querySelectorAll('img');

    balconImages.forEach((element, i) => {
        if (element.classList.contains('type1')) {
            objectCalc.balcon = 'type1';
        }
        element.addEventListener('click', function (event) {
            event.preventDefault();

            if (element.classList.contains('type' + (i + 1))) {
                objectCalc.balcon = 'type' + (i + 1);
            }

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
        popupCalcButton = document.querySelector('.popup_calc_button'),
        popupCalcProfile = document.querySelector('.popup_calc_profile'),
        popupCalcProfileButton = document.querySelector('.popup_calc_profile_button'),
        popupCalcEnd = document.querySelector('.popup_calc_end'),
        customCheckbox = document.querySelectorAll('.checkbox');

    customCheckbox.forEach((element, i) =>
        element.addEventListener('click', function () {
            if (element.checked) {
                if (i == 0) {
                    customCheckbox[1].checked = false;
                    objectCalc.cold = true;
                    objectCalc.warm = false;
                } else {
                    customCheckbox[0].checked = false;
                    objectCalc.cold = false;
                    objectCalc.warm = true;
                }
            }
        })
    );

    //Form validation
    formControl.forEach((element) => {
        if (element.id == 'view_type') {
            objectCalc.vitreous = element.value;
        }
        element.addEventListener('input', function () {

            if (element.id == 'width' || element.id == 'height') {
                if (isNaN(element.value)) {
                    element.value = '';
                }

                if (element.id == 'width') {
                    objectCalc.width = element.value;
                }

                if (element.id == 'height') {
                    objectCalc.height = element.value;
                }
            }

            if (element.id == 'view_type') {
                objectCalc.vitreous = element.value;
            }
        });
    });

    popupCalcButton.addEventListener('click', function () {
        popupCalc.style.display = 'none';
        popupCalcProfile.style.display = 'block';

    });

    popupCalcProfileButton.addEventListener('click', function () {
        popupCalcProfile.style.display = 'none';
        popupCalcEnd.style.display = 'block';

    });

    //Checked only one checkbox

    return objectCalc;
}

module.exports = calc;