import React, { useState } from "react";
import {
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	getAuth,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { TemplateNoNav } from "../templates/TemplateNoNav";

function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	const navigate = useNavigate();

	/**
	 *
	 * @param {Object} e Receive the data and create an new user to authenticate after in '/login'
	 */
	const onSubmit = async (e) => {
		e.preventDefault();

		await createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				navigate("/login");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	const onSubmitGoogle = async (e) => {
		e.preventDefault();

		await signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// IdP data available using getAdditionalUserInfo(result)
				// ...
				navigate("/logged");
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};

	const togglePassword = () => {
		const pass = document.getElementById("password");
		if (pass.type == "password") {
			pass.type = "text";
			document.getElementById("eye").innerHTML = "visibility_off";
		} else {
			pass.type = "password";
			document.getElementById("eye").innerHTML = "visibility";
		}
	};

	return (
		<TemplateNoNav>
			<section className="flex w-full content-center justify-center py-20 md:py-5">
				<article className="w-full flex flex-wrap-reverse justify-center items-center px-4 md:max-w-5xl md:flex-wrap">
					<aside className="w-full flex content-center py-8 px-2 my-4 items-center justify-center rounded-md md:w-1/2 bg-[#000c1aae] md:h-full md:rounded-r-none">
						<div className="max-w-72">
							<h1 className="text-xl font-semibold text-gray-100">Sign Up</h1>
							<small className="text-gray-200">Create a BTC Account</small>

							<form className="mt-4 text-gray-200">
								<div className="mb-3">
									<label className="mb-2 block text-xs font-semibold">
										Email
									</label>
									<input
										className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
										id="email"
										name="email"
										type="email"
										placeholder="name@example.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>

								<div className="mb-3">
									<label className="mb-2 block text-xs font-semibold">
										Password
									</label>
									<div className="flex items-center w-full rounded-md border-0 focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]">
										<input
											className="w-full bg-transparent focus:bg-transparent focus:outline-none"
											id="password"
											name="password"
											type="password"
											placeholder="******"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
										<a
											onClick={togglePassword}
											className="cursor-pointer flex items-center"
										>
											<span className="material-symbols-outlined" id="eye">
												visibility
											</span>
										</a>
									</div>
								</div>

								<div className="mb-3">
									<button
										className="mb-1.5 block w-full text-center text-white bg-red-600 hover:bg-red-700 px-2 py-1.5 rounded-md"
										type="submit"
										onClick={onSubmit}
									>
										Sign Up
									</button>
									<button
										className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md hover:bg-[#ffffff3b]"
										type="submit"
										onClick={onSubmitGoogle}
									>
										<img
											className="w-6 mr-2"
											src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
										/>
										Sign Up with Google
									</button>
								</div>
							</form>
						</div>
					</aside>

					<aside className="w-full flex flex-wrap content-center justify-center rounded-md md:w-1/2 md:rounded-l-none relative">
						<img
							className=" h-full bg-center bg-no-repeat bg-cover rounded-md md:rounded-l-none"
							// className=" h-full bg-center bg-no-repeat bg-cover rounded-md md:rounded-l-none blur-img"
							// src="https://i.pinimg.com/originals/18/f0/37/18f037f6761bbc6ac0682035deab8778.gif"
							// src="https://i.imgur.com/9l1A4OS.jpeg"
							src="https://dummyimage.com/496x661/4f4f4f/ffffff.jpg"
						/>
						{/* <img
							className="fish"
							src="https://i.pinimg.com/originals/30/48/58/30485866edfa12067101718b823fd37e.gif"
						/>
						<img
							className="fish1"
							src="https://img1.picmix.com/output/stamp/normal/4/9/2/2/1782294_7ddcc.gif"
						/> */}
					</aside>

					<div className="bg-gif"></div>
				</article>
			</section>

			<style>
				{`
					#password {
						outline: none;
						background: transparent;
					}
					.fish {
						position: absolute;
						bottom: 0;
					}
					.fish1 {
						position: absolute;
						top: 5%;
						left: -5%;
						width: 40%;
					}
					.blur-img {
						width: 100%;
						filter: blur(5px);
						opacity: 0.9;
						height: 85vh;
						border: solid #000 5px;
					}
					.bg-gif {
						z-index: -1;
						top: 0;
						left:0;
						position: absolute;
						width: 100%;
						height: 100vh;
						filter: blur(10px);
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url('https://i.gifer.com/ODz.gif')
					}
				`}
			</style>
		</TemplateNoNav>
	);
}

export { Signup };
