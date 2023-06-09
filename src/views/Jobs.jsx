import React from "react";
import { BtnLogOut } from "../components/Buttons/BtnLogOut";
import { TemplateLogged } from "../templates/TemplateLogged";
import { JobsList } from "../components/Jobs/JobsList";

function Jobs() {
	return (
		<>
			<TemplateLogged logOut={<BtnLogOut />} content={<JobsList />} />
		</>
	);
}

export { Jobs };
