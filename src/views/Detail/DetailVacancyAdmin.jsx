import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, onValue, update } from "firebase/database";
import { InputForm, LabelForm } from "../../components/Form/InputForm";

function DetailVacancyAdmin() {
	const [vacancyData, setVacancyData] = useState({});
	const { id } = useParams();
	const database = getDatabase();
	const vacancyRef = ref(database, `/vacancy/${id}`);

	const {
		dateVacancy,
		vacancyTitle,
		typeVacancy,
		areaVacancy,
		locationPlace,
		typeLocation,
		content,
		salaryVacancy,
		categoryVacancy,
		subcategoryVacancy,
		requiredVacancy,
	} = vacancyData;

	const current = new Date();
	const date = `${current.getFullYear()}-${
		current.getMonth() + 1
	}-${current.getDate()}`;
	const date_1 = new Date(date);
	const date_2 = new Date(dateVacancy);
	const day_as_milliseconds = 86400000;
	const diff_in_milliseconds = date_1 - date_2;
	const diff_in_days = diff_in_milliseconds / day_as_milliseconds;

	useEffect(() => {
		onValue(vacancyRef, (snapshot) => {
			setVacancyData(snapshot.val());
		});
	}, []);

	/**
	 *
	 * @param {Object} event Re write the data of the Date in the Vacancy with UseState()
	 */
	const changeDate = (event) => {
		const property = event.target.name;
		const value = new Date(event.target.value);
		setVacancyData({ ...vacancyData, [property]: value });
	};

	/**
	 *
	 * @param {Object} event Re write All data of the Vacancy with UseState()
	 */
	const changeHandler = (event) => {
		const property = event.target.name;
		const value = event.target.value;
		setVacancyData({ ...vacancyData, [property]: value });
	};

	/**
	 *
	 * @returns Update the Data in the Reference og FireBase
	 */
	const updateDataRef = () => {
		alert("Actualizado");
		return update(vacancyRef, vacancyData);
	};

	return (
		<main className="my-2 flex items-start md:px-12 flex-wrap justify-center w-full max-w-7xl mx-[auto]">
			<section className="flex justify-center flex-col items-center ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 mb-8">
				<form className="w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]">
					<div className="flex justify-end items-center">
						<label className="text-gray-300 mx-2">Fecha:</label>
						<input
							type="date"
							name="dateVacancy"
							onChange={changeDate}
							className="rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"
						/>
					</div>
					<InputForm
						label="Vacante"
						name="vacancyTitle"
						val={vacancyTitle}
						on={changeHandler}
					/>
					<InputForm
						label="Área"
						name="areaVacancy"
						val={areaVacancy}
						on={changeHandler}
					/>
					<InputForm
						label="Categoría"
						name="categoryVacancy"
						val={categoryVacancy}
						on={changeHandler}
					/>
					<InputForm
						label="Subcategoría"
						name="subcategoryVacancy"
						val={subcategoryVacancy}
						on={changeHandler}
					/>
					<InputForm
						label="Salario"
						name="salaryVacancy"
						val={salaryVacancy}
						on={changeHandler}
					/>
					<InputForm
						label="Jornada Laboral"
						name="typeVacancy"
						val={typeVacancy}
						on={changeHandler}
					/>
					<InputForm
						label="Modalidad"
						name="typeLocation"
						val={typeLocation}
						on={changeHandler}
					/>
					<InputForm
						label="Ubicación"
						name="locationPlace"
						val={locationPlace}
						on={changeHandler}
					/>
					<InputForm
						label="Educación mínima requerida"
						name="requiredVacancy"
						val={requiredVacancy}
						on={changeHandler}
					/>
					<LabelForm
						label="Descripción"
						name="content"
						val={content}
						on={changeHandler}
					/>
				</form>
			</section>

			<div className="w-[95%] ml-auto mr-auto md:w-2/4 lg:w-2/5">
				<section className="flex justify-center flex-col items-center mb-8">
					<aside className="bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md">
						<header className="pb-4 w-full border-b-2 border-[#ffffff21]">
							<h1 className="font-bold text-2xl flex justify-between text-gray-100">
								{vacancyTitle}
								<span className="text-slate-500 text-sm font-light">
									{dateVacancy == date
										? "Hoy"
										: `Hace ${Math.trunc(diff_in_days)}  días`}
								</span>
							</h1>
							<p className="font-bold text-gray-200">{salaryVacancy}</p>

							<span className="text-slate-300 text-sm flex gap-1 items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								{areaVacancy}, {locationPlace}
							</span>
							<div className="flex items-center gap-3 mt-2">
								<span className="bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm">
									{typeVacancy}
								</span>
								<span className="bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm">
									{typeLocation}
								</span>
							</div>
						</header>

						<article className="py-2">
							<aside className="py-2">
								<h3 className="font-bold text-lg text-gray-100">
									Sobre el Empleo
								</h3>
								<p>
									<span className="text-gray-100">Categoría: </span>
									<span className="text-gray-300"> {categoryVacancy}</span>
								</p>
								<p>
									<span className="text-gray-100">Subcategoría: </span>
									<span className="text-gray-300"> {subcategoryVacancy}</span>
								</p>
								<p>
									<span className="text-gray-100">
										Educación mínima requerida:{" "}
									</span>
									<span className="text-gray-300"> {requiredVacancy}</span>
								</p>
							</aside>

							<aside className="py-2">
								<h3 className="font-bold text-lg text-gray-100">Descripción</h3>
								<p className="text-gray-300">{content}</p>
							</aside>
						</article>

						<button
							className="bg-[#8bdc4870] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#8bdc488d] ml-0 animate-pulse hover:animate-none"
							type="button"
							onClick={updateDataRef}
						>
							Update
						</button>
					</aside>
				</section>
			</div>
		</main>
	);
}

export { DetailVacancyAdmin };
