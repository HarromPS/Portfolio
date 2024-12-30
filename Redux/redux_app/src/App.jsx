import React from 'react';
import './App.css';
import logo from "./logo.svg";
import Counter from './Redux/components/Counter';

// import Navbar from './Components/Navbar';
// import Shop from './Components/Shop';

function App() {
  return (
    <>
      <div className='center'>
        {/* <Navbar />
        <Shop /> */}
      </div>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Counter />
          
        </header>
      </div>
    </>
  );
}

export default App;

