import { RiArrowRightUpLine } from '@remixicon/react'
import React from 'react'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger, SplitText);

const FranchiseForm = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {

            const split1 = new SplitText(".form_anim_txt_a", { type: "words" });
            const split2 = new SplitText(".form_anim_txt_b", { type: "words" });
            const split3 = new SplitText(".form_anim_txt_c", { type: "words" });


            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".form_parent",
                    start: "top 60%",
                    // markers: true,
                    // toggleActions: "play none none reverse",
                }
            })

            tl.from(".form_bg",
                {
                    backgroundColor: "transparent",
                    duration: 0.2,
                }, "parallel");

            tl.from((".input_box"),
                {
                    opacity: 0,
                    duration: 0.2,
                    stagger: 0.05,
                    delay: 0.2,
                }, "parallel");

            tl.from((".input_line"),
                {
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.2,
                    stagger: 0.05,
                }, "parallel");

            tl.fromTo([split1.words, split2.words, split3.words, ".form_btn"],
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    delay: 0.2,
                    duration: 0.5,
                    stagger: 0.009,
                }, "parallel");




        });

        return () => ctx.revert();
    }, []);

    return (
        <div className='form_parent'>
            <div className="w-full px-5 lg:px-44 mb-20 ">
                <div className="form_bg w-full h-full p-5 md:p-10  lg:p-20 bg-black/5 justify-between rounded-xl flex flex-col md:flex-row">
                    <div className=" w-full md:w-1/2 h-full flex gap-5 flex-col ">
                        <p className=' form_anim_txt_a text-2xl leading-none  lg:text-6xl font-semibold'>Let’s work <br /> together</p>
                        <p className=' form_anim_txt_b text-sm lg:text-xl end-full lg:w-[70%] '>Fill the form and we will contact you shortly or reach out to us at</p>
                        <p className=' form_anim_txt_c font-semibold'>info@tlhindia.in</p>
                    </div>
                    <div className="  w-full mt-5 md:mt-0 md:w-1/2 h-full">
                        <form action="">
                            <div className="w-full ">
                                <input className=' input_box  outline-none w-full  text-sm lg:text-xl mb-2' type="text" placeholder='Full Name' name="" id="" />
                                <div className="input_line w-full h-[1px] lg:h-[1.5px] opacity-70 black rounded-full"></div>
                            </div>
                            <div className="w-full mt-5 lg:mt-7 ">
                                <input className=' input_box  outline-none w-full  text-sm lg:text-xl mb-2' type="text" placeholder='Phone Number' name="" id="" />
                                <div className="input_line w-full h-[1px] lg:h-[1.5px] opacity-70 black rounded-full"></div>
                            </div>
                            <div className="w-full mt-5 lg:mt-7">
                                <input className=' input_box  outline-none w-full  text-sm lg:text-xl mb-2' type="text" placeholder='Your City of Interest for the Franchise' name="" id="" />
                                <div className="input_line w-full h-[1px] lg:h-[1.5px] opacity-70 black rounded-full"></div>
                            </div>
                            <div className="w-full mt-5 lg:mt-7 ">
                                <textarea  className='input_box outline-none w-full  text-sm lg:text-xl mb-2 h-24 resize-none scroller_none leading-none overflow-y-scroll' type="text" placeholder='Your Message' name="" id="" />
                                <div className="input_line w-full h-[1px] lg:h-[1.5px] opacity-70 black rounded-full"></div>
                            </div>
                            <button className=' form_btn text-xs lg:text-base mt-10 relative overflow-hidden bg-black lg:bg-transparent text-white lg:text-black group rounded-full border-2 border-[#0e1111] px-6 center font-bold py-1.5'>
                                <p className='fixy1 font_light opacity-0'>Submit</p>
                                <p className='lg:fixy1 group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300 font_light absolute'>Submit</p>
                                <div className="w-full  group-hover:scale-110 origin-center group-hover:top-0 transition-all duration-300 h-full black left-0 top-[100%] absolute rounded-full"></div>
                                <p className='fixy1 font-light translate-y-[10px] z-[99] text-white group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300 font_light absolute'> Submit</p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FranchiseForm