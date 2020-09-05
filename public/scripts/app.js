gsap.registerPlugin(ScrollTrigger)

gsap.from(".gadgets-header", {
  duration: 1.5,
  delay: 0.5,
  opacity: 0,
  ease: "power2.outs",
});

let gadgets = gsap.timeline({
  scrollTrigger: {
    trigger: ".gadgets",
    start: "56% center",
    toggleActions: "restart pause reverse pause",
    pin: true,
    scrub: 1,
  },
});

gadgets
  .to(".laptop", { x: "-100%", opacity: 0 })
  .to(".ipad", { x: "100%", opacity: 0 }, "<0")
  .to(".gadgets", { opacity: 0, ease: "power4.outs" })

let community = gsap.timeline({
  scrollTrigger: {
    trigger: ".community",
    start: "center center",
    end: "bottom top",
    pin: true,
    scrub: 1,
  }
})

community
  .from(".community", { duration: 100, opacity: 0, delay: 100 })
  .from(".earth", { scale: 0, duration: 100 })

let theme = gsap.timeline({
  scrollTrigger: {
    trigger: ".theme",
    toggleActions: "pause",
    pin: true,
    scrub: 1,
  }
})

theme
  .to(".theme", { opacity: 1, duration: 100 })
  .to(".theme", { opacity: 0 }, "<4")


let vision = gsap.timeline({
  scrollTrigger: {
    trigger: ".vision",
    end: 'bottom top',
    pin: true,
    scrub: 1,
  }
})

vision
  .from(".vision", { opacity: 0, duration: 50 })
  .from(".vision-temporary", { x: "-150%", ease: "slow", duration: 50 })
  .from(".vision-body", { opacity: 0, delay: 1, duration: 100 })
  .to('.vision-body', { opacity: 0, duration: 50 })
  .to(".vision-temporary", { x: "-150%", ease: "slow", duration: 50, opacity: 0 })


let mission = gsap.timeline({
  scrollTrigger: {
    trigger: ".mission",
    end: 'top top',
    pin: true,
    scrub: 1,
    markers: true,
  }
})

mission
  .to(".mission", { opacity: 1, ease: "slow" })
  .from(".mission-1", { y: "100vh", ease: "slow" })
  .from(".mission-2", { y: "100vh", ease: "slow" })
  .from(".mission-3", { y: "100vh", ease: "slow" })











