
document.getElementById("projects-btn").onclick = () => {
    window.scroll({
        top: 850, 
        left: 0, 
        behavior: 'smooth' 
    });

    document.getElementById("myAudio").play()
}
document.getElementById("contacts-btn").onclick = () => {
    window.scroll({
        top: 953, 
        left: 0, 
        behavior: 'smooth' 
    });

    document.getElementById("myAudio").play()
}

document.querySelector("body").onscroll = function myFunction() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("hero");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}