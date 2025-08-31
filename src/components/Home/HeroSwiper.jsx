"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState, useEffect } from "react";


import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { CustomEase } from 'gsap/dist/CustomEase';
import { RiArrowLeftSFill, RiArrowLeftSLine, RiArrowRightSFill, RiArrowRightSLine } from "@remixicon/react";
gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

const swiperData = [
  {
    img: "/images/Hero swiper/pic_1.webp",
    title: "Professional dry cleaning",
  },
  {
    img: "/images/Hero swiper/pic_2.webp",
    title: "Revive Your Shoes & Bags",
  },
  {
    img: "/images/Hero swiper/pic_3.webp",
    title: "Expert Cleaning and Care!",
  },
  {
    img: "/images/Hero swiper/pic_4.webp",
    title: "Bridal Elegance, Restored with Care",
  },
];

const HeroSwiper = () => {
  const swiperRef = useRef(null);
  const swiperParentRef = useRef(null);
  const parallexContainerRef = useRef(null);
  CustomEase.create("custom", "0.785, 0.135, 0.15, 0.86")

  useEffect(() => {

    const split1 = new SplitText(".anim_ttxt", { type: "words" });

    gsap.set(swiperParentRef.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"
    })
    gsap.set(split1.words, { opacity: 0 })
    gsap.fromTo(split1.words, {
      opacity: 0,
    }, {
      opacity: 1,
      stagger: 0.2,
      ease: "custom"
    })
    gsap.to(".anim_ttxt", {
      opacity: 1,
      delay: 0,
      duration: 0.5,
      ease: "custom"
    })
    gsap.to(".fixed_paren", {
      opacity: 0,
      delay: 0.7,
      duration: 0.5,
      ease: "custom",
      onComplete: () => {
        gsap.set(".fixed_paren", { display: "none" });
      }
    })
    gsap.to(swiperParentRef.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      delay: 1,
      duration: 2,
      ease: "expo.out"
    })
    if (window.innerWidth < 1024) return
    gsap.fromTo(".chng_sl", {
      y: -300
    }, {
      y: 0,
      delay: 1,
      duration: 2,
      ease: "expo.out"
    })

    gsap.to(
      parallexContainerRef.current,
      {
        bottom: 0,
        duration: 1,
        scrollTrigger: {
          trigger: swiperParentRef.current,
          start: "top top",
          // markers: true,
          scrub: true,
        },
      }
    );

  }, [])

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef([]);
  const lineRefs = useRef([]);
  const isAnimating = useRef(false);
  const autoplayRef = useRef(null);

  const goToSlide = (targetIndex) => {
    if (isAnimating.current || targetIndex === currentSlide) return;
    isAnimating.current = true;

    const slides = slidesRef.current;
    const isNext =
      (targetIndex > currentSlide &&
        !(currentSlide === swiperData.length - 1 && targetIndex === 0)) ||
      (currentSlide === 0 && targetIndex === swiperData.length - 1 && false); // handles wrap around

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSlide(targetIndex);
        isAnimating.current = false;
        startLineAnimation(targetIndex); // restart line animation
      },
    });

    const setupSlide = (index, entering) => {
      const slide = slides[index];
      if (!slide) return;

      gsap.set(slide, {
        clipPath: entering
          ? isNext
            ? "polygon(95% 0%, 95% 0%, 100% 100%, 100% 100%)" // entering from right
            : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" // entering from left
          : "polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)", // current slide
        zIndex: entering ? swiperData.length + 1 : swiperData.length,
      });
    };

    const animateOut = (index) => {
      const slide = slides[index];
      if (!slide) return;

      tl.to(
        slide,
        {
          clipPath: isNext
            ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" // exit left if going next
            : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", // exit right if going prev
          duration: 1.8,
          ease: "custom",
        },
        "slideTransition"
      ).set(slide, { zIndex: 0 });
    };

    const animateIn = (index) => {
      const slide = slides[index];
      if (!slide) return;

      tl.to(
        slide,
        {
          clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)",
          duration: 1.8,
          ease: "custom",
        },
        "slideTransition"
      );
    };

    setupSlide(targetIndex, true);
    setupSlide(currentSlide, false);

    animateOut(currentSlide);
    animateIn(targetIndex);
  };


  // Animate progress line
  const startLineAnimation = (index) => {
    // reset all lines
    lineRefs.current.forEach((line, i) => {
      if (!line) return;
      gsap.set(line, { width: i === index ? "0%" : "0%" });
    });

    // animate current slide line
    const activeLine = lineRefs.current[index];
    if (activeLine) {
      gsap.to(activeLine, {
        width: "100%",
        duration: 4.5,
        ease: "linear",
      });
    }
  };

  // Auto play
  useEffect(() => {
    if (swiperData.length <= 1) return;

    autoplayRef.current = setInterval(() => {
      goToSlide((currentSlide + 1) % swiperData.length);
    }, 4000);

    return () => clearInterval(autoplayRef.current);
  }, [currentSlide, swiperData]);

  // Initial setup
  useEffect(() => {
    swiperData.forEach((_, i) => {
      const slide = slidesRef.current[i];
      if (!slide) return;

      gsap.set(slide, {
        clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)",
        zIndex: i === 0 ? swiperData.length : 0,
      });
    });

    startLineAnimation(0); // animate first line
  }, [swiperData]);


  useEffect(() => {
    // Reset & animate active line on slide change
    const animateLine = (index) => {
      const lines = document.querySelectorAll(".anim_line_2");
      lines.forEach((line) => gsap.set(line, { width: "0%" }));
      gsap.to(lines[index], {
        width: "100%",
        duration: 3.5, // match autoplay delay
        ease: "linear",
      });
    };

    // Wait for Swiper to mount
    setTimeout(() => {
      const swiper = document.querySelector(".swiper_elem")?.swiper;
      if (!swiper) return;

      // Animate first line
      animateLine(swiper.realIndex);

      swiper.on("slideChange", () => {
        animateLine(swiper.realIndex);
      });
    }, 200);
  }, []);


  return (
    <>
      <div
        ref={swiperParentRef}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"
        }}
        className="relative w-full h-[87vh] lg:h-screen overflow-hidden">

        <div className="lg:flex h-10 hidden    items-center z-[9] text-white absolute bottom-[10%] right-[2%]">
          <button
            onClick={() => goToSlide((currentSlide - 1 + swiperData.length) % swiperData.length)}
            className="  h-[80%] group relative overflow-hidden "
          >
            <div className="w-full -right-10 group-hover:right-0 z-[-1]  h-full bg-white absolute top-0 transition-all duration-300 "></div>
            <RiArrowLeftSFill className="  group-hover:text-black z-[9]  group-hover:scale-[1.1] transition-all duration-300" />
          </button>
          <div className="h-[80%] w-[1px] bg-white"></div>
          <button
            onClick={() => goToSlide((currentSlide + 1) % swiperData.length)}
            className="group h-[80%] relative overflow-hidden  hover:scale-[1.1] transition-transform duration-300"
          >
            <div className="w-full -left-10 group-hover:left-0 z-[-1]  h-full bg-white absolute top-0 transition-all duration-300 "></div>
            <RiArrowRightSFill className="group-hover:text-black z-[9] group-hover:scale-[1.1] transition-all duration-300" />
          </button>
        </div>

        <div className="chng_sl hidden lg:block w-full h-full relative">

          {swiperData?.map((image, index) => (
            <div
              key={index}
              ref={(el) => (slidesRef.current[index] = el)}
              className={`change_slide_${index}  scale-[1.105] absolute top-0 left-0 w-full h-full`}
            >
              <div className="absolute w-[35%] md:w-[20%] lg:w-[10%] gap-2 flex flex-col right-[20%] md:right-[10%] bottom-[13.6%] z-[9]">
                <p className="text-sm leading-none capitalize text-white">{image.title}</p>
                <div className="w-full h-[1.5px] relative bg-white/20 rounded-full overflow-hidden">
                  <div
                    ref={(el) => (lineRefs.current[index] = el)}
                    className="anim_line w-[0%] h-[1.5px] rounded-full opacity-80 bg-white"
                  ></div>
                </div>
              </div>
              <img
                className="w-full h-full object-cover brightness-[.8]"
                src={image.img}
                alt={image.title}
              />
            </div>
          ))}

        </div>

        {/* mobile swipe btns */}

        {/* <div className="lg:hidden h-10 flex items-center z-[999] text-white absolute bottom-[13.6%] right-[2%]">
          <button className="custom-prev h-[80%] group relative overflow-hidden">
            <div className="w-full -right-10 group-hover:right-0 z-[-1] h-full bg-white absolute top-0 transition-all duration-300"></div>
            <RiArrowLeftSFill className="group-hover:text-black z-[9] group-hover:scale-[1.1] transition-all duration-300" />
          </button>
          <div className="h-[80%] w-[1px] bg-white"></div>
          <button className="custom-next group h-[80%] relative overflow-hidden hover:scale-[1.1] transition-transform duration-300">
            <div className="w-full -left-10 group-hover:left-0 z-[-1] h-full bg-white absolute top-0 transition-all duration-300"></div>
            <RiArrowRightSFill className="group-hover:text-black z-[9] group-hover:scale-[1.1] transition-all duration-300" />
          </button>
        </div> */}

        <div className="w-full h-full lg:hidden">
          <Swiper
            modules={[Navigation, A11y, Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            speed={600}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = ".custom-prev";
              swiper.params.navigation.nextEl = ".custom-next";
            }}
            navigation={{ clickable: true }}
            className="swiper_elem w-full h-full"
          >
            {swiperData?.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full center overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover brightness-[.8]"
                    src={image.img}
                    alt={image.title}
                  />
                  {/* Progress Line */}
                  <div className="absolute  gap-1 flex flex-col left-5 bottom-10 z-[9]">
                    <p className="text-base leading-none capitalize text-white">
                      {image.title}
                    </p>
                    <div className="w-full h-[1.5px] relative bg-white/20 rounded-full overflow-hidden">
                      <div className="anim_line_2 w-[0%] h-[1.5px] rounded-full opacity-80 bg-white"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div ref={parallexContainerRef} className=" z-[9] w-full absolute bottom-[-20vh] h-[20vh] bg-[#FFFAF0]"></div>
      </div>


      <div className=" fixed_paren  fixed z-[99] top-0 left-0 h-screen pointer-events-none w-full center">
        <h2 className=" anim_ttxt text-xl opacity-0">THE LAUNDRY HOUSE</h2>
      </div>
    </>

  );
};

export default HeroSwiper;