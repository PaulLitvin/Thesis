window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let popup = require('./modules/popup.js'),
        form = require('./modules/form.js'),
        calc = require('./modules/calc.js'),      
        tabs = require('./modules/tabs.js'),
        timer = require('./modules/timer.js'),
        gallery = require('./modules/gallery.js');
       
        popup();
        form();
        calc();
        tabs();
        timer();
        gallery();
});
