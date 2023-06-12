import React from "react";
import { BtnLogOut } from "../components/Buttons/BtnLogOut";
import { TemplateLogged } from "../templates/TemplateLogged";
import { JobsList } from "../components/Jobs/JobsList";

function Jobs() {
	return (
		<>
			<TemplateLogged content={<JobsList />} />
		</>
	);
}

export { Jobs };
