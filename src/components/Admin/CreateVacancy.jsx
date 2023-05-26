import React, { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import { InputDate, InputForm, LabelForm } from "../Form/InputForm";

function CreateVacancy() {
	const [vacancyData, setVacancyData] = useState({});

	const changeHandler = (event) => {
		const property = event.target.name;
		const value = event.target.value;
		setVacancyData({ ...vacancyData, [property]: value });
	};

	const database = getDatabase();
	const vacancyRef = ref(database, "/vacancy");

	const saveData = () => {
		return push(vacancyRef, vacancyData);
		// console.log(vacancyData);
		// UPDATE DATA
		// push(child(ref(database), "/vacancy"));
	};

	// ----- T O  E D I T  F O R M
	// useEffect(() => {
	// 	onValue(vacancyRef, (snapshot) => {
	// 		console.log(snapshot.val());
	// 	});
	// }, []);

	const current = new Date();
	const date = `${current.getFullYear()}-${
		current.getMonth() + 1
	}-${current.getDate()}`;
	const changeDate = (event) => {
		const property = event.target.name;
		const value = date;
		setVacancyData({ ...vacancyData, [property]: value });
	};
	return (
		<section className="flex justify-center flex-col items-center pb-28 px-2 w-3/5">
			<form className="w-full max-w-4xl">
				<div className="flex justify-end">
					<InputDate on={changeDate} />
				</div>
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
				<InputForm label="Salario" name="salaryVacancy" on={changeHandler} />
				<InputForm
					label="Jornada Laboral"
					name="typeVacancy"
					on={changeHandler}
				/>
				<InputForm label="Modalidad" name="typeLocation" on={changeHandler} />
				<InputForm label="Ubicación" name="locationPlace" on={changeHandler} />
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
		</section>
	);
}

export { CreateVacancy };
