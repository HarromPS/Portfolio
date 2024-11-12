import { useState } from 'react'
import Portal_ from './Components/Portal_/Portal_'
import Suspence_ from './Components/Suspense_/Suspense_'
import PropDrilling from './Components/Prop_Drilling/PropDrilling';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='text-3xl font-bold'>Hello world</div>
    <Portal_/>
    <Suspence_/>
    <PropDrilling/>
    </>
  )
}

export default App
