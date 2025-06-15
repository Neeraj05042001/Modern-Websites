import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Tape from "./Sections/Tape";
import Testimonial from "./Sections/Testimonial";

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Tape/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
    </>
  );
};

export default App;
