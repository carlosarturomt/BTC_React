import React from "react";

function NavOpenAdmin(props) {
	return (
		<div className="grid md:grid-cols-3 gap-2 lg:px-40">
			<article className="col-span-2">
				<ul className="flex flex-col justify-between font-semibold px-8 text-gray-100 ">
					<h5 className="uppercase text-1xl border-b">Navigation</h5>
					<li className="my-1 text-4xl lg:my-5 lg:text-8xl">
						<a href="/services">Services</a>
					</li>
					<li className="my-1 text-4xl lg:my-5 lg:text-8xl">
						<a href="/work">Work</a>
					</li>
					<li className="my-1 text-4xl lg:my-5 lg:text-8xl">
						<a href="/thoughts">Thoughts</a>
					</li>
					<li className="my-1 text-4xl lg:my-5 lg:text-8xl">
						<a href="/connect">Connect</a>
					</li>
				</ul>
			</article>

			<aside>
				<ul className="flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8">
					<h5 className="uppercase text-1xl border-b">Behind The Scenes</h5>
					<li className="lg:my-1 lg:text-3xl">
						<a href="/about">About Us</a>
					</li>
					<li className="lg:my-1 lg:text-3xl">
						<a href="/news">News</a>
					</li>
					<li className="lg:my-1 lg:text-3xl">
						<a href="/jobs">Jobs</a>
					</li>
				</ul>

				<ul className="flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8">
					<h5 className="uppercase text-1xl border-b">Offices</h5>
					<li className="lg:my-1 lg:text-3xl">
						<a href="/">BTC Americas</a>
					</li>
					<li className="lg:my-1 lg:text-3xl">
						<a href="/price-travel">Price Travel</a>
					</li>
					<li className="lg:my-1 lg:text-3xl">
						<a href="/big-fish">Big Fish</a>
					</li>
				</ul>

				<ul className="flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8">
					<h5 className="uppercase text-1xl border-b">Admin</h5>
					{props.children}
				</ul>
			</aside>

			<style>
				{`
					.facebook {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("./src/assets/icons/SocialMedia/facebook.png");
					}

					.instagram {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("./src/assets/icons/SocialMedia/instagram.png");
					}

					.twitter {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("./src/assets/icons/SocialMedia/twitter.png");
					}

					.linkedin {
						cursor: pointer;
						width: 32px;
						height: 32px;
						position: absolute;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url("./src/assets/icons/SocialMedia/linkedin.png");
					}
				`}
			</style>
		</div>
	);
}

export { NavOpenAdmin };
