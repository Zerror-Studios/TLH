
import React, { useEffect, useState } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import CustomEase from "gsap/dist/CustomEase";
import SeoHeader from "@/components/seo/SeoHeader";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);


const services = [
  {
    id: 1,
    title: "Garment Care",
    desc: "Expert cleaning solutions designed to maintain fabric quality, color, and freshness for daily and premium garments. Each piece is carefully treated using fabric-safe processes to ensure long-lasting wear and comfort.",
    subServices: [
      "Shirt Cleaning",
      "T-Shirt Cleaning",
      "Kurta Cleaning",
      "Trouser Cleaning",
      "Jacket & Coat Cleaning",
      "Ethnic Wear Cleaning"
    ],
    img: "/images/services/1_Garment Care.webp",
  },
  {
    id: 2,
    title: "Shoe & Bags",
    desc: "Advanced cleaning and restoration techniques to revive footwear and bags without damaging material or structure. From everyday shoes to premium accessories, we restore hygiene and appearance effectively.",
    subServices: [
      "Sports Shoe Cleaning",
      "Leather Shoe Cleaning",
      "Sneaker Whitening",
      "Handbag Cleaning",
      "Backpack Cleaning",
      "Bag Deodorizing"
    ],
    img: "/images/services/2_Shoe & Bags.webp",
  },
  {
    id: 3,
    title: "Home & Auto Fabrics",
    desc: "Deep fabric cleaning services that eliminate dust, allergens, and stains from home and vehicle interiors. Safe methods ensure thorough cleaning while preserving fabric texture and durability.",
    subServices: [
      "Sofa Cleaning",
      "Car Seat Cleaning",
      "Carpet Cleaning",
      "Curtain Cleaning",
      "Mattress Cleaning",
      "Chair Upholstery Cleaning"
    ],
    img: "/images/services/3_Home & Auto Fabrics.webp",
  },
  {
    id: 4,
    title: "Wedding Couture",
    desc: "Specialized care for heavy bridal and designer outfits with delicate embroidery and fabrics. Each garment undergoes detailed inspection, gentle cleaning, and precision finishing.",
    subServices: [
      "Bridal Lehenga Cleaning",
      "Wedding Gown Cleaning",
      "Sherwani Cleaning",
      "Heavy Embroidery Care",
      "Hand Finishing"
    ],
    img: "/images/services/4_Wedding Couturer.webp",
  },
  {
    id: 5,
    title: "Laundry Essentials",
    desc: "Reliable everyday laundry services designed for convenience, hygiene, and consistent quality. Ideal for regular wear clothing with efficient washing, drying, and ironing solutions.",
    subServices: [
      "Daily Wear Washing",
      "Shirt Ironing",
      "Trouser Ironing",
      "Bedsheet Cleaning",
      "Towel Washing",
      "Uniform Cleaning"
    ],
    img: "/images/services/1_Garment Care.webp",
  },
  {
    id: 6,
    title: "Curtains & Drapes",
    desc: "Professional curtain cleaning services that remove accumulated dust and pollutants without shrinking or fading. Available in both on-site steam cleaning and off-site deep wash options.",
    subServices: [
      "Sheer Curtain Cleaning",
      "Blackout Curtain Cleaning",
      "Steam Cleaning",
      "Curtain Removal & Rehang"
    ],
    img: "/images/services/2_Shoe & Bags.webp",
  },
  {
    id: 7,
    title: "Carpet & Rugs",
    desc: "Intensive carpet and rug cleaning solutions that target deep-seated dirt, stains, and odors. Our process restores softness, color vibrancy, and freshness.",
    subServices: [
      "Area Rug Cleaning",
      "Wall-to-Wall Carpet Cleaning",
      "Stain Treatment",
      "Odor Removal",
      "Pet Hair Removal"
    ],
    img: "/images/services/3_Home & Auto Fabrics.webp",
  },
  {
    id: 8,
    title: "Luxury Leather Care",
    desc: "Premium leather cleaning and restoration services crafted for luxury bags and accessories. Specialized treatments enhance shine, repair wear, and extend product lifespan.",
    subServices: [
      "Leather Bag Cleaning",
      "Color Restoration",
      "Leather Polishing",
      "Scratch & Scuff Repair"
    ],
    img: "/images/services/1_Garment Care.webp",
  },
  {
    id: 9,
    title: "Silk & Satin Wear",
    desc: "Delicate care solutions for silk and satin garments that require gentle handling and expert finishing. Our methods preserve fabric softness, sheen, and intricate detailing.",
    subServices: [
      "Silk Saree Cleaning",
      "Satin Dress Cleaning",
      "Designer Wear Cleaning",
      "Hand Wash & Finish"
    ],
    img: "/images/services/1_Garment Care.webp",
  },
  {
    id: 10,
    title: "Kids Wear",
    desc: "Safe and hygienic cleaning services specially designed for children’s clothing and sensitive fabrics. Gentle detergents ensure cleanliness without irritation or damage.",
    subServices: [
      "Kids Shirt Cleaning",
      "Kids Dress Cleaning",
      "School Uniform Washing",
      "Soft Fabric Care"
    ],
    img: "/images/services/1_Garment Care.webp",
  },
];


const introAnimation = () => {
  gsap.fromTo(
    ".serv_txt_a",
    { y: 80, opacity: 1 },
    { y: 0, opacity: 1, delay: 0.3, duration: 0.5, stagger: 0.05 }
  );
};

const index = () => {

  const [active, setActive] = useState(0);


  useEffect(() => {
    introAnimation();
  }, []);

  return (
    <>
      <SeoHeader meta={meta} />

      <div className="w-full flex lg:items-center justify-center flex-col p-5 pt-20 lg:pt-32">
        <div className="block overflow-hidden">
          <h1 className=' serv_txt_a  text-2xl lg:text-6xl  '>Our Services</h1>
        </div>
        <div className="block overflow-hidden">
          <p className=' text-sm mt-1 serv_txt_a leading-tight lg:text-xl'>Explore the range of services we offer to care for your garments.</p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-5  pb-16 md:py-24 md:grid lg:grid-cols-2 gap-20">
        {/* LEFT – ACCORDION */}
        <div className="space-y-4">
          {services.map((service, i) => (
            <div
              key={i}
              className={`border rounded-lg transition ${active === i ? "border-black" : "border-gray-200"
                }`}
            >
              <button
                onClick={() => setActive(i)}
                className="w-full text-left px-6 py-6 flex justify-between items-center"
              >
                <h1 className=" text-xl lg:text-2xl serv_txt_b">{service.title}</h1>
                <span className="text-2xl">
                  {active === i ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden space-y-5 transition-all duration-300 ${active === i ? " max-h-[100vh]  md:max-h-[20rem] px-6 pb-6" : "max-h-0"
                  }`}
              >
                <p className=" text-xs md:text-sm leading-none lg:text-base serv_txt_b">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.subServices.map((subService, i) => (
                    <button key={i} className=" border border-black/10 px-3 py-1.5 w-fit rounded-full gap-x-2 flex items-center">
                      <div className=" shrink-0 aspect-square text-sm bg-black rounded-full size-1"></div>
                      <p className="text-sm">{subService}</p>
                    </button>
                  ))}
                </div>

                <div className=' w-full md:w-[30%]'>
                  <a href="https://wa.me/918800020002" target='_blank'>
                    <button
                      // onClick={() => openService(service)}
                      className='serv_txt_b w-full add_anim_txt_btn text-sm lg:text-base font-normal mt-4  relative overflow-hidden group rounded-full text-white   hover:text-black bg-black  border-1 border-[#0e1111] px-4 center py-1.5 lg:py-2.5'>
                      <p className='   opacity-0'>Book Now</p>
                      <p className=' group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300   absolute'>Book Now </p>
                      <div className="w-full  group-hover:scale-110 origin-center group-hover:left-0 transition-all duration-300 h-full bg-[#FFFAF0] top-0 left-[-100%] absolute "></div>
                      <p className='  translate-y-[10px] z-[99] text-black group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300 font-normal absolute'> Book Now</p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT – STICKY IMAGE */}
        <div className=" max-sm:hidden! relative h-[100vh] center lg:sticky lg:top-0 pt-16  overflow-hidden">
          <div className="h-[70vh]  w-full overflow-hidden rounded-xl">
          <img
            src={services[active].img}
            alt={services[active].title}
            className="cover transition-opacity duration-500"
            />
            </div>
        </div>
      </section>



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
