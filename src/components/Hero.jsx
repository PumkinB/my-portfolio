import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = ({ SocialLogo }) => {
  const [text] = useTypewriter({
    words: ["Student.", "Developer.", "Front-End."],
    loop: {},
    typeSpeed: 120,
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen text-white bg-primary flex flex-col md:flex-row" id="home">
      <div className="w-full md:w-1/2 px-12 md:px-20 py-5 md:py-56" data-aos="fade-right" data-aos-easing="ease-in-sine">
        <h1 className="text-4xl my-4 text-secondary">
          Hello<span className="text-white">, I'm Oliver Chin.</span>
        </h1>
        <h3 className="text-3xl my-4">
          I'm A <span className="text-secondary">{text}</span>
          <span className="text-secondary">
            <Cursor />
          </span>
        </h3>

        <div className="flex gap-5 my-4">
          {SocialLogo.map((logo) => (
            <a key={logo.name} href={logo.link} target="_blank" className="text-3xl hover:text-secondary">
              <ion-icon name={logo.name}></ion-icon>
            </a>
          ))}
        </div>
        <button className="transition ease-in-out delay-100 bg-purple-800  my-4 py-3 px-5 rounded-xl block text-xl hover:-translate-y-1 hover:scale-110 hover:bg-purple-900 duration-200 active:opacity-80 active:transition-none active:scale-105 active:duration-0  font-semibold tracking-widest">
          Hire me
        </button>
      </div>
      <div className="w-full md:w-1/2 px-12 md:px-20 py-10 md:py-36 flex justify-center" data-aos="fade-left" data-aos-easing="ease-in-sine">
        <div id="profile-animation" className="overflow-hidden">
          <img src="./images/man.png" alt="Oliver" className="bg-cover bg-center" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
