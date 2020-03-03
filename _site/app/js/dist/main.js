function getOrdinalNum(n) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}

function updateTime(){
    var today = new Date();
    var time = today.getHours(); //time HH:MM
    var timeMinutes = today.getMinutes(); //minutes variable
    timeMinutes = ( timeMinutes < 10 ? "0" : "" ) + timeMinutes;
    var timeOfDay = (time < 12) ? "AM" : "PM";
    var time_hour = today.getHours();
    time_hour = ( time_hour > 12 ) ? time_hour - 12 : time_hour;
    time_hour = ( time_hour == 0 ) ? 12 : time_hour;

    var time2 = time_hour + ":" + timeMinutes + " " + timeOfDay;

    var date = getOrdinalNum(today.getDate()); //date x + ordinal number (th)
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.querySelector('#date').innerHTML = monthNames[today.getMonth()] + ' ' + date;
    document.querySelector('#time').innerHTML = time2;
    var hour = today.getHours();
    if (hour >= 05 && hour <= 11) {
        document.querySelector('#greeting').innerHTML = 'Good Morning.';
    }
    else if (hour >= 12 && hour <= 17) {
        document.querySelector('#greeting').innerHTML = 'Good Afternoon.';
    }
    else {
        document.querySelector('#greeting').innerHTML = 'Good Evening.';
    }
}

setInterval(updateTime, 1000);

//<body onload="updateTime()">
