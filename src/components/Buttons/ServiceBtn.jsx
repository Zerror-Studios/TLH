import { RiArrowRightUpLine } from '@remixicon/react'
import React from 'react'

const ServiceBtn = ({ variant = "dark", label = "Book Now" }) => {
  const isLight = variant === "light";

  const borderColor = isLight ? "border-white" : "border-black";
  const baseTextColor = isLight ? "text-black" : "text-white";
  const hoverTextColor = isLight ? "group-hover:text-white" : "group-hover:text-black";
  const circleBg = isLight ? "bg-[#fffaf0]" : "bg-[#0e1111]";

  return (
    <button
      className={`w-full text-base group relative border overflow-hidden 
      ${borderColor} h-10 lg:h-14 rounded-full`}
    >
      {/* animated shrinking bg */}
      <div
        className={`w-full transition-all duration-300 group-hover:size-10 lg:group-hover:size-14 
        h-full z-[1] absolute top-0 right-0 ${circleBg} rounded-full`}
      >
        <div className="size-10 lg:size-14 absolute right-0 center flex items-center justify-center">
          {/* arrow inside circle → always black/white based on bg contrast */}
          <RiArrowRightUpLine
            className={`transition-all duration-300 origin-bottom-left scale-0 group-hover:scale-100 text-${isLight ? "black" : "white"}`}
          />
        </div>
      </div>

      {/* text + default arrow */}
      <div
        className={`absolute left-0 top-0 z-[2] w-full px-4 h-full flex items-center justify-between 
        ${baseTextColor} ${hoverTextColor}`}
      >
        <p>{label}</p>
        <RiArrowRightUpLine
          className="transition-all duration-300 group-hover:scale-0 origin-top-right"
        />
      </div>
    </button>
  );
};

export default ServiceBtn;
