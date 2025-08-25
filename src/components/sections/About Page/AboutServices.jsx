import React, { useEffect } from 'react'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const ServiceData = [{
    title: "Safe for Your Body",
    image: "/images/about page/img_1.jpg",
    description: [
        "At The Laundry House, we prioritise the health and safety of our customers by exclusively using high-quality, skin-friendly detergents from Europe, adhering to stringent regulatory standards.",
        "Use of unregulated detergents containing endocrine disruptors, has been linked to skin irritations and serious health conditions like cancer, PCOS, fertility issues and hormonal imbalances.",
        "By choosing our services, customers reduce these risks, ensuring their garments are cleaned with superior, safe detergents. This careful approach to garment care supports overall wellness and aligns with our commitment to promoting a healthier lifestyle through every wash."
    ]
}, {
    title: "Where Technology, Skill & Service Merge",
    image: "/images/about page/img_2.jpg",
    description: [
        "Our state-of-the-art technology, eco-friendly processes, and highly trained professionals ensure that each piece of clothing is treated with the utmost care and attention. ",
        " From delicate silks to sturdy denims, we know how to handle them all. Stubborn stains, intricate embroideries, delicate fabrics - nothing is too challenging for us. And our master cleaners are trained to ensure that no speck of dirt misses their eye.",
        "Our pioneering Live' Laundry studios offer complete transparency, allowing you to witness firsthand the careful and thorough treatment your garments receive throughout our meticulously monitored processes."
    ]
}]

const AboutServices = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {
            const split1 = new SplitText(".ab_anim_txt_a", { type: "words" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".ab_ab_parent",
                    start: "top 60%",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })

            tl.fromTo(split1.words,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.005,
                }, "parallel");
                
                tl.from(".ab_border_anim",{
                    borderColor:"transparent",
                    delay:0.5,
                    duration:1,
                },"parallel")


            tl.fromTo(".ab_anim_txt",
                { y: 10, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.005,
                }, "parallel");

                   tl.fromTo(
                ".ab_clip_img",
                {
                    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                    filter: "blur(5px)"
                },
                {
                    delay: 0.2,
                    stagger:.5,
                    ease: "power2.inOut",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    filter: "blur(0px)",
                    duration: 1,
                }, "parallel");
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className='ab_ab_parent'>
            <div className="w-full px-24">
                {
                    ServiceData.map((service, index) => (
                        <div key={index} className="ab_border_anim w-full h-[50vh] py-10 gap-10 flex border-t  border-dashed  border-black/30">
                            <div className="w-[25%] h-full ">
                                <p className=' ab_anim_txt text-2xl font-semibold'>{service.title}</p>
                            </div>
                            <div className=" ab_clip_img w-[35%] h-full ">
                                <img className='w-full h-full object-cover' src={service.image} alt="" />
                            </div>
                            <div className="w-[40%] h-full flex items-center justify-between flex-col ">
                                {
                                    service.description.map((desc, i) => (
                                        <p key={i} className='ab_anim_txt_a'>{desc}</p>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutServices