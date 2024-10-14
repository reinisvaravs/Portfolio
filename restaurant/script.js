// Highlights current day in Darba Laiks
document.querySelector(`#d${(new Date()).getDay()}`).style.fontWeight = "900"


document.querySelector("body").onscroll = function() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("hero");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}