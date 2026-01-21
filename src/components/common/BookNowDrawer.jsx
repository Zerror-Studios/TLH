import React, { useState } from "react";
import { useBookDrawer } from "@/store/useBookDrawer";
import CustomSelect from "./CustomSelect";
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react";
import ArrowButton from "../Buttons/ArrowButton";
import { toast } from "react-toastify";

const services = [
  "Web Development",
  "UI/UX Design",
  "SEO Optimization",
  "Consultation",
];

const states = [
  "Gujarat",
  "Rajasthan",
  "Uttar Pradesh",
  "Haryana",
  "Telangana",
  "Delhi"
];

const laundryServices = [
  {
    id: "wash-fold",
    title: "Wash & Fold",
    description: "Everyday clothes washed, dried and folded",
    image: "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "wash-iron",
    title: "Wash & Iron",
    description: "Washed and perfectly ironed clothes",
    image: "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "dry-clean",
    title: "Dry Cleaning",
    description: "Premium care for delicate garments",
    image: "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "steam-iron",
    title: "Steam Iron",
    description: "Professional steam ironing service",
    image: "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "wash-fold",
    title: "Wash & Fold",
    description: "Everyday clothes washed, dried and folded",
    image: "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "wash-iron",
    title: "Wash & Iron",
    description: "Washed and perfectly ironed clothes",
    image: "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "dry-clean",
    title: "Dry Cleaning",
    description: "Premium care for delicate garments",
    image: "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "steam-iron",
    title: "Steam Iron",
    description: "Professional steam ironing service",
    image: "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


const BookNowDrawer = () => {
  const { isOpen, closeDrawer } = useBookDrawer();

  const [form, setForm] = useState({
    name: "",
    contact: "",
    service: "",
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBook = () => {
    const { name, contact, service, state, city } = form;

    if (!name || !contact || !service || !state || !city) {
      toast("Please fill all fields");
      return;
    }

    console.log("Booking Data:", form);
    closeDrawer();
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300 z-[998]
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Drawer */}
      <div
        className={`fixed z-[999] bg-[#FFFAF0] shadow-xl transition-transform duration-300
          w-full md:w-[50vw] lg:w-[30vw]
          h-[100dvh] md:h-full
          top-0 right-0
          ${isOpen
            ? "translate-x-0 translate-y-0"
            : "translate-x-full translate-y-full md:translate-y-0"
          }
        `}
      >
        <div className="p-6 lg:p-10 h-full flex flex-col overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className=" text-2xl lg:text-4xl ">Book Now</h1>
            <button
              onClick={closeDrawer}
              className="text-2xl leading-none"
            >
              <RiCloseLine />
            </button>
          </div>

          {/* Form */}
          <div className="space-y-4 flex-1">
            {/* Name */}
            <div>
              <label className="block text-sm  mb-1">
                Full Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border-b outline-none font-medium border-black/30  pb-2 bg-transparent"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm  mb-1">
                Contact Number
              </label>
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Enter contact number"
                className="w-full border-b outline-none font-medium border-black/30  pb-2 bg-transparent"
              />
            </div>

            {/* Service */}
            {/* Service (Card Dropdown – Laundry) */}
            <div className="relative">
              <label className="block text-sm  mb-1">
                Service
              </label>

              {/* Trigger */}
              <button
                type="button"
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    serviceOpen: !prev.serviceOpen,
                  }))
                }
                className="w-full border-b border-black/30  pb-2 bg-[#fffaf0] flex justify-between items-center"
              >
                {form.service ? (
                  <div className="flex gap-3 text-left">
                    <img
                      src={form.service.image}
                      alt={form.service.title}
                      className="w-10 h-10  object-cover"
                    />
                    <div>
                      <p className="text-sm ">
                        {form.service.title}
                      </p>
                      <p className="text-xs ">
                        {form.service.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="opacity-55 font-medium ">
                    Select laundry service
                  </p>
                )}

                {/* Dropdown Arrow */}
                <span
                  className={`ml-2 transition-transform ${form.serviceOpen ? "rotate-180" : ""
                    }`}
                >
                  < RiArrowDownSLine />
                </span>
              </button>

              {/* Dropdown */}
              {form.serviceOpen && (
                <div data-lenis-prevent className="absolute max-h-52 overflow-auto custom_scrollbar mt-1 w-full bg-[#fffaf0] border border-black/30  shadow-lg z-[9999]">
                  {laundryServices.map((item) => (
                    <div
                      key={item.id}
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          service: item,
                          serviceOpen: false,
                        }))
                      }
                      className={`flex gap-3 p-3 cursor-pointer hover:bg-black/5 ${form.service?.id === item.id
                        ? "bg-black/10"
                        : ""
                        }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-10 h-10  object-cover"
                      />
                      <div>
                        <p className="text-sm ">{item.title}</p>
                        <p className="text-xs ">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>


            {/* State */}
            <CustomSelect
              label="State"
              name="state"
              value={form.state}
              options={states}
              placeholder="Select state"
              onChange={handleChange}
            />

            {/* City */}
            <div>
              <label className="block text-sm  mb-1">
                City
              </label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full border-b outline-none font-medium border-black/30  pb-2 bg-transparent"
              />
            </div>
          </div>

          <div
            onClick={handleBook}
            className="">
            <ArrowButton
              label="Book Now"
              variant="dark"
            />
          </div>

          <div className="w-full center text-xs mt-2">
            <p>All Terms & Conditions Apply</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNowDrawer;
