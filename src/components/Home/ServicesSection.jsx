import { RiArrowRightUpLine, RiMapPinFill } from '@remixicon/react'
import React, { useEffect } from 'react'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const services = [
    {
        img: "/images/services/4_Wedding Couturer.jpg",
        title: "Wedding Couture",
        desc: "Specialized bridal and couture garment care that preserves intricate details, delicate fabrics, and embellishments. Perfect for pre-wedding preparation or post-event preservation.",
        cities: ["Varanasi", "Amritsar", "Udaipur", "Mysuru", "Guwahati", "Rajkot", "Vadodara", "Ranchi"],
    },
    {
        img: "/images/services/3_Home & Auto Fabrics.jpg",
        title: "Home & Auto Fabrics",
        desc: "Professional cleaning solutions for upholstery, curtains, carpets, and car interiors. Our service removes deep stains, dust, and allergens to keep your living and driving spaces fresh and hygienic.",
        cities: ["Indore", "Nagpur", "Bhopal", "Coimbatore", "Surat", "Patna", "Thiruvananthapuram"],
    },
    {
        img: "/images/services/2_Shoe & Bags.jpg",
        title: "Shoe & Bags",
        desc: "Expert cleaning, conditioning, and restoration for premium shoes, handbags, and leather goods. We specialize in reviving worn items, extending their life while maintaining their luxury look and feel.",
        cities: ["Chennai", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh"],
    },
    {
        img: "/images/services/1_Garment Care.jpg",
        title: "Garment Care",
        desc: "The Laundry House offers premium garment care services designed to preserve the quality, feel, and freshness of every piece. Whether it's daily wear, delicate fabrics, or designer outfits, we handle each garment with expert attention and care. Our services include professional washing, stain removal, fabric-specific cleaning, ironing, and finishing – all tailored to suit your clothing’s needs.",
        cities: ["Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Kolkata"],
    },



];


const ServicesSection = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {
            const split1 = new SplitText(".service_animate_txt_a", { type: "words" });
            const split2 = new SplitText(".service_animate_txt_b", { type: "words" });
            const split3 = new SplitText(".service_animate_txt_c", { type: "words" });
            const split4 = new SplitText(".service_animate_txt_d", { type: "words" });
            const split5 = new SplitText(".service_animate_txt_e", { type: "words" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".services_parent",
                    start: "top 60%",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })

            tl.fromTo(
                [split1.words, split2.words],
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                }, "parallel");

            tl.fromTo(
                ".border_anim",
                { width: 0 },
                {
                    width: "100%",
                    duration: 1,
                }, "parallel");
            tl.fromTo(
                ".slide_bg",
                { backgroundColor: "transparent" },
                {
                    backgroundColor: "#9494941f",
                    opacity: 1,
                    duration: 1,
                }, "parallel");
            tl.fromTo(
                ".service_clip_img",
                {
                    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                    filter: "blur(5px)"
                },
                {
                    delay: 0.2,
                    ease: "power2.inOut",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    filter: "blur(0px)",
                    duration: 1,
                }, "parallel");

            tl.fromTo(
                [split3.words, split4.words, split5.words, ".service_icon", ".service_btn"],
                { y: 10, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    delay: 0.2,
                    duration: 0.5,
                    stagger: 0.005,
                }, "parallel");


            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".services_parent",
                    start: "top top",
                    end: window.innerHeight * 5,
                    pin: true,
                    // markers: true,
                    scrub: true,
                    // toggleActions: "play none none reverse",
                }
            })
            tl2.fromTo(".slide_bg_3", {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }, {
                clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
                filter: "blur(8px)",
            }, "pa")
            tl2.fromTo(".slide_inn_3", {
                y: 0,
            }, {
                y: -400,
            }, "pa")
            tl2.fromTo(".slide_inn_2", {
                y: 400,
            }, {
                y: 0,
            }, "pa")

            tl2.fromTo(".slide_bg_2", {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }, {
                clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
                filter: "blur(8px)",
            }, "pa2")
            tl2.fromTo(".slide_inn_2", {
                y: 0,
            }, {
                y: -400,
            }, "pa2")
            tl2.fromTo(".slide_inn_1", {
                y: 400,
            }, {
                y: 0,
            }, "pa2")

            tl2.fromTo(".slide_bg_1", {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }, {
                clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
                filter: "blur(8px)",
            }, "pa3")
            tl2.fromTo(".slide_inn_1", {
                y: 0,
            }, {
                y: -400,
            }, "pa3")
            tl2.fromTo(".slide_inn_0", {
                y: 400,
            }, {
                y: 0,
            }, "pa3")
            


        });

        return () => ctx.revert();
    }, []);


    return (
        <div className='services_parent py-[5.5rem] '>
            <div className="h-[50vw] overflow-hidden relative">
                {
                    services.map((item, index) => (
                        <div className={` slide_bg_${index} top-0 z-[${index}] blur-[0px]  w-full h-[40vw] px-10 bg-[#FFFAF0] absolute  left-0 overflow-hidden`}>
                            <div className={` slide_inn_${index}  slide_bg  w-full h-full p-14 flex items-center justify-between bg-[#9494941f] rounded-xl`}>
                                <div className="w-[45%] h-full flex flex-col justify-between">
                                    <p className='service_animate_txt_a font-medium mb-5 opacity-80'>Our Services</p>

                                    <div className="w-full flex flex-col justify-between h-full ">
                                        <div className="">
                                            <p className='text-6xl  service_animate_txt_b'>{item.title}</p>
                                            <div className=" border_anim  w-0 origin-left mt-2 border  border-dashed rounded-full border-black/30"></div>
                                        </div>
                                        <p className='service_animate_txt_c'>{item.desc}</p>

                                        <div className="stores">
                                            <div className="flex  items-center gap-2">
                                                <RiMapPinFill size={18} className='service_icon translate-y-[-2px]' />
                                                <p className=' service_animate_txt_d text-sm uppercase font-semibold'>Locate Stores:</p>
                                                <p className=' service_animate_txt_e text-sm opacity-70'>Click the location below to explore</p>
                                            </div>
                                            <div className="w-full flex flex-wrap mt-4 gap-2 ">
                                                {item?.cities.map((store) => (
                                                    <button className=' service_btn relative overflow-hidden group rounded-full border-2 border-[#0e1111] px-4 center font-bold py-1.5'>
                                                        <p className='fixy1 font_light opacity-0'>{store}</p>
                                                        <p className='fixy1 group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300 font_light absolute'>{store}</p>
                                                        <div className="w-full  group-hover:scale-110 origin-center group-hover:top-0 transition-all duration-300 h-full black left-0 top-[100%] absolute rounded-full"></div>
                                                        <p className='fixy1 font-light translate-y-[10px] z-[99] text-white group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300 font_light absolute'>{store}</p>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="w-full ">
                                            <button className=' service_btn  w-full text-white py-4 px-8 uppercase black rounded-full flex items-center justify-between'>
                                                <p className=' fixy1_5 '>Book Now</p>
                                                <RiArrowRightUpLine size={24} />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <div className="w-[40%]  h-full">
                                    <div
                                        className=" service_clip_img  w-full h-full overflow-hidden rounded-xl">
                                        <img className='w-full h-full object-cover' src={item.img} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ServicesSection