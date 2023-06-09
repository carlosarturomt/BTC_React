import React, { useState, useEffect, useRef } from "react";
import {
	dropdown_wrapper,
	dropdown_item_list,
	active,
	item_list,
} from "./dropdown.module.css";

function BtnFilter({ items = [], dropdownTitle }) {
	const activatorRef = useRef(null);
	const dropdownListRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const clickHandler = () => {
		setIsOpen(!isOpen);
	};

	const keyHandler = (event) => {
		if (event.key === "Escape" && isOpen) {
			setIsOpen(false);
		}
	};

	const clickOutsideHandler = (event) => {
		if (dropdownListRef.current) {
			if (
				dropdownListRef.current.contains(event.target) ||
				activatorRef.current.contains(event.target)
			) {
				return;
			}

			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			dropdownListRef.current.querySelector("button").focus();
			document.addEventListener("mousedown", clickOutsideHandler);
		} else {
			document.addEventListener("mousedown", clickOutsideHandler);
		}
	}, [isOpen]);

	return (
		<div className={dropdown_wrapper} onKeyUp={keyHandler}>
			<button
				className="h-fit py-1 px-2 rounded text-gray-400 bg-[#ffffff17] font-medium text-sm text-center inline-flex items-center ml-2 my-1"
				aria-haspopup="true"
				aria-controls={dropdownTitle}
				onClick={clickHandler}
				ref={activatorRef}
			>
				{dropdownTitle}{" "}
				{isOpen ? (
					<svg
						height="24"
						fill="rgb(70,70,70)"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="m0 0h24v24h-24z" fill="none" />
						<path d="m7.41 15.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z" />
					</svg>
				) : (
					<svg
						height="24"
						fill="rgb(70,70,70)"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="m0 0h24v24h-24z" fill="none" />
						<path d="m7.41 8.59 4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
					</svg>
				)}
			</button>
			<ul
				ref={dropdownListRef}
				className={`${dropdown_item_list} ${isOpen ? active : ""} `}
			>
				{items.map((item, index) => {
					return (
						<li className={item_list} key={index}>
							<button
								className="w-full py-1 px-4 text-gray-100 hover:bg-[#ffffff42] ml-0 animate-pulse hover:animate-none"
								type="submit"
								value={item.anchor}
								onClick={item.slug}
							>
								{item.anchor}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export { BtnFilter };
