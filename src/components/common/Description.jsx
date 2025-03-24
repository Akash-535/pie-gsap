import React from "react";

const Description = ({ children, className }) => {
  return (
    <p
      className={`text-base leading-[150%] text-[#191423] font-normal max-lg:text-sm ${className}`}
    >
      {children}
    </p>
  );
};

export default Description;
