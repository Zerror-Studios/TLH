import SeoHeader from "@/components/seo/SeoHeader";
import { RiArrowDownSLine } from "@remixicon/react";
import React, { useState } from "react";

const Faq = () => {
  const generalFaqs = [
    {
      category: "Safety & Care",
      items: [
        {
          id: 1,
          question: "Why is The Laundry House a safe choice for my family and garments?",
          answer: (
            <>
              <p><strong>The Four Pillars of The Laundry House:</strong></p>
              <ul>
                <li><strong>Safe & Clean:</strong> Skin-friendly, European-standard detergents.</li>
                <li><strong>Unmatched Quality:</strong> Carefully designed processes for every fabric type.</li>
                <li><strong>Transparency:</strong> Open-store layouts that let you see our care standards.</li>
                <li><strong>Convenience:</strong> Easy pickup, delivery, and scheduling.</li>
              </ul>
            </>
          ),
        },
        {
          id: 2,
          question: "Which chemicals do you use for cleaning?",
          answer: (
            <p>
              We use eco-friendly, mild detergents along with soft water to ensure
              garment safety, color retention, and skin-friendly care.
            </p>
          ),
        },
        {
          id: 3,
          question: "Is TLH suitable for expensive couture and wedding wear?",
          answer: (
            <p>
              Yes. High-value garments undergo fabric inspection and customized
              cleaning methods designed specifically for delicate embroidery,
              silks, and luxury fabrics.
            </p>
          ),
        },
        {
          id: 4,
          question: "How do you handle couture, heirloom sarees, and lehengas?",
          answer: (
            <p>
              These garments are treated with dedicated, fabric-appropriate
              processes including manual stain treatment, pH-neutral cleaning,
              and specialized finishing to preserve structure and embellishments.
            </p>
          ),
        },
        {
          id: 5,
          question: "What happens if a garment is damaged during cleaning?",
          answer: (
            <p>
              Every garment is inspected before processing. If a fabric is deemed
              high-risk, we consult you first. In rare cases of damage, resolution
              is handled transparently based on garment age and value.
            </p>
          ),
        },
      ],
    },

    {
      category: "Services",
      items: [
        {
          id: 6,
          question: "What services does The Laundry House provide?",
          answer: (
            <p>
              We offer premium garment care services including dry cleaning, wet
              cleaning, steam ironing, stain removal, sneaker and bag cleaning,
              carpet cleaning, curtain cleaning, and sofa cleaning.
            </p>
          ),
        },
        {
          id: 7,
          question: "Do you provide pickup and delivery?",
          answer: (
            <p>
              Yes, we offer doorstep pickup and delivery for your convenience.
            </p>
          ),
        },
        {
          id: 8,
          question: "What machines do you use?",
          answer: (
            <p>
              We use professional-grade machines imported from Germany, equipped
              with specialized programs for different fabric and garment types.
            </p>
          ),
        },
        {
          id: 9,
          question: "What is the Live Laundry experience?",
          answer: (
            <p>
              Our stores are designed for openness and hygiene. Customers can view
              our processes and see the care standards followed for their garments.
            </p>
          ),
        },
      ],
    },

    {
      category: "Timelines",
      items: [
        {
          id: 10,
          question: "How long does the cleaning process take?",
          answer: (
            <p>
              Standard turnaround time is typically 3–4 days. Specialized services
              such as restoration or delicate items may require additional time.
            </p>
          ),
        },
        {
          id: 11,
          question: "Do you offer express or same-day service?",
          answer: (
            <p>
              Express service is available in select locations. Delivery timelines
              depend on service type and location.
            </p>
          ),
        },
      ],
    },

    {
      category: "Membership & Payments",
      items: [
        {
          id: 12,
          question: "Do I need to pay in advance?",
          answer: (
            <p>
              Individual orders can be paid at the time of delivery. Membership
              plans require advance payment.
            </p>
          ),
        },
        {
          id: 13,
          question: "What payment methods do you accept?",
          answer: (
            <p>
              We accept UPI, Credit/Debit Cards, and digital wallets. Payments can
              be made online or at delivery.
            </p>
          ),
        },
        {
          id: 14,
          question: "What is your satisfaction or re-clean policy?",
          answer: (
            <p>
              If you are not satisfied with the service outcome, we offer a
              complimentary re-cleaning in line with our service guidelines.
            </p>
          ),
        },
      ],
    },

    {
      category: "Locations & Booking",
      items: [
        {
          id: 15,
          question: "Where are you located?",
          answer: (
            <p>
              You can check our currently operational locations on our{" "}
              <a href="/stores" className="text-blue-600 underline">
                Stores page
              </a>.
            </p>
          ),
        },
        {
          id: 16,
          question: "How do I schedule a pickup?",
          answer: (
            <p>
              Pickups can be scheduled through our website or WhatsApp by selecting
              your preferred time slot.
            </p>
          ),
        },
        {
          id: 17,
          question: "Do you serve my city?",
          answer: (
            <p>
              Service availability depends on your location. Please enter your
              area during booking or check the Stores page for confirmation.
            </p>
          ),
        },
      ],
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

        <div className="my-8 space-y-12">
          {generalFaqs.map((group, groupIndex) => (
            <div key={group.category} className="space-y-4">

              {/* Category Heading */}
              <h3 className="text-xl lg:text-3xl font-bold tracking-tight">
                {group.category}
              </h3>

              {/* FAQs inside category */}
              <div className="border-t border-black/30">
                {group.items.map((faq) => (
                  <div key={faq.id} className="border-b border-black/30">

                    {/* Header */}
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between py-5 lg:py-7 text-left"
                    >
                      <h5 className="text-base lg:text-xl font-semibold leading-snug pr-6">
                        {faq.question}
                      </h5>

                      <RiArrowDownSLine
                        className={`text-2xl transition-transform duration-300 flex-shrink-0
                  ${openId === faq.id ? "rotate-180" : ""}
                `}
                      />
                    </button>

                    {/* Animated Content */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out
                ${openId === faq.id
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                        }
              `}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="pb-5 text-sm lg:text-lg space-y-4 text-black/80
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
