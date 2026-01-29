import AboutSection from "@/components/Home/AboutSection";
import ExcelleceSection from "@/components/Home/ExcelleceSection";
import FranchiseSection from "@/components/Home/FranchiseSection";
import HeroSwiper from "@/components/Home/HeroSwiper";
import StoresAddresses from "@/components/Home/StoresAddresses";
import AboutExcelleceSection from "@/components/sections/About Page/AboutExcelleceSection";
import AboutHero from "@/components/sections/About Page/AboutHero";
import AboutHeroSwiper from "@/components/sections/About Page/AboutHeroSwiper";
import AboutServices from "@/components/sections/About Page/AboutServices";
import OurProcess from "@/components/sections/About Page/OurProcess";
import WelcomeSection from "@/components/sections/About Page/WelcomeSection";
import SeoHeader from "@/components/seo/SeoHeader";
import React from "react";

const About = () => {
  return (
    <>
      <SeoHeader meta={meta} />
      <AboutHero />
      {/* <div className=" pt-32 p-24">
        <h1 className=' text-2xl lg:text-6xl leading-none welc_animate_txt   '>About us</h1>
          <div className="w-full mt-10 rounded-lg overflow-hidden h-[70vh]">
            <img className='cover' src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
      </div> */}

      {/* <WelcomeSection /> */}
      <OurProcess />
      <ExcelleceSection />
      <StoresAddresses />
      {/* <AboutServices /> */}
      {/* <AboutExcelleceSection/> */}
      {/* <FranchiseSection/> */}
    </>
  );
};

export default About;



export const meta = {
  title: "About Us | The Laundry House – Premium Garment Care Experts",
  description:
    "Discover the story of The Laundry House, a premium garment care brand committed to craftsmanship, fabric science, and world-class laundry and dry cleaning services.",
  canonical: "https://thelaundryhouseindia.com/about",
  og: {
    title: "About The Laundry House – Our Story & Craftsmanship",
    description:
      "Learn how The Laundry House redefines garment care through innovation, expertise, and premium laundry solutions.",
    image: "https://thelaundryhouseindia.com/logo-og.png",
    url: "https://thelaundryhouseindia.com/about",
    type: "website",
    site_name: "The Laundry House",
  },
  twitter: {
    card: "summary_large_image",
    title: "About The Laundry House",
    description:
      "A legacy of premium garment care, fabric expertise, and customer trust.",
    image: "https://thelaundryhouseindia.com/logo-og.png",
  },
  robots: "index,follow",
  keywords:
    "about The Laundry House, premium laundry brand, garment care experts, dry cleaning professionals India",
  author: "The Laundry House",
};
