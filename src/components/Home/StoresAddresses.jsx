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
        <div className='add_anim_parent bg-[#F2EDE4]  '>
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
                    gradientColor="#F2EDE4"
                    gradientWidth={300}
                >
                    <div className="w-full flex overflow-hidden mt-20">
                        {[...Addresses, ...Addresses].map((item, index) => (
                            <div
                                key={index}
                                className="w-full ml-20 h-52 gap-y-5 group relative center aspect-square flex-col cursor-pointer group flex items-center text-center"
                            >
                                <div className="absolute opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300  scale-0 size-52 z-[-1] text-[#fffaf0] " aria-hidden="true">
                                    <svg fill="#fffaf0" width="" height="" viewBox="0 0 427 427" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M425.931 299.99C419.414 289.015 415.912 276.836 411.84 264.884C406.564 249.372 400.275 234.463 387.004 223.216C392.314 222.261 395.476 219.452 395.783 214.38C396.136 208.694 392.61 205.817 387.834 204.509C391.302 200.449 395.055 196.628 398.148 192.329C406.041 181.333 409.805 168.459 414.388 155.927C417.811 146.557 421.939 137.436 425.908 128.281C426.988 125.791 426.772 125.211 424.156 124.131C414.081 119.98 403.96 115.931 394.054 111.382C384.229 106.868 374.722 101.511 364.009 99.3963C357.243 98.0544 350.306 97.5654 343.494 96.6897C346.053 92.8232 346.326 88.388 342.436 84.567C338.581 80.78 334.18 81.2349 329.756 84.0894C329.836 81.7239 329.984 79.6088 329.961 77.5049C329.813 64.4383 325.185 52.6113 319.737 41.0231C313.767 28.3318 306.694 16.1067 303.123 2.38054C302.554 0.219837 301.235 0.0606243 299.427 1.02726C296.481 2.59661 293.604 4.35928 290.511 5.53061C280.686 9.2493 270.78 12.7519 260.875 16.2773C250.447 19.9846 240.337 24.3288 231.66 31.3681C228.59 33.8586 225.815 36.7017 222.881 39.4082C221.312 34.0633 218.673 31.4136 214.443 31.0952C208.472 30.6403 205.516 34.1657 204.06 39.2945C201.16 36.5766 198.522 33.779 195.565 31.3681C184.523 22.3728 171.229 18.0513 158.082 13.3433C148.871 10.0453 139.762 6.40627 130.812 2.47151C124.978 -0.0985982 125.444 -0.33742 122.988 5.48512C118.28 16.6412 113.356 27.7177 108.238 38.6918C103.519 48.8016 99.0497 58.9683 97.6282 70.1358C97.0595 74.5595 97.0937 79.0628 96.8435 83.7141C92.5448 81.0643 88.2916 80.6209 84.5274 84.26C80.5586 88.1037 80.8997 92.5616 83.8224 97.3038C72.2455 96.0756 61.6922 98.5206 51.4573 102.592C46.4876 104.571 41.6203 106.822 36.7872 109.142C25.4946 114.555 14.4864 120.628 2.23862 123.79C-0.0699287 124.381 -0.115417 125.655 0.748865 127.667C4.64951 136.754 8.84583 145.749 12.1096 155.063C18.3643 172.906 24.0276 190.953 39.2322 203.872C32.9775 206.272 30.5439 209.092 30.6462 213.664C30.7486 218.201 33.3755 221.135 38.7887 222.943C35.8319 226.23 32.5909 229.414 29.8502 232.985C21.0481 244.402 16.9883 258.026 12.1665 271.332C8.80034 280.623 4.7746 289.675 0.817098 298.727C-0.456582 301.627 -0.513442 302.378 2.63664 303.265C14.3045 306.551 24.9602 312.124 35.741 317.48C45.1685 322.165 54.6983 326.714 65.1493 328.556C71.1083 329.603 77.2038 329.83 83.1173 330.41C80.5131 335.436 80.7178 339.383 83.9133 342.612C87.3136 346.058 91.2484 346.297 96.889 343.249C95.5129 356.475 99.0269 368.393 103.985 380.049C110.433 395.174 119.406 409.219 123.568 425.345C124.034 427.176 125.467 427.255 126.946 426.379C137.851 419.977 149.906 416.44 161.778 412.414C172.229 408.866 182.578 405.011 191.573 398.415C195.872 395.265 199.75 391.535 203.764 388.112C205.14 393.321 207.892 395.97 212.407 396.311C217.138 396.664 220.015 394.287 222.563 387.998C224.985 390.341 227.316 392.877 229.909 395.083C240.371 403.999 253.074 408.434 265.731 413.04C275.784 416.702 285.826 420.466 295.64 424.731C301.61 427.323 301.11 427.665 303.635 421.706C308.343 410.549 313.312 399.496 318.407 388.51C323.058 378.491 327.493 368.404 328.915 357.339C329.495 352.836 329.472 348.264 329.722 343.704C334.26 346.342 338.456 346.501 341.492 343.499C343.096 341.907 344.461 339.508 344.745 337.313C345.041 335.016 343.926 332.537 343.437 330.16C344.836 330.228 346.519 330.342 348.213 330.364C359.051 330.501 369.138 327.362 378.975 323.211C394.316 316.741 408.497 307.586 424.816 303.367C426.624 302.901 426.818 301.479 425.953 300.012L425.931 299.99Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div className="size-20 relative flex items-center justify-center">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="w-full h-full group-hover:scale-[1.2] transition-all duration-300 object-contain filter brightness-0 contrast-200"
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

                <div className="w-full center text-black center mt-20 ">
                    <Link href={"/stores"} scroll={false} className=' text-sm lg:text-base learn_btn relative overflow-hidden group     bg-black lg:bg-transparent  rounded-full border-1 border-[#000000] px-0 py-2 lg:px-6 center lg:py-2'>
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