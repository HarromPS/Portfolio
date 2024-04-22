// Imports for the app
import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, Tech} from "./components";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Navbar and Hero */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>

        {/* Below sections */}
        <About/>
        <Experience/>
        <Tech/>
        <SocialMedia/>
        {/* <Works/> */}
        {/* <Feedbacks/> */}

        {/* Contact section */}
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App


/*
3 ways to open react vite on android phone

1) make firewall off, npm run dev -- - host
2) package.josn -> scripts:{
        "host":"vite --host"
      }
      npm run host
3) in vite.config file, below plugins
server:{
  host:true
}

npm run dev
*/