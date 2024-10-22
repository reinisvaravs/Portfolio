const heroHeight = document.getElementById("hero").offsetHeight

const workHeight = heroHeight + document.getElementById("work").offsetHeight


document.querySelectorAll(".projects-btn").forEach(button => {
    button.onclick = () => {
        window.scroll({
            top: heroHeight, 
            left: 0, 
            behavior: 'smooth' 
        });
    }
})

document.querySelectorAll(".contacts-btn").forEach(button => {
    button.onclick = () => {
        window.scroll({
            top: workHeight, 
            left: 0, 
            behavior: 'smooth' 
        });
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