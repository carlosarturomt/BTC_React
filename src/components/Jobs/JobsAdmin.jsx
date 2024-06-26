import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { CardJob } from "../Card/CardJob";

function JobsAdmin() {
	const [vacancyList, setVacancyList] = useState({});
	const database = getDatabase();
	const vacancyRef = ref(database, "/vacancy");

	useEffect(() => {
		onValue(vacancyRef, (snapshot) => {
			setVacancyList(snapshot.val());
		});
	}, []);

	// To Do a Limit of Jobs to Show in the Panel
	const [itemOffset, setItemOffset] = useState(0);
	const endOffset = itemOffset + 20;
	const currentItems = Object.keys(vacancyList).slice(itemOffset, endOffset);
	const careersList = [...currentItems].reverse();


	return (
		<section>
			<article className="flex justify-center flex-col items-center pb-20">
				<div className="w-full">
					{careersList.map((key) => {
						const vacancyData = vacancyList[key];
						const removePost = () => {
							remove(ref(database, `/vacancy/${key}`), vacancyList);
						};

						const alertRemove = () => {
							let text = "Are you sure of DELETE this Vacancy?";
							if (confirm(text) == true) {
								removePost();
							}
						};
						return (
							<CardJob vacancyData={vacancyData} key={key}>
								<Link to={`/logged/edit/${key}`}>
									<button className="bg-[#74ff0029] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#8bdc4870] mb-1 w-[120px]">
										<span className="material-symbols-outlined">edit</span>
										Edit
									</button>
								</Link>
								<button
									className="bg-[#ff15153b] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ff151567] mt-2 w-[120px]"
									onClick={alertRemove}
								>
									<span className="material-symbols-outlined">delete</span>
									Delete
								</button>
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
