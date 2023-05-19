import React from "react";

function NavOpen() {
	return (
		<div className="grid md:grid-cols-3 gap-2 lg:px-40">
			<article className="col-span-2">
				<ul className="flex flex-col justify-between font-semibold px-8 text-gray-100 ">
					<h5 className="uppercase text-1xl border-b">Navigation</h5>
					<li className="my-1 text-4xl lg:my-6 lg:text-8xl">
						<a href="/services">Services</a>
					</li>
					<li className="my-1 text-4xl lg:my-6 lg:text-8xl">
						<a href="/work">Work</a>
					</li>
					<li className="my-1 text-4xl lg:my-6 lg:text-8xl">
						<a href="/thoughts">Thoughts</a>
					</li>
					<li className="my-1 text-4xl lg:my-6 lg:text-8xl">
						<a href="/connect">Connect</a>
					</li>
				</ul>
			</article>

			<aside>
				<ul className="flex flex-col justify-between font-semibold px-8 text-gray-100 mb-12">
					<h5 className="uppercase text-1xl border-b">Behind The Scenes</h5>
					<li className="lg:my-2 lg:text-4xl">
						<a href="/about">About Us</a>
					</li>
					<li className="lg:my-2 lg:text-4xl">
						<a href="/news">News</a>
					</li>
					<li className="lg:my-2 lg:text-4xl">
						<a href="/jobs">Jobs</a>
					</li>
				</ul>

				<ul className="flex flex-col justify-between font-semibold px-8 text-gray-100 ">
					<h5 className="uppercase text-1xl border-b">Offices</h5>
					<li className="lg:my-2 lg:text-4xl">
						<a href="/">BTC Americas</a>
					</li>
					<li className="lg:my-2 lg:text-4xl">
						<a href="/price-travel">Price Travel</a>
					</li>

					<li className="lg:my-2 lg:text-4xl">
						<a href="/big-fish">Big Fish</a>
					</li>
				</ul>
			</aside>
		</div>
	);
}

export { NavOpen };
