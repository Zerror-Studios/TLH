import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState, useEffect } from "react";

import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const swiperData = [
  {
    img: "/images/Hero swiper/pic_1.jpg",
    title: "Professional dry cleaning",
  },
  {
    img: "/images/Hero swiper/pic_2.jpg",
    title: "Revive Your Shoes & Bags",
  },
  {
    img: "/images/Hero swiper/pic_3.jpg",
    title: "Expert Cleaning and Care!",
  },
  {
    img: "/images/Hero swiper/pic_4.jpg",
    title: "Bridal Elegance, Restored with Care",
  },
];

const HeroSwiper = () => {
  const swiperRef = useRef(null);
  const swiperParentRef = useRef(null);
  const parallexContainerRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex(0);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {

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
    gsap.to(
      ".swiper_elem",
      {
        filter: " blur(5px) brightness(0.4)",
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

  return (
    <div ref={swiperParentRef} className="relative w-full h-screen overflow-hidden">
      <div className="w-full absolute flex px-10 text-white gap-10 items-center justify-between bottom-5 h-24 z-[9]">
        {swiperData.map((item, index) => (
          <div
            key={index}
            className={`w-[25%] cursor-pointer transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "opacity-50"
              }`}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideToLoop(index);
              }
            }}
          >
            <p className="text-xl">{item.title}</p>
            <div className="w-full h-[2px] relative bg-white/40 rounded-full overflow-hidden">
              <div
                className={`absolute h-full bg-white transition-all duration-[3500ms] ease-linear`}
                style={{
                  width: activeIndex === index ? "100%" : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <Swiper
        modules={[Navigation, A11y, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        speed={600}
        loop
        className=" swiper_elem w-full h-full brightness-[1] blur-[0px]"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {swiperData?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full center overflow-hidden">
              <motion.img
                key={activeIndex}
                className="w-full h-full object-cover brightness-[.8]"
                src={image.img}
                alt={image.title}
                initial={{ filter: "blur(20px)", scale: 1 }}
                animate={{
                  filter: "blur(0px)",
                  scale: [1, 1.1],
                }}
                transition={{
                  filter: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                  scale: { delay: 0.6, duration: 5, },
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div ref={parallexContainerRef} className=" z-[9] w-full absolute bottom-[-15vh] h-[15vh] bg-[#FFFAF0]"></div>
    </div>
  );
};

export default HeroSwiper;