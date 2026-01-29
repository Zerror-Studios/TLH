import SeoHeader from "@/components/seo/SeoHeader";
import { RiArrowDownSLine } from "@remixicon/react";
import React, { useState } from "react";

const PrivacyPolicy = () => {

    const privacyFaqs = [
        {
            id: 1,
            title: "Information We Collect",
            content: (
                <>
                    <p><strong>Personal Information</strong></p>
                    <p className="mt-2">We only collect personal information that you voluntarily provide to us. This includes:</p><br />
                    <ul>
                        <li><strong>Mobile Number:</strong> When you use our chat-bot feature or schedule pick-up feature, which redirects you to WhatsApp.</li>
                        <li><strong>Contact Information:</strong> When you voluntarily fill out forms on our Website for queries or scheduling pickups, we may collect your name, email address, phone number, and any other details you provide.</li>
                        <li><strong>Sensitive Information:</strong> As on date, The Laundry House does not collect or process any sensitive information.</li>
                        <li>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</li>
                    </ul>
                    <br />
                    <p><strong>Automatically Collected Information</strong></p>
                    <p className="mt-2">We may collect certain information automatically when you visit our Website, such as:</p><br />
                    <ul>
                        <li><strong>Computer and Internet Information: </strong>This includes your IP address, browser type, operating system, referring URLs, and other technical information to ensure the proper functioning of our Website.</li>
                        <li>This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</li>
                        <li>We may also store details of the URL that you just came from (whether this URL is on our Platform or not), which URL you next go to next (whether this URL is on our Platform or not), and your computer browser information.</li>
                    </ul>
                </>
            )
        },
        {
            id: 2,
            title: "How We Use Your Information",
            content: (
                <>
                    <p>We use the information we collect for the following purposes:</p>
                    <br />
                    <ul>
                        <li> <strong> To Provide Services:</strong> To respond to your queries, schedule pickups, and communicate with you regarding our services.</li>
                        <li> <strong> To Improve Our Website: </strong>To enhance the functionality and user experience of our Website.</li>
                        <li> <strong> To Comply with Legal Obligations:</strong> To meet any legal or regulatory requirements.</li>
                    </ul>
                </>
            )
        },
        {
            id: 3,
            title: "How We Share Your Information",
            content: (
                <>
                    <p>
                        We may share personal information with our other corporate entities and
                        affiliates to help detect and prevent identity theft, fraud, and other
                        potentially illegal acts.
                    </p>

                    <br />

                    <ul>
                        <li>
                            <strong>Third-Party Service Providers:</strong> We do not share your
                            personal information with any third parties except:
                        </li>

                        <ul>
                            <li>
                                <strong>Payment Gateway Providers:</strong> When you choose to make
                                a payment via the Chatbot, you will be redirected to Razorpay, a
                                third-party payment gateway. Please note that the third-party
                                provider’s privacy policy will apply to your transaction, and we do
                                not store any financial information.
                            </li>
                        </ul>

                        <li>
                            <strong>Legal Requirements:</strong> We may disclose your information
                            if required by law, to comply with legal processes, or to protect the
                            rights, property, and safety of our Company, customers, or others.
                        </li>
                    </ul>

                    <br />

                    <ul>
                        <li>
                            We may also share your personal information in the following
                            situations:
                        </li>

                        <ul>
                            <li>
                                <strong>Business Transfers:</strong> We may share or transfer your
                                information in connection with, or during negotiations of, any
                                merger, sale of company assets, financing, or acquisition of all or
                                a portion of our business to another company.
                            </li>

                            <li>
                                <strong>Affiliates:</strong> We may share your information with our
                                affiliates, in which case we will require those affiliates to honor
                                this privacy notice. Affiliates include our parent company and any
                                subsidiaries, joint venture partners, or other companies that we
                                control or that are under common control with us.
                            </li>

                            <li>
                                <strong>Business Partners:</strong> We may share your information
                                with our business partners to offer you certain products, services,
                                or promotions.
                            </li>
                        </ul>
                    </ul>
                </>
            )
        },

        {
            id: 4,
            title: "Data Security",
            content: (
                <>
                    <ul>
                        <li>We take appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</li>
                        <li>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law. We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 6 months.</li>
                        <li>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</li>
                        <li>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact our Grievance Officer at the details below.</li>
                        <li>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority.</li>
                    </ul>
                </>
            )
        },
        {
            id: 5,
            title: "Your Choices",
            content: (
                <>
                    <ul>
                        <li> <strong>Access and Update: </strong>You can contact us to update or correct any personal information you have provided.</li>
                        <li> <strong>Opt-Out: </strong>You may choose not to provide personal information by not using our chat- bot or forms, but this may limit your ability to use certain features of our Website.</li>
                        <li> <strong>Withdrawal of consent: </strong>You may withdraw your consent for further processing of your data, at any time, by contacting our Grievance Officer, the details of whom are provided below. However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</li>
                        <li> <strong>Access to Data: </strong>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, Request to review, update, or delete your personal information, please contact the Grievance Officer as detailed below.</li>
                    </ul>
                </>
            )
        },
        {
            id: 6,
            title: "Payment Information",
            content: (
                <>
                    <p>
                        We do not collect or store any payment information on our Website. When making a payment for the Services, you will be redirected to Razorpay, and their terms and conditions will apply for the transactions. Razorpay shall forward us a confirmation of receipt of payment for the processing of your order.
                    </p>
                </>
            )
        },
        {
            id: 7,
            title: "Cookie Policy",
            content: (
                <>
                    <ul>
                        <li>
                            Cookies are small data files that are placed on your device when you
                            visit our Website. They are used to make websites work, or work more
                            efficiently, as well as to provide information to the site owners.
                        </li>
                    </ul>

                    <br />

                    <ul>
                        <li>
                            <strong>Types of Cookies We Use:</strong> We use the following types of
                            cookies on our Website:
                        </li>

                        <ul>
                            <li>
                                <strong>Essential Cookies:</strong> These cookies are necessary for
                                the operation of our Website. They allow you to browse our Website
                                and use its features, such as accessing secure areas.
                            </li>

                            <li>
                                <strong>Performance and Analytics Cookies:</strong> These cookies
                                collect information about how you use our Website, such as which
                                pages you visit most often. This data helps us understand how our
                                Website is performing and where it can be improved.
                            </li>

                            <li>
                                <strong>Functional Cookies:</strong> These cookies allow our Website
                                to remember choices you make (such as your language or region) and
                                provide enhanced, more personalized features.
                            </li>
                        </ul>

                        <br />

                        <li>
                            <strong>Managing Cookies:</strong> Most web browsers allow you to
                            control cookies through their settings/preferences. However, if you
                            choose to block cookies, you may not be able to use all the features
                            of our Website.
                        </li>

                        <li>
                            <strong>Third-Party Cookies:</strong> We may use third-party services,
                            such as analytics or advertising services, that also use cookies and
                            similar tracking technologies. These third parties may collect
                            information about your online activities over time and across
                            different websites.
                        </li>
                    </ul>
                </>
            )
        },

        {
            id: 8,
            title: "Changes to This Privacy Policy",
            content: (
                <>
                    <ul>
                        <li>We may update this Privacy Policy from time to time to reflect changes in our practices, services, features or legal requirements. We will notify you of any significant changes by posting the updated policy on our Website with a revised.</li>
                        <li>We request you to keep checking the privacy policy from time to time to stay updated on your rights to be using the website.</li>
                    </ul>
                </>
            )
        },
        {
            id: 9,
            title: "Contact Us",
            content: (
                <>
                    <p>
                        In accordance with the Information Technology Act, 2000, and the
                        relevant Rules made thereunder, if you have any questions or concerns
                        about this Privacy Policy, please contact our Grievance Officer:
                    </p>

                    <br />

                    <ul>
                        <li>
                            <strong>Name of Grievance Officer:</strong> Jyoti Gupta
                        </li>
                        <li>
                            <strong>Office Address:</strong> Yestoshine Pvt. Ltd., G-1, Parshwa
                            Darshan Complex, Akota, Vadodara, Gujarat – 390020
                        </li>
                        <li>
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:jyoti.gupta@thelaundryhouseindia.com"
                                className="text-blue-600 underline"
                            >
                                jyoti.gupta@thelaundryhouseindia.com
                            </a>
                        </li>
                        <li>
                            <strong>Phone:</strong> 8800020002
                        </li>
                        <li>
                            <strong>Timing:</strong> Mon to Sat, 10 AM to 6 PM
                        </li>
                    </ul>
                </>
            )
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
                    Privacy Policy
                </h1>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-5 py-5 lg:py-12 text-sm lg:text-lg ">

                <div className="">

                    <p className="mb-6 ">
                        <strong>Last updated:</strong> 21st January, 2026
                    </p>

                    <p className="mb-6">
                        Welcome to <strong>The Laundry House</strong> website (including the
                        official website of The Laundry House and any other subsite or
                        accompanying applications) provided by{" "}
                        <strong>Yestoshine Pvt. Ltd.</strong> (“The Laundry House”, “Company”,
                        “We” or “Our”).
                    </p>

                    <p className="mb-6">
                        At The Laundry House, we are committed to protecting your privacy and
                        ensuring the security of your personal information. We believe that
                        you should always know what data we collect from you and how we use
                        it. Please read this Privacy Policy carefully to learn how we collect,
                        use, share, and otherwise process your information (“Personal Data”),
                        and to learn about your rights and choices regarding your Personal
                        Data.
                    </p>

                    <p className="mb-6">
                        This Privacy Policy describes how The Laundry House collects, uses,
                        shares, or otherwise processes your personal information through The
                        Laundry House’s website{" "}
                        <strong> <a href="https://www.thelaundryhouseindia.com" className="underline">https://www.thelaundryhouseindia.com</a></strong>, any subsites of
                        The Laundry House, and any mobile application developed by Yestoshine
                        Pvt. Ltd. under the brand of The Laundry House (collectively referred
                        to as the <strong>“Platform”</strong>).
                    </p>

                    <p className="mb-6">
                        By continuing to use our Platform, you agree to the terms of this
                        Privacy Policy and explicitly consent to the use of your information
                        as provided below. If you do not agree with these terms, you may opt
                        out at any time by discontinuing the use of our services.
                    </p>

                    {/* About Us */}
                    <h2 className="font-bold  mt-10 mb-4">About Us</h2>

                    <p className="mb-6">
                        The Company is engaged in the business of providing cleaning solutions,
                        including but not limited to laundry, dry cleaning, shoe cleaning,
                        household and furnishing cleaning, in India (collectively,
                        <strong> “Services”</strong>). The Company serves retail customers,
                        hotels, and institutional clients under the brand of The Laundry
                        House, which is wholly owned and operated by Yestoshine Pvt. Ltd.
                    </p>

                    <p className="mb-6">
                        Services shall also include any other future services the Company may
                        provide or propose to provide through any of its Platforms.
                    </p>

                    <p className="mb-6">
                        The website of The Laundry House has been designed in a manner that
                        allows users to browse services and information freely without
                        sharing personal information. We strive to collect only such
                        information that is absolutely necessary to provide a smooth and
                        convenient user experience.
                    </p>

                    {/* Consent */}
                    <h2 className="font-bold  mt-10 mb-4">Consent</h2>

                    <p className="mb-6">
                        You expressly agree to be bound by this Privacy Policy and any other
                        policies or terms and conditions, including the Terms of Use, by
                        accessing the Website, providing your information, or using our
                        services.
                    </p>

                    <p className="mb-6">
                        You also expressly consent to be governed by the laws of India,
                        including but not limited to laws relating to data protection and
                        privacy.
                    </p>

                    <p className="mb-6">
                        Our Platform may contain links to third-party websites. If you follow
                        any such links, please note that these websites have their own privacy
                        policies, and we do not accept responsibility or liability for their
                        practices. We encourage you to review the privacy policies of such
                        third-party websites before submitting any personal data.
                    </p>
                </div>

                <div className=" my-5 lg:my-20">
                    {privacyFaqs.map((faq) => (
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

export default PrivacyPolicy;




export const meta = {
  title: "Privacy Policy | The Laundry House – Data Protection & Privacy",
  description:
    "Read The Laundry House Privacy Policy to understand how we collect, use, protect, and safeguard your personal information and data.",
  canonical: "https://thelaundryhouseindia.com/privacy-policy",
  og: {
    title: "Privacy Policy – The Laundry House",
    description:
      "Learn how The Laundry House protects your personal data and privacy.",
    image: "https://thelaundryhouseindia.com/logo-og.png",
    url: "https://thelaundryhouseindia.com/privacy-policy",
    type: "website",
    site_name: "The Laundry House",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – The Laundry House",
    description:
      "Your privacy matters. Read how we safeguard your data.",
    image: "https://thelaundryhouseindia.com/logo-og.png",
  },
  robots: "index,follow",
  keywords:
    "privacy policy laundry service, data protection, user privacy, The Laundry House privacy",
  author: "The Laundry House",
};
