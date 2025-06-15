import ArrowDown from "../assets/icons/arrow-down.svg?react";
import grainImage from "../assets/images/grain.jpg";
import HeroOrbit from "../Components/HeroOrbit.jsx"
import SParkleIcon from "../Components/SparkleIcon";
import ReactTypingEffect from "react-typing-effect";
import { Typewriter } from "react-simple-typewriter";
import myPic from "../assets/images/my-pic.png";


const Hero = () => {
   const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <SParkleIcon
          size={430}
          rotation={-14}
          sparkleSize={32}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        />
        <SParkleIcon
          size={440}
          rotation={79}
          sparkleSize={20}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        />
        <SParkleIcon
          size={530}
          rotation={178}
          sparkleSize={40}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        />
        <HeroOrbit
          size={550}
          rotation={20}
          starSize={48}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        />
        <HeroOrbit
          size={590}
          rotation={98}
          starSize={32}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        />
        <SParkleIcon
          size={710}
          rotation={144}
          sparkleSize={56}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="6s"
        />
        <HeroOrbit
          size={800}
          rotation={-72}
          starSize={112}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        />

        {/* <HeroOrbit size={800} rotation={-72} starSize={112}/> */}
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <img
            className="size-[100px]"
            src={myPic}
            alt="person peeking from behind computer"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-400 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium ">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          {/* <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1> */}
          <div>
            <h1 className="font-serif text-2xl md:text-4xl text-center mt-8 tracking-wide">
              Hi, I'm Neeraj Kumar
            </h1>

            <h3 className="text-center my-2">
              <span className="text-emerald-300 text-2xl font-serif  ">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "UI/UX Designer",
                    "Developer",
                    "Coder",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={60}
                  delaySpeed={2000}
                />
              </span>
            </h3>
          </div>

          {/* <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p> */}

          <p className="mt-4 text-center text-white/60 md:text-lg">
            I'm a Frontend Developer with 2+ years of experience building
            responsive, high-performance web applications. Specializing in the
            MERN stack and modern JavaScript frameworks, I create seamless,
            user-centric interfaces with clean, scalable code. While my core
            strength is front-end development, I also bring working knowledge of
            back-end technologies to deliver complete, end-to-end solutions.
            <span></span>
          </p>
          <div className="flex  justify-center mt-8 ">
            <a
              href="https://drive.google.com/file/d/1AoAugYUHPj8Rink1sVcP7dVW5B7TTWo1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 h-12 px-6 rounded-xl transition duration-300 transform hover:scale-105  "
            >
              <span>👋</span>
              <span className="font-semibold cursor-pointer">DOWNLOAD CV</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-12 gap-4">
          <button
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition duration-300 transform hover:scale-105 "
            onClick={() => scrollToSection('projects')}
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button
            className="inline-flex items-center gap-2 bg-white border border-white text-gray-900 h-12 px-6 rounded-xl transition duration-300 transform hover:scale-105
           "
            onClick={() => scrollToSection('contact')}
          >
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
