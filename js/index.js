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
            let regExp = new RegExp();
            regExp = /[0-9]/gi;
            element.addEventListener('input', function (event) {
                if (element.name === "user_phone") {
                    if (event.data.match(regExp) == undefined) {
                        element.value = '';
                    } else {}
                } 
            });
        });

        popupForm.forEach(element => {
            element.addEventListener('submit', function (event) {

                event.preventDefault();
                element.appendChild(statusMessage);
                let formData = new FormData(element);
                console.log(element)
    
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

});