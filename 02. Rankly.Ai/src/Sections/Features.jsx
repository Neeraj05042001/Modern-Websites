"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import productImage from "../assets/product-image.png";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { animate } from "motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = ({ icon, title, isNew, selected, onClick }) => {
  const tabRef = useRef(null);
  const dotLottieRef = useRef(null);
  const xPercentage = useMotionValue(100);
  const yPercentage = useMotionValue(50);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !selected) return;
    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    animate(xPercentage, [0, 100, 100, 0, 0], {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    });

    animate(yPercentage, [0, 0, 100, 100, 0], {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    });
  }, [selected]);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
    <div
      onMouseEnter={handleTabHover}
      ref={tabRef}
      className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 cursor-pointer relative "
      onClick={onClick}
    >
      {selected && (
        <motion.div
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
          }}
          className="absolute inset-0 -m-px border border-[#A369FF] rounded-xl "
        />
      )}
      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={icon}
          className="h-5 w-5"
          autoplay
        />
      </div>
      <div className="font-medium">{title}</div>
      {isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
          new
        </div>
      )}
    </div>
  );
};

const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;

  const handleSelectTab = (index) => {
    setSelectedTab(index);

    const animateOptions = {
      duration: 2,
      ease: "easeInOut",
    };
    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions
    );
  };
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate Your SEO efforts
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5 ">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3  ">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              {...tab}
              key={tab.title}
              selected={selectedTab === tabIndex}
              onClick={() => handleSelectTab(tabIndex)}
            />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${productImage})`,
            }}
          ></motion.div>
          {/* <img src={productImage} alt="product image" /> */}
        </div>
      </div>
    </section>
  );
};
export default Features;
