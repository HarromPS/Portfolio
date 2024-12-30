import React from 'react';
import { useState } from 'react';
import '../../App.css';
// import Navbar from './navBar';

export default function Exercise_2(props) {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    // const handleBtnClick = (event) => {
    //   console.log("Button Pressed");
    // }

    const handleOnChange = (event) => {
        // event.target returns the target element on whose the event is occured
        let i = 0;
        setText(event.target.value);
        console.log(Array.from(text.split(" ")));
        if (event.target.value.length !== 0) {
            Array.from(text.split(" ")).forEach((e) => {
                if (e !== "") {
                    i++;
                }
            });
        }
        else {
            setCount(1);
        }
        setCount(i);
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
            props.handleChangingAlerts("success", "Converted to Lower Case");
        }
    }

    const handleClear = () => {
        setText("");
        if (props.alerts !== null || props.alerts !== undefined) {
            props.handleChangingAlerts("success", "Text Cleared");
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
            props.handleChangingAlerts("success", "Converted to Title Case");
        }
    }
    const handleCopy = () => {
        let tempText = document.getElementById("textBox");
        tempText.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(tempText.value).then(() => {
            return 1;
        }).catch(() => {
            return -1;
        });


        if (props.alerts !== null || props.alerts !== undefined) {
            props.handleChangingAlerts("success", "Text Copied");
        }
    }
    const handleExtraSpaces = () => {
        let chars = text.split(/[ ]+/);
        setText(String(chars.join(" ")));
        if (props.alerts !== null || props.alerts !== undefined) {
            props.handleChangingAlerts("success", "Removed Extra Spaces");
        }
    }
    const handleFind = () => {
        let find = document.getElementById("find");
        let tempText = text;
        tempText = tempText.replaceAll(`${find.value}`, `%${find.value}%`);
        setText(tempText);
        find.value = "";
        if (props.alerts !== null || props.alerts !== undefined) {
            props.handleChangingAlerts("success", "Marked the token");
        }

    }
    // console.log(props.mode);


    return (

        // A useState Hook will always be on top of any component like this
        <>
            {/* Wrapper */}
            <div className="container my-5">
                {/* form */}
                <div>
                    <div className="mb-3">
                        <label htmlFor="inputs" className="big-text form-label" style={{ color: props.mode }}>Enter the text to analyze below</label>
                        {/* Applying Event Handlers */}
                        <textarea type="text" id="textBox" value={text} onChange={handleOnChange} placeholder='Enter value here' className="form-control" aria-describedby="emailHelp" rows='8' />
                    </div>

                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>Convert To UpperCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>Convert To Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTitleCase}>Convert TitleCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length===0} className="btn btn-dark" onClick={handleCopy}>Copy Text</button>
                    <input className="form-control me-2 my-3" type="search" placeholder="Find a word here" aria-label="Search" id="find" />
                    <button disabled={text.length===0} className="btn btn-primary" onClick={handleFind}>Find</button>
                </div>

                <div className="analysed container my-3">
                    <h2 className="primary" style={{ color: props.mode }}>Text Summary</h2>
                    {/* <p className="my-1" style={{ color: props.mode }}>Words: {text.length === 0 ? 0 : count}</p> */}
                    <p className="my-1" style={{ color: props.mode }}>Words: {(text.split(/\s+/).filter((ele) => ele.length != 0).length)}</p>
                    <p className="my-1" style={{ color: props.mode }}>Characters: {text.length}</p>
                    <p className="my-1" style={{ color: props.mode }}>Characters Without Spaces: {text.length - text.split(" ").length + 1}</p>
                    <p className="my-1" style={{ color: props.mode }}>Read Time: {(text.split(" ").filter((ele) => ele.length != 0).length) ? parseFloat(0.008 * text.split(" ").length).toFixed(4):0} minutes</p>
                </div>

                <div className="container my-3">
                    <h2 className="primary" style={{ color: props.mode }}>Preview</h2>
                    <p style={{ color: props.mode }}>{text.length === 0 ? "Write something to show up here" : text}</p>

                </div>
            </div>
        </>
    );
}
