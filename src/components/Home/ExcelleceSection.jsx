import React, { useEffect } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const excellenceData = [
    {
        img: "https://cdn-icons-png.flaticon.com/512/5531/5531663.png",
        title: "Inspection & Stain Mapping",
        para: "Each garment is inspected and stains are identified for safe, effective treatment."
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/2865/2865959.png",
        title: "Fabric-safe Cleaning",
        para: "Specialized dry and wet cleaning methods tailored to protect every fabric type."
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/1934/1934788.png",
        title: "Finishing & Steaming",
        para: "Expert finishing and steaming to restore shape, softness, and pristine appearance."
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/8071/8071280.png",
        title: "QC & Premium Packaging",
        para: "Thorough quality checks followed by hygienic,  packaging for lasting freshness."
    }
];

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
            <div className="w-full p-28 center">
                <div className="w-full  flex flex-col items-center justify-center gap-10 lg:gap-20">
                    <div className="w-full lg:text-center">
                        <div className='text-2xl leading-none lg:text-6xl '>
                            <h1 className='ex_animate_txt_a'>Excellence in Every Detail</h1>
                        </div>
                        <p className=' text-sm  lg:text-xl leading-tight  mt-4  ex_animate_txt_c'>State-of-the-art equipment and eco-friendly processes for superior results</p>
                    </div>

                    <div className="w-full   center">
                        <div className="w-full flex gap-32   ">
                            <div className="w-1/2 sticky top-[7rem] h-[calc(100vh-10rem)] ">
                                <img className='cover rounded-xl' src="https://plus.unsplash.com/premium_photo-1664372899525-d99a419fd21a?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className="w-1/2 space-y-32 py-20">
                                {excellenceData.map((item, i) => (
                                    <div key={i} className="w-full ">
                                        <div className="flex items-center gap-10">
                                        <img className='size-20' src={item.img} alt="" />
                                        <div className=" pr-10">
                                        <h2 className="hero_animate_txt_a text-sm lg:text-base block overflow-hidden mb-2 lg:mb-5 opacity-70">
                                            Step {i + 1}
                                        </h2>
                                        <h1 className="ex_anim_title capitalize text-sm lg:text-xl">
                                            {item.title}
                                        </h1>
                                        <p className="text-sm lg:text-base leading-tight ex_anim_para">
                                            {item.para}
                                        </p>
                                        </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ExcelleceSection