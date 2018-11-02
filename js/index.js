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

    //Form

    let message = {
        loading: 'Идет отправка',
        success: 'Отправлено!',
        failure: 'Ошибка'
    };

    let popupForm = document.querySelectorAll('form'),
        inputPopupForm = document.querySelectorAll('input'),
        statusMessage = document.createElement('div');

        inputPopupForm.forEach((element) => {
            element.addEventListener('input', function (event) {
                if (element.name === "user_phone") {
                    if ( isNaN(event.data)) {
                        element.value = '';
                    } 
                } 
            });
        });

        popupForm.forEach(element => {
            element.addEventListener('submit', function (event) {

                event.preventDefault();
                element.appendChild(statusMessage);
                let formData = new FormData(element);
                
    
                function postData(data) {
    
                    return new Promise(function (resolve, reject) {
                        let request = new XMLHttpRequest();
    
                        request.open('POST', 'server.php');
                        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                        
                        let obj = {};
                        formData.forEach(function (value, key) {
                            obj[key] = value;
                        });
                        let json = JSON.stringify(obj);
                        
                        request.onreadystatechange = function () {
                            if (request.readyState < 4) {
                                resolve();
                            } else if (request.readyState === 4) {
                                if (request.status == 200 && request.status < 300) {
                                    resolve();
                                } else {
                                    reject();
                                }
                            }
                        };
                        request.send(json);
                    });
                }
    
                function clearInput() {
                    for (let i = 0; i < inputPopupForm.length; i++) {
                        inputPopupForm[i].value = '';
                    }
                }
    
                postData(formData)
                    .then(() => statusMessage.innerHTML = message.loading)
                    .then(() => {
                        statusMessage.innerHTML = message.success;
                    })
                    .catch(() => statusMessage.innerHTML = message.failure)
                    .then(clearInput);
            });

        });

        //Calc

        //Popup Calculator
        let popupCalc = document.querySelector('.popup_calc'),
            popupCalcBtn = document.querySelectorAll('.popup_calc_btn'),
            popupCalcClose = document.querySelector('.popup_calc_close');

        popupCalcBtn.forEach(element =>
            element.addEventListener('click', function (event) {
                event.preventDefault();
                popupCalc.style.display = "block";
            })
        )
    
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
            p = balconIcons.querySelectorAll('a');
        
});
