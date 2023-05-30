import { Link } from "react-router-dom";

function HomeAdmin() {
	return (
		<section className="flex items-start flex-wrap justify-center w-full max-w-7xl mx-[auto] px-4 md:px-8 ">
			<h1 className="text-gray-100 text-4xl font-semibold w-full">
				Welcome Charly
			</h1>
			<article className="flex items-start justify-center flex-wrap w-full">
				<aside className="w-full px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]">
					<h2 className="text-gray-100 text-2xl font-semibold">Candidates</h2>
					{/* <img
						src="https://merch38.com/wp-content/uploads/2021/07/Emloyee.png"
						alt="Employees"
					/> */}
					<Link to={`/admin/`}>
						<button className="bg-[#ffffff17] py-1 px-4 rounded-md font-semibold ml-4 text-gray-100 hover:bg-[#3232328d] ml-0 animate-pulse hover:animate-none">See more...</button>
					</Link>
				</aside>

				<aside className="w-full px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]">
					<h2 className="text-gray-100 text-2xl font-semibold">Vacancies</h2>
					{/* <img
						src="https://cdni.iconscout.com/illustration/premium/thumb/employee-working-area-2357846-2016555.png"
						alt="Employees"
					/> */}
					<Link to={`create`}>
						<button className="bg-[#ffffff17] py-1 px-4 rounded-md font-semibold ml-4 text-gray-100 hover:bg-[#3232328d] ml-0 animate-pulse hover:animate-none">See more...</button>
					</Link>
				</aside>
			</article>
		</section>
	);
}

export { HomeAdmin };
