import ArrowDown from "../assets/icons/arrow-down.svg?react";
import memojiImage from "../assets/images/memoji-computer.png";
import grainImage from "../assets/images/grain.jpg";
import StarIcon from "../assets/icons/star.svg?react";
import HeroOrbit from "../Components/HeroORBIT.JSX";
import SParkleIcon from "../Components/SparkleIcon";

const Hero = () => {
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
        <SParkleIcon size={710} rotation={144} sparkleSize={56} shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="6s"/>
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
            src={memojiImage}
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
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl ">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 bg-white border border-white text-gray-900 h-12 px-6 rounded-xl ">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
