import React from "react";

export default function Icon({ img, alt, ...props }) {
	return <img src={img} alt={alt} {...props} />;
}
