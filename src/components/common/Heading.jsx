import React from "react";

const Heading = ({ children, className = "" }) => {
  return (
    <h2
      className={`text-[26px] font-semibold leading-[130%] text-[#191423] max-lg:text-xl ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
