import React, { Fragment } from "react";
import data from "./data.json";
import "./style.css";

function randomIntFromInterval(min, max) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}
const Card = (props) => {
	return (
		<ul>
			{props.data.map((item) => (
				<>
					<li>
						<span className="rounded-md py-2 px-4 bg-[#ffffff17]">
							{item.name}
						</span>
						{item.children?.length && <Card data={item.children} />}
					</li>
				</>
			))}
		</ul>
	);
};

function EmployeeChart() {
	return (
		<div className="flex items-center justify-center w-full">
			<div className="org-tree">
				<Card data={data} />
			</div>
		</div>
	);
}
export { EmployeeChart };
