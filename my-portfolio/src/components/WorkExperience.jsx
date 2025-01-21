// import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import PropTypes from 'prop-types';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants/index';
// import { textVariant } from '../utils/motion';
// import { styles } from '../styles';


const WorkExperienceCard = ({ experience, index }) => {
  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          background: '#1d1836',
          color: '#fff'
        }}
        contentArrowStyle={{
          borderRight: '7px solid #232631'
        }}
        date={experience.date}
        iconStyle={{
          background: experience.iconBg
        }}
        icon={
          <div className='flex items-center justify-center w-full h-full'>
            <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
          </div>
        }
      >
        <div className={`flex justify-center ${index % 2 == 0 ? "items-end" : "items-start"} flex-col w-full h-full`}>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p className='text-white font-semibold text-[16px]' style={{ margin: 0 }}>
            {experience.company_name}</p>
        </div>
        <ul className='mt-5 ml-5 space-y-2 list-disc'>
          {
            experience.points.map((point, index) => {
              return (<li
                key={`experience-point${index}`}
                className='text-white-100  text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>)

            })}
        </ul>
      </VerticalTimelineElement>
    </>
  );
}

// Define PropTypes for validation
WorkExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    points: PropTypes.array.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const WorkExperience = () => {
  return (
    <>
      <div>
      <p className={`sm:text-[18px] text-[14px] text-black uppercase tracking-wider`}>What I Have Done So Far</p>
      <h2 className={`text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Work Experience.</h2>

      </div>

      <div className="mt-20 flex-flex-col">
        <VerticalTimeline 
        lineColor={`black`}>
          {
            experiences.map((exp, index) => {
              return (
                <WorkExperienceCard key={index} index={index} experience={exp} />
              );
            })
          }
        </VerticalTimeline>
      </div>
    </>
  )
}

export default WorkExperience;