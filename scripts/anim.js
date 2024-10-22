
const display1 = document.getElementById("display-1")
const display2 = document.getElementById("display-2")


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
            if (entry.target.id === "display-1" && entry.isIntersecting) {
                display1.classList.add("fadeIn");
            }
            if (entry.target.id === "display-2" && entry.isIntersecting) {
                display2.classList.add("fadeIn");
            }
        }
        else {
            entry.target.classList.remove("show")
            display1.classList.remove("fadeIn");
            display2.classList.remove("fadeIn");
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden, #display-1, #display-2")
hiddenElements.forEach((el) => observer.observe(el))