import React from "react";
import { Footer } from "../components/Footer/Footer";
import { NavBarLogged } from "../components/NavBar/NavBarLogged";

function TemplateLogged({ content }) {
	return (
		<div className="bg-[rgb(0,12,26)]">
			<NavBarLogged />
			{content}
			<Footer />
		</div>
	);
}

export { TemplateLogged };
