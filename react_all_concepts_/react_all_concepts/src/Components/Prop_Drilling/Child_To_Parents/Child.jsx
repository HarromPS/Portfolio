import React from 'react'

const Child = (props) => {

  // way 1 
  const sendData=()=>{
    let data="Hello"

    // function is called in child component
    props.functionCallback(data);
  }

  return (
    <div>

      {/* way 2: directly */}
      <button style={{ fontWeight: "bold", cursor: "pointer", fontSize: "18px" }} onClick={sendData} >Child</button>
      <br />
      <button style={{ fontWeight: "bold", cursor: "pointer", fontSize: "18px" , marginTop:"40px"}} onClick={()=>{props.functionCallback("World")}} >Child</button>
    </div>
  )
}

export default Child