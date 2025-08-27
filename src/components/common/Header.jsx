import { RiArrowRightUpLine, RiCloseLine, RiMenu3Line } from '@remixicon/react'
import gsap from 'gsap';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import { CustomEase } from 'gsap/dist/CustomEase';
import Link from 'next/link';
gsap.registerPlugin(CustomEase);

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
  CustomEase.create("custom", "0.785, 0.135, 0.15, 0.86")

  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const lineRefs = useRef([]);

  useEffect(() => {
    // Pages where nav should always be black
    if (
      router.pathname === "/services" ||
      router.pathname === "/stores" ||
      router.pathname === "/franchise" ||
      router.pathname === "/404"
    ) {
      setIsScrolled(true);
      return;
    }

    // For other pages → reset on route change
    const checkScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Run immediately on route load
    checkScroll();

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
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

  const openMenu = () => {
    gsap.to(".open_menu", {
      right: 0,
      // clipPath: "polygon(0% 0, 0% 0, 0% 100%, 0% 100%)",
      duration: 1,
      ease: "custom",
      onComplete: () => {
        gsap.set(".nav", { pointerEvents: "none" });
      }
    });
    gsap.fromTo(".anii", {
      y: 50,
    }, {
      y: 0,
      delay: 0.8,
      stagger: 0.05
    })
  }
  const closeMenu = () => {
    gsap.to(".anii", {
      y: -50,
      stagger: 0.05
    })
    gsap.to(".open_menu", {
      right: "-100%",
      delay: 0.4,
      // clipPath: "polygon(0% 0, 0% 0, 0% 100%, 0% 100%)",
      duration: .8,
      ease: "custom",
      onComplete: () => {
        gsap.set(".nav", { pointerEvents: "auto" });
      }
    });
  }
  return (
    <div>
      <div
      className={`nav w-full fixed h-16 z-[99] flex items-center justify-between px-5 lg:px-10 
        transition-colors duration-500 ease-in-out 
        ${isScrolled ? "bg-black text-white" : "bg-transparent text-white"}`}
    >
        <div className=" w-[55%] md:w-[20%]">
          <Link href="/" className='w-full'>
            <img className='w-[100%] lg:w-[12vw]' src="/logos/Logo_White.svg" alt="" />
          </Link>
        </div>
        <RiMenu3Line size={28} className='lg:hidden' onClick={openMenu} />
        <div className=" hidden  lg:flex items-center gap-8">
          {links.map((link, i) => (
            <Link
              key={link.title}
              href={link.url}
              className="relative  group overflow-hidden flex flex-col items-center"
              onMouseEnter={() => handleMouseEnter(link, i)}
              onMouseLeave={() => handleMouseLeave(link, i)}
            >
              <p className="text-base">{link.title}</p>

              <div
                // ref={(el) => (lineRefs.current[i] = el)}
                className="absolute bottom-0 h-[2px] group-hover:left-0 transition-all duration-300 w-full bg-white rounded-full -left-[101%]"
              ></div>

              {router.pathname === link.url && (
                <div className="absolute w-full h-[1.5px] left-0 rounded-full bg-white bottom-0"></div>
              )}
            </Link>
          ))}
        </div>
        <div className="hidden  lg:flex items-center  justify-end  w-[20%]">
          <button className=' group flex relative center uppercase px-4 py-2 rounded-full'>
            <RiArrowRightUpLine className='scale-0 opacity-0 group-hover:translate-x-[15px] group-hover:opacity-100 group-hover:scale-100 origin-bottom-left transition-all duration-300' size={24} />
            <p className=' group-hover:translate-x-[15px] transition-all duration-300 text-base fixy1_5'>Book Now</p>
            <div className="w-[0%] group-hover:w-[65%] origin-left left-9 absolute bottom-2 h-[2px] bg-white transition-all duration-300"></div>
            <RiArrowRightUpLine className=' group-hover:scale-0 origin-top-right group-hover:translate-x-[15px] group-hover:opacity-0 transition-all duration-300' size={24} />
          </button>
        </div>
      </div>
      <div
        // style={{clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"}}
        className=" open_menu right-[-100%] w-full h-[100dvh] bg-[#FFFAF0] p-5 fixed z-[99999]">
        <div className=" absolute  right-5 w-full flex justify-end">
          <RiCloseLine size={30} onClick={closeMenu} />
        </div>
        <div className="w-full h-full center flex-col gap-5">
          {links.map((link, i) => (
            <Link
              onClick={closeMenu}
              key={link.title}
              href={link.url}
              className="relative text-black  overflow-hidden flex flex-col items-center"
            >
              <p className=" anii text-3xl uppercase">{link.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header