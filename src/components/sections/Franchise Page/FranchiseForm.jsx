import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import ArrowButton from "@/components/Buttons/ArrowButton";
import CustomSelect from "@/components/common/CustomSelect";

gsap.registerPlugin(ScrollTrigger, SplitText);

const FranchiseForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
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
    <div id="franchise-form" className="form_parent">
      <div className="w-full px-5 lg:px-24 mb-20">
        <div className="form_bg w-full rounded-xl bg-black/5 p-6 md:p-10 lg:p-20 flex flex-col md:flex-row gap-12">

          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="form_anim_txt_a text-3xl lg:text-6xl leading-none">
              Let’s work <br /> together
            </h1>

            <p className="form_anim_txt_b text-sm lg:text-xl lg:w-[80%]">
              This short qualification form helps us understand your readiness
              to partner and scale together.
            </p>

            <p className="form_anim_txt_c text-sm opacity-80">
              info@tlhindia.in
            </p>

            <div className="text-sm mt-2 opacity-70">
              Step {step} of 2
            </div>
          </div>

          {/* FORM */}
          <div className="w-full md:w-1/2">
            <form className="w-full space-y-6">

              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <Field
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <Field
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <Field
                    label="City of Interest"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />

                  <div className="pt-6 w-full sm:w-[55%]" onClick={(e) => {
                        e.preventDefault();
                        setStep(2);
                      }}>
                    <ArrowButton
                      label="Continue"
                      variant="dark"
                    />
                  </div>
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
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

                  <Field
                    label="Current Business / Profession"
                    name="profession"
                    value={formData.profession}
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

                  <div className="pt-6 w-full  flex gap-4">
                   
                
                  </div>
                  <div className="flex gap-4">
                     <div className="w-full sm:w-[55%]" onClick={(e) => {
                        setStep(1);
                      }}>
                     <ArrowButton
                      label="Previous Step"
                      variant="dark"
                    />
                  </div>
                   <div className="w-full sm:w-[55%]" >
                    <ArrowButton label="Submit Application" variant="dark"/>
                  </div>
                  </div>
                </>
              )}

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- REUSABLE FIELD ---------------- */

const Field = ({ label, name, value, onChange }) => (
  <div className="w-full">
    <label className="block text-sm mb-1 font-medium">
      {label}
    </label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="input_box w-full bg-transparent outline-none text-base lg:text-lg mb-2"
    />
    <div className="input_line w-full h-[1px] bg-black/40 rounded-full" />
  </div>
);

export default FranchiseForm;
