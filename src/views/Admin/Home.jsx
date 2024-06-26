import React from "react";
import { Link } from "react-router-dom";

function HomeAdmin() {
	// POSITION TO PLACE IN THE FUTURE
	// const componentDidMount = () => {
	// 	navigator.geolocation.getCurrentPosition(function (position) {
	// 		console.log(position);
	// 	});
	// };
	return (
		<section className="flex items-start flex-wrap justify-center w-full max-w-7xl mx-[auto] px-4 md:px-8 md:mb-36">
			<h1 className="text-gray-100 text-4xl font-semibold w-full">
				Welcome Charly
				{/* <button
					className="border rounded-lg ml-4 px-4 py-2 text-sm"
					onClick={componentDidMount}
				>
					CLICK
				</button> */}
			</h1>
			<article className="flex items-start justify-center flex-wrap w-full">
				<aside className="w-full py-4 px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]">
					<h2 className="text-gray-100 text-2xl font-semibold">Candidates</h2>

					<Link to={`candidates/`}>
						<button className="bg-[#ffffff17] my-2 py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3232328d] animate-pulse hover:animate-none">
							See more...
						</button>
					</Link>
				</aside>

				<aside className="w-full py-4 px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]">
					<h2 className="text-gray-100 text-2xl font-semibold">Vacancies</h2>
					<Link to={`create`}>
						<button className="bg-[#ffffff17] my-2 py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3232328d] animate-pulse hover:animate-none">
							See more...
						</button>
					</Link>
				</aside>
			</article>
		</section>
	);
}

export { HomeAdmin };
