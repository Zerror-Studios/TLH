import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import ArrowButton from "@/components/Buttons/ArrowButton";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutHero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // ---- Split Text ----
    const split1 = new SplitText(".fr_hr_anim_txt_a", { type: "words" });

    split1.words.forEach((word) => {
      const wrapper = document.createElement("span");
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";
      wrapper.style.verticalAlign = "top";
      word.parentNode.insertBefore(wrapper, word);
      wrapper.appendChild(word);
    });

    // ---- Text Animations ----
    gsap.fromTo(
      ".fr_hr_anim_head",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.3,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".fr_hr_anim_txt",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.2,
        duration: 0.6,
        stagger: 0.01,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".fr_hr_anim_btn",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.35,
        duration: 0.5,
        ease: "power3.out",
      }
    );

    // ---- IMAGE PARALLAX ----
    if (window.innerWidth < 1024) return
    gsap.to(
      imageRef.current,
      {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-full relative h-[87vh] lg:h-screen overflow-hidden text-white">
      {/* Background Image */}
      <video
        loop
        autoPlay
        muted
        playsInline
        ref={imageRef}
        className="fr_hr_anim_img absolute inset-0 w-full h-full object-cover brightness-[0.8]"
        src="/images/home/hero_reel.mp4"
        alt="Garment care process at The Laundry House"
      />

      {/* Overlay Content */}
      <div className=" z-10 absolute px-5 w-full lg:w-[70%] flex flex-col gap-5 lg:items-center bottom-[10%] left-[50%] lg:text-center translate-x-[-50%]">
        <div className="block overflow-hidden">
          <h2 className="fr_hr_anim_head text-sm lg:text-base tracking-wide ">
            Who We Are
          </h2>
        </div>

        <div className="block overflow-hidden">
          <h1 className="fr_hr_anim_head text-2xl leading-[1.2] lg:text-6xl">
            Caring for What You Wear
          </h1>
        </div>

        <p className="fr_hr_anim_txt fr_hr_anim_txt_a text-sm lg:text-base w-full lg:w-[70%]">
          At The Laundry House, garment care goes beyond cleaning. We focus on
          preserving fabric quality, extending garment life, and delivering a
          consistently premium experience through advanced technology, expert
          processes, and attention to detail.
        </p>

      </div>
    </div>
  );
};

export default AboutHero;
