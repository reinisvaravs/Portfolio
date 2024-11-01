gsap.registerPlugin(ScrollTrigger)


const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);


// gsap.to('.bg', {
//     duration: 2,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: '#work',
//         start: 'top 101%',
//         end: 'top 50%',
//         toggleActions: 'play none reverse none',
//         scrub: 1,
//     }
// })
// gsap.to('.bg', {
//     duration: 2,
//     opacity: '90%',
//     scrollTrigger: {
//         trigger: '#contacts-container',
//         start: 'top 40%',
//         end: 'center 55%',
//         toggleActions: 'play none reverse none',
//         scrub: 1,
//     }
// })


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
    delay: 3,
    opacity: 0,
    duration: 2,
})
gsap.to('#cursor-div', {
    delay: 4,
    opacity: 1,
    duration: 1,
})



const timeline = gsap.timeline({ default: { duration: 1 } })

timeline
  .to('#loading-icon', {
    rotation: '270deg',
    background: '#1FE600'
  })
  .to('#loading-icon', {
    rotation: '-270deg',
    background: '#000FE6'
  })
  .to('#loading-icon', {
    rotation: '360deg',
    background: '#E60000'
  })
  .to('#loading-icon', {
    rotation: '-360deg',
    background: '#00C0E6'
  })
  .to('#loading-icon', {
    rotation: '360deg',
    background: '#FFFF00'
  })
  .to('#loading-icon', {
    rotation: '4000deg',
    duration: 2,
    background: 'red',
})

  .from('.projects-btn', { opacity: 0, ease: 'ease', duration: 0.4 })
  .from('.contacts-btn', { opacity: 0, ease: 'ease', duration: 0.4 })
  .from('#hero-image', {
    opacity: 0,
    duration: 0.4
  })
  .from('#arrow-div', { opacity: 0, ease: 'ease' })


