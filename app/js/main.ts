function getOrdinalNum(n: any) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}

var today = new Date();
var time = today.getHours()  //time HH:MM
var timeMinutes = today.getMinutes()
timeMinutes = ( timeMinutes < 10 ? "0" : "" ) + timeMinutes
var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM"
var currentHours = today.getHours()

currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours
currentHours = ( currentHours == 0 ) ? 12 : currentHours

var time2 = currentHours + ":" + timeMinutes
var date = getOrdinalNum(today.getDate()) //date x + ordinal number (th)

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.querySelector('#date').innerHTML = monthNames[today.getMonth()] + ' ' + date

document.querySelector('#time').innerHTML = time2 + ' ' + timeofDay

var hour = today.getHours()
if (hour >= 08 && hour <= 11) {
    document.querySelector('#greeting').innerHTML = 'Good Morning.'
} else if (hour >= 12 && hour <= 17){
    document.querySelector('#greeting').innerHTML = 'Good Afternoon.'
} else {
    document.querySelector('#greeting').innerHTML = 'Good Evening.'
}
