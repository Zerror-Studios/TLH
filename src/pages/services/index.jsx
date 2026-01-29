import {
  RiArrowDownSLine,
  RiArrowRightUpLine,
  RiCloseLine,
} from "@remixicon/react";
import React, { useEffect, useMemo, useRef, useState } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import CustomEase from "gsap/dist/CustomEase";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import ArrowButton from "@/components/Buttons/ArrowButton";
import CustomSelect from "@/components/common/CustomSelect";
import SeoHeader from "@/components/seo/SeoHeader";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const Services = [
  {
    id: 1,
    title: "Garment Care",
    desc: "Professional dry cleaning and wet cleaning for all your precious garments.",
    Tags: ["Dry Cleaning", "Wet Cleaning"],
    img: "/images/services/1_Garment Care.webp",
  },
  {
    id: 2,
    title: "Shoe & Bags",
    desc: "Premium cleaning and restoration services for shoes and bags.",
    Tags: ["Shoe Cleaning", "Bag Cleaning"],
    img: "/images/services/2_Shoe & Bags.webp",
  },
  {
    id: 3,
    title: "Home & Auto Fabrics",
    desc: "Deep cleaning for sofas, curtains, and carpets including auto upholstery.",
    Tags: ["Sofa Cleaning", "Curtain Cleaning", "Carpet Cleaning"],
    img: "/images/services/3_Home & Auto Fabrics.webp",
  },
  {
    id: 4,
    title: "Wedding Couture",
    desc: "Specialized cleaning and finishing of wedding gowns and couture dresses.",
    Tags: ["Dry Cleaning", "Steam Ironing"],
    img: "/images/services/4_Wedding Couturer.webp",
  },
  {
    id: 5,
    title: "Laundry Essentials",
    desc: "Everyday laundry service with wet cleaning and steam ironing.",
    Tags: ["Wet Cleaning", "Steam Ironing"],
    img: "/images/services/1_Garment Care.webp",
  },
  {
    id: 6,
    title: "Curtains & Drapes",
    desc: "On-site and off-site curtain cleaning to remove dust and pollutants.",
    Tags: ["Curtain Cleaning"],
    img: "/images/services/2_Shoe & Bags.webp",
  },
  {
    id: 7,
    title: "Carpet & Rugs",
    desc: "Professional carpet and rug cleaning with stain removal and deodorizing.",
    Tags: ["Carpet Cleaning"],
    img: "/images/services/3_Home & Auto Fabrics.webp",
  },
  {
    id: 8,
    title: "Luxury Leather Bags",
    desc: "Restoration, polishing, and deep cleaning for luxury leather bags.",
    Tags: ["Bag Cleaning"],
    img: "/images/services/1_Garment Care.webp",
  },
  {
    id: 9,
    title: "Silk & Satin Wear",
    desc: "Gentle hand-finishing and dry cleaning for silk and satin fabrics.",
    Tags: ["Dry Cleaning", "Steam Ironing"],
    img: "/images/services/1_Garment Care.webp",
  },
];

const introAnimation = () => {
  gsap.fromTo(
    ".serv_txt_a",
    { y: 80, opacity: 1 },
    { y: 0, opacity: 1, delay: 0.3, duration: 0.5, stagger: 0.05 }
  );

  gsap.fromTo(
    ".serv_clip",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    {
      delay: 0.1,
      stagger: 0.15,
      ease: "custom",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 0.8,
    }
  );
};

const index = () => {
  const router = useRouter();
  CustomEase.create("custom", "0.785, 0.135, 0.15, 0.86");

  const [activeTag, setactiveTag] = useState("All");
  const [activeService, setactiveService] = useState(Services[0]);

  /* ✅ ONLY ADDITION */
  const [sidebarForm, setSidebarForm] = useState({
    service: "",
  });

  const slideRef = useRef(null);
  const overlayRef = useRef(null);

  const changeTag = (tag) => {
    setactiveTag(tag);
  };

  const filteredServices = useMemo(() => {
    if (activeTag === "All") return Services;
    return Services.filter((service) => service.Tags.includes(activeTag));
  }, [activeTag]);

  const uniqueTags = useMemo(() => {
    const allTags = Services.flatMap((service) => service.Tags);
    return ["All", ...new Set(allTags)];
  }, []);

  const openService = (service) => {
    setactiveService(service);
    setSidebarForm({ service: service.title }); // auto fill

    if (window.lenis) window.lenis.stop();
    gsap.to(slideRef.current, {
      right: 0,
      duration: 1,
      ease: "custom",
    });
    gsap.to(overlayRef.current, {
      pointerEvents: "auto",
      opacity: 1,
      duration: 1,
      ease: "custom",
    });
  };

  const services = [
    "Web Development",
    "UI/UX Design",
    "SEO Optimization",
    "Consultation",
  ];

  /* ✅ ONLY ADDITION */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSidebarForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const closeService = () => {
    if (window.lenis) window.lenis.start();

    gsap.to(slideRef.current, {
      right: "-100%",
      duration: 1,
      ease: "custom",
    });
    gsap.to(overlayRef.current, {
      pointerEvents: "none",
      opacity: 0,
      duration: 1,
      ease: "custom",
    });
  };

  useEffect(() => {
    introAnimation();
  }, []);

  return (
    <>
      <SeoHeader meta={meta}/>
      <div
        onClick={closeService}
        ref={overlayRef}
        className="overlay pointer-events-none opacity-0 fixed h-screen w-full bg-black/70 z-[99]"
      />

      <div
        ref={slideRef}
        data-lenis-prevent
        className="open_slide w-full md:w-[50vw] lg:w-[30vw] flex flex-col justify-between h-[100dvh] bg-[#FFFAF0] p-5 lg:p-10 fixed top-0 right-[-100%] z-[999] overflow-auto"
      >
        <div className="flex flex-col gap-3 lg:gap-5">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-3xl">{activeService?.title}</h1>
            <RiCloseLine
              onClick={closeService}
              size={30}
              className="cursor-pointer"
            />
          </div>

          <div className="w-full h-[1.5px] black opacity-60" />

          <div className="w-[65%] aspect-square">
            <img src={activeService?.img} alt="" />
          </div>

          <p className="text-sm">{activeService?.desc}</p>

          <div className="w-full h-[1.5px] black opacity-60" />

          {/* ✅ FIXED CustomSelect */}
          <CustomSelect
            label="Service"
            name="service"
            value={sidebarForm.service}
            options={services}
            placeholder="Select service"
            onChange={handleChange}
          />

          <div className="w-full h-[1.5px] black opacity-60" />

          {/* ✅ FIXED CustomSelect */}
          <CustomSelect
            label="Service"
            name="service"
            value={sidebarForm.service}
            options={services}
            placeholder="Select service"
            onChange={handleChange}
          />

        </div>

        <ArrowButton variant="dark" label="Book Now" />
      </div>

      <div className="w-full flex lg:items-center justify-center flex-col p-5 pt-20 lg:pt-32">
        <div className="block overflow-hidden">
          <h1 className=' serv_txt_a  text-2xl lg:text-6xl  '>Our Services</h1>
        </div>
        <div className="block overflow-hidden">
          <p className=' text-sm mt-1 serv_txt_a leading-tight lg:text-xl'>Explore the range of services we offer to care for your garments.</p>
        </div>
      </div>
      <div className="tags w-full  lg:mt-10 px-5 lg:px-10 h-10 border-b scroller_none overflow-x-scroll gap-5 border-black/20  flex items-center justify-between">
        {uniqueTags.map(tag => (
          <div onClick={() => changeTag(tag)} key={tag} className={`relative shrink-0 whitespace-nowrap h-full flex items-center cursor-pointer transition duration-300 ${activeTag === tag ? "font-semibold opacity-100" : "opacity-80"}`}>
            <p className=' text-sm lg:text-base'>{tag}</p>
            <div className={` absolute -bottom-[0px] z-[9] w-full black rounded-full h-[2px] transition duration-300 ${activeTag === tag ? "opacity-100" : "opacity-0"}`}></div>
          </div>
        ))}
      </div>
      <div className=" mb-5 lg:mb-20 p-5 lg:p-10 w-full overflow-hidden ">
        <div className="w-full pb-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-y-20 ">
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title} // stable key
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: index * 0.15 }} // stagger effect
                className="w-full shrink-0 flex flex-col  "
              >
                <motion.div className="serv_clip aspect-square rounded-md w-full  overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={service.img}
                    alt={service.title}
                  />
                </motion.div>
                <div className="w-full mt-2 gap-1 md:mt-3 flex flex-col justify-between">
                  <h1 className=" text-xl lg:text-2xl serv_txt_b">{service.title}</h1>
                  <p className=" text-xs md:text-sm leading-none lg:text-base serv_txt_b">{service.desc}</p>


                  <a href="https://wa.me/918800020002" target='_blank'>

                    <div className='w-full'>
                      <button
                        // onClick={() => openService(service)}
                        className='serv_txt_b w-full add_anim_txt_btn text-sm lg:text-base font-normal mt-4  relative overflow-hidden group rounded-full text-white   hover:text-black bg-black  border-1 border-[#0e1111] px-4 center py-1.5 lg:py-2.5'>
                        <p className='   opacity-0'>Book Now</p>
                        <p className=' group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300   absolute'>Book Now </p>
                        <div className="w-full  group-hover:scale-110 origin-center group-hover:left-0 transition-all duration-300 h-full bg-[#FFFAF0] top-0 left-[-100%] absolute "></div>
                        <p className='  translate-y-[10px] z-[99] text-black group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300 font-normal absolute'> Book Now</p>
                      </button>
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

        </div>
      </div>
    </>
  )
}

export default index;


export const meta = {
  title: "Our Services | Premium Laundry & Dry Cleaning – The Laundry House",
  description:
    "Explore premium laundry, dry cleaning, shoe & bag care, stain removal, and garment restoration services by The Laundry House.",
  canonical: "https://thelaundryhouseindia.com/services",
  og: {
    title: "Premium Laundry & Dry Cleaning Services",
    description:
      "From everyday wear to luxury garments, experience expert laundry and fabric care services.",
    image: "https://thelaundryhouseindia.com/logo-og.png",
    url: "https://thelaundryhouseindia.com/services",
    type: "website",
    site_name: "The Laundry House",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laundry & Dry Cleaning Services",
    description:
      "Expert care for your garments with premium laundry and restoration services.",
    image: "https://thelaundryhouseindia.com/logo-og.png",
  },
  robots: "index,follow",
  keywords:
    "laundry services India, premium dry cleaning, garment restoration, shoe bag cleaning, stain removal service",
  author: "The Laundry House",
};
