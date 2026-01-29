import { RiArrowRightUpLine, RiCloseLine, RiMenu3Line } from '@remixicon/react'
import gsap from 'gsap';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import { CustomEase } from 'gsap/dist/CustomEase';
import Link from 'next/link';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';
import { useBookDrawer } from '@/store/useBookDrawer';
gsap.registerPlugin(CustomEase, ScrollTrigger);

const links = [{
  title: "About",
  url: "/about"
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
  title: "Contact",
  url: "/contact"
}]

const Header = () => {
  CustomEase.create("custom", "0.785, 0.135, 0.15, 0.86")

  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname()
  const router = useRouter();
  const lineRefs = useRef([]);
   const openDrawer = useBookDrawer((state) => state.openDrawer);

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

  useEffect(() => {
    const threshold = 100; // 100vh
    let isActive = false;

    const headerTl = gsap.timeline({ paused: true });

    headerTl.to(".bg_bner", {
      height: "100%",
      duration: .5,
      ease: "expo.out"
    })

    const onScroll = () => {
      if (window.scrollY >= threshold && !isActive) {
        headerTl.play();
        isActive = true;
      }

      if (window.scrollY < threshold && isActive) {
        headerTl.reverse();
        isActive = false;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return (
    <>
      <div
        className={`nav w-full fixed h-16 z-[99] flex items-center justify-between px-5 lg:px-10 
        transition-colors duration-500 ease-in-out 
        `}
      >
        <div className={` bg_bner w-screen z-[-1] left-0 top-0 ${pathname === "/" ? "h-0" : "h-full"} bg-black absolute`}></div>
        <div className=" w-[55%] md:w-[20%]">
          <Link href="/" scroll={false} className='w-full'>
            <img className='w-[100%] lg:w-[14vw]' src="/logos/Logo_White.svg" alt="" />
          </Link>
        </div>
        <RiMenu3Line size={28} className='lg:hidden text-white' onClick={openMenu} />
        <div className=" hidden group/nav  lg:flex items-center gap-8">
          {links.map((link, i) => (
            <Link
              key={link.title}
              href={link.url}
              scroll={false}
              className="relative group  z-10 text-white group  flex flex-col items-center"
              onMouseEnter={() => handleMouseEnter(link, i)}
              onMouseLeave={() => handleMouseLeave(link, i)}
            >
                <div className="absolute w-0 group-hover:w-full transition-all duration-300 left-0 rounded-full h-px bg-white bottom-0"></div>
              {
                router.pathname === link.url ? (
                  <p className="text-base opacity-100 ">{link.title}</p>
                ) : (
                  <p
                    className="
          text-base transition-opacity duration-300
          opacity-100
          group-hover/nav:opacity-50
          hover:opacity-100
        "
                  >{link.title}</p>
                )
              }
              {router.pathname === link.url && (
                <div className="absolute w-full left-0 rounded-full h-px bg-white bottom-0"></div>
              )}
            </Link>
          ))}
        </div>
        <div className="hidden  lg:flex items-center  gap-3 justify-end  w-[20%]">
          {/* <button  onClick={openDrawer} className=' text-sm lg:text-base learn_btn relative overflow-hidden group     bg-black lg:bg-transparent  rounded-full border-1 border-[#ffffff] px-0 py-2 lg:px-6 center lg:py-2'>
            <p className='fixy1 font-normal opacity-0'>Book Now</p>
            <p className='lg:fixy1 group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300 font-normal absolute text-white'>Book Now</p>
            <div className="w-full origin-center group-hover:left-0 transition-all duration-300 h-full bg-white top-0 left-[-100%] absolute "></div>
            <p className='fixy1 font-normal translate-y-[10px] z-[99] text-black group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300  absolute'> Book Now</p>
          </button> */}
        <a href="https://wa.me/918800020002" target='_blank'>
          <button className=' text-sm lg:text-base learn_btn relative overflow-hidden group     bg-black lg:bg-transparent  rounded-full border-1 border-[#ffffff] px-0 py-2 lg:px-6 center lg:py-2'>
            <p className='fixy1 font-normal opacity-0'>whatsappp</p>
            <div className='lg:fixy1 flex  items-center gap-2 group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300 font-normal absolute text-white'> <img className='w-5' src="/icon/whatsapp.png" alt="" /> <p> Whatsapp</p></div>
            <div className="w-full origin-center group-hover:left-0 transition-all duration-300 h-full bg-white top-0 left-[-100%] absolute "></div>
            <div className='fixy1  flex  items-center gap-2 font-normal translate-y-[10px] z-[99] text-black group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300  absolute'>  <img className='w-5' src="/icon/whatsapp.png" alt="" /> <p> Whatsapp</p></div>
          </button>
          </a>
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
    </>
  )
}

export default Header