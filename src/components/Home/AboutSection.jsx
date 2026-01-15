import React, { useEffect } from 'react'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger, SplitText);

const aboutData = [
  {
    title: "Doorstep Convenience",
    para: "We offer hassle-free pickup and delivery from your home, ensuring your garments are handled with care from start to finish."
  },
  {
    title: "Fabric-Safe Cleaning",
    para: "Advanced stain removal and cleaning techniques are customized for each fabric to maintain color, texture, and durability."
  },
  {
    title: "Luxury Restoration Care",
    para: "Specialized restoration for wedding wear, shoes, and bags, bringing back their original finish, structure, and elegance."
  },
];


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
      <div className="w-full  flex flex-col lg:items-center lg:text-center max-sm:pt-10  p-5 lg:p-28">
        <h2 className=' hero_animate_txt_a text-sm lg:text-xl block overflow-hidden mb-2 lg:mb-5 opacity-70'>About Us</h2>
        <h1 className=' hero_animate_txt_b capitalize leading-none text-2xl lg:text-6xl   '>Welcome to The Laundry House</h1>
        <p className=' mt-2 lg:mt-4 text-sm  lg:text-xl lg:w-1/2 leading-tight '>India's Fastest Growing Garment Care Service</p>
         <div className="w-full lg:w-[65%] mt-8">
        </div>
        <div className="w-full lg:mt-8 gap-y-8  grid lg:grid-cols-3 gap-x-20 ">
          {aboutData.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex lg:flex-col gap-5 items-start lg:items-center justify-between">
                <div className=" w-full lg:space-y-2">
                  <h1 className=' ex_anim_title  capitalize text-sm lg:text-xl '>{item.title}</h1>
                  <div className=" mb-2 block ex_anim_line origin-left  w-full h-[1px] black"></div>
                  <p className=' text-sm lg:text-base leading-tight ex_anim_para'>{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href={"/about"} scroll={false} className='  mt-10 lg:mt-12 text-sm lg:text-base learn_btn relative whitespace-nowrap overflow-hidden group  text-white lg:text-black   bg-black lg:bg-transparent  rounded-full border-1 border-[#0e1111] px-4 py-2 lg:px-6 center lg:py-2'>
          <p className='fixy1 font-normal opacity-0'>View More</p>
          <p className='lg:fixy1 group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300 font-normal absolute'>View More</p>
          <div className="w-full origin-center group-hover:left-0 transition-all duration-300 h-full black top-0 left-[-100%] absolute "></div>
          <p className='fixy1 font-normal translate-y-[10px] z-[99] text-white group-hover:translate-y-[-1px] group-hover:opacity-100 opacity-0 transition-all duration-300  absolute'> View More</p>
        </Link>
      </div>
    </div>
  )
}

export default AboutSection