import { RiArrowRightUpLine } from "@remixicon/react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import ArrowButton from "@/components/Buttons/ArrowButton";

gsap.registerPlugin(ScrollTrigger, SplitText);

const FranchiseHero = () => {
  useEffect(() => {
    // ---- GSAP Animations ----
    const split1 = new SplitText(".fr_hr_anim_txt_a", { type: "words" });
    const split2 = new SplitText(".fr_hr_anim_txt_b", { type: "words" });

    [split1.words, split2.words].forEach((words) => {
      words.forEach((word) => {
        const wrapper = document.createElement("span");
        wrapper.style.display = "inline-block";
        wrapper.style.overflow = "hidden";
        wrapper.style.verticalAlign = "top";
        word.parentNode.insertBefore(wrapper, word);
        wrapper.appendChild(word);
      });
    });

    gsap.fromTo(
      ".fr_hr_anim_head",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.3, duration: 0.5, stagger: 0.05 }
    );

    gsap.fromTo(
      ".fr_hr_anim_txt",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.1, duration: 0.5, stagger: 0.005 }
    );

    gsap.fromTo(
      ".fr_hr_anim_btn",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.2, duration: 0.5 }
    );

    gsap.fromTo(
      [split1.words, split2.words],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.2, duration: 0.5, stagger: 0.005 }
    );
  }, []);

  return (
    <div className="w-full relative h-[87vh] lg:h-screen text-white">
      {/* Background Image */}
      <img
        className="fr_hr_anim_img w-full h-full object-cover brightness-[.3]"
        src="/images/Hero swiper/pic_3.webp"
        alt=""
      />

      {/* Content */}
      <div className="absolute px-5 w-[100%] lg:w-[70%] flex flex-col gap-5 lg:items-center bottom-[15%] left-[50%] lg:text-center  translate-x-[-50%]">
        <div className="block overflow-hidden">
          <h2 className=" fr_hr_anim_head text-sm lg:text-base">Become a Franchise</h2>
        </div>
        <div className="block overflow-hidden">
          <h1 className="fr_hr_anim_head text-2xl leading-none lg:text-6xl  ">
            Partner with TLH: India’s Leading Premium Garment Care Franchise.

          </h1>
        </div>
        
        <p className="fr_hr_anim_txt fr_hr_anim_txt_a text-sm lg:text-base w-full lg:w-[70%]">
          A high-margin, process-driven model with ~6 month operational break-even and no outside dependencies.
        </p>


        {/* Button */}
        <div className=" w-full scale-100  lg:w-[20vw]">
          <ArrowButton variant="light" label="Apply for Partnership" />
        </div>
      </div>
    </div>
  );
};

export default FranchiseHero;
