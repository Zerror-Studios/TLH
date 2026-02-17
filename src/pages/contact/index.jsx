import ArrowButton from "@/components/Buttons/ArrowButton"
import ServiceBtn from "@/components/Buttons/ServiceBtn"
import CustomSelect from "@/components/common/CustomSelect";
import InputField from "@/components/common/InputField";
import SeoHeader from "@/components/seo/SeoHeader";
import { RiFacebookLine, RiGithubLine, RiInstagramLine, RiWhatsappLine, RiYoutubeLine } from "@remixicon/react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactPage() {

    const router = useRouter()

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        service: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const serviceOptions = [
  "Garment Care",
  "Shoe & Bags",
  "Home & Auto Fabrics",
  "Wedding Couture",
  "Curtains & Drapes",
  "Carpet & Rugs",
  "Luxury Leather Care",
  "Silk & Satin Wear",
  "Kids Wear"
];

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        const { firstName, lastName, email, city, service, message } = formData;

        if (!firstName || !lastName || !email || !city || !service || !message) {
            toast.error("Please fill all required fields");
            return;
        }

        const payload = {
            fullName: `${firstName} ${lastName}`,
            email,
            city,
            service,
            message,
        };

        try {
            setIsSubmitting(true);

            const res = await fetch("/api/submitContactForm", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            toast.success("Form submitted successfully!");

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                city: "",
                service: "",
                message: "",
            });
            
            router.push("/contact/success");
        } catch (err) {
            toast.error(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };


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
                            <p>info@thelaundryhouseindia.com</p>
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
                        <form
                            onSubmit={handleSubmit}
                            className="w-full flex text-sm lg:text-base flex-col gap-y-10"
                        >

                            {/* NAME */}
                            <div className="flex gap-[2vw]">


                                <div className="w-1/2 flex flex-col gap-[1.2vw]">
                                    <p className="uppercase">
                                        First Name <sup>*</sup>
                                    </p>
                                    <InputField
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-1/2 flex flex-col gap-[1.2vw]">
                                    <p className="uppercase">
                                        Last Name <sup>*</sup>
                                    </p>
                                    <InputField
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* EMAIL */}
                            <div className="flex w-full   gap-[2vw]">
                                <div className="w-1/2 flex flex-col gap-[1.2vw]">
                                    <p className="uppercase">
                                        Email <sup>*</sup>
                                    </p>
                                    <InputField
                                        name="email"
                                        placeholder="Enter Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className=" w-1/2 flex flex-col gap-[1.2vw]">

                                    <p className="uppercase">
                                        City <sup>*</sup>
                                    </p>
                                    <InputField
                                        name="city"
                                        placeholder="Enter City"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* SERVICE */}
                            <div className="flex flex-col gap-[1.2vw]">
                                <p className="uppercase">
                                    Select Service <sup>*</sup>
                                </p>
                                <CustomSelect
                                    name="service"
                                    value={formData.service}
                                    options={serviceOptions}
                                    placeholder="Select Service"
                                    onChange={handleChange}
                                />
                            </div>

                            {/* MESSAGE */}
                            <div className="flex flex-col gap-[1.2vw]">
                                <p className="uppercase">
                                    Message<sup>*</sup>
                                </p>
                                <div className="w-full">
                                    <textarea
                                        data-lenis-prevent
                                        name="message"
                                        rows={4}
                                        placeholder="Briefly Describe Your Requirement"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="input_box font-light w-full custom_scrollbar bg-transparent outline-none resize-none text-sm lg:text-base mb-1"
                                    />
                                    <div className="input_line w-full h-[1px] bg-black/20 rounded-full" />
                                </div>
                            </div>

                            {/* CTA */}
                            <div
                                className={`w-full lg:w-[30%] transition-opacity ${isSubmitting ? "pointer-events-none opacity-50" : ""
                                    }`}
                            >
                                <ServiceBtn label={isSubmitting ? "Submitting..." : "Request a Quote"} />
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
