import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { TemplateAdmin } from "../../templates/TemplateAdmin";
import { Template } from "../../templates/Template";
import { CandidateAdmin } from "../../components/Admin/CandidateAdmin";
import { BtnLogOut } from "../../components/Buttons/BtnLogOut";
import { Error404 } from "../404";

function Candidates() {
	const [test, setTest] = useState(false);
	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user.email == "carlosarturomt@gmail.com") {
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
				<TemplateAdmin logOut={<BtnLogOut />} content={<CandidateAdmin />} />
			) : (
				<Template>
					<Error404 />
				</Template>
			)}
		</>
	);
}

export { Candidates };
