import React, { useState } from "react";
import { useFirebaseApp } from "reactfire";
import { Template } from "../templates/Template";
import { CardJob } from "../components/Card/CardJob";

function Jobs() {
	const firebase = useFirebaseApp();
	console.log(firebase);

	const [title, setTitle] = useState("");

	const [employmentVacancy, setEmploymentVacancy] = useState([
		{
			vacancyTitle: "Oatbase Operator",
			typeVacancy: "Full-time",
			areaVacancy: "Operator",
			location: "CDMX",
			typeLocation: "On-site",
			content:
				"El servicio de Google, que se ofrece sin coste económico, traduce al instante palabras, frases y páginas web a más de 100 idiomas.",
		},
		{
			vacancyTitle: "Frontend Developer",
			typeVacancy: "Full-time",
			areaVacancy: "Engineering",
			location: "Texcoco",
			typeLocation: "Hybrid",
			content:
				"El servicio de Google, que se ofrece sin coste económico, traduce al instante palabras, frases y páginas web a más de 100 idiomas.",
		},
		{
			vacancyTitle: "Analyst Data",
			typeVacancy: "Halftime",
			areaVacancy: "Engineering",
			location: "Puebla",
			typeLocation: "Remote",
			content:
				"El servicio de Google, que se ofrece sin coste económico, traduce al instante palabras, frases y páginas web a más de 100 idiomas.",
		},
	]);

	const [vacancy, setVacancy] = useState({})

	const changeHandler = (event) => {
		const value = event.target.value;
		const property = event.target.name
		setVacancy({...vacancy, [property]:value});
	};

	const saveHandler = () => {
		setEmploymentVacancy([...employmentVacancy, vacancy])
	}

	return (
		<div>
			<Template>
				<article className="flex justify-center flex-col items-center pb-20 px-2">
					<header className="lg:mt-[-113px] flex justify-center items-center w-full max-w-4xl ">
						<section className="w-full p-2 grid grid-cols-1 gap-6 rounded-lg bg-[#022d5f00] md:p-6">
							<aside className="grid grid-cols-3 gap-0 rounded">
								<div className="col-span-2 p-2 rounded">
									<div className="flex border border-gray-700 rounded bg-gray-200 items-center p-2 hover:bg-gray-300">
										<span className="material-symbols-outlined text-gray-800">
											search
										</span>
										<input
											className="bg-transparent w-full focus:outline-none text-gray-800"
											type="search"
										/>
									</div>
								</div>
								<div className=" p-2 rounded">
									<div className="flex justify-center w-full">
										<button className="p-2 w-full rounded-md border-0 bg-red-600 text-white hover:bg-red-700">
											Search
										</button>
									</div>
								</div>
								<p className="text-gray-100">{title}</p>
							</aside>

							<aside className="flex flex-wrap md:flex-row text-gray-100">
								<div className="flex items-center">
									<p>FILTER BY:</p>
								</div>

								<div className="w-fit p-1 md:pt-0 md:pl-2">
									<select className="py-1 px-2 rounded text-gray-400 bg-[#ffffff17]">
										<option hidden="hidden" value="defaultValue">
											LOCATION TYPE
										</option>
										<option>On-site</option>
										<option>Hybrid</option>
										<option>Remote</option>
									</select>
								</div>
								<div className="w-fit p-1 md:pt-0 md:pl-2">
									<select className="py-1 px-2 rounded text-gray-400 bg-[#ffffff17]">
										<option hidden="hidden" value="defaultValue">
											LOCATION
										</option>
										<option>All</option>
										<option>CDMX</option>
										<option>MX</option>
									</select>
								</div>
								<div className="w-fit p-1 md:pt-0 md:pl-2">
									<select className="py-1 px-2 rounded text-gray-400 bg-[#ffffff17]">
										<option hidden="hidden" value="defaultValue">
											TEAM
										</option>
										<option>BTC Americas</option>
										<option>Price Travel</option>
										<option>Big Fish</option>
									</select>
								</div>
								<div className="w-fit p-1 md:pt-0 md:pl-2">
									<select className="py-1 px-2 rounded text-gray-400 bg-[#ffffff17]">
										<option hidden="hidden" value="defaultValue">
											WORK TYPE
										</option>
										<option>All</option>
										<option>Full Time</option>
										<option>Halftime</option>
									</select>
								</div>
							</aside>
						</section>
					</header>

					<form>
						<div className="m-2">
							<label htmlFor="" className="text-gray-200">
								Vacante:
							</label>
							<input type="text" name="vacancyTitle" onChange={changeHandler}/>
						</div>

						<div className="m-2">
							<label htmlFor="" className="text-gray-200">
								Área:
							</label>
							<input type="text" name="areaVacancy" onChange={changeHandler}/>
						</div>

						<div className="m-2">
							<label htmlFor="" className="text-gray-200">
								Jornada Laboral:
							</label>
							<input type="text" name="typeVacancy" onChange={changeHandler}/>
						</div>

						<div className="m-2">
							<label htmlFor="" className="text-gray-200">
								Modalidad:
							</label>
							<input type="text" name="typeLocation" onChange={changeHandler}/>
						</div>

						<div className="m-2">
							<label htmlFor="" className="text-gray-200">
								Ubicación:
							</label>
							<input type="text" name="location" onChange={changeHandler}/>
						</div>

						<div className="m-2">
							<label htmlFor="" className="text-gray-200">
								Descripción:
							</label>
							<input type="text" name="content" onChange={changeHandler}/>
						</div>

						<button className="bg-gray-100 py-1 px-2 rounded" type="button" onClick={saveHandler}>Publicar</button>

					</form>

					<div className="w-full max-w-4xl ">
						{employmentVacancy.map((vacancy, index) => (
							<CardJob vacancyData={vacancy} />
						))}
					</div>
				</article>

				<style>
					{`
						option  {
							{/* background-color: #172637; */}
						}
                        .text-border {
                            -webkit-text-stroke: 1px #fefefe;
                            color: transparent;
                        }
                    `}
				</style>
			</Template>
		</div>
	);
}

export { Jobs };
