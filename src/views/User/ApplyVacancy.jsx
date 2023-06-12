import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { Apply } from "../User/Apply";
import { Login } from "../Login";
import { TemplateNoNav } from "../../templates/TemplateNoNav";
import { TemplateLogged } from "../../templates/TemplateLogged";

function ApplyVacancy() {
	const [test, setTest] = useState(false);
	const auth = getAuth();

	if (
		useEffect(() => {
			onAuthStateChanged(auth, (user) => {
				if (user) {
					console.log("Welcome", user.email);
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
				<TemplateLogged content={<Apply />} />
			) : (
				<TemplateNoNav>
					<Login />
				</TemplateNoNav>
			)}
		</div>
	);
}

export { ApplyVacancy };
