import React from 'react';

function ColorPalette(props) {
  // Marking the color when a user clicks a particular color
  const markColor = (event) => {
    let color = document.querySelectorAll(".colors");
    let nm = Array.from(event.target.className.split("-"));
    Array.from(color).forEach((ele) => {
      let temp = Array.from(ele.className.split("-"));
      if(temp[temp.length - 1] === nm[nm.length - 1]){
        ele.style.border = "2px solid black";
        ele.style.transform = "scale(1.1)";
        props.handleModeChange(String(temp[temp.length - 1]));
      }
      else{
        ele.style.transform = "none";
        ele.style.border = "none";
      }
      // console.log(temp[temp.length - 1] === nm[nm.length - 1]);
    });
  }


  return (
    <div id="color-palette">
      <button onClick={markColor} className="colors palette-btn-warning"></button>
      <button onClick={markColor} className="colors palette-btn-danger"></button>
      <button onClick={markColor} className="colors palette-btn-success"></button>
      <button onClick={markColor} className="colors palette-btn-primary"></button>
      <button onClick={markColor} className="colors palette-btn-info"></button>
      <button onClick={markColor} className="colors palette-btn-dark"></button>
      <button onClick={markColor} className="colors palette-btn-light"></button>
      {/* <button onClick={markColor} className="colors palette-btn-secondary"></button> */}
    </div>
  );
}

export default ColorPalette;