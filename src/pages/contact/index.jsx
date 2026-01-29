import ArrowButton from "@/components/Buttons/ArrowButton"
import ServiceBtn from "@/components/Buttons/ServiceBtn"
import SeoHeader from "@/components/seo/SeoHeader";
import { RiFacebookLine, RiGithubLine, RiInstagramLine, RiWhatsappLine, RiYoutubeLine } from "@remixicon/react"

export default function ContactPage() {
    return (

        <>
            <SeoHeader meta={meta} />
            <div className="w-full pb-10 lg:pb-20 ">
                <div className="w-full pt-24  lg:pt-32 px-5 lg:px-24">
                    <h1 className=" text-2xl lg:text-6xl leading-none welc_animate_txt   ">Contact Us</h1>
                    <p className="text-sm lg:text-xl leading-none mt-1 welc_animate_txt">
                        Have something in mind? Let’s talk.
                    </p>
                </div>
                <div className="w-full flex flex-col-reverse lg:flex-row gap-y-10 mt-14 px-5 lg:px-24 lg:items-stretch">
                    <div className=" w-full lg:w-1/2 flex flex-col gap-y-10   lg:justify-between">
                        <div className=" text-sm lg:text-xl font-thin  space-y-3 lg:space-y-5 ">
                            <p>support@tlhindia.in</p>
                            <p>+91 8800020002</p>
                            <p className="lg:w-[60%] leading-tight">Shop No. 1, Parshwa Darshan Complex, Near Gaay Circle, Shrenik Park Crossing, Akota, Vadodara – 390020</p>
                        </div>
                        <div className=" flex gap-x-5 items-center">
                            <div className=" size-12 lg:size-14 hover:bg-[#0e1111] hover:text-[#fffaf0] cursor-pointer center rounded-full border border-[#0e1111] transition-all duration-300">
                                <a href=" https://youtube.com/@thelaundryhouse?si=lAIxfghsNDfOKH1x" target="_blank">
                                    <RiYoutubeLine />
                                </a>
                            </div>
                            <div className=" size-12 lg:size-14 hover:bg-[#0e1111] hover:text-[#fffaf0] cursor-pointer center rounded-full border border-[#0e1111] transition-all duration-300">
                                <a href="https://www.instagram.com/the_laundry_house_official?igsh=MW53bXZld2ZxcW0wMw==" target="_blank" >
                                    <RiInstagramLine />
                                </a>
                            </div>
                            <div className=" size-12 lg:size-14 hover:bg-[#0e1111] hover:text-[#fffaf0] cursor-pointer center rounded-full border border-[#0e1111] transition-all duration-300">
                                <a href="https://wa.me/918800020002" target="_blank" >
                                    <RiWhatsappLine />
                                </a>
                            </div>
                            {/* <div className=" size-12 lg:size-14 hover:bg-[#0e1111] hover:text-[#fffaf0] cursor-pointer center rounded-full border border-[#0e1111] transition-all duration-300">
                                <RiFacebookLine />
                            </div> */}
                        </div>
                    </div>
                    <div className=" w-full lg:w-1/2">
                        <form className="w-full flex text-sm lg:text-base flex-col gap-y-10">
                            <div className="flex flex-col gap-[1.2vw]">
                                <p className="uppercase ">
                                    Name <sup> *</sup>
                                </p>

                                <div className="flex gap-[2vw]">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full bg-transparent border-b border-neutral-600 pb-[0.6rem] outline-none placeholder-neutral-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full bg-transparent border-b border-neutral-600 pb-[0.6rem] outline-none placeholder-neutral-500"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-[1.2vw]">
                                <p className="uppercase ">
                                    Email <sup> *</sup>
                                </p>
                                <input
                                    placeholder="Enter Email"
                                    type="email"
                                    className="w-full bg-transparent border-b border-neutral-600 pb-[0.6rem] outline-none placeholder-neutral-500"
                                />
                            </div>

                            <div className="flex flex-col gap-[1.2vw]">
                                <p className="uppercase ">
                                    Message <sup> *</sup>
                                </p>
                                <textarea
                                    placeholder="Enter Message"
                                    rows={4}
                                    className="w-full bg-transparent border-b border-neutral-600 pb-[0.6rem] outline-none placeholder-neutral-500 resize-none"
                                />
                            </div>
                            <div className=" w-full lg:w-[30%]">
                                <ServiceBtn label="Send Message" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export const meta = {
    title: "Contact Us | The Laundry House – Premium Garment Care",
    description:
        "Get in touch with The Laundry House for premium laundry services, franchise inquiries, or customer support. We’re here to help.",
    canonical: "https://thelaundryhouseindia.com/contact",
    og: {
        title: "Contact The Laundry House",
        description:
            "Reach out for premium laundry services, support, or business inquiries.",
        image: "https://thelaundryhouseindia.com/logo-og.png",
        url: "https://thelaundryhouseindia.com/contact",
        type: "website",
        site_name: "The Laundry House",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact The Laundry House",
        description:
            "We’re here for your garment care needs.",
        image: "https://thelaundryhouseindia.com/logo-og.png",
    },
    robots: "index,follow",
    keywords:
        "contact laundry service, dry cleaning support, The Laundry House contact",
    author: "The Laundry House",
};
