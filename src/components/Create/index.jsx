import React, { useState, useEffect } from "react";
import { Template } from "../../templates/Template";
import {
	getDatabase,
	ref,
	onValue,
	child,
	push,
	update,
	set,
} from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Create() {
	const [vacancyData, setVacancyData] = useState({});
	const [test, setTest] = useState(false);

	const changeHandler = (event) => {
		const property = event.target.name;
		const value = event.target.value;
		setVacancyData({ ...vacancyData, [property]: value });
	};

	const database = getDatabase();
	const vacancyRef = ref(database, "/vacancy");

	// useEffect(() => {
	// 	onValue(vacancyRef, (snapshot) => {
	// 		console.log(snapshot.val());
	// 	});
	// }, []);

	const saveData = () => {
		return push(vacancyRef, vacancyData);
		// console.log(vacancyData);
		// UPDATE DATA
		// push(child(ref(database), "/vacancy"));
	};

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

	return (
		<Template>
			{test ? (
				<section className="flex justify-center flex-col items-center pb-28 px-2">
					<form className="w-full max-w-4xl">
						<div className="my-4">
							<label htmlFor="" className="text-gray-300">
								Vacante:
							</label>
							<input
								type="text"
								name="vacancyTitle"
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
								onChange={changeHandler}
							/>
						</div>

						<div className="my-4">
							<label htmlFor="" className="text-gray-200">
								Área:
							</label>
							<input
								type="text"
								name="areaVacancy"
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
								onChange={changeHandler}
							/>
						</div>

						<div className="my-4">
							<label htmlFor="" className="text-gray-200">
								Categoría:
							</label>
							<input
								type="text"
								name="categoryVacancy"
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
								onChange={changeHandler}
							/>
						</div>

						<div className="my-4">
							<label htmlFor="" className="text-gray-200">
								Subcategoría:
							</label>
							<input
								type="text"
								name="subcategoryVacancy"
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
								onChange={changeHandler}
							/>
						</div>

						<div className="my-4">
							<label htmlFor="" className="text-gray-200">
								Salario:
							</label>
							<input
								type="text"
								name="salaryVacancy"
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
								onChange={changeHandler}
							/>
						</div>

						<div className="my-4">
							<label htmlFor="" className="text-gray-200">
								Jornada Laboral:
							</label>
							<input
								type="text"
								name="typeVacancy"
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
								onChange={changeHandler}
							/>
						</div>

						<div className="my-4">
							<label htmlFor="" className="text-gray-200">
								Modalidad:
							</label>
							<input
								type="text"
								name="typeLocation"
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
								onChange={changeHandler}
							/>
						</div>

						<div className="my-4">
							<label htmlFor="" className="text-gray-200">
								Ubicación:
							</label>
							<input
								type="text"
								name="locationPlace"
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
								onChange={changeHandler}
							/>
						</div>

						<div className="my-4">
							<label htmlFor="" className="text-gray-200">
								Educación mínima requerida:
							</label>
							<input
								type="text"
								name="requiredVacancy"
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
								onChange={changeHandler}
							/>
						</div>

						<div className="my-4">
							<label htmlFor="" className="text-gray-200">
								Descripción:
							</label>
							<textarea
								type="text"
								name="content"
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
								onChange={changeHandler}
							/>
						</div>

						<div>
							<button
								className="bg-red-600 py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-red-700"
								type="button"
								onClick={saveData}
							>
								Publicar
							</button>
						</div>
					</form>
					<div className="flex justify-end w-full max-w-4xl">
						<button
							onClick={handleLogout}
							className="border border-gray-400 rounded-md px-4 py-1 text-gray-400 hover:text-gray-200 hover:border-gray-200"
						>
							Logout
						</button>
					</div>
				</section>
			) : (
				<section className="flex flex-col items-center justify-center px-5 mx-auto my-28 py-1 space-y-8 text-center sm:max-w-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="w-40 h-40 text-gray-300 animate-pulse "
					>
						<path
							fill="currentColor"
							d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
						></path>
						<rect
							width="176"
							height="32"
							x="168"
							y="320"
							fill="currentColor"
						></rect>
						<polygon
							fill="currentColor"
							points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
						></polygon>
						<polygon
							fill="currentColor"
							points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
						></polygon>
					</svg>
					{/* <h2 className="mb-8 font-extrabold text-9xl text-gray-300 ">
						<span className="sr-only">Error</span>404
					</h2> */}
					<p className="text-3xl text-gray-300 animate-pulse">
						Looks like this page are currently offline for you
					</p>
					<a
						rel="noopener noreferrer"
						href="/"
						className="px-8 py-3 font-semibold rounded text-gray-400 hover:border hover:rounded-xl hover:text-gray-100 "
					>
						Back to homepage
					</a>
				</section>
			)}
		</Template>
	);
}

export { Create };
