// Applying GSAP animations
console.log("Welcome to our site");

function animate() {
    let time = gsap.timeline()
    let nav = document.getElementsByClassName("animate");
    time.from(nav, {
        y: -100,     // from top
        duration: 0.5,    // for 1 sec
        delay: 0.2,      // delay in animation is 0.5 sec
        opacity: 0,
        stagger: 0.2
    });

    let text = document.getElementsByClassName("texts");
    time.from(text, {
        y: -100,
        opacity: 0,
        stagger: 0.2,
        delay: 0.2,
        duration: 0.4
    });

    time.from(".imgs", {
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        delay: 0.2,
        duration: 0.4
    });

    let scroll = document.getElementsByClassName("scroll-down");

    time.from(scroll,{
        x: -1100,
        duration: 0.6,
        opacity: 0
    });

    time.to(scroll, {
        y: -20,
        duration: 0.3,
        repeat: -1,     // repeat infinite time
        yoyo: true,
    });
}
animate();