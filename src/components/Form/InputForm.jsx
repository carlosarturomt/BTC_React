
function InputForm({label, name, on}) {

	return (
		<div className="my-4">
			<label htmlFor="" className="text-gray-300">
				{label}
			</label>
			<input
				type="text"
				name={name}
				className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
				onChange={on}
			/>
		</div>
	);
}

function LabelForm({label, name, on}) {

	return (
		<div className="my-4">
			<label htmlFor="" className="text-gray-300">
				{label}
			</label>
			<textarea
				type="text"
				name={name}
				className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff3b]"
				onChange={on}
			/>
		</div>
	);
}
export {InputForm, LabelForm}
