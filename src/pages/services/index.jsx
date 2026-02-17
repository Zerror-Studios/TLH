
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
    desc: "Professional garment cleaning that preserves fabric quality, color, and freshness using safe processes for daily and premium wear.",
    subServices: [
      "Shirt Cleaning",
      "T-Shirt Cleaning",
      "Kurta Cleaning",
      "Trouser Cleaning",
      "Jacket & Coat Cleaning",
      "Ethnic Wear Cleaning"
    ],
    img: "/images/services/garment_care.webp",
  },
  {
    id: 2,
    title: "Shoe & Bags",
    desc: "Specialized cleaning solutions for shoes and bags that restore hygiene, appearance, and material integrity without damage.",
    subServices: [
      "Sports Shoe Cleaning",
      "Leather Shoe Cleaning",
      "Sneaker Whitening",
      "Handbag Cleaning",
      "Backpack Cleaning",
      "Bag Deodorizing"
    ],
    img: "/images/services/shoe_bag.webp",
  },
  {
    id: 3,
    title: "Home & Auto Fabrics",
    desc: "Deep cleaning services for home and car fabrics that remove dust, stains, and allergens while protecting texture.",
    subServices: [
      "Sofa Cleaning",
      "Car Seat Cleaning",
      "Carpet Cleaning",
      "Curtain Cleaning",
      "Mattress Cleaning",
      "Chair Upholstery Cleaning"
    ],
    img: "/images/services/home_auto.webp",
  },
  {
    id: 4,
    title: "Wedding Couture",
    desc: "Expert care for bridal and designer outfits with delicate fabrics, detailed embroidery, and precision finishing.",
    subServices: [
      "Bridal Lehenga Cleaning",
      "Wedding Gown Cleaning",
      "Sherwani Cleaning",
      "Heavy Embroidery Care",
      "Hand Finishing"
    ],
    img: "/images/services/wedding.webp",
  },
  {
    id: 6,
    title: "Curtains & Drapes",
    desc: "Professional curtain cleaning that removes dust and pollutants using safe steam or deep wash methods.",
    subServices: [
      "Sheer Curtain Cleaning",
      "Blackout Curtain Cleaning",
      "Steam Cleaning",
      "Curtain Removal & Rehang"
    ],
    img: "/images/services/curatin.webp",
  },
  {
    id: 7,
    title: "Carpet & Rugs",
    desc: "Advanced carpet and rug cleaning that eliminates deep dirt, stains, and odors while restoring softness.",
    subServices: [
      "Area Rug Cleaning",
      "Wall-to-Wall Carpet Cleaning",
      "Stain Treatment",
      "Odor Removal",
      "Pet Hair Removal"
    ],
    img: "/images/services/carpet.webp",
  },
  {
    id: 8,
    title: "Luxury Leather Care",
    desc: "Premium leather cleaning and restoration services designed to enhance shine, repair wear, and extend lifespan.",
    subServices: [
      "Leather Bag Cleaning",
      "Color Restoration",
      "Leather Polishing",
      "Scratch & Scuff Repair"
    ],
    img: "/images/services/luxury.webp",
  },
  {
    id: 9,
    title: "Silk & Satin Wear",
    desc: "Gentle cleaning solutions for silk and satin garments that preserve softness, sheen, and delicate detailing.",
    subServices: [
      "Silk Saree Cleaning",
      "Satin Dress Cleaning",
      "Designer Wear Cleaning",
      "Hand Wash & Finish"
    ],
    img: "/images/services/satin_silk.webp",
  },
  {
    id: 10,
    title: "Kids Wear",
    desc: "Safe and hygienic cleaning for children’s clothing using gentle detergents suitable for sensitive fabrics.",
    subServices: [
      "Kids Shirt Cleaning",
      "Kids Dress Cleaning",
      "School Uniform Washing",
      "Soft Fabric Care"
    ],
    img: "/images/services/kids.webp",
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

      <section className="max-w-7xl mx-auto px-5 py-16 pt-5!  md:pt-12! md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 gap-y-2 md:gap-y-4 hover:border-black transition-all duration-300 flex flex-col justify-between"
            >
                <div className="w-full rounded-sm  aspect-[4/3] bg-yellow-600 overflow-hidden  ">
                <img className="cover" src={service.img} alt="" />
                </div>
           
                <h2 className="text-xl lg:text-2xl serv_txt_b ">
                  {service.title}
                </h2>

                <p className="text-sm lg:text-base ">
                  {service.desc}
                </p>
       

              {/* <div className="mt-6">
                <a href="https://wa.me/918800020002" target="_blank">
                  <button className="w-full serv_txt_b text-sm lg:text-base rounded-full border border-black bg-black text-white py-2 transition hover:bg-white hover:text-black">
                    Book Now
                  </button>
                </a>
              </div> */}
            </div>
          ))}
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
