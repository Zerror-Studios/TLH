import FranchiseForm from '@/components/sections/Franchise Page/FranchiseForm'
import FranchiseHero from '@/components/sections/Franchise Page/FranchiseHero'
import FranchiseNumbers from '@/components/sections/Franchise Page/FranchiseNumbers'
import Responsibility from '@/components/sections/Franchise Page/Responsibility'
import React from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { useEffect } from 'react';
import InvestorLogic from '@/components/sections/Franchise Page/InvestorLogic'
import LiveLaundry from '@/components/sections/Franchise Page/LiveLaundry'
import PartnershipGovernance from '@/components/sections/Franchise Page/PartnershipGovernance'
import FranchiseFaqs from '@/components/sections/Franchise Page/FranchiseFaqs'
import SeoHeader from '@/components/seo/SeoHeader'
gsap.registerPlugin(ScrollTrigger, SplitText);

const Franchise = () => {

    return (
        <>
            <SeoHeader meta={meta} />
            <FranchiseHero />
            {/* <FranchiseNumbers /> */}
            <InvestorLogic/>
            <LiveLaundry/>
            <PartnershipGovernance/>
            {/* <Responsibility /> */}
            <FranchiseForm />
            <FranchiseFaqs/>
        </>
    )
}

export default Franchise


export const meta = {
  title: "Franchise Opportunities | Partner with The Laundry House",
  description:
    "Join The Laundry House franchise and build a successful premium laundry business with proven systems, training, and brand support.",
  canonical: "https://thelaundryhouseindia.com/franchise",
  og: {
    title: "The Laundry House Franchise Opportunity",
    description:
      "Own a premium laundry franchise backed by innovation, training, and a trusted brand.",
    image: "https://thelaundryhouseindia.com/logo-og.png",
    url: "https://thelaundryhouseindia.com/franchise",
    type: "website",
    site_name: "The Laundry House",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laundry Franchise Opportunity",
    description:
      "Start your premium laundry business with The Laundry House.",
    image: "https://thelaundryhouseindia.com/logo-og.png",
  },
  robots: "index,follow",
  keywords:
    "laundry franchise India, dry cleaning franchise, business opportunity laundry",
  author: "The Laundry House",
};
