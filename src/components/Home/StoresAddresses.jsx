import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import Marquee from 'react-fast-marquee';
import ArrowButton from '../Buttons/ArrowButton';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Addresses = [
    {
        city: "Mumbai",
        icon: "	https://cdn-icons-png.flaticon.com/512/11240/11240887.png",
        location: "Lower Parel, Mumbai, Maharashtra"
    },
    {
        city: "Delhi",
        icon: "	https://cdn-icons-png.flaticon.com/512/510/510018.png",
        location: "Defence Colony Market, New Delhi"
    },
    {
        city: "Bengalore",
        icon: "	https://cdn-icons-png.flaticon.com/512/10706/10706892.png",
        location: "Indiranagar, Bengaluru, Karnataka"
    },
    {
        city: "Hyderabad",
        icon: "	https://cdn-icons-png.flaticon.com/512/15254/15254664.png",
        location: "Jubilee Hills, Hyderabad, Telangana"
    },
    {
        city: "Chennai",
        icon: "https://cdn-icons-png.flaticon.com/512/16025/16025209.png",
        location: "Alwarpet, Chennai, Tamil Nadu"
    },
    {
        city: "Ahmedabad",
        icon: "https://cdn-icons-png.flaticon.com/512/16025/16025219.png",
        location: "Prahladnagar, Ahmedabad, Gujarat"
    }
];


const StoresData = [
    {
        store: "BSG Laundry Bar LLP",
        city: "Jaipur",
        storeType: "Live Store",
        model: "FOFO",
    },
    {
        store: "BSG Laundry Bar LLP (CC)",
        city: "Jaipur",
        storeType: "Collection Centre",
        model: "FOFO",
    },
    {
        store: "Mahalaxmi Services",
        city: "Bikaner",
        storeType: "Live Store",
        model: "FOFO",
    },
    {
        store: "NDMC Greater Kailash",
        city: "New Delhi",
        storeType: "Collection Centre",
        model: "FOFO",
    },
    {
        store: "NDMC Gurgaon 067",
        city: "Gurugram",
        storeType: "Collection Centre",
        model: "FOFO",
    },
    {
        store: "NDMC Gurugram Sec 70",
        city: "Gurugram",
        storeType: "Collection Centre",
        model: "FOFO",
    },
    {
        store: "NDMC Moti Bagh",
        city: "New Delhi",
        storeType: "Collection Centre",
        model: "FOFO",
    },
    {
        store: "NDMC TLH CR Park",
        city: "New Delhi",
        storeType: "Collection Centre",
        model: "FOFO",
    },
    {
        store: "NDMC TLH GGN Sec 15",
        city: "Gurugram",
        storeType: "Collection Centre",
        model: "FOFO",
    },
    {
        store: "NDMC TLH Suncity 54",
        city: "Gurugram",
        storeType: "Collection Centre",
        model: "FOFO",
    },
    {
        store: "The Clean Company",
        city: "Ahmedabad",
        storeType: "Live Store",
        model: "FOFO",
    },
    {
        store: "TLH Greater Noida",
        city: "Greater Noida",
        storeType: "Collection Centre",
        model: "FOFO",
    },
    {
        store: "TLH Surat",
        city: "Surat",
        storeType: "Live Store",
        model: "FOCO",
    },
    {
        store: "TLH Surat Citylight",
        city: "Surat",
        storeType: "Collection Centre",
        model: "FOCO",
    },
    {
        store: "TLH Tarrk Group",
        city: "Hyderabad",
        storeType: "Live Store",
        model: "FOFO",
    },
    {
        store: "TLH Vadodara",
        city: "Vadodara",
        storeType: "Live Store",
        model: "COCO",
    },
];


const StoresAddresses = () => {
    const storesRef = useRef(null);
    const [expandStores, setExpandStores] = useState(false)

    useEffect(() => {
        const el = storesRef.current;
        if (!el) return;

        if (expandStores) {
            gsap.to(el, {
                maxHeight: el.scrollHeight,
                duration: 0.5,
                ease: "expo.out",
            });
        } else {
            gsap.to(el, {
                maxHeight: 0,
                duration: 0.4,
                ease: "expo.inOut",
            });
        }
    }, [expandStores]);




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
            <div className="w-full p-10">
                <div className="flex flex-col text-center md:flex-row justify-between">
                    <div className="w-full text-center">
                        <h1 className=' text-2xl leading-none  lg:text-6xl add_anim_txt_a   '>Serving You Across India</h1>
                        <p className=' mt-4 text-sm   lg:text-xl add_anim_txt_a '>Find The Laundry House in 9 major cities and growing.</p>
                    </div>
                    {/* <div className=" hidden text-xs lg:text-base add_anim_txt_a  lg:flex items-end justify-end">
                        <p>(20 Stores)</p>
                    </div> */}
                </div>
                <Marquee
                    speed={50}
                    gradient
                    gradientColor="#fffaf0"
                    gradientWidth={300}
                >
                    <div className="w-full flex mt-20">
                        {[...Addresses, ...Addresses].map((item, index) => (
                            <div
                                key={index}
                                className="w-full ml-32 gap-y-5 aspect-square flex-col cursor-pointer group flex items-center text-center"
                            >
                                <div className="size-20 flex items-center justify-center">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="w-full h-full object-contain filter brightness-0 contrast-200"
                                    />
                                </div>

                                <h2 className="text-xs md:text-base uppercase">
                                    {item.city}
                                </h2>
                            </div>
                        ))}
                    </div>
                </Marquee>


                {/* <div
                    ref={storesRef}
                    className="w-full all_stores_paren max-h-0 overflow-hidden mt-10"
                >
                    <div className="w-full h-12 relative  flex items-center">
                        <div className=" w-[35%] lg:w-[25%] shrink-0">
                            <h1 className=' add_anim_txt_a text-xs md:text-sm font-semibold uppercase'>CITY</h1>
                        </div>
                        <div className=" flex justify-between w-full">
                            <h1 className=' add_anim_txt_a text-xs md:text-sm font-semibold uppercase'>Store name</h1>
                            <div className=" text-xs lg:text-base add_anim_txt_a  flex items-end justify-end">
                                <h1>({StoresData.length} Stores)</h1>
                            </div>
                        </div>
                        <div className="  absolute w-full h-[1px] rounded-full black opacity-80 bottom-0"></div>
                    </div>

                    {
                        StoresData.map((item, index) => (
                            <div key={index} className="w-full cursor-pointer group py-3 lg:py-0 lg:h-14 relative  flex items-center">
                                <div className=" w-[35%] lg:w-[25%] shrink-0">
                                    <h2 className=' add_anim_txt_a text-xs md:text-base   capitalize'>{item.city}</h2>
                                </div>
                                <div className="">
                                    <h2 className=' add_anim_txt_a text-xs md:text-sm  capitalize'>{item.store}</h2>
                                </div>
                                <div className="group-hover:opacity-100 group-hover:h-[2px] transition-all duration-150  absolute add_anim_line w-full h-[1px] rounded-full black opacity-20  bottom-0"></div>
                            </div>
                        ))
                    }

                </div> */}

                <div  className="w-full center text-black center mt-20 ">
                    <Link href={"/stores"} scroll={false}  className=' text-sm lg:text-base learn_btn relative overflow-hidden group     bg-black lg:bg-transparent  rounded-full border-1 border-[#000000] px-0 py-2 lg:px-6 center lg:py-2'>
                        <p className='fixy1 font-normal opacity-0'>View all stores</p>
                        <p className='lg:fixy1 group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300 font-normal absolute '>View all stores</p>
                        <div className="w-full origin-center group-hover:left-0 transition-all duration-300 h-full bg-black top-0 left-[-100%] absolute "></div>
                        <p className='fixy1 font-normal translate-y-[10px] z-[99] text-white group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300  absolute'> View all stores</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StoresAddresses