// import Tilt from 'react-parallax-tilt';
// import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { github } from '../assets';
import { projects } from '../constants';
// import { fadeIn } from '../utils/motion';
// import { styles } from '../styles';


const ProjectCard = ({ item }) => {
  // console.log(props.item.name);
  return (
    <>
      <div
        // variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      >
        <div
          className='bg-tertiary lg:min-h-[500px] p-5 rounded-2xl sm:w-[360px] w-full '
          // data-options={{
          //   max: 45,
          //   scale: 1,
          //   speed: 450
          // }}
        >
          <div className="relative w-full xs:h-[230px]">
            <img src={item.image} alt={item.name} className='object-cover w-full h-full rounded-2xl' />

            <div className="absolute inset-0 flex justify-end m-2 card-img-hover">
              <div
                onClick={() => {
                  window.open(item.source_code_link, "_blank")
                }}
                className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient'
              >
                <img src={github} alt={github} className='object-contain w-1/2 h-1/2' />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className='text-white font-bold text-[24px]'>{item.name}</h3>
            <p className='text-white text-justify text-[14px]'>{item.description}</p>
          </div>

          <div className="flex flex-wrap justify-start gap-2 mt-4">
            {
              item.tags.map((items, index) => {
                return (<p key={index} className={`text-[14px] ${items.color}`}>#{items.name}</p>)
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

// Define PropTypes for validation
ProjectCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    source_code_link: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};


const Projects = () => {
  return (
    <>
      <div
        // variants={textVariant()}
      >
        <p className={`sm:text-[18px] text-[14px] text-black uppercase tracking-wider`}>My Projects</p>
        <h2 className={`text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Projects.</h2>
      </div>

      <div className="flex w-full">
        <p
          // variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-justify text-[17px] max-w-3xl leading-[30px]'
        >
         Explore a diverse range of projects showcasing expertise in programming, development, and innovative problem-solving.
        </p>

      </div>

      <div className="flex flex-wrap justify-center mt-20 gap-7">
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
export default Projects;