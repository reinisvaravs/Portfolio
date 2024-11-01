gsap.registerPlugin(ScrollTrigger)


const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);



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

gsap.to('#loading-screen', {
    delay: 1.5,
    opacity: 0,
    duration: 1,
})
gsap.to('#loading-screen', {
    delay: 2.5,
    display: "none"
})
gsap.to('#cursor-div', {
    delay: 2,
    opacity: 1,
    duration: 1,
})
gsap.from('body', {
    delay: 3.5,
    position: 'fixed',
})


const timeline = gsap.timeline({ default: { duration: 0.3 } })

timeline
  .to('#loading-icon', {
    rotation: '-360deg',
  })
  .to('#loading-icon', {
    rotation: '360deg',
  })
  .to('#loading-icon', {
    rotation: '-360deg',
  })
  .to('#loading-icon', {
    rotation: '1000deg',
    duration: 1,
  })
  .from('.projects-btn', { opacity: 0 })
  .from('.contacts-btn', { opacity: 0 })
  .from('#hero-image', {
    opacity: 0,
  })
  .from('#arrow-div', { opacity: 0, ease: 'ease' })


