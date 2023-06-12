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
				className="text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"
			>
				Logout
			</button>
		</div>
	);
}

export { BtnLogOut };
