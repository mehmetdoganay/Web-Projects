
function dateTime () {
    let time = new Date()

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    if(hour < 10) {
        hour = "0" + hour;
    } 
    else if (minute < 10) {
        minute = "0" + minute
    }

    else if (second < 10 ) {
        second = "0" + second
    }

    document.querySelector("#hour").innerHTML = hour
    document.querySelector("#minute").innerHTML = minute
    document.querySelector("#second").innerHTML = second
    
    setTimeout("dateTime()", 1000)
}

dateTime()

