import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
  const [data, setdata] = useState("None");

  // a function(callback function) is passed to child as prop and as required, child calls function from child component
  // with an argument to the function, it updates the value in parent's component
  const handleData=(value)=>{
    setdata(value);
  };

  return (
    <>
      <div style={{ marginTop:"40px"}}>This is a Parent & gets a Function Callback: {data}</div>
      <p>&uarr;</p>
      <Child functionCallback={handleData}/>
    </>
  )
}

export default Parent