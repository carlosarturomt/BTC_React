import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { NavBarTest } from "./NavBarTest";
import { BtnLogOut } from "../Buttons/BtnLogOut";
import { BtnLogIn } from "../Buttons/BtnLogIn";
import { NavLink } from "react-router-dom";

function NavBarLogged() {
	const [test, setTest] = useState(false);
	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user.email) {
				setTest(true);
			} else {
				setTest(false);
			}
		});
	});

	return (
		<>
			{test ? (
				<NavBarTest>
					{
						<>
							<NavLink
								to="/logged"
								className="flex items-center text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"
							>
								Account
							</NavLink>
							<BtnLogOut />
						</>
					}
				</NavBarTest>
			) : (
				<NavBarTest>{<BtnLogIn />}</NavBarTest>
			)}
		</>
	);
}
export { NavBarLogged };
