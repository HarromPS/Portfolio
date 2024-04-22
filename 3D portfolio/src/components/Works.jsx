import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../higherOrderComponent/index';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = (props) => {
  // console.log(props.item.name);
  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * props.index, 0.75)}
      >
        <Tilt
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
        >
          <div className="relative w-full h-[230px]">
            <img src={props.item.image} alt={props.item.name} className='w-full h-full object-cover rounded-2xl' />

            <div className="absolute inset-0 flex justify-end m-2 card-img-hover">
              <div
                onClick={() => {
                  window.open(props.item.source_code_link, "_blank")
                }}
                className='black-gradient w-10 h-10 rounded-full justify-center flex items-center cursor-pointer'
              >
                <img src={github} alt={github} className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className='text-white font-bold text-[24px]'>{props.item.name}</h3>
            <p className='text-secondary text-[14px]'>{props.item.description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {
              props.item.tags.map((items, index) => {
                return (<p key={index} className={`text-[14px] ${items.color}`}>#{items.name}</p>)
              })
            }
          </div>
        </Tilt>
      </motion.div>
    </>
  );
}
const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae natus id ut dolores unde facere nostrum tenetur ab reiciendis quis eius mollitia a maxime, ratione, praesentium reprehenderit obcaecati!
          Aliquid possimus dignissimos sunt praesentium, odit dolor cum quos quis ipsa nemo maiores error doloremque.
        </motion.p>

      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {
          projects.map((items, index) => {
            // ...projects represents the whole array of objects (element at each index is split and passed to the component below)
            return (<ProjectCard key={index} index={index} item={items} />)
          })
        }
      </div>
    </>
  )
}

// not a button on navbar to get targeted
export default SectionWrapper(Works, "");