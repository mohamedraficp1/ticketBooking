import React from "react";

const OutlinedButton = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn-blank oulined-btn-container f-medium"
    >
      {title}
    </button>
  );
};

export default OutlinedButton;
