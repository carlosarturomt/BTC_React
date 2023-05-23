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
				navigate("/welcome");
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
			<section className="flex flex-wrap w-full content-center justify-center py-20">
				<article className="flex">
					<aside className="flex flex-wrap content-center justify-center rounded-l-md w-1/2 bg-[#000c1aae]">
						<div className="w-72">
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
										className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
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
										className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
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
									<label
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
									<button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
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

					<aside className="flex flex-wrap content-center justify-center rounded-r-md w-1/2">
						<img
							className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
							src="https://i.imgur.com/9l1A4OS.jpeg"
						/>
					</aside>

					<div className="bg-gif"></div>
				</article>
			</section>

			{/* <section className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
				<article className="py-3 sm:max-w-xl sm:mx-auto">
					<aside className="px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
						<hgroup>
							<h1 className="text-2xl font-semibold">Log In</h1>
						</hgroup>
						<div className="divide-y divide-gray-200">
							<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
								<input
									id="email"
									name="email"
									type="email"
									className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
									placeholder="Email address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<label
									htmlFor="email"
									className="left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
								>
									Email Address
								</label>
								<input
									id="password"
									name="password"
									type="password"
									className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<label
									htmlFor="password"
									className="left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
								>
									Password
								</label>
								<div className="">
									<button
										className="bg-red-500 text-white rounded-md px-2 py-1 hover:bg-red-600"
										type="submit"
										onClick={onLogin}
									>
										Log In
									</button>

									<a
										className="ml-8 text-gray-400 hover:text-gray-600"
										href="/signup"
									>
										Sign Up
									</a>
								</div>
							</div>
						</div>
					</aside>
				</article>
			</section> */}

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
