import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const WelcomeSection = () => {
  return (
    <div className="welc_parent">
      <div className="w-full flex flex-col items-center pt-24 py-10 px-6 lg:px-24 text-center">
        
        {/* Heading */}
        <h1 className="text-2xl lg:text-6xl leading-none capitalize welc_animate_txt">
          Garment care for <br /> important people.
        </h1>

        <p className="text-sm lg:text-xl mt-2 welc_animate_txt">
          India's Fastest Growing Garment Care Service
        </p>

        {/* Description */}
        <div className="w-full lg:w-[65%] mt-8">
          <p className="text-sm lg:text-base welc_animate_txt_a">
            You love your clothes. They're not just fabrics; they're expressions
            of your style, your memories, and your identity. That designer shirt,
            that precious lehenga — they deserve the best care. But can you trust
            your expensive, cherished garments to just anyone? At The Laundry
            House, we understand your concerns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
