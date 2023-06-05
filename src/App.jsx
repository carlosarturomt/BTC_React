import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	HashRouter,
	NavLink,
} from "react-router-dom";
import { Home } from "./views/Home";
import { Jobs } from "./views/Jobs";
import Signup from "./views/Signup";
import LoginBF from "./views/LoginBF";
import { DetailVacancy } from "./views/Detail/DetailVacancy";
import { PaginatedItems } from "./views/Test";
import { Admin } from "./components/Admin";
import { AdminUpdate } from "./views/Admin/updateIndex";
import { CreateVacancyPanel } from "./components/Admin/CreateVacancyPanel";
import { ApplyVacancy } from "./views/User/ApplyVacancy";
import { Candidates } from "./views/Admin/Candidates";
import { Error404 } from "./views/404";
import { Template } from "./templates/Template";
import { DetailCandidate } from "./views/Detail/DetailCandidate";

function App() {
	return (
		<div>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/jobs" element={<Jobs />} />
					<Route path="/login" element={<LoginBF />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/logged" element={<Admin />} />
					<Route path="/logged/create" element={<CreateVacancyPanel />} />
					<Route path="/logged/candidates" element={<Candidates />} />
					<Route path="/jobs/:id" element={<DetailVacancy />} />
					<Route path="/apply/:id" element={<ApplyVacancy />} />
					<Route path="/logged/candidates/:id" element={<DetailCandidate />} />
					<Route path="/logged/edit/:id" element={<AdminUpdate />} />
					<Route path="/test" element={<PaginatedItems itemsPerPage={4} />} />
				</Routes>
			</HashRouter>
			{/* <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/jobs" element={<Jobs />} />
					<Route path="/login" element={<LoginBF />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/logged" element={<Admin />} />
					<Route path="/logged/create" element={<CreateVacancyPanel />} />
					<Route path="/logged/candidates" element={<Candidates />} />
					<Route path="/jobs/:id" element={<DetailVacancy />} />
					<Route path="/apply/:id" element={<ApplyVacancy />} />
					<Route path="/logged/candidates/:id" element={<DetailCandidate />} />
					<Route path="/logged/edit/:id" element={<AdminUpdate />} />
					<Route path="/test" element={<PaginatedItems itemsPerPage={4} />} />
					<Route
						path="*"
						element={
							<Template>
								<Error404 />
							</Template>
						}
					/>
				</Routes>
			</BrowserRouter> */}
		</div>
	);
}

export default App;
