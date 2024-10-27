gsap.registerPlugin(ScrollTrigger)


gsap.to('.bg', {
    opacity: '100%',
})
gsap.to('.bg', {
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: '#work',
        start: 'top 99%',
        end: 'top 50%',
        toggleActions: 'play none reverse none',
        scrub: 2,
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
        scrub: 2,
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