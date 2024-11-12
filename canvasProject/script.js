console.log("Welcome");

// make a function & put all locomotive + scrollTrigger JS in it & call the function
function locomotive() {
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


    // // --- RED PANEL ---
    // gsap.from(".line-1", {
    //   scrollTrigger: {
    //     trigger: ".line-1",
    //     scroller: "#main",
    //     scrub: true,
    //     start: "top bottom",
    //     end: "top top",
    //     onUpdate: self => console.log(self.direction)
    //   },
    //   scaleX: 0,
    //   transformOrigin: "left center",
    //   ease: "none"
    // });


    // // --- ORANGE PANEL ---
    // gsap.from(".line-2", {
    //   scrollTrigger: {
    //     trigger: ".orange",
    //     scroller: "#main",
    //     scrub: true,
    //     pin: true,
    //     start: "top top",
    //     end: "+=100%"
    //   },
    //   scaleX: 0,
    //   transformOrigin: "left center",
    //   ease: "none"
    // });


    // // --- PURPLE/GREEN PANEL ---
    // var tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".purple",
    //       scroller: "#main",
    //       scrub: true,
    //       pin: true,
    //       start: "top top",
    //       end: "+=100%"
    //     }
    //   });

    // tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
    //   .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
    //   .to(".purple", {backgroundColor: "#28a92b"}, 0);


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

// call the function
locomotive();

window.addEventListener("resize", () => {

    console.log(window.innerHeight, window.innerHeight);
});

function canvas() {
    // select the canvas to draw
    const canvas = document.querySelector("canvas");

    // get the object for 2d context creation algorithm(give all the tools for the canvas draws)
    const context = canvas.getContext("2d");

    // get the windows inner height & width
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // get the windows inner height & width when window resizes
    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    // returns all the images one by one
    function files(index) {
        var data = `
        // paste all images here!!
     `;
        // returns the images according to the index
        return data.split("\n")[index];
    }

    // frame count = number of images available(this will render only no of images present, if less-> make to render only those images)
    const frameCount = 300;

    // list of images
    const images = [];
    const imageSequence = {
        frame: 1,
    };

    // for every image create a new image tag
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();    // get a new image tag
        img.src = files(i);         // get image from the file function
        images.push(img);           // add to image array
    }

    // applying the animation
    gsap.to(imageSequence, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `#page>canvas`,
            //   set start end according to preference
            start: `top top`,
            end: `600% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSequence.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: "// object you want to pin it.",
        pin: true,  // pins the window until 'end'
        // markers:true,
        scroller: `#main`,
        //   set start end according to preference

        // start: element window
        start: `top top`,   // i.e when top of element meets top of window
        end: `600% top`,    // i.e when 600% of element meets top of window
    });
}

function ballBounce() {
    // property: value
    // use camelCase
    gsap.to("#ball1", {
        // this is vars object i.e properties to animate
        // & special properties
        // css properties, custom JS objects, css variables
        x: 200,
        duration: 2,
        backgroundColor: "blue",
        border: "5px solid white",
        borderRadius: "40%",    // value as a string else JS will interprete as modulo operator
        ease: "bounce",
        stagger: 2.3
        // y: -100
    });

}
// ballBounce();

function coordinates() {
    // let ball_9 = document.getElementById("#ball9");
    gsap.to("#ball1", {
        // x: 200,
        duration: 2,
        y: 200,
        ease: "power1.inOut"
    });
    gsap.to("#ball2", {
        x: 200,
        duration: 2,
        // y: -200,
        ease: "power1.inOut"
    });
    gsap.to("#ball3", {
        x: -200,
        duration: 2,
        // y: 200,
        ease: "power1.inOut"
    });
    gsap.to("#ball4", {
        // x: 200,
        duration: 2,
        y: -200,
        ease: "power.inOut",

    });
    gsap.to("#ball5", {
        x: 200,
        duration: 2,
        y: -200,
        ease: "steps(12)"
    });
    gsap.to("#ball6", {
        x: 200,
        duration: 3,
        y: 200,
        ease: "elastic.inOut"
    });
    gsap.to("#ball7", {
        x: -200,
        duration: 2,
        // y: -200,
        ease: "back.inOut"
    });
    gsap.to("#ball8", {
        x: 200,
        duration: 2,
        y: -200,
        ease: "power2.inOut"
    });
    gsap.to("#ball9", {
        x: 100,
        duration: 2,
        y: -200,
        rotation: 360,
        ease: "expo14inOut"
    });
}
// coordinates();

function rotation() {
    let heading = document.getElementsByClassName("heading");
    gsap.to(heading, {
        duration: 2,
        rotation: 720,
        // y: 300,
        x: '20vh',
        yoyo: true,
        repeat: 2,
        xPercent: 10,
        scale: 0.3,
        borderRadius: '30px',
        border: "2px solid green",
        stagger: 0.3,
        scrollTrigger: {
            start: 'top 80%',

        }
    });
    gsap.to('#texts', {
        pin: true,
        markers: true,
        scrub: 0.20

    });
}
// rotation();

// scroll Trigger
function scrollingTrigger() {
    gsap.from(".p1 .color-box", {
        scale: 0,
        opacity: 0,
        duration: 0.7,
        rotate: 270
    });

    gsap.from(".p2 .color-box", {
        scale: 0,
        opacity: 0,
        duration: 1,
        rotate: 270,

        // apply scroll trigger plugin to animate based on the scroll position
        scrollTrigger: {
            // on whom we are triggering
            trigger: '.p2 .color-box',

            // on what we element we are scrolling
            scroller: " #main",

            duration: 1,

            // markers: development features, allows to see the start & end positions of the
            // element to be animated & page's viewport
            markers: true,

            // when top of the element hits the 50% of viewport
            start: 'top 50%',

            end: 'top 20%',

            scrub:2
        }
    });
}
// scrollingTrigger();