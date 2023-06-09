import React, { useState } from "react";
import {
	GoogleAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
	getAuth,
} from "firebase/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { TemplateNoNav } from "../templates/TemplateNoNav";

const Login = () => {
	const auth = getAuth();
	const navigate = useNavigate();

	const provider = new GoogleAuthProvider();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const pathname = window.location;
	const path = pathname.toString();

	/**
	 *
	 * @param {Object} e Receive the email to authenticate an user
	 */
	const onLogin = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// console.log(user);
				if (path.substring(path.length - 5) == "login") {
					navigate("../");
				}
				if (
					user.email == "carlosarturomt@gmail.com" ||
					user.email == "amiranda@btcamericas.com"
				) {
					navigate("/logged");
				} else {
					navigate("./");
				}
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
				if (
					user.email == "carlosarturomt@gmail.com" ||
					user.email == "amiranda@btcamericas.com"
				) {
					navigate("/logged");
				}
				if (path.substring(path.length - n) == "login") {
					navigate("../");
				} else {
					navigate("./");
				}
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
			<section className="flex w-full content-center items-center justify-center py-20 md:py-5 h-screen">
				<aside className="px-8 py-4 flex content-center items-center justify-center rounded-3xl bg-[#ffffff29] md:px-28 md:py-12">
					<div className="max-w-72">
						<h1 className="text-xl font-semibold text-gray-100">
							Welcome back
						</h1>
						<small className="text-gray-200">
							Welcome back! Please enter your details
						</small>

						<form className="mt-4 text-gray-200">
							<div className="mb-4">
								<label className="mb-2 block text-xs font-semibold leading-[0]">
									Email
								</label>
								<input
									className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
									id="email"
									name="email"
									type="email"
									placeholder="Email Address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div className="mb-3">
								<label className="mb-2 block text-xs font-semibold leading-[0]">
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

							<div className="mb-3 flex flex-wrap content-center">
								<input
									id="remember"
									type="checkbox"
									className="mr-1 checked:bg-purple-700"
								/>
								<label
									htmlFor="remember"
									className="mr-auto text-xs font-semibold"
								>
									Remember for 30 days
								</label>
								<a
									href="#"
									className="text-xs font-semibold text-gray-400 hover:text-gray-200 ml-1"
								>
									Forgot password?
								</a>
							</div>

							<div className="mb-3">
								<button
									className="mb-1.5 block w-full text-center text-white bg-[#04135aa3] hover:bg-[#04125ae0] px-2 py-1.5 rounded-md"
									type="submit"
									onClick={onLogin}
								>
									Sign in
								</button>
								<button
									className="bx-shadow flex flex-wrap justify-center w-full hover:border-gray-500 px-2 py-1.5 rounded-md hover:bg-[#ffffff3b]"
									type="submit"
									onClick={onSubmitGoogle}
								>
									<img
										className="w-6 mr-2"
										src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
									/>
									Sign in with Google
								</button>
							</div>
						</form>

						<div className="text-center">
							<span className="text-xs text-gray-400 font-semibold">
								Don't have account?
							</span>

							<NavLink
								to="/signup"
								className="text-xs font-semibold text-gray-300 ml-1 hover:text-gray-100"
							>
								Sign up
							</NavLink>
						</div>
					</div>
				</aside>

				<img
					className="fish"
					src="https://img1.picmix.com/output/stamp/normal/0/2/5/9/1479520_aca7c.gif"
				/>

				<div className="bg-gif"></div>
				<div className="bg-fish"></div>
			</section>

			<style>
				{`
					.bx-shadow {
						box-shadow: 0 0 5px #fff;
					}
					.fish {
						z-index: 2;
						position: absolute;
						animation: slide-left 50s infinite;
					}
					@keyframes slide-left {
						from {
							width: 5%;
							z-index: -2;
							left: 0;
							bottom: 0;
							opacity : 0.7;
							filter: blur(3px)
						}
						50% {
							z-index: -1;
							width: 20%;
							bottom: 10%;
							left: 50%;
							opacity: 0.8;
							filter: blur(2px)
						}
						to {
							width: 30%;
							z-index: 1;
							bottom: 80%;
							left: 80%;
							opacity: 0.9;
							filter: blur(1px)
						}
					}

					.fish1 {
						z-index: 2;
						position: absolute;
						transform: scaleX(-1);
						animation: fish 30s infinite;
					}
					@keyframes fish {
						from {
							width: 10%;
							z-index: -2;
							right: 0;
							top: 0;
							opacity : 0.6;
							filter: blur(3px)
						}
						20% {
							z-index: -1;
							width: 15%;
							top: 20%;
							right: 40%;
							opacity: 0.8;
							filter: blur(2px)
						}
						40% {
							z-index: 1;
							width: 15%;
							top: 10%;
							right: 50%;
							opacity: 1;
							filter: blur(1px);
							transform: matrix(0.5, 0.1, 0.5, 1, 10, -2);
						}
						60% {
							z-index: 1;
							width: 20%;
							top: 80%;
							right: 60%;
							opacity: 0.8;
							filter: blur(1px);
						}
						to {
							width: 10%;
							z-index: 1;
							top: 60%;
							right: 100%;
							opacity: 0.6;
							filter: blur(3px);
						}
					}
					.blur-img {
						width: 100%;
						filter: blur(5px);
						opacity: 0.9;
						height: 85vh;
						border: solid #000 5px;
					}
					.bg-gif {
						z-index: -2;
						top: 0;
						left:0;
						position: absolute;
						width: 100%;
						opacity: 0.9;
						height: 100vh;
						filter: blur(10px);
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url('https://i.pinimg.com/originals/18/f0/37/18f037f6761bbc6ac0682035deab8778.gif')
					}
					.bg-fish {
						z-index: -3;
						top: 0;
						left:0;
						position: absolute;
						width: 100%;
						height: 100vh;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url('https://i.pinimg.com/originals/e9/04/15/e904152f727d70e777066bd122c7f2dd.gif')
					}

				`}
			</style>
		</TemplateNoNav>
	);
};

export default Login;
