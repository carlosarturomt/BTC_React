import React from "react";
import Glide from "@glidejs/glide";
import { TemplateLogged } from "../templates/TemplateLogged";

window.addEventListener("load", () => {
	const glide = new Glide(".glide", {
		type: "carousel",
		startAt: 0,
		perView: 4,
		focusAt: "center",
		autoplay: "2000",
		breakpoints: {
			800: {
				perView: 2,
			},
			480: {
				perView: 1,
			},
		},
	});

	glide.mount();
});

function ServicesOriginal() {
	return (
		<>
			<TemplateLogged
				content={
					<div className="glide relative text-gray-200 py-4 md:px-28 lg:px-56">
						<h1 className="py-4 text-6xl font-semibold text-border-style text-center px-2 md:text-8xl ">
							Our ServicesOriginal
						</h1>
						<div className="glide__track" data-glide-el="track">
							<ul className="glide__slides">
								<li className="glide__slide">
									<div className="customer-img text-center">
										<img
											src="data:image/jpeg;base64,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"
											alt=""
										/>
									</div>
								</li>
								<li className="glide__slide">
									<div className="customer-img text-center">
										<img
											src="https://i.ytimg.com/vi/skUZarcW79M/maxresdefault.jpg"
											alt=""
										/>
									</div>
								</li>
								<li className="glide__slide">
									<div className="customer-img text-center">
										<img
											src="data:image/png;base64,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"
											alt=""
										/>
									</div>
								</li>
								<li className="glide__slide">
									<div className="customer-img text-center">
										<img
											src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJ_9aQxMQKglJUmxuqtncHDlSbInS780TB__Tgdw4jFd1Rr4nVCgdbBWIYpECDgDUI1M&usqp=CAU"
											alt=""
										/>
									</div>
								</li>
							</ul>
						</div>

						<div
							data-glide-el="controls"
							className="flex items-center justify-center absolute top-[65%] left-[10%]"
						>
							<button
								data-glide-dir="<"
								className="bg-[#ffffff17] p-2 rounded-full hover:bg-[#ffffff30]"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 24 24"
								>
									<path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path>
								</svg>
							</button>
						</div>
						<div
							data-glide-el="controls"
							className="flex items-center justify-center absolute top-[65%] right-[10%]"
						>
							<button
								data-glide-dir=">"
								className="bg-[#ffffff17] p-2 hover:bg-[#ffffff30] rounded-full"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 24 24"
								>
									<path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
								</svg>
							</button>
						</div>
					</div>
				}
			/>
		</>
	);
}

export { ServicesOriginal };
