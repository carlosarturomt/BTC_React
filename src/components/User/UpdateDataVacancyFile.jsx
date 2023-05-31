import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function UpdateDataVacancyFile() {
	const [file, setFile] = useState({});
	const storage = getStorage();
	const storageRef = ref(storage, `candidates/${file.name}`);

	//F O R M
	const fileHandler = (event) => {
		const file = event.target.files[0];
		setFile(file);
		console.log(file);
	};

	const saveData = () => {
		// FILE
		uploadBytes(storageRef, file).then((snapshot) => {
			console.log("Uploaded file!");
		})
		// LoadBundleTaskProgress.TaskState.RUNNING
		// getDownloadURL(
		// 	ref(storage, storageRef).then(function (getDownloadURL) {
		// 		console.log(getDownloadURL);
		// 	})
		// );
	};

	// const alertSend = () => {
	// 	saveData();
	// };

	return (
		<div>
			<div className="my-4">
				<label htmlFor="" className="text-gray-300 text-sm">
					Adjuntar CV
				</label>
				<input
					type="file"
					name="candidateGrade"
					className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"
					onChange={fileHandler}
				/>
			</div>
			<button
				className="bg-[#2f7ce07f] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3d79f0b4] ml-0 animate-pulse hover:animate-none flex items-center mb-8"
				type="button"
				onClick={saveData}
			>
				Upload CV
				<span className="material-symbols-outlined">
					<span className="material-symbols-outlined ml-2">cloud_upload</span>
				</span>
			</button>
		</div>
	);
}

export { UpdateDataVacancyFile };
