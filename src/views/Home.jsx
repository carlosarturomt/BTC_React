import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { Template } from "../templates/Template";
import { Header } from "../components/Header/Header";
import { BtnLogOut } from "../components/Buttons/BtnLogOut";
import { TemplateUserTest } from "../templates/TemplateUserTest";

function Home() {
	const [test, setTest] = useState(false);
	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user.email == "carlosarturomt@gmail.com") {
				console.log(`Welcome Admin 😎`);
				setTest(true);
			}
			if (user.email) {
				console.log(`Welcome '${user.email}' to Home 🛖`);
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
				<TemplateUserTest logOut={<BtnLogOut />} content={<Header />} />
			) : (
				<Template>
					<Header />
				</Template>
			)}
		</>
	);
}

export { Home };
