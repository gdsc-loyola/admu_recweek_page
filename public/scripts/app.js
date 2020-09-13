//  REGISTER PLUGIN

gsap.registerPlugin(ScrollTrigger)

//////////////////////////////////////////////////////
// SECTION 1
//////////////////////////////////////////////////////

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
  .from(".community", { duration: 1, opacity: 0, delay: 1 })
  .from(".earth", { scale: 0, duration: 1 })

let theme = gsap.timeline({
  scrollTrigger: {
    trigger: ".theme",
    toggleActions: "pause",
    pin: true,
    scrub: 1,
  }
})

theme
  .to(".theme", { opacity: 1 })
  .to(".theme", { opacity: 0 }, "<4")


let vision = gsap.timeline({
  scrollTrigger: {
    trigger: ".vision",
    pin: true,
    scrub: 1,
  }
})

vision
  .from(".vision", { opacity: 0, duration: 1 })
  .from(".vision-temporary", { x: "-150%", ease: "slow", duration: 1 })
  .from(".vision-body", { opacity: 0, delay: 1, duration: 2 })
  .to('.vision-body', { opacity: 0, duration: 1 })
  .to(".vision-temporary", { x: "-150%", ease: "slow", duration: 1, opacity: 0 })


let mission = gsap.timeline({
  scrollTrigger: {
    trigger: ".mission",
    end: "bottom top",
    pin: true,
    scrub: 1,
  }
})

mission
  .to(".mission", { opacity: 1, ease: "slow", duration: 1 })
  .from(".mission-temporary", { x: '-150%', ease: "slow", duration: 1 })
  .from(".mission-1", { y: "80vh", ease: "slow", duration: 2, opacity: 0 })

  .to(".mission-1", { opacity: 0.3, ease: "slow", delay: 1, duration: 1 })
  .from(".mission-2", { y: "80vh", ease: "slow", duration: 2, opacity: 0 })
  .to(".mission-2", { opacity: 0.3, ease: "slow", delay: 1, duration: 1 })
  .from(".mission-3", { y: "80vh", ease: "slow", duration: 2, opacity: 0 })
  .to(".mission-3", { opacity: 0.3, ease: "slow", delay: 1, duration: 1 })

  .to(".mission-1", { opacity: 1, ease: "slow", duration: 2 })
  .to(".mission-2", { opacity: 1, ease: "slow", duration: 2 }, "<0")
  .to(".mission-3", { opacity: 1, ease: "slow", duration: 2 }, "<0")
  .to(".mission", { opacity: 0, ease: "slow", duration: 2 })

//////////////////////////////////////////////////////
// SECTION 2
//////////////////////////////////////////////////////

let product = gsap.timeline({
  scrollTrigger: {
    trigger: ".product",
    pin: true,
    scrub: 1,
  }
})

product
  .from('.product', { opacity: 0, duration: 10 })

  .from('.product-1', { opacity: 0, ease: "slow", duration: 10, delay: 1 })
  .to('.pic-1', { opacity: 1, rotation: 45, ease: "slow", duration: 1 }, "<0")
  .to('.product-1', { opacity: 0, ease: "slow", duration: 10 }, "<10")
  .to('.pic-1', { opacity: 0, ease: "slow", duration: 10 }, "<0")


  .from('.product-2', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<10")
  .to('.pic-2', { opacity: 1, rotation: -45, ease: "slow", duration: 10 }, "<0")
  .to('.product-2', { opacity: 0, ease: "slow", duration: 10 }, "<10")
  .to('.pic-2', { opacity: 0, ease: "slow", duration: 10 }, "<0")

  .from('.product-3', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<10")
  .to('.pic-3', { opacity: 1, rotation: 45, ease: "slow", duration: 10 }, "<0")
  .to('.product-3', { opacity: 0, ease: "slow", duration: 10 }, "<10")
  .to('.pic-3', { opacity: 0, ease: "slow", duration: 10 }, "<0")

  .from('.product-4', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<10")
  .to('.pic-4', { opacity: 1, rotation: -45, ease: "slow", duration: 10 }, "<0")
  .to('.product-4', { opacity: 0, ease: "slow", duration: 10 }, "<10")
  .to('.pic-4', { opacity: 0, ease: "slow", duration: 10 }, "<0")

  .from('.product-5', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<10")
  .to('.pic-5', { opacity: 1, rotation: 45, ease: "slow", duration: 10 }, "<0")
  .to('.product-5', { opacity: 0, ease: "slow", duration: 10 }, "<10")
  .to('.pic-5', { opacity: 0, ease: "slow", duration: 10 }, "<0")

  .to('.product', { opacity: 0, duration: 10 })


let gadgets2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".gadgets-2",
    pin: true,
    scrub: 1,
  }
})

gadgets2
  .to(".gadgets-2", { opacity: 1 })
  .to(".mobile-2", { x: "-58vh", y: "-37%", scale: 0.55, opacity: 1 })
  .to(".disap", { opacity: 0 }, "<0")
  .to(".mobile-2", { opacity: 0 })
  .to(".gadgets-2", { opacity: 0 }, "<0")


let recweek = gsap.timeline({
  scrollTrigger: {
    trigger: ".recweek-app",
    pin: true,
    scrub: 1,
  }
})

recweek
  .from(".recweek-app", { opacity: 0, duration: 1 })
  .to(".recweek-app-pic", { x: "-200%" })
  .to(".recweek-app", { opacity: 0, duration: 0.3 }, "<0")


let qwiklabs = gsap.timeline({
  scrollTrigger: {
    trigger: ".qwiklabs",
    pin: true,
    scrub: 1,
  }
})

qwiklabs
  .from(".qwiklabs", { opacity: 0, duration: 1 })
  .from(".qwiklabs-pic", { x: "200%" })
  .to(".qwiklabs-pic", { x: "200%" }, "<1")
  .to(".qwiklabs", { opacity: 0, duration: 0.3 }, "<0")

let bantayBayan = gsap.timeline({
  scrollTrigger: {
    trigger: ".bantay-bayan",
    pin: true,
    scrub: 1,
    markers: true,
  }
})

bantayBayan
  .from(".bantay-bayan", { opacity: 0, duration: 1 })
  .from(".bantay-bayan-pic", { x: "-200%" })
  .to(".bantay-bayan-pic", { x: "-200%" }, "<1")
  .to(".bantay-bayan", { opacity: 0, duration: 0.3 }, "<0")

let eventSlider = gsap.timeline({
  scrollTrigger: {
    trigger: ".event-slider-pic",
    pin: true,
    scrub: 1,

  }
})

