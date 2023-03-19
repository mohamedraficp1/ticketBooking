import React from "react";

const Card = ({ children, className, ...props }) => {
  return <div className={`white-card ${className || ""}`}>{children}</div>;
};

export default Card;
