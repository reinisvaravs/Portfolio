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
    opacity: '90%',
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



gsap.from('#about-item-1', {
    duration: 1,
    x: 1500,
    scrollTrigger: {
        trigger: '#about-item-1',
        start: 'top 90%',
        end: 'top 80%',
        toggleActions: 'play none none reverse',
    }
})

gsap.from('#about-item-2', {
    duration: 1,
    x: 1500,
    scrollTrigger: {
        trigger: '#about-item-2',
        start: 'top 90%',
        end: 'top 80%',
        toggleActions: 'play none none reverse',
    }
})

gsap.from('#email', {
    duration: 1,
    x: -600,
    scrollTrigger: {
        trigger: '#email',
        start: 'top 90%',
        end: 'top 80%',
        toggleActions: 'play none none reverse',
    }
})

gsap.from('#phone', {
    duration: 1,
    x: -600,
    delay: 0.23,
    scrollTrigger: {
        trigger: '#phone',
        start: 'top 90%',
        end: 'top 80%',
        toggleActions: 'play none none reverse',
    }
})

gsap.from('#instagram', {
    duration: 1,
    x: -600,
    delay: 0.3,
    scrollTrigger: {
        trigger: '#instagram',
        start: 'top 90%',
        end: 'top 80%',
        toggleActions: 'play none none reverse',
    }
})

gsap.from('#linkedin', {
    duration: 1,
    x: -600,
    delay: 0.3,
    scrollTrigger: {
        trigger: '#linkedin',
        start: 'top 90%',
        end: 'top 80%',
        toggleActions: 'play none none reverse',
    }
})


