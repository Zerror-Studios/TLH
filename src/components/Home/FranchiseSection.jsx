import React, { useEffect, useState } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { RiArrowRightUpLine } from '@remixicon/react';
gsap.registerPlugin(ScrollTrigger, SplitText);

const FranchiseSection = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (window.innerWidth < 1024) return
            const split1 = new SplitText(".fr_anim_txt_b", { type: "words , chars" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".fran_parent",
                    start: "top 30%",

                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })
            tl.fromTo(".fr_bg_img", { filter: " brightness(0.3)", }, { filter: " brightness(0.4)", duration: 0.5 })
            // tl.fromTo(".fr_anim_txt_a", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 });
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".fran_parent",
                    start: "top top",
                    pin: true,
                    scrub: true,
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })
            if (window.innerWidth <= 1024) {
                tl2.to(".fr_txt_box", {
                    top: "-20%",
                    duration: 180,
                    delay: 1
                }, "par")
            } else {
                tl2.to(".fr_txt_box", {
                    top: "-18vw",
                    duration: 180,
                    delay: 1
                }, "par")
            }

            tl2.fromTo(
                split1.chars,
                { opacity: 0.2 },
                {
                    opacity: 1,
                    stagger: { each: 0.3 },
                },
                "par"
            );



        });

        return () => ctx.revert();
    }, []);

    const [expanded, setExpanded] = useState(false);

    return (
        <div className='fran_parent'>
            <div className=" relative w-full h-[70vh] lg:h-screen text-white overflow-hidden ">
                <img className=' fr_bg_img  absolute blur-none w-full h-full z-[-1] object-cover brightness-[.4]' src="/images/Hero swiper/pic_3.webp" alt="" />
                <div className=" px-5 flex flex-col   lg:px-0 absolute bottom-10 lg:bottom-[50%] lg:translate-y-[50%] lg:left-24 ">
                    <h2 className=' fr_anim_txt_a text-sm lg:text-base mb-2 opacity-80'>Become a Franchise</h2>
                    <h1 className=' text-2xl leading-none lg:text-6xl fr_anim_txt_a '>Join the Leader <br /> in Garment Care</h1>
                    <h5
                        className={`lg:hidden text-sm mt-5 md:text-xl lg:text-5xl transition-all duration-300 ${expanded ? "line-clamp-none" : "line-clamp-2"}`}>
                        The Laundry House offers a proven business model, comprehensive support,
                        and the opportunity to be a part of India's garment care revolution.
                        With over 60,000 satisfied customers and a rapidly expanding network,
                        we provide our franchise partners with established SOPs, cutting-edge technology,
                        and powerful marketing strategies. Partner with us and bring a new level of trust
                        and transparency to the cleaning industry in your city.
                    </h5>
                    <p
                        className="  lg:hidden  text-xs underline cursor-pointer "
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? "Read Less" : "Read More"}
                    </p>
                    <div className="lg:hidden">
                        <button className="  fr_hr_anim_btn mt-5 whitespace-nowrap text-xs   lg:text-base service_btn relative overflow-hidden group bg-[#fffaf0] text-black  rounded-full  border-1   center   py-1 lg:py-1.5">
                            <p className="px-4 flex items-center justify-between w-full gap-4 font-normal ">
                                Join Now
                            </p>
                        </button>
                    </div>
                </div>
                <div className=" hidden lg:block fr_txt_box w-[90%] max-[1024px]:left-5 lg:w-[40%] absolute top-[70%] md:top-[80%] lg:top-[40%]  lg:right-24">
                    <h5 className='  text-base leading-none md:text-xl  lg:text-5xl  fr_anim_txt_b'>The Laundry House offers a proven business model, comprehensive support, and the opportunity to be a part of India's garment care revolution. With over 60,000 satisfied customers and a rapidly expanding network, we provide our franchise partners with established SOPs, cutting-edge technology, and powerful marketing strategies. Partner with us and bring a new level of trust and transparency to the cleaning industry in your city.</h5>
                    <button className="fr_hr_anim_btn mt-10 whitespace-nowrap text-xs   lg:text-base service_btn relative overflow-hidden group border-white hover:text-black rounded-full text-white border-1 hover:border-white  center   py-2 lg:py-1.5">
                        <p className="px-5 flex items-center justify-between w-full gap-4 font-normal opacity-0">
                            Become a Franchise
                        </p>
                        <p className="group-hover px-5 flex items-center w-full  justify-between gap-4 hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300 font-normal absolute">
                            Become a Franchise
                        </p>
                        <div className="w-full origin-center group-hover:left-0 transition-all duration-300 h-full bg-[#fffaf0] top-0 left-[-100%] absolute "></div>
                        <p className=" px-5 flex items-center w-full justify-between  gap-4 translate-y-[10px] z-[99] text-black  group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300 font-normal absolute">
                            Become a Franchise
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FranchiseSection