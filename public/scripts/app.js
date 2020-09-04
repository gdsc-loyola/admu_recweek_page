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
  .to(".theme", { opacity: 0 })
  .from(".community", { duration: 100, opacity: 0, delay: 100 })
  .from(".earth", { scale: 0, duration: 100 })
  .to(".community", { yPercent: -10, duration: 100 })

let theme = gsap.timeline({
  scrollTrigger: {
    trigger: ".theme",
    toggleActions: "pause",
    pin: true,
    scrub: true,
  }
})

theme
  .to(".theme", { opacity: 0 })
  .to(".theme", { opacity: 1, duration: 100 })
  .to(".theme", { opacity: 0 }, "<3")


let vision = gsap.timeline({
  scrollTrigger: {
    trigger: ".vision",
    pin: true,
    scrub: true,
  }
})

vision
  .from(".vision", { opacity: 0, duration: 10 })
  .from(".vision-temporary", { x: "-150%", ease: "power4.outs", duration: 10 })
  .from(".vision-body", { opacity: 0, delay: 1, duration: 20 })
  .to('.vision-body', { opacity: 0, duration: 10 })
  .to(".vision", { x: "60vw", duration: 10, opacity: 1 })











