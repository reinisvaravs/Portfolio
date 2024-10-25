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



let X = 0;
let Y = 0;
let targetX = 0;
let targetY = 0;
const easeFactor = 0.2;

window.addEventListener('mousemove', function(e) {
    targetX = e.clientX;
    targetY = e.clientY;
    cursor.style.display = "block"
});

function animateCursor() {
    const cursor = document.getElementById("cursor");

    X += (targetX - X) * easeFactor;
    Y += (targetY - Y) * easeFactor;

    cursor.style.left = X + 'px';
    cursor.style.top = Y + 'px';
    cursor.style.transform = 'translate(-55%, -60%)';

    requestAnimationFrame(animateCursor);
}

animateCursor();




