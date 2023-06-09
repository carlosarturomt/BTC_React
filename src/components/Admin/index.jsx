import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { HomeAdmin } from "../../views/Admin/Home";
import { TemplateLogged } from "../../templates/TemplateLogged";
// import { JobsList } from "../Jobs/JobsList";
import { Header } from "../Header/Header";

function Admin() {
	const [test, setTest] = useState(false);
	const auth = getAuth();

	if (
		useEffect(() => {
			onAuthStateChanged(auth, (user) => {
				if (
					user.email == "carlosarturomt@gmail.com" ||
					user.email == "amiranda@btcamericas.com"
				) {
					console.log("Welcome Charly");
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
				<TemplateLogged content={<HomeAdmin />} />
			) : (
				<TemplateLogged content={<Header />} />
			)}
		</div>
	);
}

export { Admin };
