import React, { useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Data = [
    { title: "Projected CAGR through 2026", value: "5" },
    { title: "Expected Value of the Laundry Market", value: "1.2", extra: "Tn" },
    { title: "Unique Customers Served by TLH TILL Date", value: "4.5", extra: "K+" },
    { title: "Laundry Cared for by TLH Daily", value: "4", extra: "Ton+" },
    { title: "Cities", value: "9" },
    { title: "stores", value: "22", extra: "+" },
];

const FranchiseNumbers = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const nums = gsap.utils.toArray(".count-up");

            nums.forEach((el) => {
                const target = parseFloat(el.dataset.value);

                gsap.fromTo(
                    el,
                    { innerText: 0 },
                    {
                        innerText: target,
                        duration: 1.5,
                        ease: "power1.out",
                        snap: { innerText: 0.1 }, // smooth decimals
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 60%", // when section is 60% visible
                            once: true, // run only once
                        },
                        onUpdate: function () {
                            el.innerText =
                                target % 1 === 0
                                    ? Math.floor(el.innerText) // integers
                                    : parseFloat(el.innerText).toFixed(1); // decimals like 1.2
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);


    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".numb_parent",
                    start: "top 60%",
                    // markers: true,
                    // toggleActions: "play none none reverse",
                }
            })

            // tl.fromTo(".numb_animate_txt_a",
            //     { y: 20, opacity: 0 },
            //     {
            //         y: 0,
            //         opacity: 1,
            //         duration: 0.5,
            //         stagger: 0.05,
            //     }, "parallel");

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
        <div className="numb_parent" ref={sectionRef}>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 pt-16 p-5 lg:pt-24 lg:px-24 gap-y-16">
                {Data.map((item, index) => (
                    <div className="w-[90%] md:w-[75%]" key={index}>
                        <p className="numb_animate_txt_a text-[3vw] leading-none md:text-xs lg:text-sm uppercase">
                            {item.title}
                        </p>
                        <div className="numb_line w-full h-[2px] black rounded-full mt-1 mb-5 md:mb-8"></div>
                        <div className="flex items-end gap-2">
                            {/* Animate this number */}
                            <p
                                className="count-up numb_animate_txt_a text-5xl lg:text-7xl"
                                data-value={item.value}
                            >
                                0
                            </p>
                            {item.extra && (
                                <p className="numb_animate_txt_a text-xl lg:text-4xl translate-y-[-4px] lg:translate-y-[-6.5px]">
                                    {item.extra}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FranchiseNumbers;