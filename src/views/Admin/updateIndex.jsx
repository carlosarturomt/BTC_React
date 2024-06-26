import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { Update } from "../../views/Admin/Update";
import { Error404 } from "../404";
import { TemplateLogged } from "../../templates/TemplateLogged";

function AdminUpdate() {
	const [test, setTest] = useState(false);
	const auth = getAuth();

	if (
		useEffect(() => {
			onAuthStateChanged(auth, (user) => {
				if (
					user.email == "carlosarturomt@gmail.com" ||
					user.email == "amiranda@btcamericas.com"
				) {
					console.log("Panel de 'Update'");
					// console.log("Welcome", user.email);
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
				<TemplateLogged>
					<Update />
				</TemplateLogged>
			) : (
				<TemplateLogged>
					<Error404 />
				</TemplateLogged>
			)}
		</div>
	);
}

export { AdminUpdate };
