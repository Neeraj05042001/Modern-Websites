import Button from "../Components/Button";
import starsBg from "../assets/stars.png";
import gridLines from "../assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";
const useRelativeMousePosition = (ref) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event) => {
    if (!ref.current) return;
    const { top, left } = ref.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

const CallToAction = () => {
  const sectionRef = useRef(null);
  const borderedDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

 const maskImage =  useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;
  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group "
          style={{ backgroundImage: `url(${starsBg})`, backgroundPositionY }}
          animate={{
            backgroundPositionX: ["0px", "1000px"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 120,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group1 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines})`,
            }}
          ></div>

          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay  opacity-0 group2 transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${gridLines})`,
            }}
          ></motion.div>

          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              AI -driven SEO for everyone
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button text="Join Waitlist" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
