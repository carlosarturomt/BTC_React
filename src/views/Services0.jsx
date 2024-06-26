import React, { useEffect } from "react";
// import Glide from "@glidejs/glide";
import { TemplateLogged } from "../templates/TemplateLogged";

function Services0() {
	// useEffect(() => {
	// 	const glide = new Glide(".glide", {
	// 		type: "carousel",
	// 		startAt: 0,
	// 		focusAt: "center",
	// 		// autoplay: "2000",
	// 	});

	// 	glide.mount();
	// 	console.log("GLideJS");
	// }, []);
	return (
		<>
			<TemplateLogged>
				<section className="text-gray-200 py-4 md:px-28 lg:px-56 pb-36">
					<h1 className="py-4 text-6xl font-semibold text-border-style text-center px-2 md:text-8xl ">
						Our Services
					</h1>
					<div className="flex justify-center items-center flex-wrap">
						<img
							className="w-full md:w-3/6 p-4"
							src="https://dummyimage.com/421x421/8a8a8a/ffffff.jpg"
							alt="Img #1"
						/>
						<img
							className="w-full md:w-3/6 p-4"
							src="https://dummyimage.com/421x421/8a8a8a/ffffff.jpg"
							alt="Img #1"
						/>
						<img
							className="w-full md:w-3/6 p-4"
							src="https://dummyimage.com/421x421/8a8a8a/ffffff.jpg"
							alt="Img #1"
						/>
						<img
							className="w-full md:w-3/6 p-4"
							src="https://dummyimage.com/421x421/8a8a8a/ffffff.jpg"
							alt="Img #1"
						/>
					</div>
				</section>
			</TemplateLogged>
		</>
	);
}

export { Services0 };
