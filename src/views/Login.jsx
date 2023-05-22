import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
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
			<section className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
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
			</section>
		</TemplateNoNav>
	);
};

export default Login;
