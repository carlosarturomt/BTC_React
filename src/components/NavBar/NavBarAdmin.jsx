import { useState } from "react";
import btcLogo from "../../assets/icons/logo_btc-red.svg";
import { Logo } from "./Logo";
import UserPic from "../../assets/imgs/user.png"
import { NavOpenAdmin } from "./NavOpenAdmin";

function NavBarAdmin(props) {
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		<div className="flex items-center justify-between py-8 px-8 lg:px-40 w-full">
			<Logo image={btcLogo} classLogo="text-gray-100" logo="btc" />
			<nav className="flex">
				<section
					className="relative flex flex-col justify-center bg-red-600 items-center rounded-full w-[60px] h-[60px] button-plus"
					onClick={() => setIsNavOpen((prev) => !prev)}
				>
					<img
						className="w-full"
						alt="image user"
						src={UserPic}
					/>
					{/* POINT TO AVATAR ACTIVE */}
					{/* <span className="bottom-1 left-11 absolute  w-3.5 h-3.5 bg-green-300 border-2 border-green-300 dark:border-gray-800 rounded-full animate-pulse"></span>
					<span className="bottom-1 left-11 absolute  w-3.5 h-3.5 bg-green-500 border-2 border-green-500 dark:border-gray-800 rounded-full animate-pulse"></span> */}
				</section>

				<section className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
					<div className="h-full">
						<header
							className="flex items-center justify-between py-8 px-8 lg:px-40 mb-8"
							onClick={() => setIsNavOpen(false)}
						>
							<Logo image={btcLogo} classLogo="text-gray-100" logo="btc" />
							<div
								className="flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus-active button-plus"
								onClick={() => setIsNavOpen((prev) => !prev)}
							>
								<span className="block h-1 w-4 animate-pulse rotate-90 bg-gray-100"></span>
								<span className="block h-1 w-8 animate-pulse bg-gray-100"></span>
								<span className="block h-1 w-4 animate-pulse rotate-90 bg-gray-100"></span>
							</div>
						</header>
						<NavOpenAdmin>{props.children}</NavOpenAdmin>
					</div>
				</section>
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
						background: #000c1a;
						z-index: 15;
						overflow-y: scroll;
					}
					.showMenuNav article a:hover {
						-webkit-text-stroke: 2px #fefefe;
						color: transparent;
					}
					.showMenuNav aside a:hover {
						-webkit-text-stroke: 1px #fefefe;
						color: transparent !important;
					}
					.button-plus-active {
						background-color: #e90123;
						animation-name: resplandorAnimation;
						transform: rotate(45deg);
						animation-duration:  1s;
						animation-iteration-count: infinite;
					}

					.button-plus:hover {
						background-color: #e90123;
						animation-name: resplandorAnimation, rotation;
						animation-duration:  1s, 0.5s;
						animation-iteration-count: infinite, 1;
					}
					@keyframes rotation {
						from {
							transform: rotate(0deg);
						}
						to {
							transform: rotate(360deg);
						}
					}
					@keyframes resplandorAnimation {
						0%,100%{
							box-shadow: 0 0 20px red;
						}
						50%{
							box-shadow: 0px 0px 0px red;
						}
					}
					`}
			</style>
		</div>
	);
}
export { NavBarAdmin };
