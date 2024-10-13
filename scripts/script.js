console.log("update 1")

document.getElementById("projects-btn").onclick = () => {
    window.scroll({
        top: 600, 
        left: 0, 
        behavior: 'smooth' 
    });

    document.getElementById("myAudio").play()
}
document.getElementById("contacts-btn").onclick = () => {
    window.scroll({
        top: 1000, 
        left: 0, 
        behavior: 'smooth' 
    });

    document.getElementById("myAudio").play()
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