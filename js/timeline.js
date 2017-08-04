function moveMarker() {
    var date = new Date();
    var hh = date.getHours();
    if (hh < 10) hh = "0" + hh;
    var mm = date.getMinutes();
    if (mm < 10) mm = "0" + mm;
    var time = date.getTime();

    //var markerPosition = 0;
    var markerPosition = (time/1000 - date.getTimezoneOffset()*60) % 86400 / 86400 * 100;

    document.getElementById("timeStamp").innerHTML = "" + hh + ":" + mm;
    //document.getElementById("timeStamp").innerHTML = markerPosition;

    document.getElementById("marker").style.left = markerPosition + "vw";
}

moveMarker();
setInterval(moveMarker, 1000);

//NOTES
//Cards fall to the bottom after their time passes for the day
//Exclamation marker on/next to cards where the time has passed but the day hasn't ended
//Reset streak for cards that haven't been completed in the time frame
//Can set up "reset marker" to denote when the day should end and modify it in settings (helpful for night workers)