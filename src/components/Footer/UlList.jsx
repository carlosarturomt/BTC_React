import React from "react";
import { NavLink } from "react-router-dom";

function UlList({ section, liOne, liTwo, liThree, liFourHref,liFour, classN }) {
	return (
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
			<NavLink to={liFourHref}>{liFour}</NavLink>
		</ul>
	);
}

export {UlList}