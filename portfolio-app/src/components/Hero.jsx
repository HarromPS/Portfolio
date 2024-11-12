import React, { useEffect } from 'react'
// import { motion } from "framer-motion";
import { styles } from "../styles";
import { portfolio } from "../constants/index";
// import { ComputersCanvas } from "./canvas";

// typewriter effect
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <>
      <section className=' relative w-full h-screen mx-auto '>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto items-start gap-5 flex flex-col sm:flex-row`}>
          <div className="flex justify-center items-center mt-5">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            {/* name */}
            <div>
              <h1 className={`${styles.heroHeadText}`}>
                Hi,&nbsp;I'm <span className='text-[#915eff]'>Hariom</span>
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
          <div className="xs:bottom-20 w-full flex justify-center justify-center items-center flex flex-col">
            <div className='py-5 px-12 min-h-[280px] flex flex-row sm:flex-col justify-evenly items-center '>
              <img src={portfolio.image} alt={portfolio.name} className='sm:w-40 w-24 mx-5 rounded-full object-cover' />
              <h2 className={`${styles.sectionHeadText}items-center justify-center`}>{portfolio.name}</h2>
            </div>
              <p className={`${styles.sectionSubText} sm:block hidden items-center justify-center mb-10`}>{portfolio.description}</p>
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