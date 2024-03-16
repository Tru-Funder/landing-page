import React from "react";

const Button = (props) => {
  return (
    <button
      //   className="bg-[#008905]  text-white font-[Poppins] py-2 px-6 rounded-[12px] md:ml-8
      // duration-500"

      className={` font-[Poppins] py-2 px-6 rounded-[12px]  duration-500 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
