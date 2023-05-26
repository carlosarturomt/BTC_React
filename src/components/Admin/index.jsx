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
import { InputForm, LabelForm } from "../Form/InputForm";
import { Error404 } from "../../views/404";

function Admin() {
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
						<InputForm
							label="Fecha de Publicación"
							name="dateVacancy"
							on={changeHandler}
						/>
						<InputForm label="Vacante" name="vacancyTitle" on={changeHandler} />
						<InputForm label="Área" name="areaVacancy" on={changeHandler} />
						<InputForm
							label="Categoría"
							name="categoryVacancy"
							on={changeHandler}
						/>
						<InputForm
							label="Subcategoría"
							name="subcategoryVacancy"
							on={changeHandler}
						/>
						<InputForm
							label="Salario"
							name="salaryVacancy"
							on={changeHandler}
						/>
						<InputForm
							label="Jornada Laboral"
							name="typeVacancy"
							on={changeHandler}
						/>
						<InputForm
							label="Modalidad"
							name="typeLocation"
							on={changeHandler}
						/>
						<InputForm
							label="Ubicación"
							name="locationPlace"
							on={changeHandler}
						/>
						<InputForm
							label="Educación mínima requerida"
							name="requiredVacancy"
							on={changeHandler}
						/>
						<LabelForm label="Descripción" name="content" on={changeHandler} />
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
					{/* (<CreateVacancy>{ function active() {console.log('666')} }</CreateVacancy>)) */}
				</section>
			) : (
				<Error404 />
			)}
		</Template>
	);
}

export { Admin };
