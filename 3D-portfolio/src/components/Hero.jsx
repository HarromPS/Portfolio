// import { motion } from "framer-motion";
import { styles } from "../styles";
import { portfolio } from "../constants/index";
// import { ComputersCanvas } from "./canvas";
import { LuBrainCircuit } from "react-icons/lu";
import { TbBrandCpp } from "react-icons/tb";

// typewriter effect
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <>
      <section className='relative w-full h-screen mx-auto '>
        <div className={`${styles.paddingX} absolute inset-0 h-full top-[120px] max-w-7xl mx-auto items-start gap-5 flex flex-col sm:flex-row `}>
          <div className="flex justify-center items-center mt-5">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            {/* name */}
            <div>
              <h1 className={`${styles.heroHeadText}`}>
                Hi, I&apos;m <span className='text-[#915eff]'>Hariom</span>
              </h1>
              <div className={`${styles.heroSubText} mt-2 text-white-100`}>
                I am a <br className='sm:block hidden ' />
                <Typewriter
                  onInit={(typewriter) => {
                    setInterval(() => {
                      typewriter
                        .typeString("Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Tech Innovator")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Problem Solver")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Student")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }, 7000)
                  }}
                />
              </div>
            </div>
          </div>

          <div className="xs:bottom-20 w-full flex justify-start lg:pb-1 pb-16 lg:pt-16 pt-8 items-center flex-col">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-lg opacity-30 animate-pulse">
                </div>
                <img src={portfolio.image} alt="Hariom Shivhare" className="relative rounded-full w-36 h-36 object-cover border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code2 h-5 w-5 text-indigo-500"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                <span>Mern Stack | </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-700"><LuBrainCircuit /></span>
                <span>Data Structures | </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-blue-700 text-[20px]"> <TbBrandCpp /></span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white mb-6 text-center animate-fade-in-delay">
              Mern Stack Developer | Data Structures | C++
            </p>

            <div className="flex justify-center gap-4">
              <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform text-center hover:-translate-y-1">Scroll Projects
              </a>
              <a href="#contact" className="px-6 py-3 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform text-center hover:-translate-y-1 border border-gray-100">Contact Me</a>
            </div>
            <div className="absolute lg:bottom-[15rem] bottom-[5rem] left-1/2 cursor-pointer">
              <a href="#skills" >
                <div className="transform -translate-x-1/2 animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-6 w-6 text-gray-400"><path d="m6 9 6 6 6-6"></path></svg>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Computer canvas */}
        {/* <ComputersCanvas /> */}

        {/* button to move forward created using framer motion */}
        {/* <div className="relative xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
          <a href="/about">
            <div className='w-[35px] h-[64px] cursor-pointer rounded-3xl border-4 border-white flex justify-center  items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className='w-3 h-3 rounded-full bg-white mb-1'
              />
            </div>
          </a>
        </div> */}

      </section>
    </>
  )
}

export default Hero;