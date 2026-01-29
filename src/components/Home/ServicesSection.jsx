import ServiceBtn from '@/components/Buttons/ServiceBtn';
import { useBookDrawer } from '@/store/useBookDrawer';
import { useGSAP } from '@gsap/react';
import { RiMapPinFill } from '@remixicon/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const services = [
    {
        img: "/images/services/4_Wedding Couturer.webp",
        title: "Wedding Couture",
        desc: "Specialized bridal and couture garment care that preserves intricate details, delicate fabrics, and embellishments. Perfect for pre-wedding preparation or post-event preservation.",
        cities: ["Varanasi", "Amritsar", "Udaipur", "Mysuru", "Guwahati", "Rajkot", "Vadodara", "Ranchi"],
    },
    {
        img: "/images/services/home_&_fabrics.webp",
        title: "Home & Fabrics",
        desc: "Professional cleaning solutions for upholstery, curtains, carpets, and car interiors. Our service removes deep stains, dust, and allergens to keep your living and driving spaces fresh and hygienic.",
        cities: ["Indore", "Nagpur", "Bhopal", "Coimbatore", "Surat", "Patna", "Thiruvananthapuram"],
    },
    {
        img: "/images/services/sneakers_&_bags.webp",
        title: "Sneakers & Bags",
        desc: "Expert cleaning, conditioning, and restoration for premium shoes, handbags, and leather goods. We specialize in reviving worn items, extending their life while maintaining their luxury look and feel.",
        cities: ["Chennai", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh"],
    },
    {
        img: "/images/services/garment_care.webp",
        title: "Garment Care",
        desc: "Premium garment care tailored for daily wear, delicate fabrics, and designer outfits. From washing and stain removal to fabric-specific cleaning and finishing, we ensure every piece stays fresh and refined.",
        cities: ["Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Kolkata"],
    },



];


const ServicesSection = () => {

    const openDrawer = useBookDrawer((state) => state.openDrawer);

    useGSAP(() => {
        var tl = gsap.timeline({
            defaults: {
                ease: "linear"
            },
            scrollTrigger: {
                trigger: ".sticky_cards_paren",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
        })
        tl.to(".stick_crd_0", {
            y: -40,
            filter: "brightness(.85)",
            scale: .95
        })
        tl.to(".stick_crd_0", {
            y: -90,
            scale: .85
        })
        tl.to(".stick_crd_1", {
            y: -40,
            filter: "brightness(.85)",
            scale: .95
        }, "<")
        tl.to(".stick_crd_1", {
            y: -90,
            scale: .85
        })
        tl.to(".stick_crd_2", {
            y: -40,
            filter: "brightness(.85)",
            scale: .95
        }, "<")


    })

    return (
        <div className='hidden lg:block'>
            <div className="w-full center sticky top-[11vh] mt-10">
                {/* <h2 className=' hero_animate_txt_a text-sm lg:text-xl block overflow-hidden uppercase'>Our Services</h2> */}
                <h1 className=' hero_animate_txt_b  capitalize leading-none text-2xl lg:text-6xl mb-10   '>Our Services</h1>
            </div>
            <div className=" sticky_cards_paren w-full relative  h-min flex flex-col gap-20  items-center ">
                {services.map((card, index) => (
                    <div key={index} className={` brightness-100 stick_crd_${index} w-[88%] border border-[#ffffff] bg-[#F2EDE4] flex justify-between  h-[65vh] rounded-2xl  sticky top-[23vh] p-10`}>
                        <div className="w-[50%] h-full flex flex-col justify-center">
                            <h2 className='text-6xl '>{card.title}</h2>
                            <div className=" border_anim  w-full origin-left  border mt-4 mb-20 border-dashed rounded-full border-black/30"></div>

                            <p className='text-xl '>{card.desc}</p>
        <a href="https://wa.me/918800020002" target='_blank'>

                            <div className="w-[30%] mt-10 ">
                                <ServiceBtn />
                            </div>
                            </a>
                        </div>

                        <div className="w-[35%]  aspect-square overflow-hidden rounded-lg">
                            <img className='cover' src={card.img} alt="" />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesSection