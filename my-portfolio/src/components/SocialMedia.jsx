import { motion } from 'framer-motion';
import { styles } from '../styles';
// import { SectionWrapper } from '../higherOrderComponent/index';
import { fadeIn, textVariant } from '../utils/motion';
import { socialMedia } from "../constants/index";
import PropTypes from 'prop-types';

const SocialIcons = ({ item, index }) => {
    return (
        <>
            <motion.div
                variants={fadeIn("up", 'spring', 0.5 * index * 0.75)}
                className='p-2 bg-black-200 '
            >

                <a href={(item.type === 'mail' ? `mailto:${item.link}` : (item.type === 'number' ? `tel:${item.link}` : item.link))} rel="noopener noreferrer" target='_blank' className='object-cover text-center cursor-pointer'>
                    <item.icon className='h-[30px] w-[30px]'/>
                </a>
            </motion.div>
        </>
    )
}

SocialIcons.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        link: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

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
                    {
                        socialMedia.map((items, index) => {
                            return (
                                <SocialIcons key={index} item={items} index={index} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}


export default SocialMedia;