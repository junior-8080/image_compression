import React from "react";

export default function Button({ children, kind, rounded, ...props }) {
  const getKind = () => {
    switch (kind) {
      case "primary":
        return "btn-primary";
      case "secondary":
        return "bg-indigo-600 text-white hover:bg-indigo-700";
      case "tertiary":
        return "btn-tertiary";
      case "light":
        return "btn-light";
      case "gradient":
        return "btn-gradient";
      case "light-gradient":
        return "btn-light-gradient";
      default:
        return "btn-ghost";
    }
  };
  return (
    <button
      {...props}
      className={`btn ${getKind()} ${rounded ? "btn-rounded" : ""} ${
        props.className
      }`}
    >
      {children}
    </button>
  );
}
