import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { CandidateAdmin } from "../../components/Admin/CandidateAdmin";
import { Error404 } from "../404";
import { TemplateLogged } from "../../templates/TemplateLogged";

function Candidates() {
	const [test, setTest] = useState(false);
	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (
				user.email == "carlosarturomt@gmail.com" ||
				user.email == "amiranda@btcamericas.com"
			) {
				console.log(`Welcome '${user.email}' to Candidates Panel 👷`);
				setTest(true);
			} else {
				setTest(false);
				console.log("User is logged out");
			}
		});
	});

	return (
		<>
			{test ? (
				<TemplateLogged>
					<CandidateAdmin />
				</TemplateLogged>
			) : (
				<TemplateLogged>
					<Error404 />
				</TemplateLogged>
			)}
		</>
	);
}

export { Candidates };
