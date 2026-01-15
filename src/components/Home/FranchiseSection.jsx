import React from 'react'
import ServiceBtn from '../Buttons/ServiceBtn'
import Link from 'next/link'

const FranchiseSection = () => {
    return (
        <div>
            <section className="w-full py-16 lg:py-24 px-6">
                <div className="max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-8">

                        <div className="space-y-3">
                            <h1 className="text-2xl lg:text-6xl font-semibold tracking-tight ">
                                Become a TLH Franchise Partner
                            </h1>

                            <p className=" text-sm  lg:text-xl leading-tight  mt-2 lg:mt-4  ex_animate_txt_c">
                                Own a Recession-Resistant Asset.
                            </p>
                        </div>

                        <p className="text-sm lg:text-base welc_animate_txt_a">
                            Most laundry businesses focus on cleaning.
                            <span className="font-medium "> We focus on cleaning and unit economics.</span>
                            <br />
                            With a ~6 month operational breakeven and a
                            <span className="font-medium"> 14% target ROI</span>,
                            TLH is built for the disciplined investor.
                        </p>

                        {/* PROOF */}
                        <div className="flex flex-wrap gap-3 lg:pt-4">
                            {[
                                "60,000+ customers served",
                                "Zero inventory risk",
                                "Immediate cash flow",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="px-5 py-3 border border-black/20 rounded-full text-sm font-medium"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="lg:w-[45%] lg:mt-20">
                            <Link href={"/franchise"} scroll={false} className="w-1/2 mt-20">
                                <ServiceBtn label="View Partnership Model" /></Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL (OPTIONAL) */}
                    <div className="hidden lg:flex justify-center">
                        <div className="w-full h-[70vh] overflow-hidden rounded-xl bg-gradient-to-br from-[#EAEAEA] to-[#DADADA] flex items-center justify-center">
                           <img className='cover' src="/images/home/NZ7_1907.webp" alt="" />
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default FranchiseSection