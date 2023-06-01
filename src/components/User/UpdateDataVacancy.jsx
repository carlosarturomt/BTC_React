import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InputForm } from "../../components/Form/InputForm";
import {
	getDatabase,
	ref as refDatabase,
	onValue,
	push,
} from "firebase/database";
import {
	getStorage,
	ref as refStorage,
	uploadBytes,
	getDownloadURL,
} from "firebase/storage";

function UpdateDataVacancy() {
	const [vacancyData, setVacancyData] = useState({});
	const [candidateData, setCandidateData] = useState({});
	const { id } = useParams();
	const database = getDatabase();
	const vacancyRef = refDatabase(database, `/vacancy/${id}`);
	const candidateRef = refDatabase(database, "/candidate");

	useEffect(() => {
		onValue(vacancyRef, (snapshot) => {
			setVacancyData(snapshot.val());
		});
	}, []);

	const [file, setFile] = useState({});
	const storage = getStorage();
	const storageRef = refStorage(storage, `candidates/${file.name}`);

	const fileHandler = (event) => {
		const file = event.target.files[0];
		setFile(file);
		console.log(file);

	};

	const saveCv = async () => {
		await uploadBytes(storageRef, file)
		const url = await getDownloadURL(storageRef)
		return url
	};

	const {
		candidateName,
		vacancyTitle,
		dateVacancy,
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
	const diff_in_millisenconds = date_1 - date_2;
	const diff_in_days = diff_in_millisenconds / day_as_milliseconds;

	//F O R M
	const changeHandler = (event) => {
		const property = event.target.name;
		const value = event.target.value;
		setCandidateData({ ...candidateData, [property]: value, vacancyTitle });
	};

	const saveData = () => {
		// SAVE DATA
		console.log("Enviado");
		return push(candidateRef, candidateData);
	};

	const alertSend = async () => {
		if (candidateData) {
			const result = await saveCv();
			candidateData.url = result
			saveData()
		}
	};

	return (
		<main className="my-2 flex items-start md:px-12 flex-wrap justify-center w-full max-w-7xl mx-[auto]">
			<section className="flex justify-center flex-col items-center ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 mb-8">
				<form className="w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]">
					<div className="my-4">
						<label htmlFor="" className="text-gray-300 text-sm">
							Nombres
						</label>
						<input
							id="domTextElement1"
							type="text"
							name="candidateName"
							className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"
							onChange={changeHandler}
						/>
					</div>
					<div className="flex my-4">
						<div className="w-2/4 pr-2">
							<label htmlFor="" className="text-gray-300 text-sm">
								Nacionalidad
							</label>
							<input
								required
								type="text"
								name="candidateNationality"
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"
								onChange={changeHandler}
							/>
						</div>
						<div className="w-2/4 pl-2">
							<label className="text-gray-300 text-sm">
								Fecha de Nacimiento
							</label>
							<input
								required
								type="date"
								name="candidateBirthday"
								onChange={changeHandler}
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"
							/>
						</div>
					</div>
					<div className="flex my-4">
						<div className="w-2/4 pr-2">
							<label htmlFor="" className="text-gray-300 text-sm">
								Número Celular
							</label>
							<input
								required
								type="email"
								name="candidateTel"
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"
								onChange={changeHandler}
							/>
						</div>
						<div className="w-2/4 pl-2">
							<label className="text-gray-300 text-sm">
								Número de Contacto
							</label>
							<input
								required
								type="tel"
								name="candidateTel2"
								onChange={changeHandler}
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"
							/>
						</div>
					</div>
					<div className="flex my-4">
						<div className="w-2/4 pr-2">
							<label htmlFor="" className="text-gray-300 text-sm">
								Email
							</label>
							<input
								required
								type="email"
								name="candidateEmail"
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"
								onChange={changeHandler}
							/>
						</div>
						<div className="w-2/4 pl-2">
							<label className="text-gray-300 text-sm">Escolaridad</label>
							<input
								required
								type="text"
								name="candidateGrade"
								onChange={changeHandler}
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"
							/>
						</div>
					</div>
					<InputForm
						label="Dirección"
						name="candidateLocation"
						on={changeHandler}
					/>

					<div className="my-4">
						<label htmlFor="" className="text-gray-300 text-sm">
							Adjuntar CV
						</label>
						<input
							type="file"
							name="candidateGrade"
							className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"
							onChange={fileHandler}
						/>
					</div>

					<div className="pb-8">
						<span className="block text-xs  text-gray-400">
							Le sugerimos que el nombre de su archivo sea su nombre completo.
						</span>
					</div>

					<button
						className="bg-[#2f7ce07f] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3d79f0b4] ml-0 animate-pulse hover:animate-none flex items-center mb-8"
						type="button"
						onClick={alertSend}
					>
						Send
						<span className="material-symbols-outlined">
							<span className="material-symbols-outlined">arrow_forward</span>
						</span>
					</button>
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
										: "Hace " + diff_in_days + " días"}
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
					</aside>
				</section>
			</div>
		</main>
	);
}

export { UpdateDataVacancy };
