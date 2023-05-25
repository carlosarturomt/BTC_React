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
// import { InputForm } from "../Form/InputForm";

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

	useEffect(() => {
		onValue(vacancyRef, (snapshot) => {
			console.log(snapshot.val());
		});
	}, []);

	const saveData = () => {
		return push(vacancyRef, vacancyData);
		// UPDATE DATA
		// push(child(ref(database), "/vacancy"));
	};

	//
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
				console.log("uid:", uid, "email:", email);
			} else {
				// User is signed out
				console.log("user is logged out");
			}
		});
	}, []);

	// if (
	// 	useEffect(() => {
	// 		onAuthStateChanged(auth, (user) => {
	// 			if (user) {
	// 				console.log("Welcome", user.email);
	// 				setTest(true)
	// 			} else {
	// 				console.log("El usuario no está Logeado :(");
	// 				setTest(false)
	// 			}
	// 		});
	// 	})
	// ){}

	return (
		<Template>
			<section className="flex justify-center flex-col items-center pb-28 px-2">
				<form className="w-full max-w-4xl">

					{/* <InputForm label='Fecha de Publicación' name="datePost" on={changeHandle} /> */}

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
		</Template>
	);
}

export { Create };
