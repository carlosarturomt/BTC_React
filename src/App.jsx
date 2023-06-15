import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { Jobs } from "./views/Jobs";
import { DetailVacancy } from "./views/Detail/DetailVacancy";
import { PaginatedItems } from "./views/Test";
import { AdminUpdate } from "./views/Admin/updateIndex";
import { CreateVacancyPanel } from "./views/Admin/CreateVacancyPanel";
import { ApplyVacancy } from "./views/User/ApplyVacancy";
import { Candidates } from "./views/Admin/Candidates";
import { Error404 } from "./views/404";
import { DetailCandidate } from "./views/Detail/DetailCandidate";
import { TemplateLogged } from "./templates/TemplateLogged";
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";
import { Logged } from "./views/Logged";
import { About } from "./views/About";
import Chart from "./views/OrganizationChart/Chart";
import ChartFirebase from "./views/OrganizationChart/ChartFirebese";
import { Services } from "./views/Services";

function App() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />

					<Route path="/about" element={<About />} />

					<Route path="/careers" element={<Jobs />} />
					<Route path="/careers/:id" element={<DetailVacancy />} />
					<Route path="/careers/:id/apply" element={<ApplyVacancy />} />

					<Route path="/our-team" element={<ChartFirebase />} />
					<Route path="/ourteam" element={<Chart />} />
					<Route path="/services" element={<Services />} />

					<Route path="/logged" element={<Logged />} />
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
