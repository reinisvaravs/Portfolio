document.getElementById("projects-btn").onclick = () => {
    window.scroll({
        top: 600, 
        left: 0, 
        behavior: 'smooth' 
    });
}
document.getElementById("contacts-btn").onclick = () => {
    window.scroll({
        top: 1200, 
        left: 0, 
        behavior: 'smooth' 
    });
}

const bg = document.getElementById("bg")

document.addEventListener("keydown", (e) => {
    if (e.key === "X") {
        bg.style.opacity = "20%";
    }
})
document.addEventListener("keyup", (e) => {
    if (e.key === "X") {
        bg.style.opacity = "0%";
    }
})

// const box = document.getElementById("box");
// const question = document.getElementById("question");

// box.addEventListener("mouseover", () => {
//     let augsa = (Math.random() * 15 + 70).toFixed(2)
//     let kreisa = (Math.random() * 15 + 50).toFixed(2)
//     box.style.top = `${augsa}%`
//     box.style.left = `${kreisa}%`
// })

// question.addEventListener("mouseover", () => {
//     question.style.display = "none"
//     let augsa = (Math.random() * 15 + 70).toFixed(2)
//     let kreisa = (Math.random() * 15 + 50).toFixed(2)
//     box.style.top = `${augsa}%`
//     box.style.left = `${kreisa}%`
// })

// box.onclick = () => {
//     alert(":)");
// };

// document.querySelectorAll(".box-item")
// .forEach(div => {
//     div.addEventListener("mouseover", function() {
//         this.style.background = `rgb( 
//         ${(Math.random() * 10) * (Math.random() * 25)}
//         , 
//         ${(Math.random() * 10) * (Math.random() * 25)}
//         , 
//         ${(Math.random() * 10) * (Math.random() * 25)}
//         )`;
//     });
// });

// window.addEventListener('scroll', function() {
//     const distanceFromBottom = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;

//     if (distanceFromBottom < 1) {
//         box.style.display = "grid";
//         question.style.display = "flex";

//         document.querySelectorAll(".box-item").forEach(div => {
//             div.style.display = "block"
//         })
//     } else {
//         box.style.display = "none";
//         question.style.display = "none";

//         document.querySelectorAll(".box-item").forEach(div => {
//             div.style.display = "none"
//         })
//     }
// });
