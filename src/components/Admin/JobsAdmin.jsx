import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { CardJob } from "../Card/CardJob";

function JobsAdmin() {
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
	const currentItems = Object.keys(vacancyList).slice(itemOffset, endOffset);
	return (
		<section className="bg-[#000c1a]">
			<article className="flex justify-center flex-col items-center pb-20 px-2">
				<div className="w-full max-w-4xl">
					{currentItems
						.sort((a, b) => (a.name > b.name ? -1 : 1))
						.map((key) => {
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
		</section>
	);
}

export { JobsAdmin };
