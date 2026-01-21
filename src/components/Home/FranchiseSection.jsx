import { RiArrowRightLine } from "@remixicon/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const FranchiseSection = () => {

    useEffect(() => {

        if (window.innerWidth < 1024) return
        gsap.fromTo(".prx_img", {
            y: -200
        }, {
            scrollTrigger: {
                trigger: ".franch_paren",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
            y: 200,
            ease: "linear"
        })

    }, [])


    return (
        <section className="franch_paren w-full py-16 text-white lg:py-24 px-5 h-screen center overflow-hidden relative">
            {/* Background decoration */}
            <div className="prx_img absolute w-full h-full">
                <img className="cover brightness-[.5]" src="/images/home/franchise.webp" alt="" />
            </div>

            <div className="relative z-10 max-w-[85rem] mx-auto">
                <div className="max-w-4xl mx-auto lg:text-center space-y-5">

                    {/* Headline */}
                    <div className="w-full ">
                        <h1 className=' text-2xl leading-none  lg:text-6xl add_anim_txt_a  lg:whitespace-nowrap  '>Become a TLH  Franchise Partner</h1>
                        <p className=' mt-2 lg:mt-4 text-sm leading-tight   lg:text-xl add_anim_txt_a '>Own a Recession-Resistant Asset.</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm lg:text-base leading-tight text-primary-foreground/80 max-w-2xl mx-auto">
                        Most laundry businesses focus on cleaning.
                        <span className="font-medium text-primary-foreground">
                            {" "}We focus on cleaning and unit economics.
                        </span>
                        <br />
                        With a ~6 month operational breakeven and a
                        <span className="font-medium text-primary-foreground">
                            {" "}14% target ROI
                        </span>
                        , TLH is built for the disciplined investor.
                    </p>


                    <div className="grid grid-cols-2 lg:grid-cols-4 lg:justify-center gap-6 lg:gap-x-5 text-start pt-10">
                        <div className="w-full lg:justify-center flex items-stretch gap-x-3">
                            <div className=" size-10 lg:size-12 shrink-0 bg-[#ffffff] rounded-lg center">
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
                        <div className="w-full lg:justify-center flex items-stretch gap-x-3">
                            <div className=" size-10 lg:size-12 shrink-0 bg-[#ffffff] rounded-lg center">
                                <img
                                    className="w-[60%]"
                                    src="https://cdn-icons-png.flaticon.com/512/2956/2956777.png"
                                    alt="Customers"
                                />
                            </div>

                            <div className="flex flex-col justify-between">
                                <p className=" text-lg lg:text-2xl leading-none font-semibold">60k+</p>
                                <p className=" text-sm lg:text-base leading-none">Customers Served</p>
                            </div>
                        </div>

                        <div className="w-full lg:justify-center flex items-stretch gap-x-3">
                            <div className=" size-10 lg:size-12 shrink-0 bg-[#ffffff] rounded-lg center">
                                <img
                                    className="w-[60%]"
                                    src="	https://cdn-icons-png.flaticon.com/512/14198/14198917.png"
                                    alt="No Inventory"
                                />
                            </div>

                            <div className="flex flex-col justify-between">
                                <p className=" text-lg lg:text-2xl leading-none font-semibold">Zero</p>
                                <p className=" text-sm lg:text-base leading-none">Inventory Risk</p>
                            </div>
                        </div>

                        <div className="w-full lg:justify-center flex items-stretch gap-x-3">
                            <div className=" size-10 lg:size-12 shrink-0 bg-[#ffffff] rounded-lg center">
                                <img
                                    className="w-[60%]"
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





                    {/* CTA */}
                    <div className="w-full flex items-center lg:justify-center text-black lg:text-white mt-10 lg:mt-20 ">
                        <Link href={"/franchise"} scroll={false} className=' text-sm lg:text-base learn_btn relative overflow-hidden group     bg-white lg:bg-transparent  rounded-full border-1 border-[#ffffff] px-4 py-2 lg:px-6 center lg:py-2'>
                            <p className='fixy1 font-normal text-white opacity-0'>View Partnership Model</p>
                            <p className='lg:fixy1 group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300 font-normal absolute '>View Partnership Model</p>
                            <div className="w-full origin-center group-hover:left-0 transition-all duration-300 h-full bg-white top-0 left-[-100%] absolute "></div>
                            <p className='fixy1 font-normal translate-y-[10px] z-[99] text-black group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300  absolute'> View Partnership Model</p>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FranchiseSection