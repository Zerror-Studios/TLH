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
import React from "react";

const index = () => {
  return (
    <div>
      <AboutHero />
      {/* <div className=" pt-32 p-24">
        <h1 className=' text-2xl lg:text-6xl leading-none welc_animate_txt   '>About us</h1>
          <div className="w-full mt-10 rounded-xl overflow-hidden h-[70vh]">
            <img className='cover' src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
      </div> */}

      {/* <WelcomeSection /> */}
      <OurProcess />
      <ExcelleceSection/>
      <StoresAddresses/>
      {/* <AboutServices /> */}
      {/* <AboutExcelleceSection/> */}
      {/* <FranchiseSection/> */}
    </div>
  );
};

export default index;
