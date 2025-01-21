// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AppNavbar from './MyAppComponents/AppNavbar';
// import {Home} from "./MyAppComponents/Home";
// import {Footer} from "./MyAppComponents/Footer";
import './App.css';
// import SortArray from "./bubbleSort/SortArray";
// import { Provider } from 'react-redux';
// import store from "./bubbleSort/redux/reduxStore/store.js";

// import MemoComponent from "./MemoComponent/MemoComponent";

// import MemoFunction from './MemoFunction/MemoFunction';

import ReactApp from "./ReactCore/ReactApp";

function App() {

  return (
    <>
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

      {/* <div className='App-header'>
        <MemoComponent/>
      </div> */}

      {/* 4th app */}
      {/* <div className='App-header'>
        <p className='mb-4'> learn react</p>
        <MemoFunction/>
      </div> */}

      <div className='App-header'>
        <p className='mb-4'> learn react</p>
        <ReactApp/>
      </div>
    </>
  );
}

export default App;