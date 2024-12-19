import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from '../constants';
import { fadeIn } from '../utils/motion';
import PropTypes from 'prop-types';

const ServiceCard = ({ index, service }) => {
  return (
    <>
      <Tilt className='xs:w-[350px] w-full '>
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          {/* <p>{title}</p> */}
          <div data-options={JSON.stringify({
            max: 45,
            scale: 1,
            speed: 450
          })}
            className='bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col'
          >
            <p><service.icon /></p>
            <h3 className='text-white text-[20px] font-bold text-center'>{service.title}</h3>
            <div className='flex flex-wrap justify-center'>
              {
                service.tags.map((item, index) => {
                  return (
                    <>
                      <p key={index} className='m-2 p-2 border-2 rounded-lg text-center text-white' >{item}</p>
                    </>
                  )
                })
              }
            </div>
          </div>
        </motion.div>

      </Tilt>
    </>
  )
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired
};

const Skills = () => {
  return (
    <>
      <motion.div >
        <p className={`${styles.sectionSubText} py-4 `}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={
        fadeIn("", "", 0.1, 1)
      }
        className='mt-4 text-secondary text-justify text-[17px] max-w-3xl leading-[30px]'
      >
        My name is Hariom P. Shivhare. I am from Karanja (Lad), India. I am a B.Tech undergraduate specializing in Information Technology at SGGSIE&T, Nanded. I have a strong career interest in Programming, Development, Data structures & Algorithms, movies, and games.
      </motion.p>

      <div className="flex justify-center flex-wrap gap-10 mt-20">
        {
          services.map((service, index) => {
            return (
              <ServiceCard key={index} index={index} service={service} />
            )
          })
        }
      </div>
    </>
  )
}

export default Skills;