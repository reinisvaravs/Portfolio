gsap.registerPlugin(ScrollTrigger)


const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

gsap.to('#bg-image', {
    opacity: 0.9,
})

gsap.to('#bg-image', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#bg-image',
        start: '10% top',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse',
        scrub: true,
    }
})

gsap.to('#bg-image', {
    opacity: '80%',
    scrollTrigger: {
        trigger: '#contacts-heading',
        start: 'center 60%',
        end: 'center 30%',
        toggleActions: 'play none none reverse',
        scrub: true,
    }
})


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
gsap.from('#about-item-3', {
    duration: 1,
    x: 1500,
    scrollTrigger: {
        trigger: '#about-item-3',
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
    opacity: 0,
    delay: 2,
})

const timeline = gsap.timeline({ defaults: { duration: 0.5 } });

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


  .to('#loading-screen', {
    display: "none",
    duration: 0.1,
  })
  .from('body', {
    position: 'fixed',
    duration: 0.1,
  })
  
  
  .from('.projects-btn', {
    opacity: 0,
  })
  .from('.contacts-btn', {
    opacity: 0,
  })
  .from('#hero-image', {
    opacity: 0,
  })
  .from('#arrow-div', {
    opacity: 0,
  })