import StarIcon from "../assets/icons/star.svg?react";


const HeroOrbit = ({ size, rotation, starSize}) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className=" -500 rotate-45 "
        style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div
          className=" inline-flex "
          style={{
            transform: `rotate(${rotation * -1}deg)`,
          }}
        >
          <StarIcon
            className=" text-emerald-300"
            style={{
              height: `${starSize}px`,
              width: `${starSize}px`,
            }}
          />
         
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
