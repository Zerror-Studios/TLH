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

const testimonials = [
    {
        name: "Ravi Choksi",
        comment:
            "TLH have genuinely excellent services. Now I don't worry about stains on my clothes as I am confident that TLH will remove them. It is my preferred laundry place and we have been using their services since inception."
    },
    {
        name: "Unnati Khambata",
        comment:
            "I really like this laundry house and appreciate the service and staff. The work done here is very professional and they make customers feel reassured and comfortable. Best service."
    },
    {
        name: "Keshav Mitra",
        comment:
            "A very nice and modern unit-cum-store for dry cleaning. Qualitative work, attentive and decent staff. In a nutshell, a well-managed place."
    },
    {
        name: "Aman Grover",
        comment:
            "One stop shop for all dry cleaning needs in Vadodara. Advanced in technology, cost effective, and provides great service without any hassles."
    },
    {
        name: "Shakib Mansuri",
        comment:
            "I really appreciate the workers and staff for keeping the store running smoothly, even during the pandemic. They made us feel reassured and comfortable."
    },
    {
        name: "Aar Bee",
        comment:
            "I was looking for a laundry service in Vadodara and found this truly professional place. This is the best laundry in Vadodara."
    },
    {
        name: "Sagar Sharma",
        comment:
            "Best place to get your laundry done. Not just dry cleaning, but also curtains, carpets, soft toys, house and car cleaning, and even sneaker cleaning."
    },
    {
        name: "Uzair Delair",
        comment:
            "Overall excellent service from start to finish. Proper professionals with great knowledge of fabrics, cleaning, and customer service."
    },
    {
        name: "Devendra Singh Jethuri",
        comment:
            "I liked the professional and systematic approach of the shop. The finesse in processing clothes is better in cost, cleanliness, and packaging."
    },
    {
        name: "Akshara Tarkas",
        comment:
            "The laundry services are great. Their packing and delivery options are really nice. The best service around here."
    }
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
    }, [testimonials]);

    return (
        <div className='feed_parent'>
            <div className="w-full p-5 py-12 lg:p-20">
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
                        {testimonials?.map((review, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    ref={(el) => (cardRefs.current[index] = el)}
                                    style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
                                    className="w-[100%] bg-white/20 border-l border-gray-300 mb-10 lg:mb-14 px-5 flex flex-col justify-between relative gap-4"
                                >
                                    <div className="flex gap-4 flex-col ">
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3,4, 5].map((i) => (
                                                <RiStarFill key={i} size={18} className=' feed_star text-[#F5C832]' />
                                            ))}
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