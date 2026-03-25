import React, { useState } from "react";
import ServiceBtn from '@/components/Buttons/ServiceBtn'
import CustomCheckbox from '@/components/common/CustomCheckbox'
import CustomSelect from '@/components/common/CustomSelect'
import InputField from '@/components/common/InputField'
import { toast } from "react-toastify";

const Index = () => {
    const [form, setForm] = useState({
        fullName: "",
        contact: "",
        email: "",
        reasonForDeletion: "",
        additionalComments: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedDataTypes, setSelectedDataTypes] = useState([]);
    const [isOwnerConfirmed, setIsOwnerConfirmed] = useState(false);

    const dataOptions = [
        "Personal Information",
        "Financial Information",
        "Personal Preferences",
        "All of the above",
    ];

    // INPUT CHANGE
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const normalOptions = dataOptions.filter(
        (item) => item !== "All of the above"
    );

    const toggleDataType = (item) => {
        setSelectedDataTypes((prev) => {
            // ✅ CLICKED ALL OF THE ABOVE
            if (item === "All of the above") {
                if (prev.includes(item)) {
                    return []; // unselect all
                } else {
                    return dataOptions; // select all
                }
            }

            // ✅ CLICKED NORMAL OPTION
            let updated = prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item];

            // remove master checkbox first
            updated = updated.filter((i) => i !== "All of the above");

            // if all normal selected → add master
            if (normalOptions.every((opt) => updated.includes(opt))) {
                updated.push("All of the above");
            }

            return updated;
        });
    };

    // SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.fullName || !form.contact || !form.email) {
            toast.error("Please fill required fields");
            return;
        }

        if (selectedDataTypes.length === 0) {
            toast.error("Please select data type");
            return;
        }

        if (!isOwnerConfirmed) {
            toast.error("Please confirm ownership");
            return;
        }

        try {
            setIsSubmitting(true);

            const res = await fetch("/api/submitDataDeletionForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...form,
                    dataTypes: selectedDataTypes,
                    confirmed: isOwnerConfirmed,
                }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error);

            toast.success("Form submitted successfully ✅");

            setForm({
                fullName: "",
                contact: "",
                email: "",
                reasonForDeletion: "",
                additionalComments: "",
            });

            setSelectedDataTypes([]);
            setIsOwnerConfirmed(false);

            window.location.href = "/";

        } catch (err) {
            toast.error(err.message || "Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="w-full px-5 pt-24 lg:pt-32 lg:text-center">
                <h1 className="text-2xl lg:text-6xl capitalize">Fill the form</h1>
            </div>

            <div className="mt-10 max-w-3xl mx-auto px-5 py-5 lg:py-12">
                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-y-10"
                >
                    {/* NAME */}
                    <div className="flex flex-col gap-3">
                        <p className="uppercase">Full Name *</p>
                        <InputField
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                        />
                    </div>

                    {/* PHONE */}
                    <div className="flex flex-col gap-3">
                        <p className="uppercase">Phone Number *</p>
                        <InputField
                            name="contact"
                            value={form.contact}
                            onChange={handleChange}
                            placeholder="Enter Phone Number"
                        />
                    </div>

                    {/* EMAIL */}
                    <div className="flex flex-col gap-3">
                        <p className="uppercase">Email *</p>
                        <InputField
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                        />
                    </div>

                    {/* MULTI SELECT */}
                    <div className="flex flex-col gap-3">
                        <p className="uppercase">Type of Data to be Deleted *</p>

                        {dataOptions.map((item) => (
                            <CustomCheckbox
                                key={item}
                                label={item}
                                checked={selectedDataTypes.includes(item)}
                                onChange={() => toggleDataType(item)}
                            />
                        ))}
                    </div>

                    {/* REASON */}
                    <div className="flex flex-col gap-3">
                        <p className="uppercase">Reason For Deletion</p>
                        <div className="w-full">
                            <textarea
                                data-lenis-prevent
                                value={form.reasonForDeletion}
                                onChange={handleChange}
                                name="reasonForDeletion"
                                rows={4}
                                placeholder="Enter Additional Comments"
                                className="input_box font-light w-full custom_scrollbar bg-transparent outline-none resize-none text-sm lg:text-base mb-1"
                            />
                            <div className="input_line w-full h-[1px] bg-black/20 rounded-full" />
                        </div>
                    </div>

                    {/* COMMENTS */}
                    <div className="flex flex-col gap-3">
                        <p className="uppercase">Additional Comments</p>
                        <div className="w-full">
                            <textarea
                                data-lenis-prevent
                                name="additionalComments"
                                value={form.additionalComments}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Enter Additional Comments"
                                className="input_box font-light w-full custom_scrollbar bg-transparent outline-none resize-none text-sm lg:text-base mb-1"
                            />
                            <div className="input_line w-full h-[1px] bg-black/20 rounded-full" />
                        </div>
                    </div>

                    {/* CONFIRM */}
                    <div className="flex flex-col gap-3">
                        <p className="uppercase">
                           I confirm that I am the owner of the data being requested for deletion *
                        </p>

                        <CustomCheckbox
                            label="Yes"
                            checked={isOwnerConfirmed}
                            onChange={() =>
                                setIsOwnerConfirmed((prev) => !prev)
                            }
                        />
                    </div>

                    {/* SUBMIT */}
                    <div className="w-full center">

                        <div className={`w-full lg:w-[30%] transition-opacity ${isSubmitting ? "pointer-events-none opacity-50" : ""}`} >
                            <ServiceBtn label={isSubmitting ? "Submitting..." : "Submit"} />
                        </div>

                    </div>
                </form>
            </div>
        </>
    );
};

export default Index;