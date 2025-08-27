import AboutSection from '@/components/Home/AboutSection'
import ExcelleceSection from '@/components/Home/ExcelleceSection'
import FeedbackSection from '@/components/Home/FeedbackSection'
import FranchiseSection from '@/components/Home/FranchiseSection'
import HeroSwiper from '@/components/Home/HeroSwiper'
import ServicesSection from '@/components/Home/ServicesSection'
import StoresAddresses from '@/components/Home/StoresAddresses'
import React, { useEffect } from 'react'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import MobileServiceSection from '@/components/Home/MobileServiceSection'
gsap.registerPlugin(ScrollTrigger, SplitText);

const index = () => {

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".diff_line",
          start: "top 80%",
          // markers: true,
          toggleActions: "play none none reverse",
        }
      })

      tl.fromTo(".diff_line", { width: 0 }, { width: "100%", duration: 0.5 });

    });

    return () => ctx.revert();
  }, []);
  

  return (
    <>
    <HeroSwiper/>
    <AboutSection/>
    <ServicesSection/>
    <MobileServiceSection/>
    <ExcelleceSection/>
    <div className=" hidden lg:block w-full  px-10">
      <div className=" diff_line w-full bg-black h-[1px]"></div>
    </div>
    <StoresAddresses/>
    <FranchiseSection/>
    <FeedbackSection/>
    </>
  )
}

export default index