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
import SeoHeader from '@/components/seo/SeoHeader'
gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = ({ meta }) => {


  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".diff_line",
          start: "top bottom",
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
      <SeoHeader meta={meta} />
      <HeroSwiper />
      <AboutSection />
      <ServicesSection />
      <MobileServiceSection />
      <ExcelleceSection />
      {/* <div className=" hidden lg:block w-full  px-10">
      <div className=" diff_line w-full bg-black h-[1px]"></div>
    </div> */}
      <StoresAddresses />
      <FranchiseSection />
      <FeedbackSection />
    </>
  )
}

export default Home


export async function getStaticProps() {
  const meta = {
    title: "The Laundry House | Premium Laundry & Dry Cleaning Services in India",
    description:
      "The Laundry House delivers premium laundry, dry cleaning, and garment care services with expert craftsmanship, advanced fabric care, and unmatched freshness.",
    canonical: "https://thelaundryhouseindia.com/",
    og: {
      title: "The Laundry House – Premium Laundry & Garment Care",
      description:
        "Experience premium laundry and dry cleaning services designed to protect, restore, and elevate your garments.",
      image: "https://thelaundryhouseindia.com/logo-og.png",
      url: "https://thelaundryhouseindia.com/",
      type: "website",
      site_name: "The Laundry House",
    },
    twitter: {
      card: "summary_large_image",
      title: "The Laundry House – Premium Garment Care",
      description:
        "Expert laundry and dry cleaning services crafted for freshness, care, and perfection.",
      image: "https://thelaundryhouseindia.com/logo-og.png",
    },
    robots: "index,follow",
    keywords:
      "premium laundry service, dry cleaning India, garment care experts, luxury laundry, fabric care services",
    author: "The Laundry House",
  };


  return {
    props: { meta },
  };
}