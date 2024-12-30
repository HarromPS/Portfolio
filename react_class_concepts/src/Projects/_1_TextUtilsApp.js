import React, { useState } from 'react';
// import App_1 from './Components/chapter_1/App_1';
// import Exercise_1 from './Components/chapter_1/Exercise_1';
import Exercise_2 from '../Function_Based_Components/chapter_1/Exercise_2';
import About from '../Function_Based_Components/chapter_1/About';
import Navbar from '../Function_Based_Components/chapter_1/navBar';
import Alert from '../Function_Based_Components/chapter_1/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function TextUtils() {
  // More control over App.js == TextUtils for every project

  // handeling alerts
  const [alerts, setAlerts] = useState(null);  // initially alert is null

  // we are using type as a bootstrap requirement
  // function handleChangingAlerts(type, message) {
  //   if (mode === thisColor) {
  //     setAlerts({
  //       type: type,
  //       message: message
  //     });

  //     // after 1.5 seconds the alert will automatically disapperars
  //     setTimeout(() => {
  //       setAlerts(null);
  //     }, 1000);
  //   }
  //   else if (mode === thisColor) {
  //     setAlerts({
  //       type: type,
  //       message: message
  //     });

  //     // after 1.5 seconds the alert will automatically disapperars
  //     setTimeout(() => {
  //       setAlerts(null);
  //     }, 1000);
  //   }
  // }
  function handleChangingAlerts(type, message) {
    setAlerts({
      type: type,
      message: message
    });
    setTimeout(() => {
      setAlerts(null);
    }, 1000);
    // if (mode === thisColor) {


    //   // after 1.5 seconds the alert will automatically disapperars
    // }
    // else if (mode === thisColor) {
    //   setAlerts({
    //     type: type,
    //     message: message
    //   });

    //   // after 1.5 seconds the alert will automatically disapperars
    //   setTimeout(() => {
    //     setAlerts(null);
    //   }, 1000);
    // }
  }

  // Enable dark mode + alerts, send it to the navbar
  let style = {};
  const [mode, setMode] = useState("light");  // initially light
  const [modeStyle, setModeStyle] = useState(style);

  // for dark & light theme
  // const handleModeChange = (color) => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     setModeStyle({
  //       "color": "white",
  //       "backgroundColor": "#2b3035"
  //     });
  //     document.body.style.backgroundColor = "#434d56";
  //     handleChangingAlerts("success","Mode is changed to dark mode");
  //   }
  //   else {
  //     setMode("light");
  //     setModeStyle({
  //       "color": "black",
  //       "backgroundColor": "white"
  //     });
  //     document.body.style.backgroundColor = "white";
  //     handleChangingAlerts("success","Mode is changed to light mode");
  //   }
  // }

  // // for colorful theme
  let mapping = {
    "warning": "orange",
    "danger": "red",
    "success": "green",
    "primary": "blue",
    "info": "lightblue",
    "dark": "black",
    "light": "white",
  }
  const handleModeChange = (color) => {
    // thisColor = color;
    setMode(color);
    setModeStyle({
      "color": "white",
      "backgroundColor": `${mapping[color]}`
    });
    console.log(color);
    document.body.style.backgroundColor = `${mapping[color]}`;
    handleChangingAlerts("success", `Mode is changed to ${mapping[color]} mode`);

    // changing the title dynamically
    document.title = `TextUtils - ${mapping[color][0].toUpperCase() + mapping[color].substring(1, mapping[color].length)} Mode`;

    // blinking title
    // setInterval(() => {
    //   document.title = `Install Our App`;
    // },2000);
    // setInterval(() => {
    //   document.title = `Best User Experience`;
    // },1500);
  }

  return (
    // Wrap the whole app in Router

    <BrowserRouter>


      <Routes>
        <Route exact path="/ReactApp" element={
          <>
            <Navbar mode={mapping[mode]} modeStyle={modeStyle} handleModeChange={handleModeChange} />
            <div id="app" >
              {/* first app */}
              {/* <App_1/> */}

              {/* Navbar */}
              {/* <Navbar mode={mode} modeStyle={modeStyle} handleModeChange={handleModeChange} /> */}

              {/* Alert, here alerts is an object, initially null, but handled using a Special syntax in the component itself */}
              <Alert alerts={alerts}></Alert>
              {/* Exercise */}
              {/* <Exercise_1 mode={mapping[mode]} handleChangingAlerts={handleChangingAlerts} /> */}
              <Exercise_2 mode={(mode === 'light') ? 'black' : 'white'} handleChangingAlerts={handleChangingAlerts} />
              {/* <About/> */}
            </div>
          </>}>
        </Route>

        <Route exact path="/about" element={<About mode={mapping[mode]} modeStyle={modeStyle} handleModeChange={handleModeChange} />} />
      </Routes>
      {/* <About /> */}
    </BrowserRouter>

  );
}