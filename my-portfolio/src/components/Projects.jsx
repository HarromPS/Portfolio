// import Tilt from 'react-parallax-tilt';
// import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
// import { fadeIn } from '../utils/motion';


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
            <img src={item.image} alt={item.name} className='w-full h-full object-cover rounded-2xl' />

            <div className="absolute inset-0 flex justify-end m-2 card-img-hover">
              <div
                onClick={() => {
                  window.open(item.source_code_link, "_blank")
                }}
                className='black-gradient w-10 h-10 rounded-full justify-center flex items-center cursor-pointer'
              >
                <img src={github} alt={github} className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className='text-white font-bold text-[24px]'>{item.name}</h3>
            <p className='text-secondary text-justify text-[14px]'>{item.description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 justify-start">
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
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p
          // variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-justify text-[17px] max-w-3xl leading-[30px]'
        >
         Explore a diverse range of projects showcasing expertise in programming, development, and innovative problem-solving.
        </p>

      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
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