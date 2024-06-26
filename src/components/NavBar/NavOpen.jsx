import React from "react";
import { NavLink } from "react-router-dom";

function NavOpen(props) {
	return (
		<div className="grid md:grid-cols-3 gap-2 lg:px-40">
			<article className="col-span-2">
				<ul className="flex flex-col justify-between font-semibold px-8 text-gray-100">
					<h5 className="uppercase text-1xl border-b">Navigation</h5>
					<NavLink
						to="/about"
						className="my-1 text-4xl lg:my-5 md:text-7xl xl:text-9xl"
					>
						About Us
					</NavLink>
					<NavLink
						to="/our-team"
						className="my-1 text-4xl lg:my-5 md:text-7xl xl:text-9xl"
					>
						Our Team
					</NavLink>
					<NavLink
						to="/services"
						className="my-1 text-4xl lg:my-5 md:text-7xl xl:text-9xl"
					>
						Services
					</NavLink>
				</ul>
			</article>

			<aside>
				<ul className="flex flex-col justify-between px-8 text-gray-100 mb-8">
					<h5 className="uppercase text-1xl border-b font-semibold">Careers</h5>
					{props.children}
					<NavLink
						to="/careers"
						className="text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"
					>
						Apply
					</NavLink>
				</ul>

				<aside className="px-8 text-gray-100 mb-8">
					<h5 className="uppercase text-1xl border-b font-semibold">
						Social Media
					</h5>
					<ul className="text-gray-100 pr-6">
						<li className="text-2xl lg:my-1 lg:text-3xl ">
							<a
								href="https://www.facebook.com/BTCamericas"
								className="pr-10 btn-animate"
							>
								<span>Facebook</span>
							</a>
						</li>
						<li className="text-2xl lg:my-1 lg:text-3xl ">
							<a
								href="https://www.instagram.com/btcamericas/"
								className="pr-10 btn-animate"
							>
								<span>Instagram</span>
							</a>
						</li>
						<li className="text-2xl lg:my-1 lg:text-3xl ">
							<a
								href="https://twitter.com/BTCamericas"
								className="pr-10 btn-animate"
							>
								<span>Twitter</span>
							</a>
						</li>
						<li className="text-2xl lg:my-1 lg:text-3xl ">
							<a
								href="https://www.linkedin.com/company/btcamericas"
								className="pr-10 btn-animate"
							>
								<span>LinkedIn</span>
							</a>
						</li>
					</ul>
				</aside>

				<ul className="flex flex-col justify-between px-8 text-gray-100 mb-16">
					<h5 className="uppercase text-1xl border-b font-semibold">
						Contact Us
					</h5>
					<NavLink
						to="/contact"
						className="text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"
					>
						Contact
					</NavLink>
				</ul>
			</aside>
		</div>
	);
}

export { NavOpen };
