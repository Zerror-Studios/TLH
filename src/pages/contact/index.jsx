import ArrowButton from "@/components/Buttons/ArrowButton"
import ServiceBtn from "@/components/Buttons/ServiceBtn"
import { RiFacebookLine, RiGithubLine, RiInstagramLine, RiYoutubeLine } from "@remixicon/react"

export default function ContactPage() {
    return (

        <>
            <div className="w-full pb-10 lg:pb-20 ">
                <div className="w-full pt-24  lg:pt-32 px-5 lg:px-24">
                    <h1 className=" text-2xl lg:text-6xl leading-none welc_animate_txt   ">Contact Us</h1>
                    <p className="text-sm lg:text-xl leading-none mt-1 welc_animate_txt">
                        Have something in mind? Let’s talk.
                    </p>
                </div>
                <div className="w-full flex flex-col-reverse lg:flex-row gap-y-10 mt-14 px-5 lg:px-24 lg:items-stretch">
                    <div className=" w-full lg:w-1/2 flex flex-col gap-y-10   lg:justify-between">
                        <div className=" text-sm lg:text-xl font-thin  space-y-2 ">
                            <p>email@example.com</p>
                            <p>(555) 555-5555</p>
                            <p>123 Demo Street <br />
                                New York, NY 12345
                            </p>
                        </div>
                        <div className=" flex gap-x-5 items-center">
                            <div className=" size-12 lg:size-14 hover:bg-[#0e1111] hover:text-[#fffaf0] cursor-pointer center rounded-full border border-[#0e1111] transition-all duration-300">
                                <RiYoutubeLine />
                            </div>
                            <div className=" size-12 lg:size-14 hover:bg-[#0e1111] hover:text-[#fffaf0] cursor-pointer center rounded-full border border-[#0e1111] transition-all duration-300">
                                <RiInstagramLine />
                            </div>
                            <div className=" size-12 lg:size-14 hover:bg-[#0e1111] hover:text-[#fffaf0] cursor-pointer center rounded-full border border-[#0e1111] transition-all duration-300">
                                <RiFacebookLine />
                            </div>
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
