gsap.from(".gadgets-header", {
  x: "-100%",
  duration: 1,
  opacity: 0,
  ease: "power2.outs",
});


let gadgets = gsap.timeline({
  scrollTrigger: {
    trigger: ".gadgets",
    start: "center center",
    toggleActions: "restart pause reverse pause",
    pin: true,
    markers: true,
    scrub: true,
  },
});

gadgets
  .to(".laptop", { x: "-100%", opacity: 0 }, "<.5")
  .to(".ipad", { x: "100%", opacity: 0 }, "<0")
  .to(".gadgets", { opacity: 0, ease: "power4.outs" });

let community = gsap.timeline({
  scrollTrigger: {
    trigger: ".community",
    start: "bottom bottom",
    end: "bottom center",
    toggleActions: "restart pause reverse pause",
    pin: true,
    scrub: true,
  },
});

gsap.from(".community", {
  scrollTrigger: {
    trigger: ".community",
    start: "bottom bottom",
    end: "bottom center",
    toggleActions: "restart pause reverse pause",
    pin: true,
    scrub: true,
  },
  opacity: 0,
});

