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
          <div className="flex items-center justify-center mt-5">
            <div className="flex flex-col items-center justify-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#050816]" />
              <div className="w-1 h-40 sm:h-80 bg-gradient-to-b from-black to-transparent" />
            </div>

            {/* name */}
            <div>
              <h1 className={`${styles.heroHeadText}`}>
                Hi, I&apos;m <span className='text-[#050816]'>Hariom</span>
              </h1>
              <div className={`${styles.heroSubText} mt-2 text-gray-400`}>
                I am a <br className='hidden sm:block ' />
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

          <div className="flex flex-col items-center justify-start w-full pt-8 pb-16 xs:bottom-20 lg:pb-1 lg:pt-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600 to-gray-200 blur-lg opacity-30 animate-pulse">
                </div>
                <img src={portfolio.image} alt="Hariom Shivhare" className="relative object-cover transition-transform duration-300 border-4 border-white rounded-full shadow-xl w-36 h-36 hover:scale-105" />
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-indigo-500 lucide lucide-code2"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                <span className="text-black">Mern Stack |</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-700"><LuBrainCircuit /></span>
                <span className="text-black">Data Structures |</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-blue-700 text-[20px]"><TbBrandCpp /></span>
              </div>
            </div>


            <div className="flex justify-center gap-4 lg:flex-col-reverse sm:flex-row" >
              <div className="flex justify-center gap-4">
                <a href="#projects">
                  <div
                    className="px-6 py-3 text-center text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-gray-700 to-gray-500 hover:shadow-xl hover:-translate-y-1"
                  >
                    Scroll Projects
                  </div>
                </a>
                <a
                  href="#contact"
                >
                  <div className="px-6 py-3 text-center text-gray-800 transition-all duration-300 transform bg-white border border-black rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Contact Me
                  </div>
                </a>
              </div>


              <div className="hidden mb-6 text-lg text-center text-black lg:block md:text-xl animate-fade-in-delay">
                Mern Stack Developer | Data Structures | C++
              </div>
            </div>


            <div className="absolute lg:bottom-[15rem] hidden sm:block bottom-[5rem] left-1/2 cursor-pointer">
              <a href="#skills" >
                <div className="transform -translate-x-1/2 animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-400 lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"></path></svg>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Computer canvas */}
        {/* <ComputersCanvas /> */}

        {/* button to move forward created using framer motion */}
        {/* <div className="relative flex items-center justify-center w-full xs:bottom-10 bottom-32 ">
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
                className='w-3 h-3 mb-1 bg-white rounded-full'
              />
            </div>
          </a>
        </div> */}

      </section>
    </>
  )
}

export default Hero;