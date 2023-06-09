import React from "react";
import { FooterAdmin } from "../components/Footer/FooterAdmin";
import { NavBarLogged } from "../components/NavBar/NavBarLogged";

function TemplateLogged({ content }) {
	return (
		<div className="bg-[rgb(0,12,26)]">
			<NavBarLogged />
			{content}
			<FooterAdmin />
		</div>
	);
}

export { TemplateLogged };
