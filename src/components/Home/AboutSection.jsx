import React, { useEffect } from 'react'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutSection = () => {

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const split1 = new SplitText(".hero_animate_txt_a", { type: "words" });
  //     const split2 = new SplitText(".hero_animate_txt_b", { type: "words" });
  //     const split3 = new SplitText(".hero_animate_txt_c", { type: "words" });
  //     const split4 = new SplitText(".hero_animate_txt_d", { type: "words" });

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".about_parent",
  //         start: "top 60%",
  //         // markers: true,
  //         toggleActions: "play none none reverse",
  //       }
  //     })

  //     tl.fromTo(
  //       [split1.words, split2.words],
  //       { y: 20, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.5,
  //         stagger: 0.05,
  //       }, "parallel");

  //     tl.fromTo(
  //       [split3.words, split4.words, ".learn_btn"],
  //       { y: 10, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.5,
  //         stagger: 0.005,
  //       }, "parallel");
  //   });

  //   return () => ctx.revert();
  // }, []);



  return (
    <div className='about_parent'>
      <div className="w-full  flex flex-col lg:flex-row   justify-between pt-16 lg:pt-24 lg:p-0 p-5 lg:px-24 ">
        <div className="  w-full lg:w-[40%] ">
          <h2 className=' hero_animate_txt_a text-sm lg:text-base block overflow-hidden mb-2 lg:mb-5 opacity-80'>About Us</h2>
          <h1 className=' hero_animate_txt_b leading-none text-2xl lg:text-6xl   '>Garment care for important people.</h1>
        </div>
        <div className=" w-full mt-5 lg:mt-0  lg:w-1/2 ">
          <p className='hero_animate_txt_c text-sm lg:text-base'> • Doorstep pickup & delivery</p> <br />
          <p className='hero_animate_txt_d text-sm lg:text-base'> • Specialist stain removal + fabric-safe processe</p> <br />
          <p className='hero_animate_txt_d text-sm lg:text-base'> • Restoration for wedding wear, shoes & bags</p> <br />
          <button className=' text-sm lg:text-base learn_btn relative whitespace-nowrap overflow-hidden group  text-white lg:text-black   bg-black lg:bg-transparent  rounded-full border-1 border-[#0e1111] px-4 py-2 lg:px-6 center lg:py-2'>
            <p className='fixy1 font-normal opacity-0'>Book a Pickup</p>
            <p className='lg:fixy1 group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300 font-normal absolute'>Book a Pickup</p>
            <div className="w-full origin-center group-hover:left-0 transition-all duration-300 h-full black top-0 left-[-100%] absolute "></div>
            <p className='fixy1 font-normal translate-y-[10px] z-[99] text-white group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300  absolute'> Book a Pickup</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutSection