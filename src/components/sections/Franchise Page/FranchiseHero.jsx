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

  useEffect(() => {
    if (window.innerWidth < 1024) return

    gsap.to(
      ".fr_hr_anim_img",
      {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: ".fr_hr_anim_img",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, [])


  return (
    <div className=" franch_hero_pren w-full relative overflow-hidden h-[100svh] text-white">
      {/* Background Image */}
      <img
        className="fr_hr_anim_img w-full h-full object-cover brightness-[.6]"
        src="/images/home/franchise.webp"
        alt=""
      />

      {/* Content */}
      <div className="absolute px-5 w-[100%] lg:w-[70%] flex flex-col gap-3 lg:gap-5 lg:items-center bottom-[15%] left-[50%] lg:text-center  translate-x-[-50%]">
        <div className="block overflow-hidden">
          <h2 className="  text-sm lg:text-base"> Partner with TLH</h2>
        </div>
        <div className="lg:text-center lg:flex lg:items-center lg:justify-center w-full flex-col">
          <h1 className=" text-2xl leading-none lg:text-6xl  ">
            India’s Leading Premium <br /> Garment Care Franchise.
          </h1>
          <p className="fr_hr_anim_txt  text-sm leading-tight  mt-2 lg:mt-4  lg:text-xl add_anim_txt_a  w-full lg:w-[60%]">
            A high-margin, process-driven model with ~6 month operational break-even and no outside dependencies.
          </p>
        </div>

        <div className="  grid grid-cols-2  lg:grid-cols-4 lg:justify-center gap-3 lg:gap-x-5 text-start pt-5 lg:py-10">
          <div className="w-full bg-white px-6 lg:px-10  py-5 lg:py-8 rounded-lg text-black lg:justify-center flex items-stretch gap-x-3">
            <div className=" size-10 lg:size-14 shrink-0 bg-[#F2EDE4] rounded-lg center">
              <img
                className="w-[55%]"
                src="https://cdn-icons-png.flaticon.com/512/2956/2956777.png"
                alt="Customers"
              />
            </div>

            <div className="flex flex-col justify-between">
              <p className=" text-lg lg:text-2xl leading-none font-semibold">60k+</p>
              <p className=" text-sm lg:text-base leading-none">Customers Served</p>
            </div>
          </div>

          <div className="w-full bg-white px-6 lg:px-10  py-5 lg:py-8 rounded-lg text-black lg:justify-center flex items-stretch gap-x-3">
            <div className=" size-10 lg:size-14 shrink-0 bg-[#F2EDE4] rounded-lg center">
              <img
                className="w-1/2"
                src="https://cdn-icons-png.flaticon.com/512/6797/6797554.png"
                alt="ROI"
              />
            </div>

            <div className="flex flex-col justify-between">
              <p className=" text-lg lg:text-2xl leading-none font-semibold">14%</p>
              <p className=" text-sm lg:text-base leading-none">Target ROI</p>
            </div>
          </div>



          <div className="w-full bg-white px-6 lg:px-10  py-5 lg:py-8 rounded-lg text-black lg:justify-center flex items-stretch gap-x-3">
            <div className=" size-10 lg:size-14 shrink-0 bg-[#F2EDE4] rounded-lg center">
              <img
                className="w-[55%]"
                src="	https://cdn-icons-png.flaticon.com/512/14198/14198917.png"
                alt="No Inventory"
              />
            </div>

            <div className="flex flex-col justify-between">
              <p className=" text-lg lg:text-2xl leading-none font-semibold">Zero</p>
              <p className=" text-sm lg:text-base leading-none">Inventory Risk</p>
            </div>
          </div>

          <div className="w-full bg-white px-6 lg:px-10  py-5 lg:py-8 rounded-lg text-black lg:justify-center flex items-stretch gap-x-3">
            <div className=" size-10 lg:size-14 shrink-0 bg-[#F2EDE4] rounded-lg center">
              <img
                className="w-[55%]"
                src="	https://cdn-icons-png.flaticon.com/512/1019/1019709.png"
                alt="Cash Flow"
              />
            </div>

            <div className="flex flex-col justify-between">
              <p className=" text-lg lg:text-2xl leading-none font-semibold">Day 1</p>
              <p className=" text-sm lg:text-base leading-none">Cash Flow</p>
            </div>
          </div>



        </div>

        {/* Button */}
        <a href="#franchise-form" className=" hidden lg:block w-full  lg:w-[20vw]">
          <ArrowButton variant="light" label="Enquire Now" />
        </a>
      </div>
      <a href="#franchise-form" className=" z-[97] fixed left-[1rem] bottom-[2svh] lg:hidden w-[45vw]">
        <ArrowButton variant="light" label="Enquire Now" />
      </a>
    </div>
  );
};

export default FranchiseHero;
