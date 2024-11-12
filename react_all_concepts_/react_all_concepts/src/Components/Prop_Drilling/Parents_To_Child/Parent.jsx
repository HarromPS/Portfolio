import React, { useState } from 'react'
import Child from "./Child";

const Parent = () => {
  const [color, setcolor] = useState('RED');

  const handleClick =()=>{
    if(color==="RED"){
      setcolor("BLUE");
    }else{
      setcolor("RED");
    }
  }
  return (
    <div>
        <button style={{fontWeight:"bold",cursor:"pointer",fontSize:"18px"}} onClick={handleClick}>This is a Parent Component and passing props to child</button>
        <p>&darr;</p>
        <Child color={color}/>
        
    </div>
  )
}

export default Parent