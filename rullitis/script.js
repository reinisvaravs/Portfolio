function showPage(page) {
    document.querySelectorAll(".pages").forEach(div => {
        div.style.display = "none";
    });

    document.querySelector(`#${page}`).style.display = "block";

    document.querySelectorAll(".page_buttons").forEach(button => {
        button.classList.remove("active");
    });

    document.querySelectorAll(`button[data-page="${page}"]`).forEach(button => {
        button.classList.add("active");
    });
};

document.querySelectorAll(".page_buttons").forEach(button => {
    button.onclick = function() {
        setTimeout(() => {
            showPage(this.dataset.page);
        }, 100);
    }
});

window.onload = () => {
    document.querySelectorAll(`button[data-page="page1"]`).forEach(button => {
        button.classList.add("active");
    });
}