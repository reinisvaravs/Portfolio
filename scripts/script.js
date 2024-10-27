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

let bgOpacity;
let x;
let scrolled;

document.querySelector("body").onscroll = function() {  
    scrolled = document.scrollingElement.scrollTop;

    if (scrolled <= 400) {
        x = scrolled / 400;
        if (x < 0) { x = 0; }
        if (x > 1) { x = 1; }
        bgOpacity = `${1 - x}`;
        document.getElementById("bg-image").style.opacity = bgOpacity;
    }
    if (scrolled > 400) {
        bgOpacity = "0";
        document.getElementById("bg-image").style.opacity = bgOpacity;
    }
};






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