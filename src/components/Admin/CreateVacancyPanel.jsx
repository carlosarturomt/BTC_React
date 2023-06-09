import React, { useState, useEffect } from "react";
import { Template } from "../../templates/Template";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { Error404 } from "../../views/404";
import { Create } from "../../views/Admin/Create";
import { TemplateLogged } from "../../templates/TemplateLogged";

function CreateVacancyPanel() {
	const [test, setTest] = useState(false);
	const auth = getAuth();

	if (
		useEffect(() => {
			onAuthStateChanged(auth, (user) => {
				if (
					user.email == "carlosarturomt@gmail.com" ||
					user.email == "amiranda@btcamericas.com"
				) {
					console.log("Welcome to Create Vacancies Panel :)");
					setTest(true);
				} else {
					setTest(false);
				}
			});
		})
	) {
	}

	return (
		<div>
			{test ? (
				<TemplateLogged content={<Create />} />
			) : (
				<Template>
					<Error404 />
				</Template>
			)}
		</div>
	);
}

export { CreateVacancyPanel };
