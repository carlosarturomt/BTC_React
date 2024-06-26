import React from "react";
import { NavBarLogged } from "../components/NavBar/NavBarLogged";
import { FooterSimple } from "../components/Footer/FooterSimple";

function TemplateLogged(props) {
	return (
		<div className="relative min-h-[100vh] bg-[rgb(0,12,26)]">
			<NavBarLogged />
			{props.children}
			<FooterSimple />
		</div>
	);
}

export { TemplateLogged };
