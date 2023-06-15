import React, { Fragment, useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const CardChart = (props) => {
	const { chartData } = props;
	const { area, name, position, children } = chartData;

	const [chartList, setChartList] = useState({});
	const database = getDatabase();
	const chartRef = ref(database, "/chart/children/0/children/0/children/0");

	const currentItems = Object.keys(chartList);
	// const List = [...currentItems];

	useEffect(() => {
		onValue(chartRef, (snapshot) => {
			setChartList(snapshot.val());
		});
	}, []);

	return (
		<ul>
			{/* {chartList.map((key) => ( */}
			<Fragment key={name}>
				<li>
					<div className="card">
						<div className="card-body">
							<h2 className="text-slate-400 text-xs  ">{area}</h2>
							<h2 className="font-bold text-sm ">{name}</h2>
							<h2 className="text-slate-400 text-xs ">{position}</h2>
						</div>
						{chartList.children?.length && (
							<CardChart data={chartList.children} />
						)}
					</div>
				</li>
			</Fragment>
			{/* ))} */}
		</ul>
	);
};
export { CardChart };
