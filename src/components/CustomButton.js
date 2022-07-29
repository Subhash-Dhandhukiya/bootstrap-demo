import React from "react";

const CustomButton = ({ title, onClick }) => {
  return (
    <button type="button" onClick={onClick} class="button">
      {title}
    </button>
  );
};

export default CustomButton;
