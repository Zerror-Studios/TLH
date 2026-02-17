import { RiArrowRightUpLine, RiMapPinFill, RiStarFill } from '@remixicon/react'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
    {
        img: "/images/services/wedding.webp",
        title: "Wedding Couture",
        desc: "Specialized bridal and couture garment care that preserves intricate details, delicate fabrics, and embellishments. Perfect for pre-wedding preparation or post-event preservation.",
        cities: ["Varanasi", "Amritsar", "Udaipur", "Mysuru", "Guwahati", "Rajkot", "Vadodara", "Ranchi"],
    },
    {
        img: "/images/services/home_&_fabrics.webp",
        title: "Home & Fabrics",
        desc: "Professional cleaning solutions for upholstery, curtains, carpets, and car interiors. Our service removes deep stains, dust, and allergens to keep your living and driving spaces fresh and hygienic.",
        cities: ["Indore", "Nagpur", "Bhopal", "Coimbatore", "Surat", "Patna", "Thiruvananthapuram"],
    },
    {
        img: "/images/services/sneakers_&_bags.webp",
        title: "Sneakers & Bags",
        desc: "Expert cleaning, conditioning, and restoration for premium shoes, handbags, and leather goods. We specialize in reviving worn items, extending their life while maintaining their luxury look and feel.",
        cities: ["Chennai", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh"],
    },
    {
        img: "/images/services/garment_care.webp",
        title: "Garment Care",
        desc: "Premium garment care tailored for daily wear, delicate fabrics, and designer outfits. From washing and stain removal to fabric-specific cleaning and finishing, we ensure every piece stays fresh and refined.",
        cities: ["Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Kolkata"],
    },



];

const MobileServiceSection = () => {
    const [expanded, setExpanded] = useState(false);
    const [showAllCities, setShowAllCities] = useState({}); // track cities expanded per service

    const toggleShowAll = (index) => {
        setShowAllCities((prev) => ({
            ...prev,
            [index]: !prev[index], // toggle only for this slide
        }));
    };
    return (
        <div className=' lg:hidden  w-full my-16 '>
            <div className="w-full px-5">
                <h1 className='service_animate_txt_a text-2xl  '>Our Services</h1>
            </div>
            <Swiper
                modules={[Navigation, A11y, Autoplay, Pagination]}
                spaceBetween={0}
                speed={600}
                loop
                className=" swiper_elem_2 w-full h-full"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {
                    services.map((item, index) => {
                        const showAll = showAllCities[index] || false;
                        const visibleCities = showAll ? item?.cities : item?.cities.slice(0, 3);
                        return (
                            <SwiperSlide key={index}>
                                <div key={index} className={` slide_bg_${index} top-0 mb-10 mt-5 lg:mt-0 z-[${index}] blur-[0px]  w-full h-full px-5 lg:px-10 bg-[#FFFAF0]  left-0 overflow-hidden`}>
                                    <div className={` slide_inn_${index}  slide_bg  w-full h-full p-5 lg:p-14 flex flex-col-reverse md:flex-row items-center justify-between bg-[#9494941f] rounded-lg`}>
                                        <div className=" w-full mt-5 md:mt-0 md:w-[45%] h-full flex flex-col justify-between">

                                            <div className="w-full flex flex-col gap-3 justify-between h-full ">
                                                <div className="">
                                                    <h1 className='text-2xl lg:text-6xl  service_animate_txt_b'>{item.title}</h1>
                                                    <div className=" border_anim  w-full origin-left md:mt-2 border  border-dashed rounded-full border-black/30"></div>
                                                </div>
                                                <p
                                                    onClick={() => setExpanded(!expanded)}
                                                    className={`text-xs  lg:text-base service_animate_txt_c relative transition-all duration-300 ${expanded ? "" : "line-clamp-3"
                                                        }`}
                                                >
                                                    {item.desc}
                                                </p>
                                                {/* <div className="stores">
                                                    <div className="flex flex-col lg:flex-row  lg:items-center gap-2">
                                                        <div className="flex items-center gap-2">
                                                            <RiMapPinFill size={12} className='service_icon translate-y-[-2px]' />
                                                            <h2 className=' service_animate_txt_d text-xs lg:text-sm uppercase  '>Locate Stores:</h2>
                                                        </div>
                                                        <p className=' service_animate_txt_e text-xs lg:text-sm opacity-70'>Click the location below to explore</p>
                                                    </div>
                                                    <div className="w-full flex flex-wrap mt-4 gap-2 ">
                                                        {visibleCities.map((store, i) => (
                                                            <button
                                                                key={i}
                                                                className="text-xs lg:text-base service_btn relative overflow-hidden group rounded-full border-1 border-[#0e1111] px-4 center   py-1 lg:py-1.5"
                                                            >
                                                                <p className="   opacity-0">{store}</p>
                                                                <p className=" group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300   absolute">
                                                                    {store}
                                                                </p>
                                                                <div className="w-full group-hover:scale-110 origin-center group-hover:top-0 transition-all duration-300 h-full black left-0 top-[100%] absolute rounded-full"></div>
                                                                <p className="   translate-y-[10px] z-[99] text-white group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300   absolute">
                                                                    {store}
                                                                </p>
                                                            </button>
                                                        ))}

                                                        {item?.cities.length > 3 && (
                                                            <button
                                                                onClick={() => toggleShowAll(index)}
                                                                className="text-xs lg:text-base service_btn relative overflow-hidden group rounded-full border-1 border-[#0e1111] px-4 center   py-1 lg:py-1.5"
                                                            >
                                                                <p className="     z-[99]">
                                                                    {showAll ? "show less" : ` + ${item?.cities.length - 3} more`}
                                                                </p>
                                                            </button>
                                                        )}
                                                    </div>
                                                </div> */}

                                                <a href="https://wa.me/918800020002" target='_blank'>
                                                    <div className="w-full mt-4 ">
                                                        <button className='  group relative text-xs lg:text-base service_btn  w-full hover:bg-transparent bg-[#0e1111] hover:border-black border-transparent overflow-hidden hover:text-black transition-all duration-300 hover:  border-2 text-white py-2 lg:py-4 px-4 lg:px-8 uppercase  rounded-full flex items-center justify-between'>
                                                            <div className="w-full  group-hover:scale-110 origin-center group-hover:top-0 transition-all duration-300 h-full bg-[#FFFAF0] left-0 top-[100%] absolute rounded-full"></div>
                                                            <p className=' fixy1_5 '>Book Now</p>
                                                            <RiArrowRightUpLine size={24} className='z-[99]' />
                                                        </button>
                                                    </div>
                                                </a>

                                            </div>
                                        </div>
                                        <div className=" w-full md:w-[40%] aspect-square">
                                            <div
                                                className=" service_clip_img  w-full h-full overflow-hidden rounded-lg">
                                                <img className='w-full h-full object-cover' src={item.img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                    )
                }
            </Swiper>
        </div>
    )
}

export default MobileServiceSection