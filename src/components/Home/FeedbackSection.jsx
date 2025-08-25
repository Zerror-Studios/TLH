import { RiStarFill } from '@remixicon/react'
import React, { useEffect } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Reviews = [{
    name: "Ravi Gupta",
    img: "https://images.unsplash.com/photo-1722322426803-101270837197?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
    rating: 5,
    comment: "TLH has genuinely excellent services. I no longer worry about stains on my clothes because I'm confident they will be removed. It is my preferred laundry place, and we've been very satisfied since they opened."
}, {
    name: "Sita Sharma",
    img: 'https://images.unsplash.com/photo-1731500573044-3551bfa73c4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww',
    rating: 4,
    comment: "The service is good, but I think they could improve on delivery times. Overall, I'm happy with the results."
}, {
    name: "John Doe",
    img: "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
    rating: 5,
    comment: "I had a great experience with TLH. The staff was friendly and the service was quick."
}]

const FeedbackSection = () => {

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

            tl.fromTo(".animate_txt_a",
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                }, "parallel");

            tl.fromTo(split1.words,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.008,
                }, "parallel");

            tl.fromTo(".animate_txt_b",
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    delay: 0.2,
                    duration: 0.5,
                    stagger: 0.05,
                }, "parallel");

            tl.fromTo(
                ".feed_pic",
                { scale: 0, },
                {
                    scale: 1,
                    ease: "circ.inOut",
                    delay: 0.5,
                    duration: 0.5,
                    stagger: 0.05,
                }, "parallel");
                
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

            tl.fromTo(
                ".feed_line",
                { height:0 },
                {
                    height: "70%",
                    delay: 0.8,
                    duration: 0.5,
                    stagger: 0.01,
                }, "parallel");

        });

        return () => ctx.revert();
    }, []);


    return (
        <div className='feed_parent'>
            <div className="w-full  p-24">
                <div className="w-full center text-center">
                    <div className="">
                        <p className='text-6xl animate_txt_a  '>What Our Customers Say</p>
                        <p className='text-xl animate_txt_a'>Garment care for important people, by people who care.</p>
                    </div>
                </div>
                <div className="w-full mt-20 ">
                    <Swiper
                        modules={[Navigation, A11y, Autoplay, Pagination]}
                        spaceBetween={0}
                        slidesPerView={3}
                        speed={600}
                        loop
                        className=" swiper_elem_2 w-full h-full"
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                    >
                        {Reviews?.map((review, index) => (
                            <SwiperSlide key={index}>
                                <div key={index} className="w-[90%]  p-5 flex flex-col relative gap-4 min-h-[15vw] ">
                                    <div className=" feed_line absolute h-[70%] top-[50%] translate-y-[-50%] left-0 w-[1.5px] opacity-20 black"></div>
                                    <div className="flex gap-2 items-center">
                                        <div className="size-12  overflow-hidden rounded-full">
                                            <img className=' feed_pic rounded-full  w-full h-full object-cover' src={review.img} alt={review.name} />
                                        </div>
                                        <div className="">
                                            <p className=' animate_txt_b text-xl fixy1_5'>{review.name}</p>
                                            <div className="flex gap-0.5">
                                                {
                                                    Array.from({ length: review.rating }, (_, i) => (
                                                        <RiStarFill key={i} size={14} className=' feed_star text-yellow-400' />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <p className='animate_txt_c'>{review.comment}</p>
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