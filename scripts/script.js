window.onload = function() {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
}



const dateHtml = document.getElementById("clock")
const monthHtml = document.getElementById("month")

const now = new Date();
let date = now.getDate()

const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const month = months[now.getMonth()];

if (date >= 1 && date <= 9) {
    date = `0${date}`;
}

dateHtml.innerHTML = date
monthHtml.innerHTML = month


const heroHeight = document.getElementById("hero").offsetHeight
const workHeight = heroHeight + document.getElementById("work").offsetHeight


document.querySelectorAll(".projects-btn").forEach(button => {
    button.onclick = () => {
        window.scroll({
            top: heroHeight +100, 
            left: 0, 
            behavior: 'smooth' 
        });
    }
})

document.querySelectorAll(".contacts-btn").forEach(button => {
    button.onclick = () => {
        window.scroll({
            top: workHeight +500, 
            left: 0, 
            behavior: 'smooth' 
        });
    }
})



// Only activate custom cursor if the device has a fine pointer (e.g., a mouse)
if (window.matchMedia('(pointer: fine)').matches) {
    let X = 0;
    let Y = 0;
    let targetX = 0;
    let targetY = 0;
    const easeFactor = 0.2;
    const cursor = document.getElementById("cursor");

    window.addEventListener('mousemove', function(e) {
        targetX = e.clientX;
        targetY = e.clientY;
        cursor.style.display = "block"; // Show cursor only if mouse is present
    });

    function animateCursor() {
        X += (targetX - X) * easeFactor;
        Y += (targetY - Y) * easeFactor;

        cursor.style.left = X + 'px';
        cursor.style.top = Y + 'px';
        cursor.style.transform = 'translate(-55%, -60%)';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();
}


