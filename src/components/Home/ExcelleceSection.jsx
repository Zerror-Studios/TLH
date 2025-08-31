import React, { useEffect } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const excellenceData = [{
    img: "/logos/atom.svg",
    title: "Advanced Technology",
    para: "State-of-the-art equipment and eco-friendly processes for superior results"
}, {
    img: "/logos/support.svg",
    title: "Expert Care",
    para: "Professional dry cleaning and wet cleaning for all your precious garments"
}, {
    img: "/logos/star.svg",
    title: "Premium Quality",
    para: "Guaranteed satisfaction with insured garment protection"
}]

const ExcelleceSection = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {
            const split1 = new SplitText(".ex_animate_txt_a", { type: "words" });
            const split2 = new SplitText(".ex_animate_txt_b", { type: "words" });
            const split3 = new SplitText(".ex_animate_txt_c", { type: "words" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".excellence_parent",
                    start: "top 60%",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })

            // tl.fromTo(
            //     [split1.words, split2.words],
            //     { y: 20, opacity: 0 },
            //     {
            //         y: 0,
            //         opacity: 1,
            //         duration: 0.5,
            //         stagger: 0.05,
            //     }, "parallel");

            // tl.fromTo(
            //     [split3.words],
            //     { y: 10, opacity: 0 },
            //     {
            //         y: 0,
            //         opacity: 1,
            //         duration: 0.5,
            //         stagger: 0.005,
            //     }, "parallel");

            // tl.fromTo(
            //     ".ex_anim_title",
            //     { y: 10, opacity: 0 },
            //     {
            //         y: 0,
            //         opacity: 1,
            //         delay: 0.3,
            //         duration: 0.5,
            //         stagger: 0.1,
            //     }, "parallel");

            // tl.fromTo(
            //     ".ex_anim_para",
            //     { y: 10, opacity: 0 },
            //     {
            //         y: 0,
            //         opacity: 1,
            //         delay: 0.5,
            //         duration: 0.5,
            //         stagger: 0.05,
            //     }, "parallel");

            tl.fromTo(
                ".ex_anim_img",
                { scale: 0, },
                {
                    scale: 1,
                    ease: "circ.inOut",
                    delay: 0.5,
                    duration: 0.5,
                    stagger: 0.05,
                }, "parallel");

            // tl.fromTo(
            //     ".ex_anim_line",
            //     { width: 0 },
            //     {
            //         width: "100%",
            //         delay: 0.3,
            //         duration: 0.5,
            //         stagger: 0.1,
            //     }, "parallel");
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className='excellence_parent'>
            <div className="w-full pb-5 lg:pb-20 lg:py-0 px-5 lg:px-24 center">
                <div className="w-full  flex flex-col items-center justify-center gap-10 lg:gap-20">
                    <div className="w-full lg:text-center">
                        <div className=' hidden lg:block text-2xl leading-none lg:text-6xl uppercase '>
                            <h1 className='ex_animate_txt_a'>Excellence</h1>
                            <h1 className='ex_animate_txt_b'>in Every Detail</h1>
                        </div>
                        <div className=' lg:hidden text-2xl leading-none lg:text-6xl uppercase '>
                            <h1 className='ex_animate_txt_a'>Excellence in Every Detail</h1>
                        </div>
                        <p className=' text-sm  lg:text-xl  mt-1  ex_animate_txt_c'>State-of-the-art equipment and eco-friendly processes for superior results</p>
                    </div>
                    <div className="w-full  flex flex-col lg:flex-row lg:text-center lg:justify-center gap-10  ">
                        {excellenceData.map((item, index) => (
                            <div key={index} className=" lg:w-[25%] ">
                                <div className="flex lg:flex-col gap-5 items-start lg:items-center justify-between">
                                    <div className=" lg:w-full w-[65%] lg:space-y-2">
                                        <h1 className=' ex_anim_title text-sm lg:text-xl '>{item.title}</h1>
                                        <div className=" hidden lg:block ex_anim_line origin-left  w-full h-[1px] black"></div>
                                        <p className=' text-sm lg:text-base ex_anim_para'>{item.para}</p>
                                    </div>
                                    <div className=" lg:w-full w-[20%] h-full flex items-center justify-center">
                                        <img className=' ex_anim_img size-16' src={item.img} alt="" />
                                    </div>
                                </div>
                                <div className=" lg:hidden w-full mt-2 h-[1px] bg-black"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExcelleceSection