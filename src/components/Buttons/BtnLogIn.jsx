import React from "react";
import { NavLink } from "react-router-dom";

function BtnLogIn() {
	return (
		<>
			<NavLink
				to="/login"
				className="text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"
			>
				Login
			</NavLink>
			<NavLink
				to="/signup"
				className="text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"
			>
				Sign Up
			</NavLink>
		</>
	);
}

export { BtnLogIn };
