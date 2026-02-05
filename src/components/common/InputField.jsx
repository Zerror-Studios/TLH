import React from 'react'

const InputField = ({ label, name, value, onChange, placeholder }) => (
    <div className="w-full">
        <label className="block text-sm mb-1 font-medium">
            {label}
        </label>
        <input
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="input_box font-light w-full bg-transparent outline-none text-sm lg:text-base mb-1 placeholder:text-stone-400"
        />
        <div className="input_line w-full h-[1px] bg-black/20 rounded-full" />
    </div>
);

export default InputField