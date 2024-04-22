import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from '../constants';
import { fadeIn } from '../utils/motion';

// HOC
import {SectionWrapper} from "../higherOrderComponent/index";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          {/* <p>{title}</p> */}
          <div options={{
            max:45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt="" className='w-16 h-16 object contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>

      </Tilt>
    </>
  )
}
const About = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} py-4 `}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={
        fadeIn("", "", 0.1, 1)
      }
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        My name is Hariom P. Shivhare. I was born in Karanja (Lad), District Washim, Maharashtra, India. I am a 3rd-year undergraduate student pursuing my Bachelor of Technology from Shri Guru Gobind Singhji Institute of Engineering and Technology, Vishnupuri, Nanded, in the Information Technology branch. I have a strong career interest in technology, movies, and games.
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-20">
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About,"about");