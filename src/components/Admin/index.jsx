import React, { useState, useEffect } from "react";
import { Template } from "../../templates/Template";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Error404 } from "../../views/404";
import { CreateVacancy } from "./CreateVacancy";

function Admin() {
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
			if (user) {
				const uid = user.uid;
				const email = user.email;
				// console.log("uid:", uid, "email:", email);
			} else {
				// User is signed out
				console.log("User is logged out");
			}
		});
	}, []);

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
		<Template>
			{test ? (
				<CreateVacancy />
			) : (
				<Error404 />
			)}
			<div className="flex justify-end w-full max-w-4xl">
				<button
					onClick={handleLogout}
					className="border border-gray-400 rounded-md px-4 py-1 text-gray-400 hover:text-gray-200 hover:border-gray-200"
				>
					Logout
				</button>
			</div>
		</Template>
	);
}

export { Admin };
