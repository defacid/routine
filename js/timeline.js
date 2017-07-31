function moveMarker() {
    var date = new Date();
    var hh = date.getHours();
    if (hh < 10) hh = "0" + hh;
    var mm = date.getMinutes();
    if (mm < 10) mm = "0" + mm;
    var time = date.getTime();

    document.getElementById("timeStamp").innerHTML = "" + hh + ":" + mm;
    //document.getElementById("timeStamp").innerHTML = "" + time/1000 % 86400 / 86400 * 100;

    var markerPosition = time/1000 % 86400 / 86400 * 100;

    document.getElementById("marker").style.left = markerPosition + "vw";
}

setInterval(moveMarker, 100);