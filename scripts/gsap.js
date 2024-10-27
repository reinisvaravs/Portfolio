gsap.registerPlugin(ScrollTrigger)


gsap.to('.bg', {
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: '#work',
        start: 'top 101%',
        end: 'top 50%',
        toggleActions: 'play none reverse none',
        scrub: 1,
    }
})
gsap.to('.bg', {
    duration: 2,
    opacity: '100%',
    scrollTrigger: {
        trigger: '#contacts-container',
        start: 'top 40%',
        end: 'center 55%',
        toggleActions: 'play none reverse none',
        scrub: 1,
    }
})


gsap.utils.toArray('.span1').forEach(span => {
    ScrollTrigger.create({
        trigger: '.span1',
        start: 'top center',
        toggleActions: 'play none none reverse',
        toggleClass: 'active',
        scrub: 2,
    })
});



window.onload = function() {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
}

