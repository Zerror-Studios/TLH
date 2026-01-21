import {
  RiArrowDownSLine,
  RiFacebookFill,
  RiInstagramFill,
  RiThreadsFill,
  RiTwitterFill,
  RiWhatsappFill,
  RiWhatsappLine,
  RiYoutubeFill
} from '@remixicon/react'
import React, { useEffect, useState } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Footer = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx); // close if same, else open
  };


  const linkGroups = [
    {
      title: "Services",
      links: [
        { label: "Garment Care", href: "/services" },
        { label: "Sneakers & Bags", href: "/services" },
        { label: "Home & Auto Fabrics", href: "/services" },
        { label: "Wedding Couture", href: "/services" },
      ],
    },
    {
      title: "About Us",
      links: [
        { label: "Franchise", href: "/franchise" },
        { label: "Store Locator", href: "/stores" },
      ],
    },
    {
      title: "Others",
      links: [
        { label: "FAQs", href: "/faqs" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
      ],
    },
  ];

  const socialLinks = [
    // { icon: RiThreadsFill, href: "https://www.threads.net" },
    // { icon: RiTwitterFill, href: "https://twitter.com" },
    // { icon: RiFacebookFill, href: "https://facebook.com" },
    { icon: RiYoutubeFill, href: " https://youtube.com/@thelaundryhouse?si=lAIxfghsNDfOKH1x" },
    { icon: RiInstagramFill, href: "https://www.instagram.com/the_laundry_house_official?igsh=MW53bXZld2ZxcW0wMw==" },
    { icon: RiWhatsappFill, href: "https://www.instagram.com/the_laundry_house_official?igsh=MW53bXZld2ZxcW0wMw==" },
  ];

  return (
    <div className='fot_parent relative z-[999]'>
      <div className="w-full black text-white px-5 lg:px-24 pt-10 lg:pt-24">
        {/* Top Section */}
        <div className="w-full border-b flex flex-col md:flex-row pb-10 md:pb-20 items-center justify-between border-white/40">
          {/* Logo */}
          <div className="w-[80%] md:w-[30%] lg:w-[50%] flex items-center justify-center md:justify-start">
            <img className='fot_anim_txt' src="/logos/Logo_White.svg" alt="Logo" />
          </div>

          {/* Link Groups */}
          <div className="mt-12 md:mt-0 w-full md:w-[60%] lg:w-[40%] flex flex-col md:flex-row gap-y-2 justify-between">
            {linkGroups.map((group, idx) => (
              <div key={idx} className="w-full md:w-auto">
                {/* Header with arrow */}
                <div
                  className="flex justify-between w-full items-center md:items-start cursor-pointer"
                  onClick={() => handleToggle(idx)}
                >
                  <h2 className="fot_anim_txt text-sm lg:text-base uppercase mb-4">
                    {group.title}
                  </h2>
                  <RiArrowDownSLine
                    className={`md:hidden transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""
                      }`}
                  />
                </div>

                {/* Links */}
                <div
                  className={`overflow-hidden transition-all duration-300 md:block ${openIndex === idx ? "max-h-40" : "max-h-0"
                    } md:max-h-none`}
                >
                  {group.links.map((link, i) => (
                    <Link scroll={false} key={i} href={link.href}>
                      <p className=" fot_anim_txt font-light text-sm lg:text-base opacity-60 mb-1 hover:opacity-100 transition">
                        {link.label}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full h-20 flex flex-col md:flex-row items-center justify-evenly md:justify-between">

          <p className=" font-light fot_anim_txt text-xs lg:text-base opacity-60">All Rights Reserved © {new Date().getFullYear()}</p>

          <div className="flex items-center gap-1">
            {/* <p className="hidden font-light md:block fot_anim_txt text-xs lg:text-base opacity-60">Our story continues:</p> */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer">
                  <Icon size={20} className="fot_anim_txt text-base lg:text-lg hover:opacity-80 transition" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
