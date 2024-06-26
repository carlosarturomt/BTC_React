import React from "react";

function Header() {
	return (
		<section className="h-screen bg-gif">
			<aside className="h-screen p-4 bg-fig-gr" id="js-animate">
				{/* <h2 className="mt-[10%] text-6xl text-center text-gray-100 slide-l">
                    <span className="text-border font-bold">We Gather Emotions</span>
                    <span> . </span>
                    <span className="font-bold">We Gather Experiences</span>
                </h2>
                <h2 className="mb-[10%] text-6xl text-center text-gray-100 slide-r">
                    <span className="text-border font-bold">We Gather People</span>
                    <span> . </span>
                    <span className="font-bold">We Gather Adventures</span>
                </h2> */}
			</aside>

			<style>
				{`
					.text-border {
						-webkit-text-stroke: 1px #fefefe;
						color: transparent;
					}
					.bg-gif {
						margin-top: -125px;

						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url('https://i.gifer.com/ODz.gif')
					}

					.bg-fig-gr {
						margin-top: -125px;
						background-size: cover;
						background-position: center;
						background-color: #000f2094;
					}

					/* A N I M A C I O N E S */
					.slide-l {
						animation-duration: 30s;
						animation-name: slide-left;
					}
					@keyframes slide-left {
						from {
							margin-left: -90%;
							width: 100%
						}
						to {
							margin-left: 0%;
							width: 300%;
						}
					}
					.slide-r {
						animation-duration: 30s;
						animation-name: slide-right;
					}
					@keyframes slide-right {
						from {
							margin-left: -15%;
							width: 300%
						}
						to {
							margin-left: -95%;
							width: 100%;
						}
					}
					`}
			</style>
		</section>
	);
}

export { Header };
