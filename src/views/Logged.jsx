import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { TemplateLogged } from "../templates/TemplateLogged";
import { HomeAdmin } from "./Admin/Home";
import { Header } from "../components/Header/Header";

function Logged() {
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
		<>
			{test ? (
				<TemplateLogged content={<HomeAdmin />} />
			) : (
				<TemplateLogged content={<Header />} />
			)}
		</>
	);
}

export { Logged };
