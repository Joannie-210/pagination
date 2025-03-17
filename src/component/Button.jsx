import React from "react";

const Button = ({ label, variant, onClick }) => {
  const baseStyle = "px-4 py-2 rounded-lg font-bold transition duration-300";
  const styles = {
    primary: "bg-[#000080] text-white hover:opacity-70 cursor-pointer mr-3 ml-1",
    secondary: "bg-[#FFD700] text-white hover:opacity-90 cursor-pointer",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${styles[variant] || styles.primary}`}>
      {label}
    </button>
  );
};

export default Button;
