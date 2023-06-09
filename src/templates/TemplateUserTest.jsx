import React from "react";
import { FooterAdmin } from "../components/Footer/FooterAdmin";
import { NavBarUserTest } from "../components/NavBar/NavBarUserTest";

function TemplateUserTest({ logOut, content }) {
	return (
		<div className="bg-[rgb(0,12,26)]">
			<NavBarUserTest>{logOut}</NavBarUserTest>
			{content}
			<FooterAdmin />
		</div>
	);
}

export { TemplateUserTest };
