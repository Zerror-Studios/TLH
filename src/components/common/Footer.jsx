import { RiFacebookFill, RiInstagramFill, RiThreadsFill, RiTwitterFill, RiYoutubeFill } from '@remixicon/react'
import React from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Footer = () => {

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".fot_parent",
          start: "top 60%",
          // markers: true,
          toggleActions: "play none none reverse",
        }
      })

      tl.fromTo(".fot_anim_txt",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.2,
          duration: 0.5,
          stagger: 0.02,
        }, "parallel");




    });

    return () => ctx.revert();
  }, []);
  return (
    <div className='fot_parent'>
      <div className="w-full  black  text-white px-24 pt-24">
        <div className="w-full border-b flex pb-20 items-center justify-between border-white/40">
          <div className="w-[50%] h-full flex items-center">
            <img className='fot_anim_txt' src="/logos/Logo_White.svg" alt="" />
          </div>
          <div className="w-[40%] h-full flex justify-between ">
            <div className="h-full">
              <p className=' fot_anim_txt uppercase mb-4'>services</p>
              <p className=' fot_anim_txt opacity-50 font_light mb-1'>Garment Care</p>
              <p className=' fot_anim_txt opacity-50 font_light mb-1'>Sneakers & Bags</p>
              <p className=' fot_anim_txt opacity-50 font_light mb-1'>Home & Auto Fabrics</p>
              <p className=' fot_anim_txt opacity-50 font_light mb-1'>Wedding Couture</p>
            </div>
            <div className="h-full">
              <p className=' fot_anim_txt uppercase mb-4'>About Us</p>
              <p className=' fot_anim_txt opacity-50 font_light mb-1'>Franchise</p>
              <p className=' fot_anim_txt opacity-50 font_light mb-1'>Store Locator</p>
              <p className=' fot_anim_txt opacity-50 font_light mb-1'>Care Guides</p>
            </div>
            <div className="h-full">
              <p className=' fot_anim_txt uppercase mb-4'>Others</p>
              <p className=' fot_anim_txt opacity-50 font_light mb-1'>FAQs</p>
              <p className=' fot_anim_txt opacity-50 font_light mb-1'>Privacy Policy</p>
              <p className=' fot_anim_txt opacity-50 font_light mb-1'>Terms of Service</p>
              <p className=' fot_anim_txt opacity-50 font_light mb-1'>Cookie Policy</p>
            </div>
          </div>
        </div>

        <div className="w-full h-20 flex items-center justify-between">
          <div className="">
            <p className=' fot_anim_txt opacity-50 font_light'>All Rights Reserved © 2024</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <p className=' fot_anim_txt opacity-50 font_light'>Our story continues:</p>
            </div>
            <div className="flex gap-4">
              <RiThreadsFill className='fot_anim_txt' />
              <RiTwitterFill className='fot_anim_txt' />
              <RiFacebookFill className='fot_anim_txt' />
              <RiYoutubeFill className='fot_anim_txt' />
              <RiInstagramFill className='fot_anim_txt' />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer