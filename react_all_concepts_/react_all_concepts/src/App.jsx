// import { useState } from 'react'
// import Portal_ from './Components/Portal_/Portal_'
// import Suspence_ from './Components/Suspense_/Suspense_'
// import PropDrilling from './Components/Prop_Drilling/PropDrilling';
import NestedComponents from './Components/NestedComponents';
import './App.css';
import Hero from "./Components/Hero";
import Login from "./Components/Login";
import Login1 from "./Components/Login1";

// routing in react 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// recommended to use outside a react component 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/login1",
    element: <Login1 />
  }
]);

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-3xl font-bold run'>Hello world</div>

      {/* <Portal_/>
      <PropDrilling/> */}
      {/* <Suspence_/> */}
      
      <NestedComponents />
      <RouterProvider router={router} />
    </>
  )
}

export default App
