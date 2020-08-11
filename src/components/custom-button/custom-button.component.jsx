import React from "react";
import "./custom-button.style.scss";

export default function Button({ children, isgoogle, ...otherProps }) {
  return (
    <button
      className={`${isgoogle ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
