import React, { useEffect } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Addresses = [{
    city: "Hyderabad",
    location: "Konda Pride, GF Shop 2, Jubilee Hills, Road No 1, Hyderabad - 500033"
}, {
    city: "Ahmedabad",
    location: "37-38, Riviera Arcade, 100 Feet Road, Nr. Prahladnagar Garden, Prahladhnagar Ahmadabad City, Ahmedabad 380015"
}, {
    city: "Bikaner",
    location: "Opposite To Synthesis Coaching Institute, Chanakya Nagar, Old Shivbadi Road, Bikaner - 334001"
}, {
    city: "Delhi",
    location: "A 454, Defence Colony Market, New Delhi - 110024"
}, {
    city: "Greater Noida",
    location: "A4 Shopping Complex,Sector Beta-2, Khora Gaon Dadri,Greater Noida , Uttar Pradesh 201309"
}, {
    city: "Gurugram",
    location: "The Laundry House Nearby M3M Badshahpur Gurgaon, Haryana 122001"
},
]

const StoresAddresses = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".add_anim_parent",
                    start: "top 60%",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })

            // tl.fromTo(".add_anim_txt_a", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 });
            tl.fromTo(".add_anim_line", { width: 0 }, { width: "100%", duration: 0.5, stagger: 0.05 });
            // tl.fromTo(".add_anim_txt_btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.2, stagger: 0.05 });
        });

        return () => ctx.revert();
    }, []);


    return (
        <div className='add_anim_parent '>
            <div className="w-full py-16    p-5 lg:p-24">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="">
                        <p className=' text-2xl leading-none  lg:text-6xl add_anim_txt_a  font-semibold '>Serving You Across India</p>
                        <p className=' mt-1 text-sm   lg:text-xl add_anim_txt_a '>Find The Laundry House in 9 major cities and growing.</p>
                    </div>
                </div>
                <div className="w-full mt-10">
                    <div className="w-full h-12 relative  flex items-center">
                        <div className=" w-[35%] lg:w-[25%] shrink-0">
                            <p className=' add_anim_txt_a text-xs md:text-sm opacity-60 uppercase'>CITY</p>
                        </div>
                        <div className=" flex justify-between w-full">
                            <p className=' add_anim_txt_a text-xs md:text-sm opacity-60 uppercase'>location</p>
                            <div className=" text-xs lg:text-base add_anim_txt_a  flex items-end justify-end">
                        <p>(20 Stores)</p>
                    </div>
                        </div>
                        <div className="  absolute w-full h-[1px] rounded-full black opacity-80 bottom-0"></div>
                    </div>

                    {
                        Addresses.map((item, index) => (
                            <div key={index} className="w-full cursor-pointer group py-3 lg:py-0 lg:h-14 relative  flex items-center">
                                <div className=" w-[35%] lg:w-[25%] shrink-0">
                                    <p className=' add_anim_txt_a text-xs md:text-sm font-semibold  uppercase'>{item.city}</p>
                                </div>
                                <div className="">
                                    <p className=' add_anim_txt_a text-xs md:text-sm  uppercase'>{item.location}</p>
                                </div>
                                <div className="group-hover:opacity-100 group-hover:h-[2px] transition-all duration-150  absolute add_anim_line w-full h-[1px] rounded-full black opacity-20  bottom-0"></div>
                            </div>
                        ))
                    }
                    <div className="w-full center mt-10">
                        <button className=' text-xs lg:text-base add_anim_txt_btn relative  text-white lg:text-black font-thin bg-black lg:bg-transparent  overflow-hidden group rounded-full border-2 border-[#0e1111] px-6 center lg:font-bold py-1.5'>
                            <p className='fixy1 font_light opacity-0'>Load More</p>
                            <p className='lg:fixy1 group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300 font_light absolute'>Load More </p>
                            <div className="w-full  group-hover:scale-110 origin-center group-hover:top-0 transition-all duration-300 h-full black left-0 top-[100%] absolute rounded-full"></div>
                            <p className='fixy1 font-light translate-y-[10px] z-[99] text-white group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300 font_light absolute'> Load More</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoresAddresses