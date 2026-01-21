import { RiArrowDownSLine } from "@remixicon/react";
import React, { useState } from "react";

const Faq = () => {
  const generalFaqs = [
    {
      id: 1,
      question: "Why is The Laundry House the safest option for me and my family?",
      answer: (
        <>
          <p><strong>The Four Pillars of The Laundry House:</strong></p>
          <ul>
            <li><strong>Safe & Clean:</strong> European-standard detergents for skin-friendly care.</li>
            <li><strong>Unmatched Quality:</strong> Meticulous processes for superior results.</li>
            <li><strong>Radical Transparency:</strong> Watch your garments being cared for.</li>
            <li><strong>Effortless Convenience:</strong> Hassle-free scheduling and delivery.</li>
          </ul>
        </>
      )
    },
    {
      id: 2,
      question: "Where are you located?",
      answer: (
        <>
          <p>
            Find our nearest location{" "}
            <a href="/stores" className="text-blue-600 underline">
              here
            </a>.
          </p>
        </>
      )
    },
    {
      id: 3,
      question: "What services do you provide?",
      answer: (
        <>
          <p>
            We offer premium cleaning services including dry and wet cleaning,
            steam ironing, shoe cleaning, bag cleaning, carpet and curtain
            cleaning, car cleaning, and sofa cleaning.
          </p>
        </>
      )
    },
    {
      id: 4,
      question: "Do you provide same-day or express service?",
      answer: (
        <>
          <p>
            Yes, we offer express service. Please share your location for an
            estimated delivery time.
          </p>
        </>
      )
    },
    {
      id: 5,
      question: "Which chemicals do you use?",
      answer: (
        <>
          <p>
            We prioritize both your clothing and your skin by using eco-friendly,
            mild chemicals along with soft water for delicate and safe garment
            care.
          </p>
        </>
      )
    },
    {
      id: 6,
      question: "What machines do you use?",
      answer: (
        <>
          <p>
            We use professional-grade machines imported from Germany, equipped
            with auto-fitted programs designed for precise garment care.
          </p>
        </>
      )
    },
    {
      id: 7,
      question: "Is pickup available from my home?",
      answer: (
        <>
          <p>Yes, we provide a pickup and drop facility.</p>
        </>
      )
    },
    {
      id: 8,
      question: "How long does it take to deliver the garments?",
      answer: (
        <>
          <p>Generally, garments are delivered within 3 to 4 days.</p>
        </>
      )
    },
    {
      id: 9,
      question: "Do I have to pay in advance?",
      answer: (
        <>
          <p>
            For individual orders, payment can be made upon delivery. However,
            membership plans require advance payment.
          </p>
        </>
      )
    }
  ];


  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <>
      {/* Page Title */}
      <div className="w-full px-5 pt-24 lg:pt-32 lg:text-center">
        <h1 className="text-2xl leading-none lg:text-6xl add_anim_txt_a lg:whitespace-nowrap">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-5 lg:py-12 text-sm lg:text-lg ">

        <div className=" my-5 ">
          {generalFaqs.map((faq) => (
            <div key={faq.id} className="border-b border-black/30">

              {/* Header */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center py-5 lg:py-8 justify-between text-left"
              >
                <h5 className="text-lg lg:text-2xl leading-none font-semibold">
                  {faq.id}.  {faq.question}
                </h5>

                <RiArrowDownSLine
                  className={`text-2xl transition-transform duration-300
            ${openId === faq.id ? "rotate-180" : ""}
          `}
                />
              </button>

              {/* Animated Content */}
              <div
  className={`grid transition-all duration-500 ease-in-out
    ${openId === faq.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
  `}
>
  <div className="overflow-hidden">
    <div
      className="mb-4 text-sm lg:text-lg space-y-5
        [&_ul]:list-disc
        [&_ul]:pl-6
        [&_li]:mb-2"
    >
      {faq.answer}
    </div>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>


    </>
  );
};

export default Faq;
