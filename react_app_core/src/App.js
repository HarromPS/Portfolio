// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AppNavbar from './MyAppComponents/AppNavbar';
// import {Home} from "./MyAppComponents/Home";
// import {Footer} from "./MyAppComponents/Footer";
import './App.css';
import SortArray from "./bubbleSort/SortArray";
import { Provider } from 'react-redux';
import store from "./bubbleSort/redux/reduxStore/store.js";

function App() {

  return (
    <>

      <div className='absolute bottom-0 left-1/2'>
        learn react
      </div>

      {/* 1st app  */}
      {/* <BrowserRouter>
      <AppNavbar/>
      <Routes>
        <Route exact path='/home' element={<Home/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter> */}

      {/* 2nd app */}

      {/* <div className='text-center flex align-center justify-center w-full h-full'>
          <p className='font-bold text-[18px]'>Sort the array using bubble sort by selecting a element</p>
          <Provider store={store}>
            <SortArray />
          </Provider>
        </div> */}

      {/* 3rd app */}

      <div>
        jedj
      </div>
    </>
  )
}

export default App;