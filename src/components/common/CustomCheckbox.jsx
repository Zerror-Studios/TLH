import { RiCheckLine } from "@remixicon/react";
import React, { useState } from "react";

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center gap-x-2 cursor-pointer select-none">
      
      {/* Hidden Native Checkbox (Accessibility) */}
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
      />

      {/* Custom UI */}
      <div
        className={`size-3 border flex items-center justify-center transition
        ${checked ? "bg-black border-black" : " border"}`}
      >
        {checked && (
          <RiCheckLine color="white"/>
        )}
      </div>

      <span>{label}</span>
    </label>
  );
};

export default CustomCheckbox;