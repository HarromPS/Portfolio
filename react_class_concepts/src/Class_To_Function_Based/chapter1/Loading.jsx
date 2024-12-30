import React from 'react'
import loader from "./spinner.gif";

const Loader = () => {
  return (
    <div className="text-center">
      <img src={loader} alt="loader" />
    </div>
  );
}

export default Loader