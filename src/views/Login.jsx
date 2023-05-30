import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { TemplateNoNav } from "../templates/TemplateNoNav";

const Login = () => {
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
			})
	}

	return (
		<TemplateNoNav>
			<section className="flex w-full content-center justify-center py-20 md:py-5">
				<article className="w-full flex flex-wrap-reverse justify-center items-center px-4 md:max-w-5xl md:flex-wrap">
					<aside className="w-full flex content-center py-8 px-2 my-4 items-center justify-center rounded-md md:w-1/2 bg-[#000c1aae] md:h-full md:rounded-r-none">
						<div className="max-w-72">
							<h1 className="text-xl font-semibold text-gray-100">
								Welcome back
							</h1>
							<small className="text-gray-200">
								Welcome back! Please enter your details
							</small>

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
										placeholder="Email Address"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>

								<div className="mb-3">
									<label className="mb-2 block text-xs font-semibold">
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
									<label//danone.sharepoint.com/sites/AMERICAS-ITandData
										htmlFor="remember"
										className="mr-auto text-xs font-semibold"
									>
										Remember for 30 days
									</label>
									<a href="#" className="text-xs font-semibold text-gray-400 hover:text-gray-200">
										Forgot password?
									</a>
								</div>

								<div className="mb-3">
									<button className="mb-1.5 block w-full text-center text-white bg-red-600 hover:bg-red-700 px-2 py-1.5 rounded-md" type="submit" onClick={onLogin}>
										Sign in
									</button>
									<button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md hover:bg-[#ffffff3b]">
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
								<a href="/signup" className="text-xs font-semibold text-gray-300 ml-1 hover:text-gray-100">
									Sign up
								</a>
							</div>
						</div>
					</aside>

					<aside className="w-full flex flex-wrap content-center justify-center rounded-md md:w-1/2 md:rounded-l-none">
						<img
							className=" h-full bg-center bg-no-repeat bg-cover rounded-md md:rounded-l-none"
							src="https://i.imgur.com/9l1A4OS.jpeg"
						/>
					</aside>

					<div className="bg-gif"></div>
				</article>
			</section>

			<style>
				{`
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
};

export default Login;
