import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MySkill = ({ Skills }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-20 px-10 md:px-5 bg-gray-900" id="skill">
      <h1 className="text-center text-3xl font-bold text-secondary" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true">
        My Skill
      </h1>
      <div className="flex flex-wrap gap-10 justify-center items-center my-12" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
        {Skills.map((skill) => (
          <img key={skill} src={`/svg/${skill}.svg`} alt="SVG" className="h-24 w-24" />
        ))}
      </div>
    </div>
  );
};

export default MySkill;
