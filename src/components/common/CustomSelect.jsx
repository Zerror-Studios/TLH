import { RiArrowDownSLine } from "@remixicon/react";
import React, { useEffect, useRef, useState } from "react";


const CustomSelect = ({
  label,
  name,
  value,
  options,
  placeholder = "Select option",
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const handleSelect = (item) => {
    onChange({
      target: { name, value: item },
    });
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      {label && (
        <label className="block text-sm font-medium mb-1">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full border-b border-black/40 px-3 py-2  flex justify-between items-center"
      >
        <span className={value ? "text-black" : "text-black/50"}>
          {value || placeholder}
        </span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          < RiArrowDownSLine  />
        </span>
      </button>

      {open && (
        <div className="absolute mt-1 w-full bg-[#fffaf0] border rounded-md shadow-lg max-h-52 overflow-auto z-[9999]">
          {options.map((item) => (
            <div
              key={item}
              onClick={() => handleSelect(item)}
              className={`px-3 py-2 cursor-pointer hover:bg-black/5 ${
                item === value ? "bg-black/10 font-medium" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
