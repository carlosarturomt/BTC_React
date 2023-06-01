function CardCandidate(props) {
	const { vacancyData } = props;
	const {
		candidateBirthday,
		candidateEmail,
		candidateGrade,
		candidateLocation,
		candidateName,
		candidateNationality,
		candidateTel,
		candidateTel2,
		file,
		vacancyTitle,
	} = vacancyData;

	return (
		<aside className="bg-[#022e5f21] flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md my-2">
			<div>
				<span className="text-slate-400 text-sm">{vacancyTitle}</span>
				<h3 className="font-bold mt-px text-gray-100">{candidateName}</h3>
				<p className="text-slate-300">{file}</p>
				<div className="flex items-center gap-3 mt-2">
					<span className="flex items-center bg-[#ffffff17] text-gray-400 rounded-full py-1 text-sm pl-2 pr-4">
						<span className="p-1 material-symbols-outlined">call</span>
						{candidateTel}
					</span>
					<span className="text-slate-400 text-sm flex gap-1 items-center">
						<span className="material-symbols-outlined">mail</span>
						{candidateEmail}
					</span>
				</div>
			</div>
			<div>{props.children}</div>
		</aside>
	);
}

export { CardCandidate };
