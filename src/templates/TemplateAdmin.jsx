import React from "react";
import { FooterAdmin } from "../components/Footer/FooterAdmin";
import { NavBarAdmin } from "../components/NavBar/NavBarAdmin";

function TemplateAdmin({logOut, content}) {
	return (
		<div className="bg-[rgb(0,12,26)]">
			<NavBarAdmin>{logOut}</NavBarAdmin>
			{content}
			<FooterAdmin />
		</div>
	);
}

export { TemplateAdmin };
