import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { CardCandidate } from "../Card/CardCandidate";

function CandidateAdmin() {
	const [vacancyList, setVacancyList] = useState({});
	const [itemOffset, setItemOffset] = useState(0);
	const database = getDatabase();
	const vacancyRef = ref(database, "/candidate");
	const endOffset = itemOffset + 18;
	const currentItems = Object.keys(vacancyList).slice(itemOffset, endOffset);
	const candidatesList = [...currentItems].reverse();

	useEffect(() => {
		onValue(vacancyRef, (snapshot) => {
			setVacancyList(snapshot.val());
		});
	}, []);

	return (
		<section>
			<article className="flex justify-center flex-col items-center pb-20">
				<div className="w-full max-w-4xl px-4 lg:px-0 mb-8">
					{candidatesList.map((key) => {
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
								<Link to={`${key}`}>
									<button className="bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:animate-pulse mb-1 w-[120px]">
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
		</section>
	);
}

export { CandidateAdmin };
