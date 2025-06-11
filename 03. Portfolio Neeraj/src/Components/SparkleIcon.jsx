import SParkleImage from "../assets/icons/sparkle.svg?react";
const SParkleIcon = ({size, rotation, sparkleSize}) => {
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
          <SParkleImage
            className=" text-emerald-300/20"
            style={{
              height: `${sparkleSize}px`,
              width: `${sparkleSize}px`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SParkleIcon;
