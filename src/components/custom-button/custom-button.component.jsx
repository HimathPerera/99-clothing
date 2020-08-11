import React from "react";
import "./custom-button.style.scss";

export default function Button({ children, ...otherProps }) {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
}
