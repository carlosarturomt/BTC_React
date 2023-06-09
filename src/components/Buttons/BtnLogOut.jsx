import React from "react";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function BtnLogOut() {
	const auth = getAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/");
				console.log("Signed out successfully");
				window.location.reload();
			})
			.catch((error) => {
				// An error happened.
				console.log("error");
			});
	};

	return (
		<div className="flex justify-start w-full max-w-4xl">
			<button
				onClick={handleLogout}
				className="text-border-btn btn-animate flex items-center text-2xl lg:text-3xl text-gray-100"
			>
				Logout
			</button>
		</div>
	);
}

export { BtnLogOut };
