import React from "react";
import { TemplateLogged } from "../../templates/TemplateLogged";
import { EmployeeChart } from "./TreeChart2";

function OrganizationChart() {
	return (
		<>
			<TemplateLogged content={<EmployeeChart />} />
		</>
	);
}

export { OrganizationChart };
