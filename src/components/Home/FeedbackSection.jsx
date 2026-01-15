import { RiStarFill } from '@remixicon/react'
import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Reviews = [
    {
        name: "Ravi Gupta",
        img: "https://images.unsplash.com/photo-1722322426803-101270837197?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
        rating: 5,
        comment:
            "TLH has genuinely excellent services. I no longer worry about stains on my clothes because I’m confident they will be removed. The quality of washing is consistent, and the fabrics always feel fresh. "
    },
    {
        name: "Sita Sharma",
        img: "https://images.unsplash.com/photo-1731500573044-3551bfa73c4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
        rating: 5,
        comment:
            "The service is very good, and the clothes are always returned neat and well cared for. However, I feel the delivery times could be a little faster, especially during busy days. "
    },
    {
        name: "John Doe",
        img: "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
        rating: 5,
        comment:
            "I had a wonderful experience with TLH. The staff was extremely polite and helpful, and the service itself was quick and efficient. My clothes came back spotless, neatly folded, and smelling fresh. "
    },
    {
        name: "Ravi Gupta",
        img: "https://images.unsplash.com/photo-1722322426803-101270837197?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
        rating: 5,
        comment:
            "TLH has genuinely excellent services. I no longer worry about stains on my clothes because I’m confident they will be removed. The quality of washing is consistent, and the fabrics always feel fresh. "
    },
];

const FeedbackSection = () => {
    const [expanded, setExpanded] = useState(false);
    const [maxHeight, setMaxHeight] = useState(0);
    const cardRefs = useRef([]);


    useEffect(() => {
        const ctx = gsap.context(() => {

            const split1 = new SplitText(".animate_txt_c", { type: "words" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".feed_parent",
                    start: "top 60%",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })

            // tl.fromTo(".animate_txt_a",
            //     { y: 20, opacity: 0 },
            //     {
            //         y: 0,
            //         opacity: 1,
            //         duration: 0.5,
            //         stagger: 0.05,
            //     }, "parallel");

            // tl.fromTo(split1.words,
            //     { y: 20, opacity: 0 },
            //     {
            //         y: 0,
            //         opacity: 1,
            //         duration: 0.5,
            //         stagger: 0.008,
            //     }, "parallel");

            // tl.fromTo(".animate_txt_b",
            //     { y: 20, opacity: 0 },
            //     {
            //         y: 0,
            //         opacity: 1,
            //         delay: 0.2,
            //         duration: 0.5,
            //         stagger: 0.05,
            //     }, "parallel");

            // tl.fromTo(
            //     ".feed_pic",
            //     { scale: 0, },
            //     {
            //         scale: 1,
            //         ease: "circ.inOut",
            //         delay: 0.5,
            //         duration: 0.5,
            //         stagger: 0.05,
            //     }, "parallel");

            tl.fromTo(
                ".feed_star",
                { scale: 0, rotate: 40 },
                {
                    scale: 1,
                    rotate: 0,
                    ease: "circ.inOut",
                    delay: 0.5,
                    duration: 0.5,
                    stagger: 0.05,
                }, "parallel");

            // tl.fromTo(
            //     ".feed_line",
            //     { height:0 },
            //     {
            //         height: "70%",
            //         delay: 0.8,
            //         duration: 0.5,
            //         stagger: 0.01,
            //     }, "parallel");

        });

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        // Find tallest card
        if (cardRefs.current.length > 0) {
            const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
            setMaxHeight(Math.max(...heights));
        }

        // Update on resize
        const handleResize = () => {
            if (cardRefs.current.length > 0) {
                const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
                setMaxHeight(Math.max(...heights));
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [Reviews]);

    return (
        <div className='feed_parent'>
            <div className="w-full p-20">
                <div className="w-full flex items-center lg:justify-center lg:text-center">
                    <div className="">
                        <h1 className=' text-2xl leading-none lg:text-6xl animate_txt_a    '>What Our Customers Say</h1>
                        <p className='  mt-1 text-sm  lg:text-xl animate_txt_a'>Garment care for important people, by people who care.</p>
                    </div>
                </div>
                <div className="w-full mt-10 lg:mt-20 ">
                    <Swiper
                        modules={[Navigation, A11y, Autoplay, Pagination]}
                        spaceBetween={50}
                        speed={600}
                        loop
                        className=" swiper_elem_2 w-full h-full"
                        pagination={{ clickable: true }}

                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {Reviews?.map((review, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    ref={(el) => (cardRefs.current[index] = el)}
                                    style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
                                    className="w-[100%] bg-white/20 border-l border-gray-300 mb-10 lg:mb-14 px-5 flex flex-col justify-between relative gap-4"
                                >                                 
                                    <div className="flex gap-4 flex-col ">
                                        <div className="flex gap-0.5">
                                            {
                                                Array.from({ length: review.rating }, (_, i) => (
                                                    <RiStarFill key={i} size={18} className=' feed_star text-[#F5C832]' />
                                                ))
                                            }
                                        </div>
                                        <p
                                            className={` w-full  text-sm lg:text-base relative transition-all duration-300 ${expanded ? "" : ""}`}>{review.comment}
                                        </p>
                                    </div>


                                    <h2 className=' animate_txt_b text-base lg:text-xl fixy1_5'>- {review.name}</h2>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default FeedbackSection