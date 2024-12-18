import { BallCanvas } from "../components/index";
import { technologies } from "../constants/index";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {
          technologies.map((tech, index) => {
            return (<div className="w-28 h-28" key={index}>
              <BallCanvas icon={tech.icon} />
            </div>)
          })
        }
      </div>
    </>
  )
}
export default Tech;