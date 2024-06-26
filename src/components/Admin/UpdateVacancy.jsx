import React, { useState } from "react";
import { getDatabase, ref, update } from "firebase/database";
import { InputDate, InputForm, LabelForm } from "../Form/InputForm";

function UpdateVacancy() {
	const [vacancyData, setVacancyData] = useState({});

	const {
		vacancyTitle,
	} = vacancyData;

	const changeHandler = (event) => {
		const property = event.target.name;
		const value = event.target.value;
		setVacancyData({ ...vacancyData, [property]: value });
	};

	const database = getDatabase();

	// Get a key for a new Post.
	const vacancyRefKey = ref(database, `/vacancy/`);

	const updateDataRef = () => {
		// UPDATE DATA
		return update(vacancyRefKey, vacancyData);
	};

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
		<section className="flex justify-center flex-col items-center ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 ">
			<form className="w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]">
				<div className="flex justify-end">
					<InputDate on={changeDate} />
				</div>
				<InputForm label="Vacante" name="vacancyTitle" on={changeHandler} val={vacancyTitle}/>
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
						className="bg-red-600 py-1 px-4 rounded-md font-semibold ml-4 text-gray-100 hover:bg-red-700"
						type="button"
						onClick={updateDataRef}
					>
						Update
					</button>
				</div>
			</form>
		</section>
	);
}

export { UpdateVacancy };
