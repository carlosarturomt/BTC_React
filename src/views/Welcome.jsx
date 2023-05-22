import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Template } from "../templates/Template";

const Welcome = () => {
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
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
                const email = user.email;
				console.log("uid:", uid, 'email:', email);

			} else {
				// User is signed out
				console.log("user is logged out");
			}
		});
	}, []);

	return (
		<Template>
			<section className="px-4 py-28 mb-28 text-gray-200">
				<h1 className=" text-center">Welcome</h1>
				<div className="mb-28">
					{/* <h3 className="text-red-200">{email}</h3> */}
				</div>

				<div>
					<button onClick={handleLogout} className="hover:text-red-200">
						Logout
					</button>
				</div>
			</section>
		</Template>
	);
};

export default Welcome;
