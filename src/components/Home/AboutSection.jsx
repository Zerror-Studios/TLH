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
      <div className="w-full lg:h-[30vw]  flex flex-col lg:flex-row items-center  justify-between pt-16 lg:pt-0 lg:p-0 p-5 lg:px-24 ">
        <div className="  w-full lg:w-[40%] ">
          <p className=' hero_animate_txt_a text-sm lg:text-base block overflow-hidden font-medium mb-2 lg:mb-5 opacity-80'>About Us</p>
          <p className=' hero_animate_txt_b leading-none text-2xl lg:text-6xl font-semibold  '>India's Fastest Growing Garment Care Service</p>
        </div>
        <div className=" w-full mt-5 lg:mt-0  lg:w-1/2 ">
          <p className='hero_animate_txt_c text-sm lg:text-base'>Founded in 2016, TLH is India's fastest-growing, reliable garment care service.
            We are not just a laundry; we are garment care experts dedicated to preserving
            the life and beauty of your most cherished items. We combine state-of-the-art technology with eco-friendly practices to deliver a service that is as kind to your clothes as it is to the planet.</p> <br />
          <p className='hero_animate_txt_d text-sm lg:text-base'>Our pioneering "Live Laundry Studios" offer complete transparency, allowing
            you to witness the meticulous care your garments receive</p> <br />
          <button className=' text-sm lg:text-base learn_btn relative overflow-hidden group  text-white lg:text-black font-thin bg-black lg:bg-transparent  rounded-full border-2 border-[#0e1111] px-0 py-1 lg:px-6 center lg:font-bold lg:py-2'>
            <p className='fixy1 font_light opacity-0'>About Our Process</p>
            <p className='lg:fixy1 group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300 font_light absolute'>Learn More </p>
            <div className="w-full  group-hover:scale-110 origin-center group-hover:top-0 transition-all duration-300 h-full black left-0 top-[100%] absolute rounded-full"></div>
            <p className='fixy1 font-light translate-y-[10px] z-[99] text-white group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300 font_light absolute'> About Our Process</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutSection