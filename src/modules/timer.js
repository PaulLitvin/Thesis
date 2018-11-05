function timer() {
    let deadLine = '2019-07-4';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.round((t / (1000 * 60 * 60)) % 24 ),
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
        let timer = document.querySelector('.eTimer'),
            days1 = document.querySelector('.days1'),
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