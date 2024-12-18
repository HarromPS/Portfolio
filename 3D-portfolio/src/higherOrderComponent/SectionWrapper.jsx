import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// Higher Order Component

// function returning function
const SectionWrapper = (Component, idName) =>
    function HOC() {
        const style = {
            maxWidth: '90rem'
        }
        return (
            <>
                <motion.section
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView='show'
                    viewport={{ once: true, amount: 0.25 }}
                    className={`${styles.padding} mx-auto relative z-0`}
                    style={style}
                >
                    {/* element having the id of the element to be scrolled */}
                    <span className="hash-span" id={idName}>
                        &nbsp;
                    </span>

                    {/* element to be displayed when a particular link is referred */}
                    <Component />
                </motion.section>
            </>
        )
    }

export default SectionWrapper;