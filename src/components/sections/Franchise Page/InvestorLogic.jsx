import React from "react";

const data = [
  {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    title: "Financial Hygiene",
    desc: [
      {
        bold: "Cash-Rich & Inventory-Free:",
        text: "Immediate digital/cash payments. Zero dead-stock risk.",
      },
      {
        bold: "Fast Stabilization:",
        text: "Designed for operational break-even in ~6 months.",
      },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1200&q=80",
    title: "The Model",
    desc: [
      {
        bold: "Recession-Resistant:",
        text: "A non-discretionary daily need with high repeat subscription revenue.",
      },
      {
        bold: "Scalable:",
        text: "Multi-unit and area expansion opportunities for serious operators.",
      },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    title: "The Edge",
    desc: [
      {
        bold: "The Live Laundry Studio:",
        text: 'A transparent "Live" concept that builds instant customer trust.',
      },
      {
        bold: "Early Mover:",
        text: "Tap into an organized market with <10% current penetration.",
      },
    ],
  },
];

const InvestorLogic = () => {
  return (
    <section className="w-full px-5 md:px-12 lg:px-24 py-10 lg:py-24">
      {/* <div className="w-full center">
        <h1 className=" resp_anim_txt text-2xl lg:text-6xl  ">
          The Investor Logic
        </h1>
      </div> */}
      <div className=" w-full  gap-x-5 grid grid-cols-1  lg:grid-cols-3 gap-y-10 lg:gap-8">
        {data.map((item, index) => (
          <div key={index} className=" shrink-0 w-full flex flex-col gap-2 md:gap-4">
            {/* Image Card */}
            <div className="w-full aspect-4/3 rounded-lg overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Text Outside Card */}
            <div className="flex flex-col gap-2 px-1">
              <h2 className="text-xl md:text-4xl  text-black">
                {item.title}
              </h2>

              {item.desc.map((line, i) => (
                <p
                  key={i}
                  className="text-black text-sm md:text-base leading-tight"
                >
                  <span className="font-semibold">{line.bold}</span> {line.text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestorLogic;
