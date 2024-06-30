import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = ({ Biodata }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-20 px-16 bg-primary text-white" id="about">
      <h1 className="text-center text-3xl font-bold text-secondary" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true">
        About
      </h1>
      <div className="flex my-12 flex-col md:flex-row">
        <div className="w-full md:w-1/2 lg:mx-10 flex justify-center">
          <img src="./images/man.png" alt="Oliver" className="h-60 w-60 hidden xl:block" data-aos="flip-up" data-aos-duration="3000" data-aos-once="true" />
          <p className="text-lg tracking-tight" data-aos="zoom-in" data-aos-once="true">
            Hello, nice to meet you! My name is Oliver Chin. Currently, I am pursuing my education at Dian Nusantara University, majoring in Information Technology (IT). Apart
            from my studies on campus, I am actively learning various techniques and applications related to AI tools and programming across different platforms. During my
            free time, I indulge in playing the piano and video games.
          </p>
        </div>
        <div className="w-full md:w-1/2 my-10 md:my-0 lg:mx-10 md:px-20">
          {Biodata.map((data) => (
            <div key={data.field} className="flex my-3">
              <h1 className="text-lg" data-aos="fade-right" data-aos-once="true">
                {data.field}
              </h1>
              <p className="mx-3 text-lg" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="400" data-aos-offset="0" data-aos-once="true">
                {data.data}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
