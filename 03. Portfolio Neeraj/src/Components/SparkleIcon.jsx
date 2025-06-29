import SParkleImage from "../assets/icons/sparkle.svg?react";
import { twMerge } from "tailwind-merge";
const SParkleIcon = ({
  size,
  rotation,
  shouldOrbit = false,
  sparkleSize,
  orbitDuration,
  shouldSpin = false,
  spinDuration,
}) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 ">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin ")}
        style={{ animationDuration: orbitDuration }}
      >
        <div
          className=" flex items-start justify-start "
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin === true && "animate-spin")}
            style={{
              animationDuration: spinDuration,
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
      </div>
    </div>
  );
};

export default SParkleIcon;
