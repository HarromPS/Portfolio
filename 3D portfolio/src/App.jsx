// Imports for the app
import { BrowserRouter } from "react-router-dom";
// import {Contact, WorkExperience, Hero, Navbar, StarsCanvas, Projects} from "./components";
import { Hero, Navbar, StarsCanvas } from "./components";
// import SocialMedia from "./components/SocialMedia";
import {
  SkillsSectionWrapper,
  ProjectsSectionWrapper,
  WorkExperienceSectionWrapper,
  SocialMediaSectionWrapper,
  ContactsSectionWrapper

} from "./components/main";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          {/* Navbar and Hero */}
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          {/* Below sections */}
          {/* <Skills/> */}
          <SkillsSectionWrapper />
          <ProjectsSectionWrapper />
          <WorkExperienceSectionWrapper />
          <SocialMediaSectionWrapper />
          {/* <Tech/> */}
          {/* <Feedbacks/> */}

          {/* Contact section */}
          <div className="relative z-0">
            <ContactsSectionWrapper />
            <StarsCanvas />
          </div>
          <div className="footer bg-primary h-[50px] align-middle text-center">
            © 2024 Hariom Shivhare | Lets connect & grow
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