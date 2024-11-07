

let scrollInterval; // Variable to store the interval ID
let isScrolling = false; // Track whether scrolling is active

function scrollPage() {
    var limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    let scrollHeight = 0;

    scrollInterval = setInterval(() => {
        if (scrollHeight >= limit - 700) {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            scrollHeight = 0;
        } else {
            scrollHeight += 500;
            window.scroll({
                top: scrollHeight,
                left: 0,
                behavior: 'smooth'
            });
        }
    }, 2000);
    isScrolling = true;
}

function stopScroll() {
    clearInterval(scrollInterval); // Clear the interval to stop scrolling
    isScrolling = false;
}

document.addEventListener("keydown", (event) => {
    if (event.key === "k" || event.key === "K") {
        if (!isScrolling) {
            scrollPage();
        }
    } else if (event.key === "j" || event.key === "J") {
        if (isScrolling) {
            stopScroll();
        }
    }
});

// Stop scrolling on any mouse movement
document.addEventListener("mousemove", () => {
    if (isScrolling) {
        stopScroll();
    }
});







document.querySelectorAll(".projects-btn").forEach(button => {
    const heroHeight = document.getElementById("hero").offsetHeight
    const workHeight = heroHeight + document.querySelector(".work").offsetHeight
    button.onclick = () => {
        window.scroll({
            top: heroHeight +150, 
            left: 0, 
            behavior: 'smooth' 
        });
    }
})

document.querySelectorAll(".contacts-btn").forEach(button => {
    const heroHeight = document.getElementById("hero").offsetHeight
    const workHeight = heroHeight + document.querySelector(".work").offsetHeight
    button.onclick = () => {
        window.scroll({
            top: workHeight +500, 
            left: 0, 
            behavior: 'smooth' 
        });
    }
})



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
        cursor.style.display = "block"; 
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





const dateHtml = document.getElementById("clock")
const monthHtml = document.getElementById("month")

const now = new Date();
let date = now.getDate()

const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const month = months[now.getMonth()];

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getMonth() {
    for (let i = 0; i <= now.getMonth(); i++) {
        const element = months[i]
        monthHtml.innerHTML = element
        await delay(50)
    }
}
async function getDate() {
    let dateDelay
    if (date >= 1 && date <= 10) { dateDelay = 100 }
    if (date > 10 && date <= 20) { dateDelay = 60 }
    if (date > 20 && date <= 31) { dateDelay = 40 }
    
    for (let i = 0; i <= date; i++) {
        if (i >= 1 && i <= 9) {
            i = `0${i}`;
        }
        dateHtml.innerHTML = i
        await delay(dateDelay)
    }
}