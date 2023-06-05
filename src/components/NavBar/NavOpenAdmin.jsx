import React from "react";
import { NavLink } from "react-router-dom";


function NavOpenAdmin(props) {
	return (
		<div className="grid md:grid-cols-3 gap-2 lg:px-40">
			<article className="col-span-2">
				<ul className="flex flex-col justify-between font-semibold px-8 text-gray-100 ">
					<h5 className="uppercase text-1xl border-b">Navigation</h5>
					<NavLink to="/services" className="my-1 text-4xl lg:my-5 lg:text-8xl">
						Services
					</NavLink>
					<NavLink to="/work" className="my-1 text-4xl lg:my-5 lg:text-8xl">
						Thoughts
					</NavLink>
					<NavLink to="/thoughts" className="my-1 text-4xl lg:my-5 lg:text-8xl">
						Thoughts
					</NavLink>
					<NavLink to="/connect" className="my-1 text-4xl lg:my-5 lg:text-8xl">
						Connect Us
					</NavLink>
				</ul>
			</article>

			<aside>
				<ul className="flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8">
					<h5 className="uppercase text-1xl border-b">Behind The Scenes</h5>
					<NavLink to="/about" className="text-2xl lg:my-1 lg:text-3xl">
						About Us
					</NavLink>
					<NavLink to="/news" className="text-2xl lg:my-1 lg:text-3xl">
						News
					</NavLink>
					<NavLink to="/jobs" className="text-2xl lg:my-1 lg:text-3xl">
						Jobs
					</NavLink>
				</ul>

				<ul className="flex flex-col justify-between font-semibold px-8 text-gray-100 mb-8">
					<h5 className="uppercase text-1xl border-b">Offices</h5>
					<NavLink to="/" className="text-2xl lg:my-1 lg:text-3xl">
						BTC Americas
					</NavLink>
					<NavLink to="/price-travel" className="text-2xl lg:my-1 lg:text-3xl">
						Price Travel
					</NavLink>
					<NavLink to="/big-fish" className="text-2xl lg:my-1 lg:text-3xl">
						Big Fish
					</NavLink>
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
