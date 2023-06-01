import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { TemplateAdmin } from "../../templates/TemplateAdmin";
import { Template } from "../../templates/Template";
import { Error404 } from "../404";
import { CandidateAdmin } from "../../components/Admin/CandidateAdmin";
import BtnLogOut from "../../components/Buttons/BtnLogOut";

function Candidates() {
	const [test, setTest] = useState(false);
	const auth = getAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/");
				console.log("Signed out successfully");
			})
			.catch((error) => {
				// An error happened.
				console.log("error");
			});
	};

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
		<div>
			{test ? (
				<TemplateAdmin logOut={<BtnLogOut>{handleLogout}</BtnLogOut>} content={<CandidateAdmin />} />
			) : (
				<Template>
					<Error404 />
				</Template>
			)}
		</div>
	);
}

export { Candidates };
