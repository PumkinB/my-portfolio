import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Footer = ({ SocialLogo }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-slate-900 py-10 text-white">
      <div className="relative">
        <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
          <div className="border border-white mx-10 w-full" data-aos="fade-right"></div>
          <div className="flex gap-4" data-aos="zoom-in">
            {SocialLogo.map((logo) => (
              <a key={logo.name} href={logo.link} className="text-3xl hover:text-secondary" target="_blank">
                <ion-icon name={logo.name}></ion-icon>
              </a>
            ))}
          </div>
          <div className="border border-white mx-10 w-full" data-aos="fade-left"></div>
        </div>
      </div>
      <div className="text-center my-10">
        <h1 className="font-bold text-xl mb-2">Oliver Chin</h1>
        <p className="font-semibold text-sm">Copyright &copy; Oliver Chin 2024</p>
      </div>
    </div>
  );
};

export default Footer;
