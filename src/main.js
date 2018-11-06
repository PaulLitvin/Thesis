/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let popup = __webpack_require__(/*! ./modules/popup.js */ "./src/modules/popup.js"),
        form = __webpack_require__(/*! ./modules/form.js */ "./src/modules/form.js"),
        calc = __webpack_require__(/*! ./modules/calc.js */ "./src/modules/calc.js"),      
        tabs = __webpack_require__(/*! ./modules/tabs.js */ "./src/modules/tabs.js"),
        timer = __webpack_require__(/*! ./modules/timer.js */ "./src/modules/timer.js"),
        gallery = __webpack_require__(/*! ./modules/gallery.js */ "./src/modules/gallery.js");
       
       
        popup();
        form();
        calc();
        tabs();
        timer();
        gallery(); 
              
});





/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

let objectCalc = {};

function calc() {

    let popupCalc = document.querySelector('.popup_calc'),
        popupCalcBtn = document.querySelectorAll('.popup_calc_btn');

    popupCalcBtn.forEach(element =>
        element.addEventListener('click', function (event) {
            event.preventDefault();
            popupCalc.style.display = 'block';
        })
    );

    //Calculator prevue 

    let balconyIcons = document.getElementsByClassName('balcon_icons')[0],
        balconyImages = balconyIcons.querySelectorAll('a'),
        bigImgClass = document.getElementsByClassName('big_img')[0],
        bigImg = bigImgClass.querySelectorAll('img');

    balconyImages.forEach((element, i) => {
        if (element.classList.contains('type1')) {
            objectCalc.balcony = 'type1';
        }
        element.addEventListener('click', function (event) {
            event.preventDefault();

            if (element.classList.contains('type' + (i + 1))) {
                objectCalc.balcony = 'type' + (i + 1);
            }

            for (let j = 0; j < balconyImages.length; j++) {
                if (j == i) {
                    element.children[0].style.width = '25%';
                }
                if (j != i) {
                    balconyImages[j].children[0].style.width = '20%';
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
                if (isNaN(element.value) || element.value == 0) {
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
        if(objectCalc.width != undefined && objectCalc.width != ""  && objectCalc.height != undefined && objectCalc.height != ""){
                popupCalc.style.display = 'none';
             popupCalcProfile.style.display = 'block';
        }
    });

    popupCalcProfileButton.addEventListener('click', function () {
        popupCalcProfile.style.display = 'none';
        popupCalcEnd.style.display = 'block';

    });

    //Checked only one checkbox

    return objectCalc;
}

module.exports = calc;

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

let objCalc = __webpack_require__(/*! ./calc.js */ "./src/modules/calc.js");

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

                    let objC = objCalc();
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');


                    formData.forEach(function (value, key) {
                        objC[key] = value;
                    });
                    let json = JSON.stringify(objC);

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
                    Object.keys(objC).forEach(function (key) {
                        delete objC[key];
                    });
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

/***/ }),

/***/ "./src/modules/gallery.js":
/*!********************************!*\
  !*** ./src/modules/gallery.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function gallery() {
    let worksImg = document.querySelectorAll('.fadeIn'),
        img = document.createElement('img');
        gallaryBlock = document.createElement('div');
        gallaryBlock.classList.add('gallery');
        document.body.appendChild(gallaryBlock);

    worksImg.forEach((element) => {
        element.addEventListener('click', function (event) {
            if(event.target.classList.contains('works-img') || event.target.classList.contains('lupa')){
                event.preventDefault();
                imgSetAttributes(event);
                showImg();
            }
            
        });
    });

    function imgSetAttributes(event) {
        img.classList.add('gallery-img');
        img.setAttribute('src', event.target.parentNode.attributes[0].value);
    }

    function showImg() {
        gallaryBlock.appendChild(img);
        gallaryBlock.style.display = 'block';
    }

    gallaryBlock.addEventListener('click', function (event) {
        if (!event.target.classList.contains('gallery-img')) {
            gallaryBlock.style.display = 'none';
        }
    });
}

module.exports = gallery;

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {

    //Balcon tabs
    let tab = document.querySelectorAll('.glazing_block'),
        glazing = document.querySelector('.glazing'),
        tabContent = document.querySelectorAll('.glazing-tab');

    function hideTabContent(a) {
        for (let i = a; i < tab.length; i++) {
            tab[i].children[1].classList.remove('active');
            tabContent[i].style.display = 'none';
        }
    }

    hideTabContent(1);

    function tabActive(i) {
        if (!tab[i].children[1].classList.contains('active')) {
            tab[i].children[1].classList.add('active');
            tabContent[i].style.display = 'block';
        }

    }

    glazing.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('glazing_block') || target.parentNode.classList.contains('glazing_block')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i] || target == tab[i].children[0] || target == tab[i].children[1]) {
                    hideTabContent(0);
                    tabActive(i);
                    break;
                }
            }
        }
    });

    //Balcon decoration tabs
    let tabDecoration = document.querySelectorAll('.decoration_item'),
        decoration = document.querySelector('.decoration'),
        decorationContentItem = document.querySelectorAll('.decoration_content_item');
    function hideTabDecorationContent(a) {
        for (let i = a; i < tabDecoration.length ; i++) {
            tabDecoration[i].children[0].classList.remove('after_click');
            decorationContentItem[i].style.display = 'none';
        }
    }
    hideTabDecorationContent(1);
    
    function tabDecorationActive(i) {
        if (!tabDecoration[i].children[0].classList.contains('after_click')) {
            tabDecoration[i].children[0].classList.add('after_click');
            decorationContentItem[i].style.display = 'block';
        }

    }
    
    decoration.addEventListener('click', function (event) {
        let target = event.target;
        if (target.parentNode.classList.contains('decoration_item') || target.parentNode.classList.contains('no_click')) {
            for (let i = 0; i < tabDecoration.length; i++) {
                if (target == tabDecoration[i].children[0] || target == tabDecoration[i].children[0].children[0]) {
                    hideTabDecorationContent(0);
                    tabDecorationActive(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    let deadLine = '2019-07-4';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.ceil((t / (1000 * 60 * 60))%24),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
            'days': days,
        };
    }

    function setClock(endtime) {
        let days1 = document.querySelector('.days1'),
            days2 = document.querySelector('.days2'),
            hours1 = document.querySelector('.hours1'),
            hours2 = document.querySelector('.hours2'),
            minutes1 = document.querySelector('.minutes1'),
            minutes2 = document.querySelector('.minutes2'),
            seconds1 = document.querySelector('.seconds1'),
            seconds2 = document.querySelector('.seconds2');

        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            let day = addZero(t.days),
                hour = addZero(t.hours),
                minute = addZero(t.minutes),
                second = addZero(t.seconds);

            days1.textContent = day.num1;
            days2.textContent = day.num2;

            hours1.textContent = hour.num1;
            hours2.textContent = hour.num2;

            minutes1.textContent = minute.num1;
            minutes2.textContent = minute.num2;

            seconds1.textContent = second.num1;
            seconds2.textContent = second.num2;

            if (t.total <= 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                days.textContent = '00';
                clearInterval(timeInterval);
            }
        }

        function addZero(time) {
            if (time < 10) {
                time = '0' + time;
            }

            if (time > 99) {
                time = 99;
            }

            time += '';
            return {
                num1: time.charAt(0),
                num2: time.charAt(1)
            };
        }

    }

    setClock(deadLine);
}
module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map