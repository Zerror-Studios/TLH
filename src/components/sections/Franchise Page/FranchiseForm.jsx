import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import ArrowButton from "@/components/Buttons/ArrowButton";
import CustomSelect from "@/components/common/CustomSelect";
import Link from "next/link";
import InputField from "@/components/common/InputField";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger, SplitText);

const FranchiseForm = () => {
  const router = useRouter();
const [isSubmitting, setIsSubmitting] = useState(false);

  const stepRef = useRef(null);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    investment: "",
    profession: "",
    timeline: "",
    locationStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const changeStep = (nextStep) => {
    gsap.to(stepRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.out",
      onComplete: () => {
        setStep(nextStep);
        gsap.fromTo(
          stepRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.35, ease: "power2.out" }
        );
      },
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (isSubmitting) return;

  const {
    name,
    email,
    phone,
    city,
    investment,
    profession,
    timeline,
    locationStatus,
  } = formData;

  // Validation
  if (
    !name ||
    !email ||
    !phone ||
    !city ||
    !investment ||
    !profession ||
    !timeline ||
    !locationStatus
  ) {
    toast.error("Please fill all required fields");
    return;
  }

  const payload = {
    name,
    email,
    phone,
    city,
    investment,
    profession,
    timeline,
    locationStatus,
  };

  try {
    setIsSubmitting(true);

    const res = await fetch("/api/submitFranchiseForm", {
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
      name: "",
      email:"",
      phone: "",
      city: "",
      investment: "",
      profession: "",
      timeline: "",
      locationStatus: "",
    });

    router.push("/franchise/success");
  } catch (err) {
    toast.error(err.message);
  } finally {
    setIsSubmitting(false);
  }
};


  useEffect(() => {
    const ctx = gsap.context(() => {
      const split1 = new SplitText(".form_anim_txt_a", { type: "words" });
      const split2 = new SplitText(".form_anim_txt_b", { type: "words" });
      const split3 = new SplitText(".form_anim_txt_c", { type: "words" });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".form_parent",
          start: "top 60%",
        },
      })
        .from(".form_bg", { backgroundColor: "transparent", duration: 0.3 })
        .from(".input_box", { opacity: 0, stagger: 0.05 }, "<")
        .from(".input_line", { opacity: 0, stagger: 0.05 }, "<")
        .fromTo(
          [split1.words, split2.words, split3.words],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.01 },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="franchise-form" className="form_parent w-full lg:pt-5 mb-20">
      <div className="form_bg w-full center flex-col  px-5 lg:px-0 ">
        <div className=" w-full lg:w-[60%] p-8 lg:p-10 bg-[#F2EDE4] rounded-lg">
          <div className="w-full lg:text-center  ">
            <h1 className=' text-2xl leading-none  lg:text-6xl   lg:whitespace-nowrap  '>Become a TLH <br />  Franchise Partner</h1>
            <p className=' mt-2 lg:mt-4 text-sm leading-tight   lg:text-xl  '>Fill out the form below and our team will reach out within 24 hours</p>
          </div>
          {/* FORM */}
          <div className="w-full center">

            <div className=" w-full lg:w-[60%] mt-10 lg:mt-20 ">
              <form ref={stepRef} className="w-full space-y-10" onSubmit={handleSubmit}>

                {/* STEP 1 */}
                {step === 1 && (
                  <>
                    <InputField
                      label="Full Name"
                      name="name"
                      placeholder="Enter Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Email"
                      name="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <InputField
                      label="Phone Number"
                      name="phone"
                      placeholder="Enter Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                    <InputField
                      label="City of Interest"
                      name="city"
                      placeholder="Enter City"
                      value={formData.city}
                      onChange={handleChange}
                    />

                    <div className="w-full center">

                      <div className="pt-6 w-[50%] lg:w-[25%]" onClick={(e) => {
                        e.preventDefault();
                        changeStep(2);
                      }}>
                        <ArrowButton
                          label="Next"
                          variant="dark"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <>
                    <InputField
                      label="Current Business / Profession"
                      name="profession"
                      placeholder="Enter Profession"
                      value={formData.profession}
                      onChange={handleChange}
                    />

                    <CustomSelect
                      label="Investment Capacity *"
                      name="investment"
                      value={formData.investment}
                      placeholder="Select investment range"
                      options={[
                        "₹1.5Cr - ₹2Cr",
                        "₹2Cr - ₹2.5Cr",
                        "₹2.5Cr+",
                      ]}
                      onChange={handleChange}
                    />

                    <CustomSelect
                      label="Timeline to Start"
                      name="timeline"
                      value={formData.timeline}
                      placeholder="Select timeline"
                      options={["Immediate", "3 Months", "6 Months"]}
                      onChange={handleChange}
                    />

                    <CustomSelect
                      label="Location Status"
                      name="locationStatus"
                      value={formData.locationStatus}
                      placeholder="Select status"
                      options={["Have a location", "Searching"]}
                      onChange={handleChange}
                    />
                    <div className="flex gap-4">
                      <div className="w-full sm:w-[55%]" onClick={(e) => {
                        e.preventDefault();
                        changeStep(1);
                      }}>
                        <ArrowButton
                          label="Previous"
                          variant="dark"
                        />
                      </div>
                     <div
  className={`w-full sm:w-[55%] transition-opacity ${
    isSubmitting ? "pointer-events-none opacity-50" : ""
  }`}
>
  <ArrowButton
    type="submit"
    label={isSubmitting ? "Submitting..." : "Submit"}
    variant="dark"
  />
</div>

                    </div>
                  </>
                )}

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FranchiseForm;
