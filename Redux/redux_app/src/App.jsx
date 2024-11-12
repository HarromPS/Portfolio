import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';

function App() {
  return (
    <>
      <div className='center'>
        <Navbar />
        <Shop />
      </div>
    </>
  );
}

export default App;

