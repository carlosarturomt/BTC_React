import { Header } from "../components/Header/Header";
import { Template } from "../templates/Template";
import React from "react";

function Jobs() {
	return (
		<div>
			<Template>
				<section>
					<article className="py-4 px-28">
						<hgroup className="p-4">
							<h1 className="mt-[10%] text-6xl text-center text-gray-100 slide-l text-border font-bold">
								Bolsa de Empleo
							</h1>
						</hgroup>

						{/* <h1 className="mb-[10%] text-6xl text-center text-gray-100 slide-r">
							<span className="font-bold">Empleo</span>
						</h1> */}
						<p className="text-slate-50 text-2xl">
							Btc Bolsa de Empleo btc Company Company About us Legal Career
							Contact Company Services Pricing Products Customers Success
							Stories Company Support About us Legal Career More © Business
							Travel Consulting - All rights reserved · Privacy Policy
						</p>
					</article>

					<style>
						{`
                            .text-border {
                                -webkit-text-stroke: 1.2px #fefefe;
                                color: transparent;
                            }
                        `}
					</style>
				</section>{" "}
			</Template>
		</div>
	);
}

export { Jobs };
