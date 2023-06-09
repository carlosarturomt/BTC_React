import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { Jobs } from "./views/Jobs";
import { DetailVacancy } from "./views/Detail/DetailVacancy";
import { PaginatedItems } from "./views/Test";
import { Admin } from "./components/Admin";
import { AdminUpdate } from "./views/Admin/updateIndex";
import { CreateVacancyPanel } from "./components/Admin/CreateVacancyPanel";
import { ApplyVacancy } from "./views/User/ApplyVacancy";
import { Candidates } from "./views/Admin/Candidates";
import { Error404 } from "./views/404";
import { DetailCandidate } from "./views/Detail/DetailCandidate";
import { TemplateLogged } from "./templates/TemplateLogged";
import Login from "./views/Login";
import Signup from "./views/Signup";

function App() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />

					<Route path="/jobs" element={<Jobs />} />
					<Route path="/jobs/:id" element={<DetailVacancy />} />
					<Route path="/jobs/:id/apply" element={<ApplyVacancy />} />

					<Route path="/logged" element={<Admin />} />
					<Route path="/logged/create" element={<CreateVacancyPanel />} />
					<Route path="/logged/candidates" element={<Candidates />} />
					<Route path="/logged/candidates/:id" element={<DetailCandidate />} />
					<Route path="/logged/edit/:id" element={<AdminUpdate />} />
					<Route path="*" element={<TemplateLogged content={<Error404 />} />} />
					<Route path="/test" element={<PaginatedItems itemsPerPage={4} />} />
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
