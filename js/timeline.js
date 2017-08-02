function moveMarker() {
    var date = new Date();
    var hh = date.getHours();
    if (hh < 10) hh = "0" + hh;
    var mm = date.getMinutes();
    if (mm < 10) mm = "0" + mm;
    var time = date.getTime();

    //var markerPosition = 0;
    var markerPosition = time/100 % 86400 / 86400 * 100;

    document.getElementById("timeStamp").innerHTML = "" + hh + ":" + mm;
    //document.getElementById("timeStamp").innerHTML = markerPosition;

    document.getElementById("marker").style.left = markerPosition + "vw";
}

setInterval(moveMarker, 100);