import { RiArrowDownSLine, RiArrowRightUpLine, RiCloseLine } from '@remixicon/react';
import React, { useEffect, useMemo, useRef, useState } from 'react'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        filter: "blur(5px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        filter: "blur(5px)",
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
        img: "/images/services/1_Garment Care.jpg"
    },
    {
        id: 2,
        title: "Shoe & Bags",
        desc: "Premium cleaning and restoration services for shoes and bags.",
        Tags: ["Shoe Cleaning", "Bag Cleaning"],
        img: "/images/services/2_Shoe & Bags.jpg"
    },
    {
        id: 3,
        title: "Home & Auto Fabrics",
        desc: "Deep cleaning for sofas, curtains, and carpets including auto upholstery.",
        Tags: ["Sofa Cleaning", "Curtain Cleaning", "Carpet Cleaning"],
        img: "/images/services/3_Home & Auto Fabrics.jpg"
    },
    {
        id: 4,
        title: "Wedding Couture",
        desc: "Specialized cleaning and finishing of wedding gowns and couture dresses.",
        Tags: ["Dry Cleaning", "Steam Ironing"],
        img: "/images/services/4_Wedding Couturer.jpg"
    },
    {
        id: 5,
        title: "Laundry Essentials",
        desc: "Everyday laundry service with wet cleaning and steam ironing.",
        Tags: ["Wet Cleaning", "Steam Ironing"],
        img: "/images/services/1_Garment Care.jpg"
    },
    {
        id: 6,
        title: "Curtains & Drapes",
        desc: "On-site and off-site curtain cleaning to remove dust and pollutants.",
        Tags: ["Curtain Cleaning"],
        img: "/images/services/2_Shoe & Bags.jpg"
    },
    {
        id: 7,
        title: "Carpet & Rugs",
        desc: "Professional carpet and rug cleaning with stain removal and deodorizing.",
        Tags: ["Carpet Cleaning"],
        img: "/images/services/3_Home & Auto Fabrics.jpg"
    },
    {
        id: 8,
        title: "Luxury Leather Bags",
        desc: "Restoration, polishing, and deep cleaning for luxury leather bags.",
        Tags: ["Bag Cleaning"],
        img: "/images/services/1_Garment Care.jpg"
    },
    {
        id: 9,
        title: "Silk & Satin Wear",
        desc: "Gentle hand-finishing and dry cleaning for silk and satin fabrics.",
        Tags: ["Dry Cleaning", "Steam Ironing"],
        img: "/images/services/1_Garment Care.jpg"
    }
];

const index = () => {
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
            duration: 0.5,
        });
        gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 0.5,
        });
    };
    const closeService = () => {
        if (window.lenis) window.lenis.start();

        gsap.to(slideRef.current, {
            right: "-30vw",
            duration: 0.5,
        });
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.5,
        });
    };

    useEffect(() => {
        gsap.fromTo(".serv_txt_a", { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 0.3, duration: 0.5, stagger: 0.05 });

        gsap.fromTo(
            ".serv_clip",
            {
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                filter: "blur(5px)"
            },
            {
                delay: 0.1,
                stagger: 0.2,
                ease: "power2.inOut",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                filter: "blur(0px)",
                duration: 0.6,
            }, "parallel");

        gsap.fromTo(".serv_txt_b", { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 1.5, duration: 0.5, stagger: 0.05 });
        gsap.fromTo(".serv_line", { opacity: 0 }, { opacity: 1, delay: 0.5, duration: 0.5, });
    }, [])


    return (
        <div>

            <div ref={overlayRef} className="overlay pointer-events-none opacity-0 fixed h-screen w-full bg-black/70 z-[99]"></div>

            <div ref={slideRef} className=" open_slide w-[30vw] flex flex-col justify-between h-screen bg-[#FFFAF0] p-10 fixed top-0 right-[-30vw] z-[999]">
                <div className="flex flex-col gap-5">
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
                    <button className='w-full text-white py-4 px-8 uppercase black rounded-full flex items-center justify-between'>
                        <p className=' fixy1_5 '>Book Now</p>
                        <RiArrowRightUpLine size={24} />
                    </button>
                </div>
            </div>

            <div className="w-full center flex-col pt-32">
                <p className=' serv_txt_a  text-6xl'>Our Services</p>
                <p className='serv_txt_a text-xl'>Explore the range of services we offer to care for your garments.</p>
            </div>
            <div className="tags w-full mt-16 px-24 h-10 border-b scroller_none border-black/20  flex items-center justify-between">
                {uniqueTags.map(tag => (
                    <div onClick={() => changeTag(tag)} key={tag} className={`relative shrink-0 whitespace-nowrap h-full flex items-center cursor-pointer transition duration-300 ${activeTag === tag ? " " : "text-black/40"}`}>
                        <p className='serv_txt_a'>{tag}</p>
                        <div className={` serv_line opacity-100 absolute -bottom-[1.5px] z-[9]  bg-black rounded-full h-[2px] transition-all origin-center duration-300 ${activeTag === tag ? "w-full" : "w-0"}`}></div>
                    </div>
                ))}
            </div>
            <div className=" mb-20 p-10 w-full ">
                <div className="w-full pb-10 overflow-x-auto custom_scroller flex  gap-10 ">
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map((service, index) => (
                            <motion.div
                                key={service.title} // stable key
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ delay: index * 0.15 }} // stagger effect
                                className="w-[25%]  shrink-0 flex flex-col justify-between gap-5"
                            >
                                <motion.div className="serv_clip aspect-square w-full  overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={service.img}
                                        alt={service.title}
                                    />
                                </motion.div>
                                <div className="w-full h-[30%] flex flex-col justify-between">
                                    <p className="text-3xl serv_txt_b">{service.title}</p>
                                    <p className="serv_txt_b">{service.desc}</p>
                                    <div>
                                        <button
                                            onClick={() => openService(service)}
                                            className="serv_txt_b flex gap-2 uppercase px-4 py-2 bg-black/5 rounded-full"
                                        >
                                            <p className="text-base fixy1_5">Book Now</p>
                                            <RiArrowRightUpLine size={24} />
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