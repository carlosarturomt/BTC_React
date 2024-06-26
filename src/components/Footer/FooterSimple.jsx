import React from "react";
import { NavLink } from "react-router-dom";

function FooterSimple() {
	return (
		<footer className="absolute w-full bottom-0 flex items-center justify-between border-t border-gray-400 py-8 px-8 lg:px-40">
			<p className=" text-gray-50">
				© Business Travel Consulting
				<span className="mx-1">{new Date().getFullYear()}</span>- All rights
				reserved
			</p>
			<NavLink to=":(" className="btn-animate text-gray-50">
				Privacy Policy
			</NavLink>
		</footer>
	);
}

export { FooterSimple };
