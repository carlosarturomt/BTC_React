import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { TemplateNoNav } from "../templates/TemplateNoNav";

const LoginBF = () => {
	const auth = getAuth();

	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const onLogin = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				navigate("/logged");
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
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
								<input
									className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
									id="password"
									name="password"
									type="password"
									placeholder="******"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<div className="mb-3 flex flex-wrap content-center">
								<input
									id="remember"
									type="checkbox"
									className="mr-1 checked:bg-purple-700"
								/>
								<label //danone.sharepoint.com/sites/AMERICAS-ITandData
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
								<button className="bx-shadow flex flex-wrap justify-center w-full hover:border-gray-500 px-2 py-1.5 rounded-md hover:bg-[#ffffff3b]">
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
							<a
								href="/signup"
								className="text-xs font-semibold text-gray-300 ml-1 hover:text-gray-100"
							>
								Sign up
							</a>
						</div>
					</div>
				</aside>

				{/* <aside className="w-full flex flex-wrap content-center justify-center rounded-md md:w-1/2 md:rounded-l-none relative">
						<img
							className=" h-full bg-center bg-no-repeat bg-cover rounded-md md:rounded-l-none blur-img"
							src="https://i.pinimg.com/originals/18/f0/37/18f037f6761bbc6ac0682035deab8778.gif"
							// src="https://i.imgur.com/9l1A4OS.jpeg"
						/>
						<img className="fish" src="https://i.pinimg.com/originals/30/48/58/30485866edfa12067101718b823fd37e.gif"/>
						<img className="fish1" src="https://img1.picmix.com/output/stamp/normal/4/9/2/2/1782294_7ddcc.gif"/>
					</aside> */}

				{/* <img
					className="fish"
					src="https://i.pinimg.com/originals/30/48/58/30485866edfa12067101718b823fd37e.gif"
				/> */}
				<div className="bg-gif"></div>
				<div className="bg-fish"></div>
			</section>

			<style>
				{`
					.bx-shadow {
						box-shadow: 0 0 5px #fff;
					}
					.fish {
						z-index: -1;
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

export default LoginBF;
