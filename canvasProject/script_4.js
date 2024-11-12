console.log("Welcome to Horizontal scroll");

function locScrollCodepen() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
locScrollCodepen();

function loader() {
  let loader = document.querySelector(".loader");
  let i = 0;
  let count = setInterval(() => {
    if (i >= 95) {
      loader.innerHTML = "100%";
      gsap.to(".loading-page", {
        transform: 'translateY(100%)',
        duration: 1,
        height: '0',
        width: '0',
        scale: 0.2,
        opacity: 0
      });
      clearInterval(count);
    }
    let rand = Math.floor(Math.random() * 40);
    loader.innerHTML = `${i}%`;
    i += rand;
  }, 200);
}
loader();

function horizontalScroll() {
  gsap.to("#page1 h1", {
    transform: 'translateX(-100%)',
    fontWeight: '100',
    scrollTrigger: {
      trigger: '#page1',
      scroller: '#main',
      scrub: 3,
      // markers: true,
      pin: true,    // pins the element for animation duration
      start: 'top 0',
      end: 'top -100%'
    }
  });
}
horizontalScroll();

function grow() {
  gsap.from(".box", {
    scale: 0,
    opacity: 0,
    rotate: '360',
    duration: 1,
    scrollTrigger: {
      trigger: '.inside',
      scroller: '#main',
      scrub: 1,
      markers: true,
      // pin:
      start: 'top 80%',
      end: 'top 50%'

    }
  });
}
grow();