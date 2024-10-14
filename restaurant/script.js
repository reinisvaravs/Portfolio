// Highlights current day in Darba Laiks
document.querySelector(`#d${(new Date()).getDay()}`).style.fontWeight = "900"


document.querySelector("body").onscroll = function() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var factor = 0.5; // Adjust this value to control the scroll speed
    var yvalue = scrolltotop * factor;

    // Apply the y-position as a CSS variable to the hero section
    document.getElementById("hero").style.setProperty('--bg-position', yvalue + "px");
}
