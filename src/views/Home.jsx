import React from "react";
import { TemplateLogged } from "../templates/TemplateLogged";
import { Header } from "../components/Header/Header";

function Home() {
	return (
		<>
			<TemplateLogged content={<Header />} />
		</>
	);
}

export { Home };
