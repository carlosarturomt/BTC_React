function CardJob(props) {

    const { vacancyData } = props
    const { vacancyTitle, typeVacancy, areaVacancy, location, typeLocation, content } = vacancyData

	return (
		<aside className="bg-[#022e5f21] flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md my-2">
			<div>
				<span className="text-slate-400 text-sm">{areaVacancy}</span>
				<h3 className="font-bold mt-px text-gray-100">{vacancyTitle}</h3>
				<p className="text-gray-200">
					{content.length > 50
						? `${content.slice(0, 30)}...`
						: content}
				</p>
				<div className="flex items-center gap-3 mt-2">
					<span className="bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm">
						{typeVacancy}
					</span>
					<span className="text-slate-400 text-sm flex gap-1 items-center">
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
						{typeLocation}, {location}
					</span>
				</div>
			</div>
			<div>
				<button className="bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30]">
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
			</div>
		</aside>
	);
}

export {CardJob}