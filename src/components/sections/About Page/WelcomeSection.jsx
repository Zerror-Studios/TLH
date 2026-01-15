import React, { useEffect } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const WelcomeSection = () => {

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         const split1 = new SplitText(".welc_animate_txt_a", { type: "words" });
    //         const split2 = new SplitText(".welc_animate_txt_b", { type: "words" });

    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".welc_parent",
    //                 start: "top 60%",
    //                 // markers: true,
    //                 toggleActions: "play none none reverse",
    //             }
    //         })

    //         tl.fromTo(
    //             [split1.words, split2.words],
    //             { y: 20, opacity: 0 },
    //             {
    //                 y: 0,
    //                 opacity: 1,
    //                 duration: 0.5,
    //                 stagger: 0.005,
    //             }, "parallel");
    //         tl.fromTo(".welc_animate_txt",
    //             { y: 20, opacity: 0 },
    //             {
    //                 y: 0,
    //                 opacity: 1,
    //                 duration: 0.5,
    //                 stagger: 0.05,
    //             }, "parallel");


    //     });

    //     return () => ctx.revert();
    // }, []);

    return (
        <div className='welc_parent'>
            <div className="w-full flex flex-col lg:flex-row items-start  justify-between pt-0 py-10 px-24">
                <div className=" w-full lg:w-[40%] ">
                    <h1 className=' text-2xl lg:text-6xl leading-none welc_animate_txt   '>Welcome to The Laundry House</h1>
                    <p className=' text-sm lg:text-xl leading-none mt-1   welc_animate_txt'>India's Fastest Growing Garment Care Service</p>
                </div>
                <div className=" w-full  lg:w-1/2 ">
                    <p className='text-sm lg:text-base welc_animate_txt_a'>You love your clothes. They're not just fabrics; they're expressions of your style, your memories, and your identity. That designer shirt, that precious lehenga - they deserve the best care. But can you trust your expensive, cherished garments to just anyone? At The Laundry House, we understand your concerns. </p> <br />
                    <p className='text-sm lg:text-base welc_animate_txt_b'>Just like you wouldn't entrust your luxury car to an ordinary mechanic, your high-end clothes need specialised care. We're not just another laundry service; we're your garment care experts.</p> <br />
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection