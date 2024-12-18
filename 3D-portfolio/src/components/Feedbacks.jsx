import { motion } from 'framer-motion';
import { styles } from '../styles';
// import { SectionWrapper } from '../higherOrderComponent/index';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import PropTypes from 'prop-types';

const TestimonialsCard = ({item,index}) => {
  return (
    <>
      <motion.div
        variants={fadeIn("", 'spring', 0.5 * index * 0.75)}
        className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
      >
        <p className="text-white font-black text-[48px]">&quot;</p>

        <div className="mt-1">
          <p className='text-white tracking-wider text-[18px]'>{item.testimonial}</p>
          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className='text-white font-medium text-[16px]'>
                <span className='blur-text-radient'>@</span>{item.name}
              </p>
              <p className='mt-1 text-secondary text-[12px]'>
                {item.designation} of {item.name}
              </p>
            </div>

            <img src={item.image} alt={item.name} className={`w-10 h-10 rounded-full object-cover`}/>
          </div>
        </div>
      </motion.div>
    </>
  )
}

TestimonialsCard.propTypes = {
  item: PropTypes.shape({
    testimonial: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};


const Feedbacks = () => {
  return (
    <>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
          <motion.div
            variants={textVariant()}
          >
            <p className={`${styles.sectionSubText}`}>What Others Say</p>
            <h2 className={`${styles.sectionHeadText}`}>Testmoniols.</h2>
          </motion.div>
        </div>

        <div className={`${styles.padding} pb-14 flex flex-wrap gap-7 -mt-20`}>
          {
            testimonials.map((items, index) => {
              return (
                <TestimonialsCard key={index} item={items} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Feedbacks;