document.getElementById("projects-btn").onclick = () => {
    window.scroll({
        top: 700, 
        left: 0, 
        behavior: 'smooth' 
    });
}
document.getElementById("contacts-btn").onclick = () => {
    window.scroll({
        top: 1000, 
        left: 0, 
        behavior: 'smooth' 
    });
}

const bg = document.getElementById("bg")

document.addEventListener("keydown", (e) => {
    if (e.key === "b") {
        bg.classList.add("bg");
    }
})
document.addEventListener("keyup", (e) => {
    if (e.key === "b") {
        bg.classList.remove("bg");
    }
})