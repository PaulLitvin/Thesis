function form() {

    let message = {
        loading: 'Идет отправка',
        success: 'Отправлено!',
        failure: 'Ошибка'
    };

    let popupForm = document.querySelectorAll('form'),
        inputPopupForm = document.querySelectorAll('input'),
        statusMessage = document.createElement('div');

    //Form validation
    inputPopupForm.forEach((element) => {
        element.addEventListener('input', function (event) {
            if (element.name === "user_phone") {
                if (isNaN(event.data) && isNaN(event.target.value)) {
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
}

module.exports = form;