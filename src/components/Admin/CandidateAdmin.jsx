import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { CardCandidate } from "../Card/CardCandidate";
import { Template } from "../../templates/Template";

function CandidateAdmin() {
	const [vacancyList, setVacancyList] = useState({});
	const database = getDatabase();
	const vacancyRef = ref(database, "/candidate");

	useEffect(() => {
		onValue(vacancyRef, (snapshot) => {
			setVacancyList(snapshot.val());
		});
	}, []);

	const [itemOffset, setItemOffset] = useState(0);
	const endOffset = itemOffset + 18;
	const currentItems = Object.keys(vacancyList).slice(itemOffset, endOffset);

	return (
		<section>
			<article className="flex justify-center flex-col items-center pb-20">
				<div className="w-full">
					{currentItems
						.sort((a, b) => (a.name > b.name ? -1 : 1))
						.map((key) => {
							const vacancyData = vacancyList[key];
							const removePost = () => {
								remove(ref(database, `/candidate/${key}`), vacancyList);
							};
							const alertRemove = () => {
								let text = "Are you sure of DELETE this Candidate?";
								if (confirm(text) == true) {
									removePost();
								}
							};
							return (
								<CardCandidate vacancyData={vacancyData} key={key}>
									<Link to={`/logged/edit/${key}`}>
										<button className="bg-[#74ff0029] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#8bdc4870] mb-1 w-[120px]">
											{/* <span className="material-symbols-outlined">edit</span> */}
											See more
										</button>
									</Link>
									<button
										className="bg-[#ff15153b] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ff151567] mt-2 w-[120px]"
										onClick={alertRemove}
									>
										<span className="material-symbols-outlined">delete</span>
										Delete
									</button>
								</CardCandidate>
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

export { CandidateAdmin };
