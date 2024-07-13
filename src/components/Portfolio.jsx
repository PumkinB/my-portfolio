import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portfolio = ({ Projects }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-20 px-12 md:px-0 bg-primary" id="portfolio">
      <h1 className="text-center text-3xl font-bold text-secondary" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true">
        Portfolio
      </h1>
      <h1 className="text-center text-2xl font-semi text-white my-10">Here's my project</h1>
      <div className="flex justify-center flex-wrap gap-10" data-aos="fade-up" data-aos-once="true">
        {Projects.map((project) => (
          <div key={project.title} className="max-w-lg md:max-w-xl text-white md:mx-5 my-6 md:my-7 bg-black py-6 px-5 rounded-lg shadow-3xl shadow-white">
            <div className="rounded-lg overflow-hidden relative">
              <a href={project.link} target="_blank">
                <img src={`./images/${project.src}`} alt="" />
              </a>
              <div className="absolute bottom-0 right-2">
                <div className="flex justify-center gap-3 px-2 py-2">
                  {project.tools?.map((tool) => (
                    <div key={tool} className={`h-8 w-8 md:h-12 ${tool === "Bootstrap" ? "md:w-14" : "md:w-12"}`}>
                      <img src={`./svg/${tool}.svg`} alt={tool} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="font-bold text-xl md:text-2xl block my-3 text-purple-100 w-fit">{project.title}</div>
            <p className="tracking-wide text-lg md:text-lg">{project.desc}</p>
            <div className="flex gap-4 my-2 cursor-pointer">
              <a href={project.link} target="_blank" className="rounded-md bg-purple-800 hover:bg-purple-900 px-4 py-2 font-semibold text-lg">
                View
              </a>
              <a href={project.code} target="_blank" className="rounded-md bg-slate-800 hover:bg-slate-900 px-4 py-2 font-semibold text-lg">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
