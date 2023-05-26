import React from "react";

function CreateVacancy(props) {
    // const {functionsForm} = props
    // const {
    //     saveData
    // } = functionsForm

	return (
		<section className="flex justify-center flex-col items-center pb-28 px-2">
			<form className="w-full max-w-4xl">
				<div className="my-4">
					<label htmlFor="" className="text-gray-300">
						Vacante:
					</label>
					<input
						type="text"
						name="vacancyTitle"
						className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
						// onChange={changeHandler}
					/>
				</div>
			</form>
			<div className="flex justify-end w-full max-w-4xl">
				{/* <button
					// prop1={ props.children }
					className="border border-gray-400 rounded-md px-4 py-1 text-gray-400 hover:text-gray-200 hover:border-gray-200"
				>
					Logout
				</button> */}
                <button
					onClick={ props.children }
					className="border border-gray-400 rounded-md px-4 py-1 text-gray-400 hover:text-gray-200 hover:border-gray-200"
				>
					LogIn
				</button>

                {/* {props.children} */}
			</div>
		</section>
	);
}

export { CreateVacancy };
