import { RiArrowDownSLine, RiArrowRightUpLine, RiCloseLine } from '@remixicon/react';
import React, { useEffect, useMemo, useRef, useState } from 'react'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

import { motion, AnimatePresence } from "framer-motion";
import CustomEase from 'gsap/dist/CustomEase';
import { useRouter } from 'next/router';

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    visible: {
        opacity: 1,
        y: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        transition: {
            duration: 0.4,
            ease: "easeInOut"
        }
    }
};

const Services = [
    {
        id: 1,
        title: "Garment Care",
        desc: "Professional dry cleaning and wet cleaning for all your precious garments.",
        Tags: ["Dry Cleaning", "Wet Cleaning"],
        img: "/images/services/1_Garment Care.webp"
    },
    {
        id: 2,
        title: "Shoe & Bags",
        desc: "Premium cleaning and restoration services for shoes and bags.",
        Tags: ["Shoe Cleaning", "Bag Cleaning"],
        img: "/images/services/2_Shoe & Bags.webp"
    },
    {
        id: 3,
        title: "Home & Auto Fabrics",
        desc: "Deep cleaning for sofas, curtains, and carpets including auto upholstery.",
        Tags: ["Sofa Cleaning", "Curtain Cleaning", "Carpet Cleaning"],
        img: "/images/services/3_Home & Auto Fabrics.webp"
    },
    {
        id: 4,
        title: "Wedding Couture",
        desc: "Specialized cleaning and finishing of wedding gowns and couture dresses.",
        Tags: ["Dry Cleaning", "Steam Ironing"],
        img: "/images/services/4_Wedding Couturer.webp"
    },
    {
        id: 5,
        title: "Laundry Essentials",
        desc: "Everyday laundry service with wet cleaning and steam ironing.",
        Tags: ["Wet Cleaning", "Steam Ironing"],
        img: "/images/services/1_Garment Care.webp"
    },
    {
        id: 6,
        title: "Curtains & Drapes",
        desc: "On-site and off-site curtain cleaning to remove dust and pollutants.",
        Tags: ["Curtain Cleaning"],
        img: "/images/services/2_Shoe & Bags.webp"
    },
    {
        id: 7,
        title: "Carpet & Rugs",
        desc: "Professional carpet and rug cleaning with stain removal and deodorizing.",
        Tags: ["Carpet Cleaning"],
        img: "/images/services/3_Home & Auto Fabrics.webp"
    },
    {
        id: 8,
        title: "Luxury Leather Bags",
        desc: "Restoration, polishing, and deep cleaning for luxury leather bags.",
        Tags: ["Bag Cleaning"],
        img: "/images/services/1_Garment Care.webp"
    },
    {
        id: 9,
        title: "Silk & Satin Wear",
        desc: "Gentle hand-finishing and dry cleaning for silk and satin fabrics.",
        Tags: ["Dry Cleaning", "Steam Ironing"],
        img: "/images/services/1_Garment Care.webp"
    }
];


const introAnimation = () => {
    gsap.fromTo(".serv_txt_a", { y: 80, opacity: 1 }, { y: 0, opacity: 1, delay: 0.3, duration: 0.5, stagger: 0.05 });

    gsap.fromTo(
        ".serv_clip",
        {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        {
            delay: 0.1,
            stagger: 0.15,
            ease: "custom",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 0.8,
        });

    // gsap.fromTo(".serv_txt_b", { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 1.5, duration: 0.5, stagger: 0.05 });
    // gsap.fromTo(".serv_line", { opacity: 0 }, { opacity: 1, delay: 0.5, duration: 0.5, });

}

const index = () => {
    const router = useRouter();
    CustomEase.create("custom", "0.785, 0.135, 0.15, 0.86")
    const [activeTag, setactiveTag] = useState("All");
    const [activeService, setactiveService] = useState(Services[0]);

    const slideRef = useRef(null);
    const overlayRef = useRef(null);

    const changeTag = (tag) => {
        setactiveTag(tag);
    };

    const filteredServices = useMemo(() => {
        if (activeTag === "All") return Services;
        return Services.filter(service => service.Tags.includes(activeTag));
    }, [activeTag]);

    const uniqueTags = useMemo(() => {
        const allTags = Services.flatMap(service => service.Tags);
        return ["All", ...new Set(allTags)];
    }, []);

    const openService = (service) => {
        setactiveService(service);
        if (window.lenis) window.lenis.stop();
        gsap.to(slideRef.current, {
            right: 0,
            duration: 1,
            ease: "custom"
        });
        gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 1,
            ease: "custom"
        });
    };
    const closeService = () => {
        if (window.lenis) window.lenis.start();

        gsap.to(slideRef.current, {
            right: "-100%",
            duration: 1,
            ease: "custom"
        });
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 1,
            ease: "custom"

        });
    };

    useEffect(() => {
        introAnimation()
    }, [])


    return (
        <div>

            <div ref={overlayRef} className="overlay pointer-events-none opacity-0 fixed h-screen w-full bg-black/70 z-[99]"></div>

            <div ref={slideRef} className=" open_slide w-full md:w-[50vw]  lg:w-[30vw] flex flex-col justify-between h-screen bg-[#FFFAF0] p-5 lg:p-10 fixed top-0 right-[-100%] z-[999]">
                <div className="flex flex-col gap-3 lg:gap-5">
                    <div className="w-full flex items-center justify-between">
                        <p className='text-3xl '>{activeService?.title}</p>
                        <RiCloseLine onClick={closeService} size={30} className='cursor-pointer' />
                    </div>
                    <div className="w-full h-[1.5px] black opacity-60"></div>
                    <div className="w-[65%] aspect-square">
                        <img src={activeService?.img} alt="" />
                    </div>
                    <p className='text-sm'>{activeService?.desc}</p>
                    <div className="w-full h-[1.5px] black opacity-60"></div>
                    <div className="w-full  px-2  flex items-center justify-between">
                        <p className='opacity-70'>Select State</p>
                        <RiArrowDownSLine size={30} />
                    </div>
                    <div className="w-full h-[1.5px] black opacity-60"></div>

                    <div className="w-full  px-2  flex items-center justify-between">
                        <p className='opacity-70'>Select State</p>
                        <RiArrowDownSLine size={30} />
                    </div>
                    <div className="w-full h-[1.5px] black opacity-60"></div>
                </div>
                <div className="w-full ">
                    <button className='  group relative text-xs lg:text-base service_btn  w-full hover:bg-transparent bg-black hover:border-black border-transparent overflow-hidden hover:text-black transition-all duration-300 hover:font-semibold border-2 text-white py-2 lg:py-4 px-4 lg:px-8 uppercase  rounded-full flex items-center justify-between'>
                        <div className="w-full  group-hover:scale-110 origin-center group-hover:top-0 transition-all duration-300 h-full bg-[#FFFAF0] left-0 top-[100%] absolute rounded-full"></div>
                        <p className=' fixy1_5 '>Book Now</p>
                        <RiArrowRightUpLine size={24} className='z-[99]' />
                    </button>
                </div>
            </div>

            <div className="w-full flex lg:items-center justify-center flex-col p-5 pt-20 lg:pt-32">
                <div className="block overflow-hidden">
                    <p className=' serv_txt_a  text-2xl lg:text-6xl font-semibold'>Our Services</p>
                </div>
                <div className="block overflow-hidden">
                    <p className=' text-sm mt-1 serv_txt_a lg:text-xl'>Explore the range of services we offer to care for your garments.</p>
                </div>
            </div>
            <div className="tags w-full  lg:mt-10 px-5 lg:px-24 h-10 border-b scroller_none overflow-x-scroll gap-5 border-black/20  flex items-center justify-between">
                {uniqueTags.map(tag => (
                    <div onClick={() => changeTag(tag)} key={tag} className={`relative shrink-0 whitespace-nowrap h-full flex items-center cursor-pointer transition duration-300 ${activeTag === tag ? " " : "text-black/40"}`}>
                        <p className=' text-sm lg:text-base'>{tag}</p>
                        <div className={` absolute -bottom-[0px] z-[9] w-full black rounded-full h-[2px] transition duration-300 ${activeTag === tag ? "opacity-100" : "opacity-0"}`}></div>
                    </div>
                ))}
            </div>
            <div className=" mb-20 p-5 lg:p-10 w-full overflow-hidden ">
                <div className="w-full pb-10 overflow-x-auto custom_scroller flex  gap-5 lg:gap-10 ">
                    <AnimatePresence mode="wait">
                        {filteredServices.map((service, index) => (
                            <motion.div
                                key={service.title} // stable key
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ delay: index * 0.15 }} // stagger effect
                                className=" w-[70%] md:w-[40%] lg:w-[25%]  shrink-0 flex flex-col justify-between "
                            >
                                <motion.div className="serv_clip aspect-square w-full  overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={service.img}
                                        alt={service.title}
                                    />
                                </motion.div>
                                <div className="w-full mt-2 md:mt-3    flex flex-col justify-between">
                                    <p className=" text-xl lg:text-2xl serv_txt_b">{service.title}</p>
                                    <p className=" text-xs md:text-sm leading-none lg:text-base serv_txt_b">{service.desc}</p>
                                    <div>
                                        <button
                                            onClick={() => openService(service)}
                                            className='serv_txt_b add_anim_txt_btn text-xs lg:text-sm mt-4  relative overflow-hidden group rounded-full text-white font-thin hover:text-black bg-black  border-2 border-[#0e1111] px-4 center lg:font-bold py-1'>
                                            <p className='fixy1 font-thin opacity-0'>Book Now</p>
                                            <p className='fixy1 group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300 font-thin absolute'>Book Now </p>
                                            <div className="w-full  group-hover:scale-110 origin-center group-hover:top-0 transition-all duration-300 h-full bg-[#FFFAF0] left-0 top-[100%] absolute rounded-full"></div>
                                            <p className='fixy1  translate-y-[10px] z-[99] text-black group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300 font_light absolute'> Book Now</p>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    )
}

export default index