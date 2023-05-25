import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { Template } from "../../templates/Template";

function DetailVacancy() {
	const [vacancyData, setVacancyData] = useState({});
	const { id } = useParams();

	const database = getDatabase();
	const vacancyRef = ref(database, `/vacancy/${id}`);

	useEffect(() => {
		onValue(vacancyRef, (snapshot) => {
			// console.log(snapshot.val());
			setVacancyData(snapshot.val());
		});
	}, []);

	const {
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

	return (
		<Template>
			<main className="flex justify-center flex-col items-center mb-8">
				<section className="bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md">
					<header className="pb-4 w-full border-b-2 border-[#ffffff21]">
						<h1 className="font-bold mt-px text-2xl text-gray-100">
							{vacancyTitle}
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

					<button className="bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30]">
						Apply Now
					</button>
				</section>
			</main>
		</Template>
	);
}

export { DetailVacancy };