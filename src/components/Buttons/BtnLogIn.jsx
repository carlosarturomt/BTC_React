import React from "react";
import { NavLink } from "react-router-dom";

function BtnLogIn() {
	return (
		<>
			<NavLink
				to="/login"
				className="flex items-center text-2xl lg:my-1 lg:text-3xl "
			>
				Login
			</NavLink>
			<NavLink
				to="/signup"
				className="flex items-center text-2xl lg:my-1 lg:text-3xl "
			>
				Sign Up
			</NavLink>
		</>
	);
}

export { BtnLogIn };
