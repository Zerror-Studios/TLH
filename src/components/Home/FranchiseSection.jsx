import React, { useEffect } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const FranchiseSection = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (window.innerWidth < 1024) return
            const split1 = new SplitText(".fr_anim_txt_b", { type: "words , chars" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".fran_parent",
                    start: "top 30%",

                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })
            tl.fromTo(".fr_bg_img", { filter: " brightness(0.3)", }, { filter: " brightness(0.4)", duration: 0.5 })
            // tl.fromTo(".fr_anim_txt_a", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 });
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".fran_parent",
                    start: "top top",
                    pin: true,
                    scrub: true,
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })
            if (window.innerWidth <= 1024) {
                tl2.to(".fr_txt_box", {
                    top: "-20%",
                    duration: 180,
                    delay: 1
                }, "par")
            } else {
                tl2.to(".fr_txt_box", {
                    top: "-18vw",
                    duration: 180,
                    delay: 1
                }, "par")
            }

            tl2.fromTo(
                split1.chars,
                { opacity: 0.2 },
                {
                    opacity: 1,
                    stagger: { each: 0.3 },
                },
                "par"
            );



        });

        return () => ctx.revert();
    }, []);

    return (
        <div className='fran_parent'>
            <div className=" relative w-full h-[70vh] lg:h-screen text-white overflow-hidden ">
                <img className=' fr_bg_img  absolute blur-none w-full h-full z-[-1] object-cover brightness-[.4]' src="/images/Hero swiper/pic_3.webp" alt="" />
                <div className=" px-5 lg:px-0 absolute top-[65%] md:top-[70%] left-0 lg:top-[50%] lg:left-24 translate-y-[-50%] ">
                    <p className=' fr_anim_txt_a text-sm font-medium mb-2 opacity-80'>Become a Franchise</p>
                    <p className=' text-2xl leading-none lg:text-6xl fr_anim_txt_a font-semibold'>Join the Leader <br /> in Garment Care</p>
                    <p className=' lg:hidden text-sm   mt-5 md:text-xl  lg:text-5xl font_light '>The Laundry House offers a proven business model, comprehensive support, and the opportunity to be a part of India's garment care revolution. With over 60,000 satisfied customers and a rapidly expanding network, we provide our franchise partners with established SOPs, cutting-edge technology, and powerful marketing strategies. Partner with us and bring a new level of trust and transparency to the cleaning industry in your city.</p>
                </div>
                <div className=" hidden lg:block fr_txt_box w-[90%] max-[1024px]:left-5 lg:w-[40%] absolute top-[70%] md:top-[80%] lg:top-[40%]  lg:right-24">
                    <p className='  text-base leading-none md:text-xl  lg:text-5xl font_light fr_anim_txt_b'>The Laundry House offers a proven business model, comprehensive support, and the opportunity to be a part of India's garment care revolution. With over 60,000 satisfied customers and a rapidly expanding network, we provide our franchise partners with established SOPs, cutting-edge technology, and powerful marketing strategies. Partner with us and bring a new level of trust and transparency to the cleaning industry in your city.</p>
                </div>
            </div>
        </div>
    )
}

export default FranchiseSection