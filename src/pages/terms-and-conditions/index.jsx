import SeoHeader from "@/components/seo/SeoHeader";
import { RiArrowDownSLine } from "@remixicon/react";
import React, { useState } from "react";

const TermsConditions = () => {
 const termsFaqs = [
  {
    id: 1,
    title: "Agreement to Terms",
    content: (
      <>
        <p>
          These Terms and Conditions govern the relationship between{" "}
          <strong>Yestoshine Pvt. Ltd.</strong>, operating under its brand name
          and logo of <strong>“TLH – The Laundry House”</strong> (“The Laundry
          House”), and any individual(s) availing the Services of The Laundry
          House.
        </p>

        <br />

        <p>
          These Services include laundry and dry-cleaning services for clothes,
          garments, accessories, apparel, footwear, and upholstery (“Articles”),
          to ensure clarity and mutual understanding between The Laundry House
          and its customers.
        </p>

        <br />

        <p>
          Availing the Services of The Laundry House shall constitute
          unconditional acceptance of all Terms and Conditions herein, along
          with any additional terms communicated through bills, challans, or
          membership forms. Yestoshine Pvt. Ltd. is the sole owner of the brand
          “The Laundry House / TLH – The Laundry House”.
        </p>
      </>
    )
  },

  {
    id: 2,
    title: "Refund",
    content: (
      <>
        <ul>
          <li>
            Customers are advised to examine processed Articles at the time of
            delivery. The Laundry House shall not be responsible for issues
            reported after 24 hours of delivery.
          </li>

          <li>
            Compensation, if applicable, shall be limited to a maximum of five
            (5) times the processing charge of the Article or ₹3000/-, whichever
            is lower, and will be provided only in the form of alternative
            services.
          </li>

          <li>
            Any compensation or refund shall be at the sole discretion of The
            Laundry House.
          </li>

          <li>
            No compensation or refund shall be provided for delays caused due
            to force majeure events including natural calamities, fire,
            burglary, or situations beyond the Company’s control.
          </li>
        </ul>
      </>
    )
  },

  {
    id: 3,
    title: "Pricing",
    content: (
      <>
        <ul>
          <li>
            Service tariffs may vary from store to store and city to city.
            Customers are advised to check the applicable price list before
            availing services.
          </li>

          <li>
            Any advance payments made shall be duly mentioned on the bill or
            challan copy of the order.
          </li>

          <li>
            Tariffs for designer, high-end, or complex Articles shall be
            communicated after examination. Customers must declare the value
            of Articles exceeding ₹3000/- at the time of handover.
          </li>

          <li>
            Express or urgent delivery services are provided at the discretion
            of the outlet and may be charged additionally.
          </li>

          <li>
            Memberships are non-refundable and not subject to partial or full
            buyback. Customers must utilize membership benefits within the
            validity period.
          </li>
        </ul>
      </>
    )
  },

  {
    id: 4,
    title: "Cancellation",
    content: (
      <>
        <p>
          Orders placed with The Laundry House may be cancelled only at the
          discretion of The Laundry House and upon submission of the original
          bill or challan copy by the Customer.
        </p>
      </>
    )
  },

  {
    id: 5,
    title: "Shipping Policy",
    content: (
      <>
        <p>
          The Laundry House provides laundry and cleaning services along with
          delivery of processed Articles. The Company does not offer any
          shipping services.
        </p>
      </>
    )
  },
{
  id: 6,
  title: "Service Terms And Conditions",
  content: (
    <>
      <ul>
        <li>
          Processing of Articles is done as per wash care label instructions,
          wherever provided. However, The Laundry House shall not be liable for
          any damage caused due to the use of such methods.
        </li>

        <li>
          While best efforts are made for stain removal, 100% stain removal is
          not guaranteed. The Laundry House may refuse further processing if it
          may damage the Article. Re-processing, if requested, shall be at the
          Customer’s sole risk and at applicable tariffs.
        </li>

        <li>
          Customers are responsible for removing ornaments, jewellery, or any
          attachments that may cause damage during processing.
        </li>

        <li>
          Customers must retain and present the original bill/challan (hard or
          soft copy) at the time of delivery. If unavailable, delivery will be
          made only after proper identity verification.
        </li>

        <li>
          Any delay in delivery due to failure to produce the bill/challan shall
          be the sole responsibility of the Customer. Customers accept full
          responsibility for delivery to persons other than the subscriber.
        </li>

        <li>
          The Laundry House shall not be responsible for safekeeping of Articles
          not collected within fifteen (15) days of the scheduled delivery date.
        </li>

        <li>
          In case of wrong delivery, Customers must immediately notify and
          assist The Laundry House in resolving the issue.
        </li>

        <li>
          Dry-cleaning packaging is meant only for delivery and not storage.
          Customers must remove Articles from packaging upon delivery and store
          them as per manufacturer guidelines.
        </li>

        <li>
          The Laundry House collects personal information with the express
          consent of Customers, in accordance with the Information Technology
          Act, 2000, the Rules thereunder, and the Digital Personal Data
          Protection Act, 2023. Such data shall not be shared with third parties
          without consent, except as required by law.
        </li>

        <li>
          Collected data may be used for order updates, promotional
          communication, offers, surveys, and feedback related to services.
        </li>

        <li>
          Customers consent to being contacted via calls, WhatsApp messages,
          SMS, and emails for the above purposes.
        </li>

        <li>
          Customers consent to the use of images of processed Articles for
          promotional purposes on social media or the website, provided no
          personally identifiable information is disclosed.
        </li>

        <li>
          Disputes between Customers and store/outlets shall be subject to the
          local jurisdiction of the respective outlet. Disputes involving
          Yestoshine Pvt. Ltd. shall be subject to the courts of Vadodara,
          Gujarat.
        </li>

        <li>
          Membership-related disputes shall be handled by the respective
          store/outlet, and The Laundry House shall be absolved of liability.
        </li>

        <li>
          The Laundry House reserves the right to suspend or terminate any
          membership or scheme in case of breach, misuse, fraud, or
          misrepresentation.
        </li>

        <li>
          The Laundry House may modify these Terms and Conditions at any time
          without prior notice. Updated terms will be published on the website
          or communicated through appropriate channels.
        </li>

        <li>
          The Laundry House shall not be liable for health issues, allergic
          reactions, or damages arising from interaction with cleaning
          materials, heat, age, manufacturing defects, colour bleeding,
          shrinkage, embellishment damage, or foreign objects left in Articles.
        </li>
      </ul>
    </>
  )
},

  {
    id: 7,
    title: "Contact Us",
    content: (
      <>
        <p>
          For any queries, kindly contact The Laundry House customer care at{" "}
          <strong>+91 8800020002</strong> or write to us at{" "}
          <a
            href="mailto:care@tlhindia.in"
            className="text-blue-600 underline"
          >
            care@tlhindia.in
          </a>.
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

    <SeoHeader meta={meta}/>

      {/* Page Title */}
      <div className="w-full px-5 pt-24 lg:pt-32 lg:text-center">
        <h1 className="text-2xl leading-none lg:text-6xl add_anim_txt_a lg:whitespace-nowrap">
         Terms & Conditions
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-5 lg:py-12 text-sm lg:text-lg ">

        <div className=" my-5">
          {termsFaqs.map((faq) => (
            <div key={faq.id} className="border-b border-black/30">

              {/* Header */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center py-5 lg:py-8 justify-between text-left"
              >
                <h5 className="text-lg lg:text-2xl leading-none font-semibold">
                  {faq.id}.  {faq.title}
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
      {faq.content}
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

export default TermsConditions;



export const meta = {
  title: "Terms & Conditions | The Laundry House – Service Guidelines",
  description:
    "Review The Laundry House Terms & Conditions outlining service policies, responsibilities, payments, and customer guidelines.",
  canonical: "https://thelaundryhouseindia.com/terms-and-conditions",
  og: {
    title: "Terms & Conditions – The Laundry House",
    description:
      "Understand the service terms, policies, and customer responsibilities.",
    image: "https://thelaundryhouseindia.com/logo-og.png",
    url: "https://thelaundryhouseindia.com/terms-and-conditions",
    type: "website",
    site_name: "The Laundry House",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions – The Laundry House",
    description:
      "Service terms and customer policies explained clearly.",
    image: "https://thelaundryhouseindia.com/logo-og.png",
  },
  robots: "index,follow",
  keywords:
    "terms and conditions laundry, service policy, laundry service terms, The Laundry House terms",
  author: "The Laundry House",
};
