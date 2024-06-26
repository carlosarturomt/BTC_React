import React, { Fragment, useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const CardChart = (props) => {
	// const [filter_data, setFilterData] = useState([]);
	const { chartData } = props;
	const { area, name, position, children } = chartData;

	const [chartList, setChartList] = useState({});
	const database = getDatabase();
	const chartRef = ref(database, "/chart/children/");

	const currentItems = Object.entries(chartList);
	// const currentItems = chartList;
	const List = [...currentItems];

	// useEffect(() => {
	// 	onValue(chartRef, (snapshot) => {
	// 		setChartList(snapshot.val());
	// 	});
	// }, []);

	useEffect(() => {
		return onValue(chartRef, (snapshot) => {
			const data = snapshot.val();

			if (snapshot.exists()) {
				Object.entries(data).forEach(([key, value]) => {
					value.id = key;
					setChartList((list) => [list, value]);
					// setFilterData((list) => [...list, value]);
				});
			}
		});
	}, []);

	console.log(List);
	return (
		<ul>
			{List.map((key) => (
				<Fragment key={key}>
					<li>
						<div className="card">
							<div className="card-body">
								<h2 className="text-slate-400 text-xs  ">{area}</h2>
								<h2 className="font-bold text-sm ">{name}</h2>
								<h2 className="text-slate-400 text-xs ">{position}</h2>
							</div>
							{List.children?.length && <CardChart data={List.children} />}
						</div>
					</li>
				</Fragment>
			))}
		</ul>
	);
};
export { CardChart };
