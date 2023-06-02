import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { TemplateAdmin } from "../../templates/TemplateAdmin";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import BtnLogOut from "../../components/Buttons/BtnLogOut";
import { Template } from "../../templates/Template";
import { Error404 } from "../../views/404";

function DetailCandidate() {
	const [test, setTest] = useState(false);
	const auth = getAuth();
	const navigate = useNavigate();

	const [vacancyData, setVacancyData] = useState({});
	const { id } = useParams();
	const database = getDatabase();
	const vacancyRef = ref(database, `/candidate/${id}`);
	const {
		candidateBirthday,
		candidateName,
		candidateEmail,
		candidateGrade,
		candidateLocation,
		candidateNationality,
		candidateTel,
		candidateTel2,
		vacancyTitle,
		url,
	} = vacancyData;

	const current = new Date();
	const date = `${current.getFullYear()}-${
		current.getMonth() + 1
	}-${current.getDate()}`;
	const date_1 = new Date(date);
	const date_2 = new Date(candidateBirthday);
	const day_as_milliseconds = 86400000;
	const diff_in_millisenconds = date_1 - date_2;
	const diff_in_days = diff_in_millisenconds / day_as_milliseconds;
	const age = diff_in_days / 365;

	useEffect(() => {
		onValue(vacancyRef, (snapshot) => {
			setVacancyData(snapshot.val());
		});
	}, []);

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/");
				console.log("Signed out successfully");
			})
			.catch((error) => {
				// An error happened.
				console.log("error");
			});
	};

	if (
		useEffect(() => {
			onAuthStateChanged(auth, (user) => {
				if (user.email == "carlosarturomt@gmail.com") {
					console.log("Welcome to Deatil Candidates Panel");
					// console.log("Welcome", user.email);
					setTest(true);
				} else {
					setTest(false);
				}
			});
		})
	) {
	}

	return (
		<div>
			{test ? (
				<TemplateAdmin
					logOut={<BtnLogOut>{handleLogout}</BtnLogOut>}
					content={
						<main className="flex justify-center flex-col items-center mb-8">
							<section className="bg-[#022e5f21] w-full max-w-4xl sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md">
								<header className="pb-4 w-full border-b-2 border-[#ffffff21]">
									<span className="text-slate-400 text-sm">{vacancyTitle}</span>

									<h1 className="font-bold text-2xl flex justify-between text-gray-100">
										{candidateName}
										<span className="text-slate-500 text-sm font-light">
											{candidateBirthday == date
												? candidateBirthday
												: Math.trunc(age) + " years"}
										</span>
									</h1>
									<p className="font-bold text-gray-200">{candidateGrade}</p>

									<div className="flex items-center gap-3 mt-2">
										<span className="flex items-center bg-[#ffffff17] hover:animate-pulse text-slate-400 rounded-full py-0 text-sm pl-2 pr-4">
											<span className="p-1 material-symbols-outlined">
												call
											</span>
											<a
												href={"tel:+52" + candidateTel}
												target="_blank"
												rel="noopener noreferrer"
											>
												{candidateTel}
											</a>
										</span>
										<span className="text-slate-400 text-sm hover:animate-pulse">
											<a
												href={"mailto:" + candidateEmail}
												target="_blank"
												rel="noopener noreferrer"
												className="flex  items-center"
											>
												<span className="material-symbols-outlined">mail</span>
												{candidateEmail}
											</a>
										</span>

										<span className="text-slate-400 text-sm flex gap-1 items-center">
											<span className="material-symbols-outlined">
												home_pin
											</span>
											{candidateLocation}
										</span>
									</div>
								</header>

								<article className="py-2">
									<aside className="py-2">
										<h3 className="font-bold text-lg text-gray-100">
											About me
										</h3>
										<div className="text-slate-300">
											<p className="flex">
												Hola!
												<span className="animate-bounce">😁</span>
											</p>
											<p>
												Soy {candidateName}{" "}
												{age <= 10 ? "" : `, tengo ${Math.trunc(age)} años`}, es
												un placer postularme en la vacante de '{vacancyTitle}',
												será un placer ser parte del proceso de selección.
											</p>
											{/* <p>{ candidateEmail == '' ? ''
										: `Pueden contactarme a través de mi correo ${candidateEmail} `}</p> */}
										</div>
									</aside>

									<aside className="py-2">
										<h3 className="font-bold text-lg text-gray-100">Details</h3>
										<p className="flex items-center">
											<span className="text-gray-100 flex items-center w-[fit-content]">
												{/* <span className="material-symbols-outlined">cake</span> */}
												Birthday:
											</span>
											<span className="text-slate-300 ml-1">
												{candidateBirthday}
											</span>
										</p>

										<p className="flex items-center">
											<span className="text-gray-100 flex items-center w-[fit-content]">
												{/* <span className="material-symbols-outlined">
											contact_phone
										</span> */}
												<span>Contact Phone:</span>
											</span>
											<span className="text-slate-300 ml-1">
												{" "}
												{candidateTel}
											</span>
										</p>

										<p className="flex items-center">
											<span className="text-gray-100 flex items-center w-[fit-content]">
												{/* <span className="material-symbols-outlined">
										contact_emergency
										</span> */}
												<span>Contact Emergency:</span>
											</span>
											<span className="text-slate-300 ml-1">
												{" "}
												{candidateTel2}
											</span>
										</p>

										<p className="flex items-center">
											<span className="text-gray-100 flex items-center w-[fit-content]">
												{/* <span className="material-symbols-outlined">
										contact_emergency
										</span> */}
												<span>Degree:</span>
											</span>
											<span className="text-slate-300 ml-1">
												{" "}
												{candidateGrade}
											</span>
										</p>

										<p className="flex items-center">
											<span className="text-gray-100 flex items-center w-[fit-content]">
												{/* <span className="material-symbols-outlined">
										contact_emergency
										</span> */}
												<span>Nationality:</span>
											</span>
											<span className="text-slate-300 ml-1">
												{candidateNationality}
											</span>
										</p>

										<a
											className="mt-6 w-[fit-content] bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30] animate-pulse"
											href={url}
											target="_blank"
											rel="noopener noreferrer"
										>
											<span className="material-symbols-outlined">
												cloud_download
											</span>
											Download CV
										</a>
									</aside>
								</article>
							</section>
						</main>
					}
				/>
			) : (
				<Template>
					<Error404 />
				</Template>
			)}
		</div>
	);
}

export { DetailCandidate };
