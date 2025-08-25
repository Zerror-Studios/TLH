import React from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Data = [
    {
        title: "Projected CAGR through 2026",
        value: "5"
    }, {
        title: "Expected Value of the Laundry Market",
        value: "$1.2",
        extra: "Tn"
    }, {
        title: "Unique Customers Served by TLH TILL Date",
        value: "4.5",
        extra: "K+"
    }, {
        title: "Laundry Cared for by TLH Daily",
        value: "4",
        extra: "Ton+"
    }, {
        title: "Cities",
        value: "9",
    }, {
        title: "stores",
        value: "22",
        extra: "+"
    },
]

const FranchiseNumbers = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".numb_parent",
                    start: "top 60%",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })

            tl.fromTo(".numb_animate_txt_a",
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                }, "parallel");

            tl.from(".numb_line",
                {
                    width: 0,
                    duration: 0.5,
                    stagger: 0.07,
                }, "parallel");

        });

        return () => ctx.revert();
    }, []);

    return (
        <div className='numb_parent'>
            <div className="w-full  grid grid-cols-3 p-24 gap-y-16">
                {
                    Data.map((item, index) => (
                        <div className="w-[75%] " key={index}>
                            <p className='numb_animate_txt_a text-sm uppercase'>{item.title}</p>
                            <div className="numb_line w-full h-[1.5px] black rounded-full mt-2 mb-8"></div>
                            <div className="flex items-end gap-2">
                                <p className='numb_animate_txt_a text-7xl'>{item.value}</p>
                                <p className=' numb_animate_txt_a text-4xl translate-y-[-6.5px]'>{item.extra}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FranchiseNumbers