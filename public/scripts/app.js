const navSecondary = document.querySelector(".nav-secondary");
const joinUs = document.querySelector(".nav-secondary button")
const burgerBtn = document.querySelector(".burger-btn");
window.addEventListener("resize", () => {
    if(window.innerWidth > 767){
        navSecondary.style.display = "flex";
    } else {
        navSecondary.style.display = "none";
        joinUs.style.display = "block";
    }
})

function showMenu(){
    if(navSecondary.style.display !== "flex"){
        navSecondary.style.display = "flex";
        burgerBtn.classList.add("open");
    } else {
        navSecondary.style.display = "none";
        burgerBtn.classList.remove("open");
    }
}

gsap.registerPlugin(ScrollTrigger)
// Only run if screen is more than 500px
var mq = window.matchMedia("(min-width: 500px)");

if (mq.matches) {
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
      toggleActions: "restart pause reverse pause",
      end: "bottom top",
      pin: true,
      scrub: 1,
    }
  })

  community
    .from(".community", { duration: 1, opacity: 0 })
    .from(".earth", { scale: 0, duration: 1 })

  let theme = gsap.timeline({
    scrollTrigger: {
      trigger: ".theme",
      toggleActions: "pause",
      toggleActions: "restart pause reverse pause",
      pin: true,
      scrub: 1,
    }
  })

  theme
    .from(".theme", { opacity: 0 })
    .to(".theme", { opacity: 0 }, "<4")


  let vision = gsap.timeline({
    scrollTrigger: {
      trigger: ".vision",
      toggleActions: "restart pause reverse pause",
      pin: true,
      scrub: 1,
    }
  })

  vision
    .from(".vision", { opacity: 0, duration: 1 })
    .from(".vision-temporary", { x: "-200%", ease: "slow", duration: 1 })
    .from(".vision-body", { opacity: 0, delay: 1, duration: 2 })
    .to('.vision-body', { opacity: 0, duration: 1 })
    .to(".vision-temporary", { x: "-200%", ease: "slow", duration: 1, opacity: 0 })


  let mission = gsap.timeline({
    scrollTrigger: {
      trigger: ".mission",
      toggleActions: "restart pause reverse pause",
      end: "bottom top",
      pin: true,
      scrub: 1,
    }
  })

  mission
    .from(".mission", { opacity: 0, ease: "slow", duration: 1 })
    .from(".mission-temporary", { x: '200%', ease: "slow", duration: 3 })
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
      toggleActions: "restart pause reverse pause",
      pin: true,
      scrub: 1,
    }
  })

  product
    .from('.product', { opacity: 0, duration: 10 })

    .from('.product-1', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<10")
    .from('.sub-1', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<0")
    .to('.pic-1', { opacity: 1, rotation: 45, ease: "slow", duration: 20 }, "<0")
    .to('.product-1', { opacity: 0, ease: "slow", duration: 10 }, "<20")
    .to('.sub-1', { opacity: 0, ease: "slow", duration: 10}, "<0")
    .to('.pic-1', { opacity: 0, ease: "slow", duration: 10 }, "<0")


    .from('.product-2', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<10")
    .from('.sub-2', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<0")
    .to('.pic-2', { opacity: 1, rotation: -45, ease: "slow", duration: 20 }, "<0")
    .to('.product-2', { opacity: 0, ease: "slow", duration: 10 }, "<20")
    .to('.sub-2', { opacity: 0, ease: "slow", duration: 10 }, "<0")
    .to('.pic-2', { opacity: 0, ease: "slow", duration: 10 }, "<0")

    .from('.product-3', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<10")
    .from('.sub-3', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<0")
    .to('.pic-3', { opacity: 1, rotation: 45, ease: "slow", duration: 20 }, "<0")
    .to('.product-3', { opacity: 0, ease: "slow", duration: 10 }, "<20")
    .to('.sub-3', { opacity: 0, ease: "slow", duration: 10 }, "<0")
    .to('.pic-3', { opacity: 0, ease: "slow", duration: 10 }, "<0")

    .from('.product-4', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<10")
    .from('.sub-4', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<0")
    .to('.pic-4', { opacity: 1, rotation: -45, ease: "slow", duration: 20 }, "<0")
    .to('.product-4', { opacity: 0, ease: "slow", duration: 10 }, "<20")
    .to('.sub-4', { opacity: 0, ease: "slow", duration: 10 }, "<0")
    .to('.pic-4', { opacity: 0, ease: "slow", duration: 10 }, "<0")

    .from('.product-5', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<10")
    .from('.sub-5', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<0")
    .to('.pic-5', { opacity: 1, rotation: 45, ease: "slow", duration: 20 }, "<0")
    .to('.product-5', { opacity: 0, ease: "slow", duration: 10 }, "<20")
    .to('.sub-5', { opacity: 0, ease: "slow", duration: 10 }, "<0")
    .to('.pic-5', { opacity: 0, ease: "slow", duration: 10 }, "<0")

    .to('.product', { opacity: 0, duration: 10 })


  let gadgets2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".gadgets-2",
      toggleActions: "restart pause reverse pause",
      pin: true,
      scrub: 1,
    }
  })

  gadgets2
    .from(".gadgets-2", { opacity: 0 })
    .to(".mobile-2", { x: "-58vh", y: "-37%", scale: 0.55, opacity: 1 })
    .to(".disap", { opacity: 0 }, "<0")
    .to(".mobile-2", { opacity: 0 })
    .to(".gadgets-2", { opacity: 0 }, "<0")


  let recweek = gsap.timeline({
    scrollTrigger: {
      trigger: ".recweek-app",
      toggleActions: "restart pause reverse pause",
      pin: true,
      scrub: 1,
    }
  })

  recweek
    .from(".recweek-app", { opacity: 0, duration: 1 })
    .to(".recweek-app-pic", { x: "-250%" })
    .to(".recweek-app", { opacity: 0, duration: 0.3 }, "<0")


  let qwiklabs = gsap.timeline({
    scrollTrigger: {
      trigger: ".qwiklabs",
      toggleActions: "restart pause reverse pause",
      pin: true,
      scrub: 1,
    }
  })

  qwiklabs
    .from(".qwiklabs", { opacity: 0, duration: 1 })
    .from(".qwiklabs-pic", { x: "250%" })
    .to(".qwiklabs-pic", { x: "250%" }, "<1")
    .to(".qwiklabs", { opacity: 0, duration: 0.3 }, "<0")

  let bantayBayan = gsap.timeline({
    scrollTrigger: {
      trigger: ".bantay-bayan",
      toggleActions: "restart pause reverse pause",
      pin: true,
      scrub: 1,
    }
  })

  bantayBayan
    .from(".bantay-bayan", { opacity: 0, duration: 1 })
    .from(".bantay-bayan-pic", { x: "-250%" })
    .to(".bantay-bayan-pic", { x: "-250%" }, "<1")
    .to(".bantay-bayan", { opacity: 0, duration: 0.3 }, "<0")


  let eventSlider = gsap.timeline({
    scrollTrigger: {
      trigger: ".event-slider",
      toggleActions: "restart pause reverse pause",
      pin: true,
      scrub: 1,
    }
  })

  eventSlider
    .from(".event-1", { opacity: 0 })
    .from(".event-pic-1", { opacity: 0, duration: 1 })
    .from(".event-pic-2", { opacity: 0, duration: 1 })
    .from(".event-pic-3", { opacity: 0, duration: 1 })
    .from(".event-pic-4", { opacity: 0, duration: 1 })
    .from(".event-2", { x: "200%", ease: "slow", duration: 2 })
    .to(".event-slider", { opacity: 0, duration: 5 }, "<3")



  let upcomingMessage = gsap.timeline({
    scrollTrigger: {
      trigger: ".upcoming-message",
      toggleActions: "restart pause reverse pause",
      pin: true,
      scrub: 1,
    }
  })

  upcomingMessage
    .from(".upcoming-message", { opacity: 0, duration: 1 }, "<0.3")
    .to(".upcoming-message", { opacity: 0, duration: 1 })


  let upcoming1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".upcoming-event-1",
      toggleActions: "restart pause reverse pause",
      pin: true,
      scrub: 1,
    }
  })

  upcoming1
    .from(".upcoming-event-1", { opacity: 0, duration: 1 }, "<0.3")
    .to(".upcoming-event-1", { opacity: 0, duration: 1 })


  let upcoming2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".upcoming-event-2",
      toggleActions: "restart pause reverse pause",
      pin: true,
      scrub: 1,
    }
  })

  upcoming2
    .from(".upcoming-event-2", { opacity: 0, duration: 1 }, "<0.3")
    .to(".upcoming-event-2", { opacity: 0, duration: 1 })


  let upcoming3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".upcoming-event-3",
      toggleActions: "restart pause reverse pause",
      pin: true,
      scrub: 1
    }
  })

  upcoming3
    .from(".upcoming-event-3", { opacity: 0, duration: 1 }, "<0.3")


}

// SLIDER ----------------------------------------------

let HR = document.querySelector('#HR');
let COM = document.querySelector('#COM');
let TECH = document.querySelector('#TECH');
let OPS = document.querySelector('#OPS');
let FIN = document.querySelector('#FIN');

// HR.style.display = 'none';
COM.style.display = 'none';
TECH.style.display = 'none';
OPS.style.display = 'none';
FIN.style.display = 'none';


let HR_FIN = document.querySelector('#HR-FIN');
let HR_COM = document.querySelector('#HR-COM');

let COM_HR = document.querySelector('#COM-HR'); 
let COM_TECH = document.querySelector('#COM-TECH');

let TECH_COM = document.querySelector('#TECH-COM');
let TECH_OPS = document.querySelector('#TECH-OPS');

let OPS_TECH = document.querySelector('#OPS-TECH');
let OPS_FIN = document.querySelector('#OPS-FIN');

let FIN_OPS = document.querySelector('#FIN-OPS');
let FIN_HR = document.querySelector('#FIN-HR');

HR_FIN.addEventListener('click', () => {
  HR.style.display = 'none';
  FIN.style.display = 'flex';
});

HR_COM.addEventListener('click', () => {
  HR.style.display = 'none';
  COM.style.display = 'flex';
});

COM_HR.addEventListener('click', () => {
  COM.style.display = 'none';
  HR.style.display = 'flex';
});

COM_TECH.addEventListener('click', () => {
  COM.style.display = 'none';
  TECH.style.display = 'flex';
});

TECH_COM.addEventListener('click', () => {
  TECH.style.display = 'none';
  COM.style.display = 'flex';
});

TECH_OPS.addEventListener('click', () => {
  TECH.style.display = 'none';
  OPS.style.display = 'flex';
});

OPS_TECH.addEventListener('click', () => {
  OPS.style.display = 'none';
  TECH.style.display = 'flex';
});

OPS_FIN.addEventListener('click', () => {
  OPS.style.display = 'none';
  FIN.style.display = 'flex';
}); 

FIN_OPS.addEventListener('click', () => {
  FIN.style.display = 'none';
  OPS.style.display = 'flex';
});

FIN_HR.addEventListener('click', () => {
  FIN.style.display = 'none';
  HR.style.display = 'flex';
});





