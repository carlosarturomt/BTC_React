import React from "react";

function UlList({ section, liOne, liTwo, liThree, liFourHref,liFour, classN }) {
	return (
		// <ul className="text-gray-100 py-2 px-8" className={class}>
		<ul className={classN + ' text-gray-100 py-2 px-8 border-l border-gray-400'} >
			<h5 className="text-2xl font-semibold text-gray-400">Company</h5>
			<li className="">
				<a href="/">{section}</a>
			</li>
			<li className="">
				<a href="/">{liOne}</a>
			</li>
			<li className="">
				<a href="/">{liTwo}</a>
			</li>
			<li className="">
				<a href="/">{liThree}</a>
			</li>
			<li className="">
				<a href={liFourHref}>{liFour}</a>
			</li>
		</ul>
	);
}

export {UlList}