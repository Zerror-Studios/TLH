import { RiArrowRightUpLine, RiMapPinFill } from '@remixicon/react'
import React, { useEffect, useState } from 'react'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import ServiceBtn from './../../components/Buttons/ServiceBtn';
gsap.registerPlugin(ScrollTrigger, SplitText);

const services = [
    {
        img: "/images/services/4_Wedding Couturer.webp",
        title: "Wedding Couture",
        desc: "Specialized bridal and couture garment care that preserves intricate details, delicate fabrics, and embellishments. Perfect for pre-wedding preparation or post-event preservation.",
        cities: ["Varanasi", "Amritsar", "Udaipur", "Mysuru", "Guwahati", "Rajkot", "Vadodara", "Ranchi"],
    },
    {
        img: "/images/services/3_Home & Auto Fabrics.webp",
        title: "Home & Auto Fabrics",
        desc: "Professional cleaning solutions for upholstery, curtains, carpets, and car interiors. Our service removes deep stains, dust, and allergens to keep your living and driving spaces fresh and hygienic.",
        cities: ["Indore", "Nagpur", "Bhopal", "Coimbatore", "Surat", "Patna", "Thiruvananthapuram"],
    },
    {
        img: "/images/services/2_Shoe & Bags.webp",
        title: "Shoe & Bags",
        desc: "Expert cleaning, conditioning, and restoration for premium shoes, handbags, and leather goods. We specialize in reviving worn items, extending their life while maintaining their luxury look and feel.",
        cities: ["Chennai", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh"],
    },
    {
        img: "/images/services/1_Garment Care.webp",
        title: "Garment Care",
        desc: "The Laundry House offers premium garment care services designed to preserve the quality, feel, and freshness of every piece. Whether it's daily wear, delicate fabrics, or designer outfits, we handle each garment with expert attention and care. Our services include professional washing, stain removal, fabric-specific cleaning, ironing, and finishing – all tailored to suit your clothing’s needs.",
        cities: ["Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Kolkata"],
    },



];


const ServicesSection = () => {
    const [showAllCities, setShowAllCities] = useState({}); // track cities expanded per service

    const toggleShowAll = (index) => {
        setShowAllCities((prev) => ({
            ...prev,
            [index]: !prev[index], // toggle only for this slide
        }));
    };

    useEffect(() => {

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.services_parent',
                pin:true,
                scrub:true,
                start:"top top",
                markers:true,
                end:window.innerHeight*4
            }
        })
        tl.to(".slide_bg_0",{
            scale:0.8,
        },"par")
        tl.to(".slide_bg_1",{
            top:0,
        },"par")
        tl.to(".slide_bg_1",{
            scale:0.8,
        },"par2")
        tl.to(".slide_bg_2",{
            top:0,
        },"par2")
        tl.to(".slide_bg_2",{
            scale:0.8,
        },"par3")
        tl.to(".slide_bg_3",{
            top:0,
            zIndex:10,
        },"par3")

      
    }, [])
    


    return (
        <div className=' hidden lg:flex services_parent my-16 lg:my-0  lg:h-screen w-full items-center justify-center  '>
            <div className="   lg:h-[37vw]  w-full overflow-hidden relative">
                {
                    services.map((item, index) => {
                        const showAll = showAllCities[index] || false;
                        const visibleCities = showAll ? item?.cities : item?.cities.slice(0, 4);
                        return (
                            <div key={index} className={` slide_bg_${index} ${index === 0 ? "top-0" : "top-[100%]"} mt-10 lg:mt-0 z-[${index}] blur-[0px]  w-full h-full px-5 lg:px-10 bg-[#FFFAF0] lg:absolute  left-0 overflow-hidden`}>
                                <div className={` slide_inn_${index}  slide_bg  w-full h-full p-5 lg:p-14 flex flex-col-reverse md:flex-row items-center justify-between bg-[#9494941f] rounded-xl`}>
                                    <div className=" w-full mt-5 md:mt-0 md:w-[45%] h-full flex flex-col justify-between">
                                        <p className='service_animate_txt_a  md:mb-5 opacity-80'>Our Services</p>

                                        <div className="w-full flex flex-col gap-4 justify-between h-full ">
                                            <div className="">
                                                <p className='text-3xl lg:text-6xl  service_animate_txt_b'>{item.title}</p>
                                                <div className=" border_anim  w-full origin-left md:mt-2 border  border-dashed rounded-full border-black/30"></div>
                                            </div>
                                            <p className=' text-xs lg:text-base  service_animate_txt_c'>{item.desc}</p>

                                            <div className="stores">
                                                <div className="flex md:flex-col lg:flex-row  lg:items-center gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <RiMapPinFill size={18} className='service_icon translate-y-[-2px]' />
                                                        <p className=' service_animate_txt_d text-xs lg:text-sm uppercase  '>Locate Stores:</p>
                                                    </div>
                                                    <p className=' service_animate_txt_e text-xs lg:text-sm opacity-70'>Click the location below to explore</p>
                                                </div>
                                                <div className="w-full flex flex-wrap mt-4 gap-2 ">
                                                    {visibleCities.map((store, i) => (
                                                        <button
                                                            key={i}
                                                            className="text-xs lg:text-base service_btn relative overflow-hidden group rounded-full border-2 border-[#0e1111] px-4 center   py-1 lg:py-1.5"
                                                        >
                                                            <p className="   opacity-0">{store}</p>
                                                            <p className=" group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300   absolute">
                                                                {store}
                                                            </p>
                                                            <div className="w-full group-hover:scale-110 origin-center group-hover:top-0 transition-all duration-300 h-full black left-0 top-[100%] absolute rounded-full"></div>
                                                            <p className="  translate-y-[10px] z-[99] text-white group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300   absolute">
                                                                {store}
                                                            </p>
                                                        </button>
                                                    ))}

                                                    {item?.cities.length > 3 && (
                                                        <button
                                                            onClick={() => toggleShowAll(index)}
                                                            className="text-xs lg:text-base service_btn relative overflow-hidden group rounded-full border-2 border-[#0e1111] px-4 center   py-1 lg:py-1.5"
                                                        >
                                                            <p className="     z-[99]">
                                                                {showAll ? "show less" : ` + ${item?.cities.length - 4} more`}
                                                            </p>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="w-full ">
                                                <ServiceBtn/>
                                            </div>

                                        </div>
                                    </div>
                                    <div className=" w-full md:w-[40%]  h-full">
                                        <div
                                            className=" service_clip_img  w-full h-full overflow-hidden rounded-xl">
                                            <img className='w-full h-full object-cover' src={item.img} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ServicesSection