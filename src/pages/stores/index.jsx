import { allStoresData } from '@/Data/allStoresData'
import { RiMapPinFill, RiPhoneFill, RiTimeFill } from '@remixicon/react';
import React, { useEffect, useMemo, useState } from 'react'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { motion, AnimatePresence } from "framer-motion";

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
    const [categoryType, setcategoryType] = useState("Men's Wear");

    const uniqueCity = useMemo(() => {
        const allCity = allStoresData.flatMap(store => store.cityName);
        return [...new Set(allCity)];
    }, []);

    // ✅ Intro animation (kept same as your original)
    useEffect(() => {
        gsap.fromTo(".below_chng_clk", { width: 0 }, { width: "100%", delay: 1, stagger: 0.1, duration: 0.5 });
        gsap.fromTo(".store_txt_a", { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 0.3, duration: 0.5, stagger: 0.05 });
        gsap.fromTo(".store_txt_b", { y: 20, opacity: 0 }, { y: "4px", opacity: 1, delay: 1, duration: 0.5, stagger: 0.05 });
        gsap.fromTo(".store_txt_c", { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 1, duration: 0.5, stagger: 0.05 });
        gsap.fromTo(".store_txt_d", { y: 25, opacity: 0 }, { y: "1.5px", opacity: 1, delay: 0.2, duration: 0.2, stagger: 0.1 });
        gsap.fromTo(".table_ver_line", { height: 0 }, { height: "100%", delay: 1, duration: 0.5, stagger: 0.2 });
        gsap.from(".table_border", { opacity: 0, delay: 0.8, duration: 0.5, stagger: 0.2 });
        gsap.from(".chnge_cat_tble", { background: "transparent", borderColor: "transparent", delay: 0.8, duration: 0.5, stagger: 0.2 });
        gsap.from(".chnge_cat_tble_b", { background: "transparent", borderColor: "transparent", delay: 0.8, duration: 0.5, stagger: 0.2 });
    }, []);

    return (
        <div>
            {/* Header Section */}
            <div className="w-full center flex-col pt-32">
                <p className='text-6xl store_txt_a'>Our Stores</p>
                <p className='text-xl store_txt_a'>Find a store near you to experience our services firsthand.</p>
            </div>

            {/* City Tabs */}
            <div className="chnge_cat_tble_b tags w-full mt-16 px-24 h-10 border-b scroller_none border-black/20 flex items-center gap-10">
                {uniqueCity.map(city => (
                    <div
                        key={city}
                        onClick={() => setactiveCity(city)}
                        className={`relative shrink-0 whitespace-nowrap h-full flex items-center justify-center cursor-pointer transition duration-300 ${activeCity === city ? "" : "text-black/40"}`}
                    >
                        <AnimatedText uniqueKey={city} className="store_txt_a">{city}</AnimatedText>
                        <div className={`below_chng_clk absolute -bottom-[1.5px] z-[9] w-full black rounded-full h-[2px] transition duration-300 ${activeCity === city ? "opacity-100" : "opacity-0"}`}></div>
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-between p-10 mb-20">
                {/* Left Side (Shops List) */}
                <div data-lenis-prevent data className="w-[40%] h-[35vw] overflow-y-scroll scroller_none">
                    {allStoresData.find(store => store.cityName === activeCity)?.shopNames?.map((shop, index) => (
                        <div
                            key={index}
                            className={`w-full ${index === 0 ? "py-0 pb-4" : "py-4 pb-4"} chnge_cat_tble_b flex flex-col gap-2 border-b border-black/20`}
                        >
                            <AnimatedText uniqueKey={shop.name} className="store_txt_a text-2xl font-semibold">{shop.name}</AnimatedText>
                            <AnimatedText uniqueKey={shop.address} className="store_txt_a text-sm opacity-70">{shop.address}</AnimatedText>
                            <div className="flex text-sm items-center gap-14">
                                <div className="store_txt_a flex items-center gap-1">
                                    <RiTimeFill size={16} />
                                    <AnimatedText uniqueKey={shop.openTime} className="fixy1">{shop.openTime}</AnimatedText>
                                    <p className="fixy1">-</p>
                                    <AnimatedText uniqueKey={shop.closeTime} className="fixy1">{shop.closeTime}</AnimatedText>
                                </div>
                                <div className="store_txt_a flex items-center gap-1">
                                    <RiPhoneFill size={16} />
                                    <AnimatedText uniqueKey={shop.contact} className="fixy1">{shop.contact}</AnimatedText>
                                </div>
                                <div className="store_txt_a flex items-center gap-1">
                                    <RiMapPinFill size={16} />
                                    <a
                                        href={shop.location}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="fixy1 underline"
                                    >
                                        <AnimatedText uniqueKey={shop.location} className="fixy1">Get Direction</AnimatedText>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side (Categories + Table) */}
                <div className="w-1/2 h-full flex flex-col gap-8">
                    {/* Category Tabs */}
                    <div className="chnge_cat_tble w-full h-12 flex items-center px-20 justify-between rounded-full border border-black/20 bg-black/5">
                        {allStoresData.find(store => store.cityName === activeCity)?.categories?.map((category, index) => (
                            <div
                                key={index}
                                onClick={() => setcategoryType(category.name)}
                                className="h-full relative w-fit cursor-pointer center"
                            >
                                <div className="block overflow-hidden">
                                    <AnimatedText
                                        uniqueKey={category.name}
                                        className={`fixy1_5 store_txt_d transition duration-300 ${categoryType === category.name ? "opacity-100" : "opacity-50"}`}
                                    >
                                        {category.name}
                                    </AnimatedText>
                                </div>
                                <div className={` ${categoryType === category.name ? "opacity-100" : "opacity-0"} below_chng_clk absolute w-full h-[2px] black bottom-[-1.5px] rounded-full transition duration-300`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Price Table */}
                    <div className="chnge_cat_tble w-full relative overflow-hidden rounded-xl border border-black/20">
                        <div className="table_ver_line w-[1.5px] h-full opacity-50 black absolute left-[33%]"></div>
                        <div className="table_ver_line w-[1.5px] h-full opacity-50 black absolute right-[33%]"></div>
                        <table className="w-full h-full">
                            <thead className="w-full">
                                <tr className="chnge_cat_tble table_border w-full flex h-12 bg-black/5 border-[#0e11117e] border-b-2 justify-between">
                                    <th className="w-[33%] center h-10"><p className="font-thin store_txt_b translate-y-[4px]">Garments/Accessories</p></th>
                                    <th className="w-[33%] center h-10"><p className="font-thin store_txt_b translate-y-[4px]">Premium Fabric Care Service</p></th>
                                    <th className="w-[33%] center h-10"><p className="font-thin store_txt_b translate-y-[4px]">Steam Iron Service</p></th>
                                </tr>
                            </thead>
                            <tbody data-lenis-prevent className="w-full">
                                {allStoresData
                                    .find(store => store.cityName === activeCity)
                                    ?.categories.find(cat => cat.name === categoryType)
                                    ?.servicePrices.map((service, index) => (
                                        <tr
                                            key={index}
                                            className={` ${index % 2 === 0 ? "bg-black/2 " : "bg-black/5"} chnge_cat_tble w-full flex justify-between h-12 items-center`}
                                        >
                                            <td className="w-[32%] center">
                                                <AnimatedText uniqueKey={service.serviceName} className="store_txt_c">{service.serviceName}</AnimatedText>
                                            </td>
                                            <td className="w-[32%] center">
                                                <AnimatedText uniqueKey={service.premiumPrice} className="store_txt_c">₹ {service.premiumPrice}</AnimatedText>
                                            </td>
                                            <td className="w-[32%] center">
                                                <AnimatedText uniqueKey={service.steamPrice} className="store_txt_c">₹ {service.steamPrice}</AnimatedText>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Notes */}
                    <div>
                        <p className="font-semibold store_txt_c opacity-70 text-sm">* Please Note</p>
                        <p className="text-sm store_txt_c opacity-70 font_light">• Designer and bridal apparel will be charged based on quality and specific requirements.</p>
                        <p className="text-sm store_txt_c opacity-70 font_light">• Prices are exclusive of GST and are starting rates only.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
