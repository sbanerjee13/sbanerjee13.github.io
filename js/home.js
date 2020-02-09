function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var en = 'am';

    if(h > 12){
        en = 'pm';
    }
    if(h > 12){
        h = h - 12;
    }
    if(h == 0){
        h = 12;
    }

    var day = today.getDate();

    var month = today.getMonth()+1;

    var dayOfTheMonth = today.getDate();

    var year = today.getFullYear();

    document.getElementById('clock').innerHTML = month + "/" + day + "/" + year +
    " " + h + ":" + m + en + " " + "[pst]";
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
