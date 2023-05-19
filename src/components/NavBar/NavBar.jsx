import { useState } from "react";
import btcLogo from "../../assets/icons/logo_btc-red.svg";
import { Logo } from "./Logo";

function NavBar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		// <div className="flex items-center justify-between py-6 px-8 lg:px-40 w-full bg-[#011E41]">
		<div className="flex items-center justify-between py-6 px-8 lg:px-40 fixed w-full bg-[#011E41DE]">
			<Logo image={btcLogo} classLogo="text-gray-100 " logo="btc" />
			<h4 className="text-gray-100 hidden md:block">HOME</h4>
			<nav>
				{/* <section className="MOBILE-MENU flex lg:hidden"> */}
				<section className="flex">
					<div
						className="space-y-1"
						onClick={() => setIsNavOpen((prev) => !prev)}
					>
						<span className="block h-1 w-8 animate-pulse bg-gray-100"></span>
						<span className="block h-0.5 w-6 animate-pulse transparent"></span>
						<span className="block h-1 w-8 animate-pulse bg-gray-100"></span>
						{/* <span className="block h-0.5 w-6 animate-pulse bg-gray-100"></span> */}
					</div>

					<div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
						<div className="flex justify-between mb-12 py-8 px-8 lg:px-40" onClick={() => setIsNavOpen(false)}>
							<Logo
								image={btcLogo}
								classLogo="text-gray-100 "
								logo="btc"
							/>

							<svg
								className="h-8 w-8 text-gray-100 hover:text-red-600"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="4"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</div>

						<ul className="flex flex-col justify-between min-h-[250px] text-3xl font-semibold px-8 text-gray-100 lg:px-40">
							<li className="my-8 uppercase">
								<a href="/about">Home</a>
							</li>
							<li className="my-8 uppercase">
								<a href="/portfolio">About</a>
							</li>
							<li className="my-8 uppercase">
								<a href="/contact">Contact</a>
							</li>
						</ul>
					</div>
				</section>

				{/* <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-gray-100">
					<li>
						<a href="/about" >Home</a>
					</li>
					<li>
						<a href="/portfolio">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul> */}
			</nav>
			<style>
				{`
					nav {
						width: 99.4px;
						display: flex;
						justify-content: flex-end;
					}
					.hideMenuNav {
						display: none;
					}
					.showMenuNav {
						display: block;
						position: fixed;
						width: 100%;
						height: 100vh;
						top: 0;
						left: 0;
						background: #020617;
						z-index: 10;
						{/* display: flex;
						flex-direction: column;
						justify-content: space-evenly;
						align-items: flex-start; */}
					}
					.showMenuNav a:hover {
						text-decoration: underline;
					}
					`}
			</style>
		</div>
	);
}
export { NavBar };
