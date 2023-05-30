import React from "react";
import { FooterAdmin } from "../components/Footer/FooterAdmin";
import { NavBarUser } from "../components/NavBar/NavBarUser";

function TemplateUser({logOut, content}) {
	return (
		// <div className="bg-white dark:bg-slate-800">
		<div className="bg-[rgb(0,12,26)]">
			<NavBarUser>{logOut}</NavBarUser>
			{content}
			<FooterAdmin />
		</div>
	);
}

export { TemplateUser };
