import React from 'react';
import { useState } from 'react';
import '../../App.css';
// import Navbar from './navBar';

export default function Exercise_1(props) {
  const [text, setText] = useState("");

  // const handleBtnClick = (event) => {
  //   console.log("Button Pressed");
  // }

  const handleOnChange = (event) => {
    // event.target returns the target element on whose the event is occured
    setText(event.target.value);
    // console.log(event.target.value,"hello");
  }

  const handleUpperCase = () => {
    // let upperStr = "";
    // upperStr = upperStr + String(event.target.value);
    // // upperStr.toUpperCase();
    // console.log(event.target.value,"hello");

    let newText = text;
    newText = newText.toUpperCase();
    setText(newText);
    if (props.alerts !== null || props.alerts !== undefined) {
      const fun = () => {
        props.handleChangingAlerts("success", "Converted to Upper Case");
      }
      fun();
    }
  }

  const handleLowerCase = () => {
    let newText = text;
    newText = newText.toLowerCase();
    setText(newText);
    if (props.alerts !== null || props.alerts !== undefined) {
      props.handleChangingAlerts("success","Converted to Lower Case");
    }
  }

  const handleClear = () => {
    setText("");
    if (props.alerts !== null || props.alerts !== undefined) {
      props.handleChangingAlerts("success","Text Cleared");
    }
  }

  const handleTitleCase = () => {
    let arr = text.split(" ");
    let newtext = "";
    arr.forEach((ele) => {
      newtext += ele.charAt(0).toUpperCase() + ele.substring(1, ele.length) + " ";
    });
    setText(newtext);
    if (props.alerts !== null || props.alerts !== undefined) {
      props.handleChangingAlerts("success","Converted to Title Case");
    }
  }
  const handleCopy = () => {
    let tempText = document.getElementById("textBox");
    tempText.select();
    navigator.clipboard.writeText(tempText.value).then(() => {
      return 1;
    }).catch(() => {
      return -1;
    });


    if (props.alerts !== null || props.alerts !== undefined) {
      props.handleChangingAlerts("success","Text Copied");
    }
  }
  const handleExtraSpaces = () => {
    let chars = text.split(/[ ]+/);
    setText(String(chars.join(" ")));
    if (props.alerts !== null || props.alerts !== undefined) {
      props.handleChangingAlerts("success","Removed Extra Spaces");
    }
  }
  const handleFind = () => {
    let find = document.getElementById("find");
    let tempText = text;
    tempText = tempText.replaceAll(`${find.value}`, `%${find.value}%`);
    setText(tempText);
    find.value = "";
    if (props.alerts !== null || props.alerts !== undefined) {
      props.handleChangingAlerts("success","Marked the token");
    }
  }


  return (

    // A useState Hook will always be on top of any component like this
    <>
      {/* Wrapper */}
      <div className="container my-5">
        {/* form */}
        <div>
          <div className="mb-3">
            <label htmlFor="inputs" className="big-text form-label" style={{ color: props.mode === 'dark' ? "white" : "black" }}>Enter the text to analyze below</label>
            {/* Applying Event Handlers */}
            <textarea type="text" id="textBox" value={text} onChange={handleOnChange} placeholder='Enter value here' className="form-control" aria-describedby="emailHelp" rows='8' />
          </div>

          <button className="btn btn-primary" onClick={handleUpperCase}>Convert To UpperCase</button>
          <button className="btn btn-primary" onClick={handleLowerCase}>Convert To Lowercase</button>
          <button className="btn btn-primary" onClick={handleTitleCase}>Convert TitleCase</button>
          <button className="btn btn-primary" onClick={handleClear}>Clear Text</button>
          <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className="btn btn-dark" onClick={handleCopy}>Copy Text</button>
          <input className="form-control me-2 my-3" type="search" placeholder="Find a word here" aria-label="Search" id="find" />
          <button className="btn btn-primary" onClick={handleFind}>Find</button>
        </div>

        <div className="analysed container my-3">
          <h2 className="primary" style={{ color: props.mode === 'dark' ? "white" : "black" }}>Text Summary</h2>
          <p className="my-1" style={{ color: props.mode === 'dark' ? "white" : "black" }}>Words: {text.length === 0 ? 0 : text.split(" ").length}</p>
          <p className="my-1" style={{ color: props.mode === 'dark' ? "white" : "black" }}>Characters: {text.length}</p>
          <p className="my-1" style={{ color: props.mode === 'dark' ? "white" : "black" }}>Characters Without Spaces: {text.length - text.split(" ").length + 1}</p>
          <p className="my-1" style={{ color: props.mode === 'dark' ? "white" : "black" }}>Read Time: {parseFloat(0.008 * text.split(" ").length).toFixed(4)} minutes</p>
        </div>

        <div className="container my-3">
          <h2 className="primary" style={{ color: props.mode === 'dark' ? "white" : "black" }}>Preview</h2>
          <p style={{ color: props.mode === 'dark' ? "white" : "black" }}>{text.length === 0 ? "Write something to show up here" : text}</p>

        </div>
      </div>
    </>
  );
}





// function getWords(){
//   let word = "Hello ";
//   let ans = word.split("  ");
//   console.log(ans);
//   let len=0;
//   ans.forEach((ele)=>{
//     if(ele!==" "){
//       console.log(ele);
//       len+=1;
//     }
//   });

//   console.log(len);
//   // console.log(word.split(" ").length);
// }
// getWords();