if (document.addEventListener) { 
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 800);

}

var x = 0;

var titleText = ["Paint","Pain","Pai", "Pa", "P", "Pa","Pai","Pain"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}