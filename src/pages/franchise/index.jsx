import FranchiseForm from '@/components/sections/Franchise Page/FranchiseForm'
import FranchiseHero from '@/components/sections/Franchise Page/FranchiseHero'
import FranchiseNumbers from '@/components/sections/Franchise Page/FranchiseNumbers'
import Responsibility from '@/components/sections/Franchise Page/Responsibility'
import React from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger, SplitText);

const index = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".main_lin",
                    start: "top 80%",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })
            tl.from(".main_lin",
                {
                    width: 0,
                    duration: 0.7,
                }, "parallel");

        });

        return () => ctx.revert();
    }, []);

    return (
        <div>
            <FranchiseHero />
            <FranchiseNumbers />
            <div className="w-full center">
                <div className="  main_lin w-[70%] rounded-full h-[2px] black"></div>
            </div>
            <Responsibility />
            <FranchiseForm />
        </div>
    )
}

export default index