import React from "react";

function Loading() {
	return (
		<section>
			<article className="px-28 w-full h-[100vh] bg-red-600">
				<hgroup className="h-[100vh]">
					<h1 className="h-[100vh] py-28 text-7xl text-center text-gray-100 slide-l text-border font-bold">
						Loading
					</h1>
				</hgroup>
			</article>

			<style>
				{`
					section {
						background-color: red;
						height: 100vh;
					}
                    .text-border {
                        -webkit-text-stroke: 1px #fefefe;
                        color: transparent;
                    }
                `}
			</style>
		</section>
	);
}

export { Loading };
