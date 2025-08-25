import { RiArrowRightUpLine } from '@remixicon/react'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger, SplitText);

const FranchiseHero = () => {
    useEffect(() => {

        const split1 = new SplitText(".fr_hr_anim_txt_a", { type: "words" });
        const split2 = new SplitText(".fr_hr_anim_txt_b", { type: "words" });

        gsap.fromTo(".fr_hr_anim_img",
            { filter: "blur(10px) brightness(0.3)" },
            {
                filter: "blur(0px) brightness(0.3)",
                duration: 0.5,
            }, "parallel");

        gsap.fromTo(".fr_hr_anim_txt",
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                delay: 0.1,
                duration: 0.5,
                stagger: 0.005,
            }, "parallel");

        gsap.fromTo(
            [split1.words, split2.words],
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                delay: 0.1,
                duration: 0.5,
                stagger: 0.005,
            }, "parallel");

    }, [])




    return (
        <div>
            <div className="w-full relative h-screen text-white">
                <img className='fr_hr_anim_img w-full h-full object-cover brightness-[.3]' src="/images/Hero swiper/pic_3.jpg" alt="" />
                <div className="absolute w-[70%] flex flex-col gap-5 items-center top-[50%] left-[50%] text-center translate-y-[-50%] translate-x-[-50%]">
                    <p className=' fr_hr_anim_txt text-xl'>Become a Franchise</p>
                    <p className='fr_hr_anim_txt text-6xl'>Join the Leader in Garment Care</p>
                    <p className='fr_hr_anim_txt_a text-sm w-[70%]'>The Laundry House offers a proven business model, comprehensive support, and the opportunity to be a
                        part of India's garment care revolution. With over 60,000 satisfied customers and a rapidly expanding network,
                        we provide our franchise partners with established SOPs, cutting-edge technology, and powerful
                        marketing strategies.</p>
                    <p className='fr_hr_anim_txt_b text-sm w-[70%] '>Partner with us and bring a new level of trust and transparency to the cleaning industry in your city.</p>
                    <button className='fr_hr_anim_txt bg-white center mt-5 text-black w-[30%] rounded-full py-2 px-4 '>
                        <p className='text-base fixy1_5 uppercase font-semibold '>Join Now</p>
                        <RiArrowRightUpLine size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FranchiseHero