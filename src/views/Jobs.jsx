import React from "react";
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
