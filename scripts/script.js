
document.querySelectorAll(".projects-btn").forEach(button => {
    button.onclick = () => {
        window.scroll({
            top: 852, 
            left: 0, 
            behavior: 'smooth' 
        });
        // document.getElementById("myAudio").play()
    }
})

document.querySelectorAll(".contacts-btn").forEach(button => {
    button.onclick = () => {
        window.scroll({
            top: 1704, 
            left: 0, 
            behavior: 'smooth' 
        });
        // document.getElementById("myAudio").play()
    }
})

document.querySelector("body").onscroll = function() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target1 = document.getElementById("hero");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    target1.style.backgroundPosition = xvalue + " " + yvalue + "px";
}