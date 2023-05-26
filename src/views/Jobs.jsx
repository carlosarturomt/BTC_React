import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
// import { useFirebaseApp } from "reactfire";
import { Template } from "../templates/Template";
import { CardJob } from "../components/Card/CardJob";

function Jobs() {
	// const firebase = useFirebaseApp();
	// console.log(firebase);
	const [vacancyList, setVacancyList] = useState({});

	const database = getDatabase();
	const vacancyRef = ref(database, "/vacancy");

	useEffect(() => {
		onValue(vacancyRef, (snapshot) => {
			// console.log(snapshot.val());
			setVacancyList(snapshot.val());
		});
	}, []);

	//
	const [itemOffset, setItemOffset] = useState(0);
	const endOffset = itemOffset + 18;
	const currentItems = Object.keys(vacancyList).slice(itemOffset, endOffset)
	return (
		<Template>
			<article className="flex justify-center flex-col items-center pb-20 px-2">
				<header className="lg:mt-[-113px] flex justify-center items-center w-full max-w-4xl">
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

				<div className="w-full max-w-4xl">
					{currentItems.sort((a, b) => (a.name > b.name ? -1 : 1)).map((key) => {
							const vacancyData = vacancyList[key];
							return (
								<CardJob vacancyData={vacancyData} key={key}>
									<Link to={`/jobs/${key}`}>
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
		</Template>
	);
}

// function PaginatedItems({ itemsPerPage }) {
// 	// Here we use item offsets; we could also use page offsets
// 	// following the API or data you're working with.
// 	const [itemOffset, setItemOffset] = useState(0);

// 	// Simulate fetching items from another resources.
// 	// (This could be items from props; or items loaded in a local state
// 	// from an API endpoint with useEffect and useState)
// 	const endOffset = itemOffset + itemsPerPage;
// 	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
// 	const currentItems = Object.keys(vacancyList).slice(itemOffset, endOffset)
// 	const pageCount = Math.ceil(items.length / itemsPerPage);

// 	// Invoke when user click to request another page.
// 	const handlePageClick = (event) => {
// 		const newOffset = (event.selected * itemsPerPage) % items.length;
// 		console.log(
// 			`User requested page number ${event.selected}, which is offset ${newOffset}`
// 		);
// 		setItemOffset(newOffset);
// 	};

// 	return (
// 		<>
// 			<Items currentItems={currentItems} />
// 			<ReactPaginate
// 				breakLabel="..."
// 				nextLabel=" next >"
// 				onPageChange={handlePageClick}
// 				pageRangeDisplayed={5}
// 				pageCount={pageCount}
// 				previousLabel="< previous"
// 				renderOnZeroPageCount={null}
// 			/>
// 		</>
// 	);
// }

export { Jobs };
