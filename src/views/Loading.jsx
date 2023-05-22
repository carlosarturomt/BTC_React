import React from "react";

function Loading() {
	return (
		<section>
			<article className="py-4 px-28">
				<hgroup className="p-4">
					<h1 className="mt-[10%] text-6xl text-center text-gray-100 slide-l text-border font-bold">
						Loading
					</h1>
				</hgroup>
			</article>

			<style>
				{`
					section {
						background-color: red;
						height: 10vh;
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
