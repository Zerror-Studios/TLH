import React from 'react'


const data = [
    {
        id: 1,
        title: "TLH Provides",
        desc: "Our commitment to your success",
        innerData: [
            {
                id: 1,
                img: "https://cdn-icons-png.flaticon.com/512/10710/10710196.png",
                title: "SOP Playbooks",
            }, {
                id: 2,
                img: "https://cdn-icons-png.flaticon.com/512/9720/9720860.png",
                title: "Specialized Training",
            }, {
                id: 3,
                img: "https://cdn-icons-png.flaticon.com/512/839/839860.png",
                title: "Quality Audits",
            }, {
                id: 4,
                img: "https://cdn-icons-png.flaticon.com/512/10450/10450953.png",
                title: "Launch Marketing",
            }, {
                id: 5,
                img: "https://cdn-icons-png.flaticon.com/512/13825/13825279.png",
                title: "Tech Stack",
            }
        ]
    },
    {
        id: 1,
        title: "You Provide",
        desc: "Your role as a partner",
        innerData: [
            {
                id: 1,
                img: "https://cdn-icons-png.flaticon.com/512/2838/2838912.png",
                title: "Prime Location",
            }, {
                id: 2,
                img: "	https://cdn-icons-png.flaticon.com/512/3631/3631962.png",
                title: "Staff Management",
            }, {
                id: 3,
                title: "Service Excellence",
                img: "https://cdn-icons-png.flaticon.com/512/1828/1828970.png",
            }, {
                id: 4,
                img: "https://cdn-icons-png.flaticon.com/512/2755/2755494.png",
                title: " Local Leadership",
            }
        ]
    },
]

const PartnershipGovernance = () => {
    return (
        <>
            <div className=" p-5">
                <div className="w-full lg:text-center">
                    <h1 className=' text-2xl leading-none  lg:text-6xl add_anim_txt_a   '>Partnership Governance</h1>
                    <p className=' mt-2 lg:mt-4 text-sm leading-tight   lg:text-xl add_anim_txt_a '>A transparent division of responsibilities for a successful partnership</p>
                </div>

                <div className="w-full center">

                    <div className="w-full lg:w-[60%] grid mt-6 lg:mt-14 gap-x-5 lg:gap-x-10 gap-y-5 grid-cols-1 lg:grid-cols-2">
                        {data?.map((item, index) => (
                            <div key={index} className=" w-full shrink-0 p-5 lg:p-8 bg-[#F2EDE4] rounded-lg">
                                <div className="">
                                    <h2 className=" text-lg lg:text-2xl leading-none mb-2">{item?.title}</h2>
                                    <p className="text-sm leading-tight lg:text-base">
                                        {item?.desc}
                                    </p>
                                </div>

                                <div className=" mt-7 lg:mt-10 space-y-3 lg:space-y-4">
                                    {
                                        item.innerData?.map((item, index) => (
                                            <div key={index} className="flex border-b border-black/10 last:border-none pb-3 lg:pb-4 last:pb-0 items-center gap-4">
                                                <div className="size-10 shrink-0 bg-[#FFFAF0] rounded-lg center">
                                                    <img
                                                        className="w-[55%] h-[55%] object-contain"
                                                        src={item?.img}
                                                        alt="Visibility"
                                                    />
                                                </div>
                                                <div>
                                                    <p className=" text-sm lg:text-base leading-none">{item?.title}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnershipGovernance