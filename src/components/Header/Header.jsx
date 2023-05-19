import React from "react";

function Header() {
    // document.getElementById('js-animate').addEventListener()
    return (
        <section className="pt-[75px] bg-gif">
            <aside className="p-4 bg-fig-gr" id="js-animate">
                <h2 className="mt-[10%] text-6xl text-center text-gray-100 slide-l">
                    <span className="text-border font-bold">We Gather Emotions</span>
                    <span> . </span>
                    <span className="font-bold">We Gather Experiences</span>
                </h2>
                <h2 className="mb-[10%] text-6xl text-center text-gray-100 slide-r">
                    <span className="text-border font-bold">We Gather People</span>
                    <span> . </span>
                    <span className="font-bold">We Gather Adventures</span>
                </h2>
            </aside>

            <style>
				{`
					.text-border {
						-webkit-text-stroke: 1px #fefefe;
						color: transparent;
					}
					.bg-gif {
						width: 100%
						height: 50vh;

						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						background-image: url('https://i.gifer.com/ODz.gif')
					}

					.bg-fig-gr {
						background-size: cover;
						background-position: center;
						background-color: #011E41DE;
						width: 100%
						height: 50vh;
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

            {/* M O S A I C O */}
			{/* <section className="grid grid-cols-4 pt-[150px] px-12 bg-[url('https://i.gifer.com/ODz.gif')]">
				<aside className="row-span-2 col-span-2 rounded-2xl h-[70vh]">
					<img
						src="https://www.btcamericas.com/static/assets/front/img/events/48.jpg"
						alt="image"
						className="object-cover w-fit h-[inherit] rounded-2xl"
					/>
				</aside>
				<aside className="rounded-2xl pl-4 pb-2 h-[35vh]">
					<img
						src="https://www.btcamericas.com/static/assets/front/img/events/11.jpg"
						alt="image"
						className="object-cover object-top w-fit h-full rounded-2xl"
					/>
				</aside>
				<aside className="rounded-2xl pl-4 pb-2 h-[35vh]">
					<img
						src="https://www.btcamericas.com/static/assets/front/img/events/9.jpg"
						alt="image"
						className="object-cover w-fit h-full rounded-2xl"
					/>
				</aside>
				<aside className="row-span-1 col-span-2 rounded-2xl pl-4 pt-2 h-[35vh]">
					<img
						src="https://www.btcamericas.com/static/assets/front/img/events/13.jpg"
						alt="image"
						className="object-cover w-full h-full rounded-2xl"
					/>
				</aside>
			</section> */}
        </section>
    )
}

export {Header}