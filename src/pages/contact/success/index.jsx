const steps = [
    {
        title: "Request Review",
        time: "Within 24 Hours",
        description:
            "Our team reviews your submission, service requirement, and location details to ensure we route it to the right specialist.",
        icon: "ri-shield-check-line",
    },
    {
        title: "Confirmation Call",
        time: "Day 1–2",
        description:
            "A quick call or message to confirm your requirements, preferred service, and answer any immediate questions.",
        icon: "ri-phone-line",
    },
    {
        title: "Pricing & Plan Sharing",
        time: "Day 2–3",
        description:
            "We share a clear service plan with pricing, turnaround time, and any special handling required for your items.",
        icon: "ri-line-chart-line",
    },
    {
        title: "Service Scheduling",
        time: "Day 3–5",
        description:
            "Once approved, we schedule pickup or studio visit and initiate the service as per your convenience.",
        icon: "ri-calendar-check-line",
    },
];

const ContactFormSuccess = () => {
    return (
        <section className="w-full  text-black mb-20">
            <div className="max-w-5xl pt-24 lg:pt-32 mx-auto px-5">
                {/* Header */}
                <div className="lg:text-center mb-6 lg:mb-16">
                    <h1 className="text-2xl leading-none lg:text-6xl lg:whitespace-nowrap">
                        Your Request Has Been Received
                    </h1>

                    <p className="mt-2 lg:mt-4 text-sm leading-tight lg:text-xl">
                        Thank you for reaching out. Here’s what will happen next over the
                        <span className="font-medium"> next few days</span>.
                    </p>
                </div>


                {/* Timeline */}
                <div className="relative">

                    <div className="space-y-5">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex gap-6 items-start md:items-center"
                            >


                                {/* Content */}
                                <div className=" border border-black/40 rounded-lg p-3 lg:p-6 w-full">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                        <div className="flex w-full gap-x-5 ">
                                            <p> {index + 1}</p>
                                            <div className="w-full ">
                                                <div className="w-full flex justify-between">
                                                    <h2 className=" w-[60%] text-lg lg:text-2xl leading-none mb-2">
                                                        {step.title}
                                                    </h2>
                                                    <span className="text-xs  flex justify-end leading-none lg:text-base">
                                                        {step.time}
                                                    </span>
                                                </div>
                                                <p className="text-sm leading-tight lg:text-base">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactFormSuccess;
