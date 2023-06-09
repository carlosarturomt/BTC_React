import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { CardJob } from "../Card/CardJob";
import { BtnFilter } from "../Buttons/BtnFilter";

function JobsList() {
	/* ----- State ----- */
	const [vacancyList, setVacancyList] = useState([]);
	const [search, setSearch] = useState("");
	const [filter_data, setFilterData] = useState([]);
	const database = getDatabase();
	const vacancyRef = ref(database, "/vacancy");
	// TODO: a limit of Vacancies to Show in the View

	useEffect(() => {
		return onValue(vacancyRef, (snapshot) => {
			const data = snapshot.val();

			if (snapshot.exists()) {
				Object.entries(data).forEach(([key, value]) => {
					value.id = key;
					setVacancyList((list) => [...list, value]);
					setFilterData((list) => [...list, value]);
				});
			}
		});
	}, []);

	/**
	 *
	 * @param {Object} busqueda
	 */
	const filtrar = (busqueda) => {
		const nuevo = filter_data.filter((item) => {
			if (
				item.vacancyTitle.toLowerCase().includes(busqueda.toLowerCase()) ||
				item.areaVacancy.toLowerCase().includes(busqueda.toLowerCase()) ||
				item.categoryVacancy.toLowerCase().includes(busqueda.toLowerCase()) ||
				item.subcategoryVacancy.toLowerCase().includes(busqueda.toLowerCase())
			) {
				return item;
			}
			// if (item.vacancyTitle.toLowerCase() != busqueda) {
			// 	console.log(":(");
			// }
		});
		setVacancyList(nuevo);
	};

	const filterOption = (busqueda) => {
		const nuevo = filter_data.filter((item) => {
			if (item.typeLocation.toLowerCase().includes(busqueda.toLowerCase())) {
				return item;
			}
			if (item.typeVacancy.toLowerCase().includes(busqueda.toLowerCase())) {
				return item;
			}
		});
		setVacancyList(nuevo);
	};

	/**
	 *
	 * @param {Event} event Capture the Changes in the Input of the useState()
	 */
	const handleChange = (event) => {
		setSearch(event.target.value.toLowerCase());
		filtrar(event.target.value);
		// console.log(search);
	};

	const handleFilter = (event) => {
		const value = event.target.value;
		setSearch(value.toLowerCase());
		filterOption(value);
	};

	// --- T E S T
	const items = [
		{
			slug: handleFilter,
			anchor: "On-site",
		},
		{
			slug: handleFilter,
			anchor: "Hybrid",
		},
		{
			slug: handleFilter,
			anchor: "Remote",
		},
	];
	const items2 = [
		{
			slug: handleFilter,
			anchor: "Full Time",
		},
		{
			slug: handleFilter,
			anchor: "Half Time",
		},
	];
	return (
		<>
			<article className="flex justify-center flex-col items-center pb-20 px-2">
				<header className="flex justify-center items-center w-full md:max-w-3xl 2xl:max-w-4xl lg:mt-[-113px]">
					<section className="w-full p-2 grid grid-cols-1 gap-6 rounded-lg bg-[#022d5f00] md:p-6">
						<aside className="grid grid-cols-3 gap-0 rounded">
							<div className="col-span-3 p-2 rounded">
								<div className=" flex border border-gray-700 rounded-lg bg-gray-200 items-center p-2 hover:bg-gray-300">
									<span className="material-symbols-outlined text-gray-800">
										search
									</span>
									<input
										onChange={handleChange}
										placeholder="Type your search term here... &#8617;"
										className="bg-transparent w-full focus:outline-none border-none text-gray-800"
										type="search"
									/>
								</div>
							</div>
						</aside>

						<aside className="flex flex-wrap md:flex-row text-gray-100">
							<div className="flex items-center">
								<p>FILTER BY:</p>
							</div>
							<BtnFilter dropdownTitle="LOCATION TYPE" items={items} />
							<BtnFilter dropdownTitle="WORK TYPE" items={items2} />
						</aside>
					</section>
				</header>

				<div className="w-full max-w-4xl">
					{vacancyList
						.sort((a, b) => (a.name > b.name ? -1 : 1))
						.map((item) => {
							return (
								<CardJob vacancyData={item} key={item.id}>
									<Link to={item.id}>
										<button className="bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30] hover:animate-pulse">
											Apply Now
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
													d="M13 7l5 5m0 0l-5 5m5-5H6"
												/>
											</svg>
										</button>
									</Link>
								</CardJob>
							);
						})}
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
		</>
	);
}

export { JobsList };
