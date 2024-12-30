// import logo from './logo.svg';
import '../../App.css';
import { useState } from 'react';
import Ball from "./ball";
import NewBall from "./newBall";
// import { type } from '@testing-library/user-event/dist/type';
// import ball from './imgs/ball.jpg';
// import { gsap } from "gsap";
// import LocomotiveScroll from "locomotive-scroll";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function App_1() {

  // Conditional Rendering
  let content = "";
  function run() {
    let isLoggedIn = true;
    if (isLoggedIn) {
      content = <Ball />
    }
    else {
      content = <NewBall />
    }
  }

  // Updating the screen
  // use useState to update the screen
  let [count, setCount] = useState(0);    // current value is 0
  // function updateCount() {
  //   setCount(count + 1);
  // }
  function increase() {
    if(typeof(count!==String)){
        setCount(count + 1);
    }
    else{
      setCount(0);
    }
    console.log(typeof(count));
  }
  function reset() {
    setCount(0);
  }
  function decrease() {
    if (count <= 0) {
      setCount(count = `Can't decrease to 0\nPress Increase`);
    }
    else if(count>0){
      setCount(count = count - 1);
    }
  }

  return (
    <div id="main" className="App_1">
      {/* <img className="ball1" src={ball} onHover={loco} alt="Hello" /> */}
      <div id="box1" onClick={run}>{content}This is div 1</div>
      <div id="box2" >This is div 2</div>
      <div className="count">{count}</div>
      <div className="btns">
        <div className="increase" onClick={increase}>Increase</div>
        <div className="reset" onClick={reset}>Reset</div>
        <div className="decrease" onClick={decrease}>Decrease</div>
      </div>
    </div>
  );
}

export default App_1;


/*
 // setup Locomotive Scroll as a hook for React / Gatsby
  // Configure locoscroll and Scrolltrigger to work together on React
  // On resize kill locoscroll and restart scrolltrigger. Also restart Locomotive scroll when the screen size is larger than the breakpoint
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
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform app_1lied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

  }
  locomotive();

  const loco = (e) => {
    gsap.to(e, {
      rotation: 360
    });
  }
  loco();
*/