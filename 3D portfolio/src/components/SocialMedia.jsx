import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../higherOrderComponent/index';
import { fadeIn, textVariant } from '../utils/motion';
import { socialMedia } from "../constants/index";

const SocialIcons = (props) => {
    const { name, icon, link } = props.item;
    return (
        <>
            <motion.div
                variants={fadeIn("up", 'spring', 0.5 * props.index * 0.75)}
                className='bg-black-200 p-10 rounded-3xl xs:w-[150px] w-full'
            >
                <a href={`mailto:${socialMedia[3].link}`} rel="noopener noreferrer" target='_blank'><img src={socialMedia[3].icon} alt={socialMedia[3].name} className={`w-15 h-15 rounded-full object-cover cursor-pointer`} /></a>
            </motion.div>
        </>
    )
}
const SocialMedia = () => {
    return (
        <>
            <div className="mt-12 bg-tertiary rounded-[20px]">
                <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
                    <motion.div
                        variants={textVariant()}
                    >
                        <p className={`${styles.sectionSubText}`}>Join Me on</p>
                        <h2 className={`${styles.sectionHeadText}`}>Social Media.</h2>
                    </motion.div>
                </div>

                <div className={`${styles.padding} cursor-pointer min-h-[80px] min-w-[80px] pb-14 flex flex-wrap gap-7 -mt-40`}>
                    {/* {
                        socialMedia.map((items, index) => {
                            return (
                                <SocialIcons key={index} item={items} />
                            )
                        })
                    } */}

                    <motion.div
                        variants={fadeIn("up", 'spring', 0.5 * 0 * 0.75)}
                        className='bg-black-200 p-10 rounded-3xl xs:w-[150px] w-full'
                    >
                        <a href={`tel:${socialMedia[0].link}`} rel="noopener noreferrer" target='_blank'><img src={socialMedia[0].icon} alt={socialMedia[0].name} className={`w-15 h-15 rounded-full object-cover cursor-pointer`} /></a>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 'spring', 0.5 * 1* 0.75)}
                        className='bg-black-200 p-10 rounded-3xl xs:w-[150px] w-full'
                    >
                        <a href={socialMedia[1].link} rel="noopener noreferrer" target='_blank'><img src={socialMedia[1].icon} alt={socialMedia[1].name} className={`w-15 h-15 rounded-full object-cover cursor-pointer`} /></a>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 'spring', 0.5 * 2 * 0.75)}
                        className='bg-black-200 p-10 rounded-3xl xs:w-[150px] w-full'
                    >
                        <a href={socialMedia[2].link} rel="noopener noreferrer" target='_blank'><img src={socialMedia[2].icon} alt={socialMedia[2].name} className={`w-15 h-15 rounded-full object-cover cursor-pointer`} /></a>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 'spring', 0.5 * 3 * 0.75)}
                        className='bg-black-200 p-10 rounded-3xl xs:w-[150px] w-full'
                    >
                        <a href={socialMedia[3].link} rel="noopener noreferrer" target='_blank'><img src={socialMedia[3].icon} alt={socialMedia[3].name} className={`w-15 h-15 rounded-full object-cover cursor-pointer`} /></a>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 'spring', 0.5 * 4 * 0.75)}
                        className='bg-black-200 p-10 rounded-3xl xs:w-[150px] w-full'
                    >
                        <a href={socialMedia[4].link} rel="noopener noreferrer" target='_blank'><img src={socialMedia[4].icon} alt={socialMedia[3].name} className={`w-15 h-15 rounded-full object-cover cursor-pointer`} /></a>
                    </motion.div>
                </div>
            </div>
        </>
    )
}


export default SectionWrapper(SocialMedia, "");