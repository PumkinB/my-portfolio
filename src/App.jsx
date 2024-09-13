import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ScrollUp from "./components/ScrollUp";
import MySkill from "./components/Skill";

const Navigation = [
  { name: "About", link: "#about" },
  { name: "Skill", link: "#skill" },
  { name: "Portfolio", link: "#portfolio" },
];

const SocialLogo = [
  { name: "mail", link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#advanced-search/to=olipumknb%40gmail.com&query=in%3Asent&isrefinement=true&todisplay=Oliver+Chin" },
  { name: "logo-linkedin", link: "https://www.linkedin.com/in/oliver-chin-21970a294/" },
  { name: "logo-twitter", link: "/" },
  { name: "logo-github", link: "https://github.com/PumkinB?tab=repositories" },
];

const Skills = ["HTML5", "CSS3", "javaScript", "Bootstrap", "tailwindCSS", "reactJS", "nodeJS"];

const Biodata = [
  { field: "Email: ", data: "olipumknb@gmail.com" },
  { field: "Birthday: ", data: "Jakarta, 20 Agustus 2003" },
  { field: "Location: ", data: "Indonesia, Bekasi" },
];

const Projects = [
  {
    src: "project-bootstrap.png",
    link: "https://pumkinb.github.io/FoodieXpress/",
    code: "https://github.com/PumkinB/FoodieXpress",
    tools: ["Bootstrap"],
    title: "Landing Page",
    desc: "The FoodieXpress website is a Landing Page that uses Bootstrap for a responsive and modern appearance.",
  },
  {
    src: "weather-app.png",
    link: "https://pumkinb.github.io/Weather-App/",
    code: "https://github.com/PumkinB/Weather-App",
    tools: ["HTML5", "CSS3", "javaScript"],
    title: "Weather App",
    desc: "This Weather App is very useful for viewing the weather conditions of a city/region, and this Weather App uses HTML, CSS, and Javascript.",
  },
  {
    src: "e-commerce.png",
    link: "https://e-commerce-oliver.vercel.app/",
    code: "https://github.com/PumkinB/e-commerce",
    tools: ["reactJS", "javaScript"],
    title: "E-Commerce App",
    desc: "E-Commerce website is an online platform where goods and services are traded between buyers and sellers over the internet.  E-Commerce site can help you reach customers and showcase your offerings effectively.",
  },
  {
    src: "todolist.png",
    link: "https://todolist-one-silk.vercel.app/",
    code: "https://github.com/PumkinB/todolist",
    tools: ["reactJS", "javaScript"],
    title: "To do list App",
    desc: "I created to-do list app that helps users manage tasks efficiently. The app allows adding, editing, and marking tasks as complete. Its clean interface and intuitive design enhance productivity.",
  },
  {
    src: "animation-slider.png",
    link: "https://pumkinb.github.io/Animation-slider/",
    code: "https://github.com/PumkinB/Animation-slider",
    tools: ["HTML5", "CSS3", "javaScript"],
    title: "Animation Slider",
    desc: "I’ve created an Animation Slider, which was quite challenging due to its complexity. Using a blend of HTML, CSS, and JavaScript, I designed and built a dynamic slider that adds visual appeal to web content.",
  },
];

function App() {
  return (
    <>
      <Navbar Navigation={Navigation} />
      <Hero SocialLogo={SocialLogo} />
      <About Biodata={Biodata} />
      <MySkill Skills={Skills} />
      <Portfolio Projects={Projects} />
      <Footer SocialLogo={SocialLogo} />
      <ScrollUp />
    </>
  );
}

export default App;
