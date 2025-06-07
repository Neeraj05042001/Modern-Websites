import CallToAction from "./Sections/CallToAction";
import Features from "./Sections/Features";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import LogoTicker from "./Sections/LogoTicker";
import Testimonial from "./Sections/Testimonial";

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <LogoTicker/>
      <Features/>
      <Testimonial/>
      <CallToAction/>
      <Footer/>
    </>
  );
};

export default App;
