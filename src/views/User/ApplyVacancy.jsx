import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Error404 } from "../404";
import { TemplateUser } from "../../templates/TemplateUser";
import { Apply } from "../User/Apply";
import LoginBF from "../LoginBF";
import { TemplateNoNav } from "../../templates/TemplateNoNav";

function ApplyVacancy() {
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

	const buttonLogOut = () => {
		return (
			<div className="flex justify-start w-full max-w-4xl">
				<button
					onClick={handleLogout}
					className="btn-animate flex items-center lg:text-3xl text-gray-100"
				>
					<span className="material-symbols-outlined text-2xl lg:text-3xl">
						logout
					</span>
					<span className="text-border-btn text-2xl">Logout</span>{" "}
				</button>

				<style>
					{`
					.text-border-btn:hover {
						-webkit-text-stroke: 1px #fefefe;
						color: transparent;
					}

                    .btn-animate {
                        border: none;
                        color: #ffffff;
                        outline: none;
                        padding: 0 9px 0 1px;
                        position: relative;
                    }

                    .btn-animate::after {
                        border: 0 solid transparent;
                        transition: all 0.5s;
                        content: '';
                        height: 0;
                        position: absolute;
                        width: 0px;
                    }

                    .btn-animate::after {
                        border-bottom: 1px solid #f3f4f6;
                        bottom: -4px;
                        left: 0;
                    }

					.btn-animate:hover::after {
                        width: 100%;
                    }

                    .btn-animate:hover {
                        animation: PULSE 1.25s infinite;
                    }

                    .btn-animate::after {
                        animation: PULSE 1.25s infinite;
                        animation: PULSE_LINE 1.25s infinite;
                    }

                    @-webkit-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @-ms-keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE{
                        0%{color:#ced2d9;}
                        100%{color:#ffffff;}
                    }
                    @keyframes PULSE_LINE{
                        0%{border-bottom:1px solid #ced2d9;
                        100%{border-bottom:1px solid #000000;
                    }
					`}
				</style>
			</div>
		);
	};

	return (
		<div>
			{test ? (
				<TemplateUser logOut={buttonLogOut()} content={<Apply />} />
			) : (
				<TemplateNoNav>
					<LoginBF />
				</TemplateNoNav>
			)}
		</div>
	);
}

export { ApplyVacancy };
