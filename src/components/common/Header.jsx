import { RiArrowRightUpLine } from '@remixicon/react'
import gsap from 'gsap';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'

const links = [{
  title: "About Us",
  url: "/about-us"
}, {
  title: "Services",
  url: "/services"
}, {
  title: "Stores",
  url: "/stores"
}, {
  title: "Franchise",
  url: "/franchise"
}, {
  title: "Care guides",
  url: "/care-guides"
}, {
  title: "Contact",
  url: "/contact"
}]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const lineRefs = useRef([]);

  useEffect(() => {
    if (router.pathname === "/services" || router.pathname === "/stores" || router.pathname === "/franchise" || router.pathname === "/404") {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router.pathname]);

  const handleMouseEnter = (link, index) => {
    if (router.pathname === link.url) return;
    gsap.to(lineRefs.current[index], {
      left: 0,
      duration: 0.25,
    });
  };

  const handleMouseLeave = (link, index) => {
    if (router.pathname === link.url) return;

    gsap.to(lineRefs.current[index], {
      left: "101%",
      duration: 0.25,
      onComplete: () => {
        gsap.set(lineRefs.current[index], { left: "-101%" });
      },
    });
  };

  return (
    <div>
      <div
        className={`w-full fixed h-16 z-[99] flex items-center justify-between px-10 
          transition-colors duration-500 ease-in-out 
          ${isScrolled ? "black text-white" : "bg-transparent text-white"}`}
      >
        <div className="w-[20%]">
          <a href="/">
            <img className='w-[15vw]' src="/logos/Logo_White.svg" alt="" />
          </a>
        </div>
        <div className="flex items-center gap-8">
          {links.map((link, i) => (
            <a
              key={link.title}
              href={link.url}
              className="relative  overflow-hidden flex flex-col items-center"
              onMouseEnter={() => handleMouseEnter(link, i)}
              onMouseLeave={() => handleMouseLeave(link, i)}
            >
              <p className="text-base">{link.title}</p>

              <div
                ref={(el) => (lineRefs.current[i] = el)}
                className="absolute bottom-0 h-[2px] w-full bg-white rounded-full -left-[101%]"
              ></div>

              {router.pathname === link.url && (
                <div className="absolute size-1 rounded-full bg-white bottom-0"></div>
              )}
            </a>
          ))}
        </div>
        <div className="flex items-center  justify-end  w-[20%]">
          <button className=' group flex relative center uppercase px-4 py-2 rounded-full'>
            <RiArrowRightUpLine className='scale-0 opacity-0 group-hover:translate-x-[15px] group-hover:opacity-100 group-hover:scale-100 origin-bottom-left transition-all duration-300' size={24} />
            <p className=' group-hover:translate-x-[15px] transition-all duration-300 text-base fixy1_5'>Book Now</p>
            <div className="w-[0%] group-hover:w-[65%] origin-left left-9 absolute bottom-2 h-[2px] bg-white transition-all duration-300"></div>
            <RiArrowRightUpLine className=' group-hover:scale-0 origin-top-right group-hover:translate-x-[15px] group-hover:opacity-0 transition-all duration-300' size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header