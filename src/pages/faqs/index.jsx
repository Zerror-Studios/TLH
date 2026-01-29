import SeoHeader from "@/components/seo/SeoHeader";
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
    },
     {
      id: 10,
      question: "What services does The Laundry House provide?",
      answer: (
        <p>
          We offer a full suite of garment care including dry cleaning, expert stain removal, wedding wear restoration, and sneaker/bag cleaning. We also specialize in premium on-site or pickup-based cleaning for curtains and sofas.
        </p>
      ),
    },
    {
      id: 11,
      question: "How do I schedule a pickup?",
      answer: (
        <p>
          You can book a pickup instantly via our website or WhatsApp. Choose your preferred time slot, and our logistics team will handle the doorstep pickup and delivery.
        </p>
      ),
    },
    {
      id: 12,
      question: "Is TLH safe for expensive couture and wedding wear?",
      answer: (
        <p>
          Yes. We specialize in "Garment Care for Important People." Every high-value piece undergoes inspection and stain mapping before being treated with fabric-safe processes specifically designed for delicate embroidery, silks, and luxury fabrics.
        </p>
      ),
    },
    {
      id: 13,
      question: "How long does the cleaning process take?",
      answer: (
        <p>
          Our standard turnaround time is 3–4 days, depending on the service type. Specialized restoration (like wedding gowns or leather bags) may take longer to ensure the highest quality finish.
        </p>
      ),
    },
    {
      id: 14,
      question: "What is the \"Live Laundry\" experience?",
      answer: (
        <p>
          If you visit our stores, you can see our process firsthand. We believe in total transparency—nothing is hidden behind closed doors. You can see the care, technology, and hygiene standards applied to your clothes.
        </p>
      ),
    },
    {
      id: 15,
      question: "Do you serve my city?",
      answer: (
        <p>
          We currently operate in [List major cities like Delhi, Mumbai, Hyderabad, etc.]. You can check serviceability by entering your location on our 'Stores' page or during the booking process.
        </p>
      ),
    },
    {
      id: 16,
      question: "How do I pay for the service?",
      answer: (
        <p>
          We are a 100% digital-friendly business. You can pay via UPI, Credit/Debit cards, or Wallets at the time of delivery or through our online booking link.
        </p>
      ),
    },
    {
      id: 17,
      question: "What is your \"Satisfaction Guarantee\" and re-wash policy?",
      answer: (
        <p>
          If you are not 100% satisfied with the finish or a stain was not removed as promised, we will re-process the item <strong> free of charge. </strong> Our goal is to meet the standard of the most discerning wardrobes in the city.
        </p>
      ),
    },
    {
      id: 18,
      question: "What happens if a high-value garment is damaged?",
      answer: (
        <p>
          We treat your clothes like assets. Before cleaning, we perform <strong> Stain Mapping & Fabric Analysis. </strong> If we feel a process is too risky for a delicate fabric, we will consult you before proceeding. In the unlikely event of damage, we have a transparent <strong> Claims Resolution Process </strong> based on the age and value of the garment, ensuring you are never left without an answer.
        </p>
      ),
    },
    {
      id: 19,
      question: "How do you handle \"Couture & Heirloom\" pieces (Sarees/Lehengas)?",
      answer: (
        <p>
          High-value items are processed in our <strong> Specialty Zone. </strong> These are never cleaned with "bulk" laundry. They undergo pH-neutral cleaning, manual stain treatment, and steam finishing on specialized form-finishers to ensure no shrinkage or loss of embellishment.
        </p>
      ),
    },
    {
      id: 20,
      question: "Do you provide a \"Return & Refund\" policy for home services (Sofas/Curtains)?",
      answer: (
        <p>
          For on-site services like sofa or curtain cleaning, our supervisor performs a <strong>  Post-Service Walkthrough </strong> with you. If you are not satisfied with the results, we will re-clean the specific area on the spot or schedule a follow-up visit at no cost. Refunds are handled on a case-by-case basis if the service fails to meet our technical SOPs.
        </p>
      ),
    },
    {
      id: 21,
      question: "Can I track the status of my \"Restoration\" items?",
      answer: (
        <p>
          Yes. Unlike local dry cleaners, every item at TLH is barcoded. You can track exactly where your item is—from "In-Processing" to "Final QC"—via our customer portal or by messaging our concierge.
        </p>
      ),
    },
  ];


  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <>

    <SeoHeader meta={meta} />

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



export const meta = {
  title: "FAQs | The Laundry House – Laundry & Dry Cleaning Help",
  description:
    "Find answers to frequently asked questions about laundry, dry cleaning, garment care, pricing, turnaround time, and services at The Laundry House.",
  canonical: "https://thelaundryhouseindia.com/faqs",
  og: {
    title: "FAQs – The Laundry House",
    description:
      "Common questions answered about our laundry and dry cleaning services.",
    image: "https://thelaundryhouseindia.com/logo-og.png",
    url: "https://thelaundryhouseindia.com/faqs",
    type: "website",
    site_name: "The Laundry House",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laundry & Dry Cleaning FAQs",
    description:
      "Everything you need to know about our garment care services.",
    image: "https://thelaundryhouseindia.com/logo-og.png",
  },
  robots: "index,follow",
  keywords:
    "laundry faqs, dry cleaning questions, garment care help, The Laundry House support",
  author: "The Laundry House",
};
