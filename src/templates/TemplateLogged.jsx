import React from "react";
import { NavBarLogged } from "../components/NavBar/NavBarLogged";
import { FooterSimple } from "../components/Footer/FooterSimple";

function TemplateLogged({ content }) {
	return (
		<div className="bg-[rgb(0,12,26)]">
			<NavBarLogged />
			{content}
			<FooterSimple />
		</div>
	);
}

export { TemplateLogged };
