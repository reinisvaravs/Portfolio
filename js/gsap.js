gsap.registerPlugin(ScrollTrigger)
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);




curtainBtn.onclick = function() {
    document.querySelector("#curtainBtn").style.display = "none"
    document.querySelector(".curtain-h2").style.display = "block"

    gsap.to(".menu", {
        y: 0,
        duration: 1,
        ease: "power1.inOut",
    })
    gsap.to(".menu", {
        paddingTop: "0px",
        duration: 1,
        ease: "power1.inOut",
    })
    gsap.to(".menu", {
        delay: 1,
        boxShadow: "none"
    })
}

const menuBtn = document.getElementById("menuBtn")
let isMenuOpen = false;

menuBtn.onclick = function togglePopupMenu() {
    if (isMenuOpen) {
        gsap.to(".popup", {
            x: "100%",
            duration: 0.5,
            ease: "power.out",
        });
    } else {
        gsap.to(".popup", {
            x: "0%",
            duration: 0.5,
            ease: "power.out",
        });
    }
    isMenuOpen = !isMenuOpen;
};
