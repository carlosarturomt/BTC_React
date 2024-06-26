import React, { useEffect, useState } from "react";
import { TemplateLogged } from "../../templates/TemplateLogged";
import { getDatabase, ref, onValue } from "firebase/database";
import "./style.css";
import { CardChart } from "./CardChart";

const ChartFirebase = () => {
	const [chartList, setChartList] = useState({});
	const database = getDatabase();
	const chartRef = ref(database, "/chart");
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [count, setCount] = useState(100);
	const [left, setLeft] = useState(5);

	const isMobile = windowWidth < 1080;

	useEffect(() => {
		onValue(chartRef, (snapshot) => {
			setChartList(snapshot.val());
		});
	}, []);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [count]);

	const counterBtn = () => {
		const zoomDisplay = document.getElementById("container");
		zoomDisplay.setAttribute("style", `zoom: ${count}%;`);

		const zoomScroll = document.getElementById("scrollLeft");
		zoomScroll.setAttribute("style", `left: ${left};`);

		setCount(count + 10);
		setLeft(left - 1 * left);

		if (count >= 10) {
			const zoomD = document.getElementById("container");
			zoomD.setAttribute("style", `position: initial; zoom: ${count}%;`);
		}

		if (count >= 100) {
			const zoomD = document.getElementById("container");
			zoomD.setAttribute("style", `position: relative; zoom: ${count}%;`);
		}
	};

	const counterBtn2 = () => {
		const zoomDisplay = document.getElementById("container");
		zoomDisplay.setAttribute("style", `zoom: ${count}%;`);

		const zoomScroll = document.getElementById("scrollLeft");
		zoomScroll.setAttribute("style", `left: ${left};`);

		setCount(count - 10);
		setLeft(left + 5);
		console.log(count);

		if (count < 100) {
			const zoomD = document.getElementById("container");
			zoomD.setAttribute("style", `position: initial; zoom: ${count}%;`);
		}
	};

	// console.log(chartList);

	return (
		<TemplateLogged>
			<div className="relative">
				<div id="container" className="org-tree zoom snap-mandatory snap-x ">
					<div id="scrollLeft" className="child ">
						<CardChart chartData={chartList} />
					</div>
				</div>

				<div className="pb-32 buttons-float ">
					<button
						onClick={counterBtn}
						className={
							isMobile
								? "text-red-500 bold text-4xl bg-gray-100 w-2 h-2 flex items-center justify-center rounded-full p-4 m-2"
								: "text-blue-800 bold text-4xl bg-gray-100 w-2 h-2 flex items-center justify-center rounded-full p-4 m-2"
						}
					>
						+
					</button>
					<button
						onClick={counterBtn2}
						className={
							isMobile
								? "text-red-500 bold text-4xl bg-gray-100 w-2 h-2 flex items-center justify-center rounded-full p-4 m-2"
								: "text-blue-800 bold text-4xl bg-gray-100 w-2 h-2 flex items-center justify-center rounded-full p-4 m-2"
						}
					>
						-
					</button>
				</div>
			</div>
		</TemplateLogged>
	);
};

export default ChartFirebase;
