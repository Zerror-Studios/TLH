import { RiArrowDownSLine } from "@remixicon/react";
import React, { useState } from "react";

const FranchiseFaqs = () => {

const franchiseFaqsData = [
  {
    id: 1,
    question: "What is the typical investment for a TLH Franchise?",
    answer: (
      <p>
        The investment varies based on location and store format, typically ranging from ₹1.75-2.5 Cr. This covers the Live Laundry Studio setup, state-of-the-art equipment, initial marketing, and the franchise fee.
      </p>
    ),
  },
  {
    id: 2,
    question: "How soon can I expect an operational break-even?",
    answer: (
      <p>
        The TLH model is designed for rapid stabilization. Most franchise partners achieve operational break-even within approximately 6 months, subject to location performance and execution discipline.
      </p>
    ),
  },
  {
    id: 3,
    question: "What does \"Self-Reliant & Process-Driven\" mean?",
    answer: (
      <p>
        It means the business is built to run on SOPs (Standard Operating Procedures) rather than individual dependencies. We provide the playbook, training, and audits so the store operates at a premium standard even if you are not physically present daily.
      </p>
    ),
  },
  {
    id: 4,
    question: "What is the \"Live Laundry Studio\" concept?",
    answer: (
      <p>
        It is a transparent store layout where customers can see their garments being processed. This \"open-kitchen\" approach builds immense trust, reduces disputes regarding garment handling, and significantly increases walk-in and repeat business.
      </p>
    ),
  },
  {
    id: 5,
    question: "How is the 14% ROI calculated?",
    answer: (
      <p>
        Our target ROI of 14% is based on optimized operating costs and our premium positioning, which allows for higher margins compared to price-driven local competitors. Detailed unit economics are shared during our second-stage discovery call.
      </p>
    ),
  },
  {
    id: 6,
    question: "Do I need prior experience in the laundry industry?",
    answer: (
      <p>
        No. We look for partners with business acumen and a commitment to quality. We provide end-to-end training for your staff and management team, along with ongoing operational audits to maintain standards.
      </p>
    ),
  },
  {
    id: 7,
    question: "Is there a risk of dead-stock or inventory loss?",
    answer: (
      <p>
        No. Unlike retail, this is a service business with zero inventory management. You do not stock products that might expire or go out of fashion, which ensures a lean balance sheet and minimal working capital risk.
      </p>
    ),
  },
  {
    id: 8,
    question: "The Breakeven Model: How do we hit the 6-month target?",
    answer: (
      <>
      <p>Our model is built on reaching a critical mass of <strong> ~2,000 active customers. </strong></p>
        <ul>
          <li>
            <strong>The Math:</strong> At a conservative Average Order Value (AOV) of <strong> ₹150, </strong> 2,000 customers stabilize the operational costs.
          </li>
          <li>
            <strong>The Lever:</strong> In Tier-1 catchments (Mumbai/Hyderabad), AOVs often trend toward <strong> ₹200–₹250 </strong> due to high-value items like bridal wear and sneakers. At a ₹250 AOV, your customer acquisition target for breakeven drops by <strong> 40%, </strong> significantly de-risking the first 6 months.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 9,
    question: "How is the 2,000-customer acquisition funded?",
    answer: (
      <p>
        The initial marketing spend is factored into your <strong>  setup cost.</strong> We don't just give you a brand; we provide a pre-budgeted <strong> Launch Playbook </strong> designed to acquire these initial 2,000 customers through hyper-local digital targeting and catchment-specific activations.
      </p>
    ),
  },
  {
    id: 10,
    question: "Who bears the liability for garment damage or loss?",
    answer: (
      <p>
        Every store operates under a standardized <strong> Liability & Claims Policy. </strong> We provide the SOPs for \"Pre-Processing Inspection\" to identify pre-existing damage. In the rare event of damage caused by our process, the liability is usually capped at a multiple of the service fee or a specific amount (as per industry standards), and we guide you on getting <strong> Business Liability Insurance </strong> to protect your P&L from high-value claims.
      </p>
    ),
  },
  {
    id: 11,
    question: "Why \"No Inventory\" is a massive advantage for an investor?",
    answer: (
      <ul>
        <li>
          Unlike a restaurant or retail store where 20-30% of capital is locked in perishables or \"dead stock,\" TLH is a pure service-to-cash model.
        </li>
        <li>
          Your capital stays liquid.
        </li>
        <li>
          You pay for consumables (chemicals/packaging) only as you generate revenue.
        </li>
      </ul>
    ),
  },
  {
    id: 12,
    question: "Can I scale from a single unit to an Area Development model?",
    answer: (
      <p>
        Yes. For smart investors, the real ROI is in the \"Cluster Model.\" Once your first unit hits the 6-month breakeven, our system is designed to allow you to open \"Spoke\" units that feed into your existing high-capacity Studio, maximizing your ROI on the initial equipment investment.
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
      {/* Page Title */}
      <div className="w-full px-5 lg:pt-20  lg:text-center">
        <h1 className="text-2xl leading-none lg:text-6xl add_anim_txt_a lg:whitespace-nowrap">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-5 lg:py-5 pb-20! max-sm:pb-6!  text-sm lg:text-lg ">

        <div className=" my-5 ">
          {franchiseFaqsData.map((faq) => (
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

export default FranchiseFaqs;
