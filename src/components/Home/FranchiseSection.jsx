import React, { useEffect, useState } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { RiArrowRightUpLine } from '@remixicon/react';
import ArrowButton from '../Buttons/ArrowButton';
gsap.registerPlugin(ScrollTrigger, SplitText);



const aboutData = [
  {
    title: "Training + SOP Playbooks",
    para: "Standardised operations that eliminate guesswork and ensure every task is executed the right way, every time."
  },
  {
    title: "Quality Standards + Audits",
    para: "Consistency protected by defined quality benchmarks and regular audits across all operations."
  },
  {
    title: "Launch + Demand Support",
    para: "End-to-end go-to-market playbooks with central guidance to drive visibility, demand, and early traction."
  },
];


const FranchiseSection = () => {

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         if (window.innerWidth < 1024) return
    //         const split1 = new SplitText(".fr_anim_txt_b", { type: "words , chars" });

    //         // const tl = gsap.timeline({
    //         //     scrollTrigger: {
    //         //         trigger: ".fran_parent",
    //         //         start: "top 30%",

    //         //         // markers: true,
    //         //         toggleActions: "play none none reverse",
    //         //     }
    //         // })
    //         // tl.fromTo(".fr_bg_img", { filter: " brightness(0.3)", }, { filter: " brightness(0.4)", duration: 0.5 })
    //         // tl.fromTo(".fr_anim_txt_a", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 });
    //         const tl2 = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".fran_parent",
    //                 start: "top top",
    //                 end: "bottom top",
    //                 pin: true,
    //                 anticipatePin: 1,
    //                 scrub: true,
    //                 // markers: true,
    //                 // toggleActions: "play none none reverse",
    //             }
    //         })
    //         tl2.to(".fr_txt_box", {
    //             top: "-20vw",
    //             duration: 180,
    //             delay: 1
    //         }, "par")
    //         tl2.fromTo(
    //             split1.chars,
    //             { opacity: 0.2 },
    //             {
    //                 opacity: 1,
    //                 stagger: { each: 0.3 },
    //             },
    //             "par"
    //         );



    //     });

    //     return () => ctx.revert();
    // }, []);

    // const [expanded, setExpanded] = useState(false);

    return (
        <div className='fran_parent'>
            <div className="w-full  flex flex-col items-center text-center  p-28">
                {/* <h2 className=' hero_animate_txt_a text-sm lg:text-xl block overflow-hidden mb-2 lg:mb-5 opacity-70'>Franchise</h2> */}
                <h1 className=' hero_animate_txt_b  leading-none text-2xl lg:text-6xl   '>Become a TLH <br /> Franchise Partner</h1>
                <p className='  mt-4 text-sm  lg:text-xl w-1/2 leading-tight '>A self-reliant, SOP-driven model built for consistent execution.</p>
                <div className="w-full mt-20  grid grid-cols-3 gap-x-20 ">
                    {aboutData.map((item, index) => (
                        <div key={index} className="w-full">
                            <div className="flex lg:flex-col gap-5 items-start lg:items-center justify-between">
                                <div className=" lg:w-full w-[65%] lg:space-y-2">
                                    <h1 className=' ex_anim_title  capitalize text-sm lg:text-xl '>{item.title}</h1>
                                    <div className=" hidden lg:block ex_anim_line origin-left  w-full h-[1px] black"></div>
                                    <p className=' text-sm lg:text-base leading-tight ex_anim_para'>{item.para}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className=' mt-20 text-sm lg:text-base learn_btn relative whitespace-nowrap overflow-hidden group  text-white lg:text-black   bg-black lg:bg-transparent  rounded-full border-1 border-[#0e1111] px-4 py-2 lg:px-6 center lg:py-2'>
                    <p className='fixy1 font-normal opacity-0'>Enquire Now</p>
                    <p className='lg:fixy1 group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300 font-normal absolute'>Enquire Now</p>
                    <div className="w-full origin-center group-hover:left-0 transition-all duration-300 h-full black top-0 left-[-100%] absolute "></div>
                    <p className='fixy1 font-normal translate-y-[10px] z-[99] text-white group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300  absolute'> Enquire Now</p>
                </button>
            </div>
        </div>
    )
}

export default FranchiseSection