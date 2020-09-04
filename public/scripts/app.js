gsap.from(".gadgets-header", {
  x: "-100%",
  duration: 1,
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
    markers: true,
  }
})

community
  .to(".theme", { opacity: 0 })
  .from(".community-body", { duration: 100, opacity: 0, delay: 100 })
  .from(".earth", { scale: 0, duration: 100 })
  .to(".community", { yPercent: -5, duration: 100 })



let theme = gsap.timeline({
  scrollTrigger: {
    trigger: ".theme",
    toggleActions: "pause",
    pin: true,
    scrub: true,
  }
})

theme
  .to(".theme", { opacity: 1 })
  .to(".theme img", { scale: 0.2 })


let vision = gsap.timeline({
  scrollTrigger: {
    trigger: ".vision",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: true,
  }
})
// let mission = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".mission",
//     start: "top top",
//     end: "bottom top",
//     pin: true,
//     scrub: true,
//   }
// })






