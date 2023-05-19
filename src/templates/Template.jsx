import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";

function Template( props ) {
	return (
		<div className="bg-[#000c1a]">
			<NavBar />
				{props.children}
			<Footer />
		</div>
	);
}

export { Template };
