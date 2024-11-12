// 1) Animate Objects
let obj = {
    num: 10,
    color: "red"
};

function update() {
    // Comma is Imp.
    gsap.to(obj, {
        // properties of the object
        num: 100,
        color: "blue",

        // special property method for object
        onUpdate: () => {
            // will print on every load/render
            // console.log(obj.num, obj.color);
        }
    });
}
// update();

// special methods
function specialMethods() {
    let heads = document.getElementsByClassName("head_2");
    console.log(Array.from(heads));
    Array.from(heads).forEach((element) => {
        element.addEventListener("click", () => {
            console.log("Clicked");
            gsap.to(heads, {
                // duration of animation
                duration: 2, // 2 sec

                // delay in animation
                delay: 1, // sec

                // repeat the same animation
                repeat: 2,  // 2 times

                // yoyo if true alters the animation back & forth for each repeat
                yoyo: true,

                // if multiple targets delay between animation of each target
                stagger: 0.4, // sec

                x: -1100

                // onUpdate: () => {
                //     console.log("Updated");
                // },

                // onHover: ()=>{
                // }
            });
        });
    });
}
// specialMethods();

function stagger() {
    let boxes = document.getElementsByClassName("inside");
    // Array.from(boxes).forEach(

    // )
    gsap.to(boxes, 1, {
        scale: 0.5,
        // y: 60,
        duration: 0.5, // sec
        repeat: -1,     // infinite
        yoyo: true,  // returns to its initial state & again go for repeat
        ease: "bounce.inOut",
        // borderRadius: '30px',

        // stagger
        stagger: {
            each: 0.2,   // 1 sec gap between animation for each target
            from: 'random', // starts stagger from the center of grid
            from: 'center', // starts stagger from the center of grid
            grid: "auto"  // automatically find no of rows & cols

            // amount: 1.5,
            // grid: "auto",
            // from: "center"
        }
    });
}
// stagger();

function timeline(timeline) {
    timeline.to(".red", {
        x: 100,
        duration: 1,
        delay: 1,
        rotation: 180,
        repeat: -1,
        yoyo: true
    });

    timeline.to(".orange", {
        x: 100,
        duration: 1,
        delay: 0.5,
        rotation: 180,
        repeat: -1,
        yoyo: true
    });

    timeline.to(".green", {
        x: 100,
        duration: 2,
        delay: 0.5,
        rotation: 180,
        repeat: -1,
        yoyo: true
    });
    timeline.to(".color", {
        x: 100,
        duration: 2,
        // delay: 0.5,
        rotation: 180,
        repeat: -1,
        yoyo: true,
        stagger: 0.5
    });

}

// let t1 = gsap.timeline();
// timeline(t1);