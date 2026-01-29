import { allStoresData } from '@/Data/allStoresData'
import { RiMapPinFill, RiPhoneFill, RiTimeFill } from '@remixicon/react';
import React, { useEffect, useMemo, useState } from 'react'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { motion, AnimatePresence } from "framer-motion";
import SeoHeader from '@/components/seo/SeoHeader';

gsap.registerPlugin(ScrollTrigger, SplitText);

const AnimatedText = ({ children, className, uniqueKey }) => {
    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.p
                key={uniqueKey ?? children}
                className={className}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: "1px" }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.p>
        </AnimatePresence>
    );
};


const Index = () => {
    const [activeCity, setactiveCity] = useState(allStoresData[0].cityName);
    const [categoryType, setcategoryType] = useState("All Garments");

    const uniqueCity = useMemo(() => {
        const allCity = allStoresData.flatMap(store => store.cityName);
        return [...new Set(allCity)];
    }, []);

    // ✅ Intro animation (kept same as your original)
    useEffect(() => {
        gsap.fromTo(".store_txt_head", { y: 80, opacity: 1 }, { y: 0, opacity: 1, delay: 0.3, duration: 0.5, stagger: 0.05 });
        // gsap.fromTo(".below_chng_clk", { width: 0 }, { width: "100%", delay: 1, duration: 0.5 });
        // gsap.fromTo(".store_txt_a", { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 0.3, duration: 0.5, });
        // gsap.fromTo(".store_txt_b", { y: 20, opacity: 0 }, { y: "4px", opacity: 1, delay: 1, duration: 0.5, });
        // gsap.fromTo(".store_txt_c", { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 1, duration: 0.5, });
        // gsap.fromTo(".store_txt_d", { y: 25, opacity: 0 }, { y: "1.5px", opacity: 1, delay: 0.2, duration: 0.2, });
        // gsap.fromTo(".table_ver_line", { height: 0 }, { height: "100%", delay: 1, duration: 0.5, });
        // gsap.from(".table_border", { opacity: 0, delay: 0.8, duration: 0.5, });
        // gsap.from(".chnge_cat_tble", { background: "transparent", borderColor: "transparent", delay: 0.8, duration: 0.5, });
        // gsap.from(".chnge_cat_tble_b", { background: "transparent", borderColor: "transparent", delay: 0.8, duration: 0.5, });
    }, []);

    return (
        <>

            <SeoHeader meta={meta} />

            {/* Header Section */}
            <div className="w-full flex lg:items-center justify-center flex-col p-5 pt-20 lg:pt-32">
                <div className="block overflow-hidden">
                    <h1 className=' store_txt_head text-2xl lg:text-6xl   '>Our Stores</h1>
                </div>
                <div className="block overflow-hidden">
                    <p className='  text-sm store_txt_head lg:text-xl '>Find a store near you to experience our services firsthand.</p>
                </div>
            </div>

            {/* City Tabs */}
            <div className=" tags w-full  lg:mt-10 px-5 lg:px-10 h-10 border-b scroller_none overflow-x-scroll border-black/20 flex items-center gap-5 lg:gap-10">
                {uniqueCity.map(city => (
                    <div
                        key={city}
                        onClick={() => {setcategoryType("All Garments");setactiveCity(city)}}
                        className={`relative shrink-0 whitespace-nowrap h-full flex items-center justify-center cursor-pointer transition duration-300 ${activeCity === city ? "font-semibold opacity-100" : "opacity-80"}`}
                    >
                        <AnimatedText uniqueKey={city} className="text-sm lg:text-base">{city}</AnimatedText>
                        <div className={` absolute -bottom-[1.5px] z-[9] w-full black rounded-full h-[2px] transition duration-300 ${activeCity === city ? "opacity-100" : "opacity-0"}`}></div>
                    </div>
                ))}
            </div>

            <div className="w-full flex flex-col lg:flex-row justify-between p-5 lg:p-10 mb-5 lg:mb-20">
                {/* Left Side (Shops List) */}
                <div className=" lg:sticky top-24 lg:h-screen w-full lg:w-[40%] border-r border-black/10 pr-5">
                    {allStoresData.find(store => store.cityName === activeCity)?.shopNames?.map((shop, index) => (
                        <div
                            key={index}
                            className={`w-full ${index === 0 ? "py-0 pb-4" : "py-4 pb-4"} chnge_cat_tble_b flex flex-col gap-1 md:gap-2 border-b border-black/20`}
                        >
                            <AnimatedText uniqueKey={shop.name} className="store_txt_a text-xl md:text-2xl font-bold ">{shop.name}</AnimatedText>
                            <AnimatedText uniqueKey={shop.address} className="store_txt_a text-xs md:text-sm opacity-70">{shop.address}</AnimatedText>
                            <div className="flex text-xs md:text-sm items-center justify-between md:justify-start md:gap-14">
                                <div className="store_txt_a flex items-center gap-1">
                                    <AnimatedText uniqueKey={`${shop.name}-time-icon`}>
                                        <RiTimeFill size={14} />
                                    </AnimatedText>
                                    <AnimatedText uniqueKey={shop.openTime} className="fixy1">{shop.openTime}</AnimatedText>
                                    <AnimatedText uniqueKey={`${shop.name}-dash`} className="fixy1">
                                        -
                                    </AnimatedText>
                                    <AnimatedText uniqueKey={shop.closeTime} className="fixy1">{shop.closeTime}</AnimatedText>
                                </div>
                                <div className="store_txt_a flex items-center gap-1">
                                    <AnimatedText uniqueKey={`${shop.name}-phone-icon`}>
                                        <RiPhoneFill size={14} />
                                    </AnimatedText>
                                    <AnimatedText uniqueKey={shop.contact} className="fixy1">
                                        <a href="tel:{shop.contact}" className="fixy1 underline">
                                        {shop.contact}
                                        </a>
                                        </AnimatedText>
                                </div>
                                <div className="store_txt_a flex items-center gap-1">
                                    <AnimatedText uniqueKey={`${shop.name}-map-icon`}>
                                        <RiMapPinFill size={14} />
                                    </AnimatedText>
                                    <a
                                        href={shop.location}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="fixy1 underline"
                                    >
                                        <AnimatedText uniqueKey={shop.location} className="fixy1">Location</AnimatedText>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side (Categories + Table) */}
                <div className=" mt-10 lg:mt-0 w-full lg:w-1/2 h-full flex flex-col gap-8">
                    {/* Category Tabs */}
                    <div className="chnge_cat_tble w-full h-10 px-5 md:h-12 flex items-center md:px-20 justify-between rounded-full border border-black/10 bg-black/5">
                        {allStoresData.find(store => store.cityName === activeCity)?.categories?.map((category, index) => (
                            <div
                                key={index}
                                onClick={() => setcategoryType(category.name)}
                                className="h-full relative w-fit cursor-pointer center"
                            >
                                <div className="block overflow-hidden">
                                    <AnimatedText
                                        uniqueKey={category.name}
                                        className={`fixy1_5 text-[3vw] md:text-base store_txt_d transition duration-300 ${categoryType === category.name ? "opacity-100" : "opacity-50 text-black/50"}`}
                                    >
                                        {category.name}
                                    </AnimatedText>
                                </div>
                                <div className={` ${categoryType === category.name ? "opacity-100" : "opacity-0"} below_chng_clk absolute w-full h-[2px] black bottom-[-1.5px] rounded-full transition duration-300`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Price Table */}
                    <div className="chnge_cat_tble w-full relative overflow-hidden rounded-lg border border-black/20">
                        <div className=" border-[1px] border-dashed  h-full opacity-20 black absolute left-[33%]"></div>
                        <div className=" border-[1px] border-dashed  h-full opacity-20 black absolute right-[33%]"></div>
                        <table className=" text-xs md:text-base text-center w-full h-full">
                            <thead className="w-full">
                                <tr className="chnge_cat_tble table_border w-full flex h-12 bg-black/5 border-[#0e11117e] border-b-2 justify-between">
                                    <th className="w-[33%] center h-10"><p className="  store_txt_b font-medium translate-y-[4px]">Garments/ Accessories</p></th>
                                    <th className="w-[33%] center h-10"><p className="  store_txt_b font-medium translate-y-[4px]">Starting Price</p></th>
                                    <th className="w-[33%] center h-10"><p className="  store_txt_b font-medium translate-y-[4px]">Steam Press</p></th>
                                </tr>
                            </thead>
                            <tbody className="w-full">
                                {allStoresData
                                    .find(store => store.cityName === activeCity)
                                    ?.categories.find(cat => cat.name === categoryType)
                                    ?.servicePrices.map((service, index) => (
                                        <tr
                                            key={index}
                                            className={` ${index % 2 === 0 ? "bg-black/3 " : "bg-black/5"} chnge_cat_tble w-full flex justify-between h-10 lg:h-12 items-center`}
                                        >
                                            <td className="w-[32%] center">
                                                <AnimatedText uniqueKey={service.serviceName} className="store_txt_c text-xs lg:text-base">{service.serviceName}</AnimatedText>
                                            </td>
                                            <td className="w-[32%] center">
                                                <AnimatedText
                                                    uniqueKey={service.startingPrice}
                                                    className="store_txt_c text-xs lg:text-base"
                                                >
                                                    {service.startingPrice === "-" ? "-" : `₹ ${service.startingPrice}`}
                                                </AnimatedText>
                                            </td>
                                            <td className="w-[32%] center">
                                                <AnimatedText
                                                    uniqueKey={service.steamPrice}
                                                    className="store_txt_c text-xs lg:text-base"
                                                >
                                                    {service.steamPrice === "-" ? "-" : `₹ ${service.steamPrice}`}
                                                </AnimatedText>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Notes */}
                    <div>
                        <h1 className="  store_txt_c opacity-70 text-sm translate-x-[-1.5px]">* Please Note</h1>
                        <p className="text-sm store_txt_c opacity-70  ">• Designer and bridal apparel will be charged based on quality and specific requirements.</p>
                        <p className="text-sm store_txt_c opacity-70  ">• Prices are exclusive of GST and are starting rates only.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;


export const meta = {
    title: "Our Stores | Find a Laundry House Near You",
    description:
        "Locate The Laundry House stores near you and experience premium laundry and dry cleaning services at our expertly managed outlets.",
    canonical: "https://thelaundryhouseindia.com/stores",
    og: {
        title: "The Laundry House Stores",
        description:
            "Find your nearest The Laundry House store for premium garment care services.",
        image: "https://thelaundryhouseindia.com/logo-og.png",
        url: "https://thelaundryhouseindia.com/stores",
        type: "website",
        site_name: "The Laundry House",
    },
    twitter: {
        card: "summary_large_image",
        title: "Find The Laundry House Stores",
        description:
            "Premium laundry and dry cleaning outlets near you.",
        image: "https://thelaundryhouseindia.com/logo-og.png",
    },
    robots: "index,follow",
    keywords:
        "laundry stores near me, dry cleaning outlets India, The Laundry House locations",
    author: "The Laundry House",
};
