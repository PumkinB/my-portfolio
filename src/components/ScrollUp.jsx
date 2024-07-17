import { useEffect, useState } from "react";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY >= 560);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`fixed right-6 md:right-10 rounded-full bg-purple-700 py-2 px-2 text-white flex justify-center text-4xl hover:opacity-80 animate-bounce ${
        isVisible ? "bottom-[75px] md:bottom-10" : "bottom[-20%]"
      }`}
    >
      <ion-icon name="arrow-round-up"></ion-icon>
    </a>
  );
};

export default ScrollUp;
