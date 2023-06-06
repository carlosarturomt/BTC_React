import React from "react";
import { NavLink } from "react-router-dom";

function Logo({ image, addClass }) {
	return (
		<NavLink to="/" className={`w-full max-w-[130px] max-h-[80px] ${addClass}`}>
			<img src={image} alt="Logo BTC" />
		</NavLink>
	);
}

export { Logo };
