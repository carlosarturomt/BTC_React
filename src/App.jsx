import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Jobs } from "./views/Jobs";
import Signup from "./views/Signup";
import Login from "./views/Login";
import { DetailVacancy } from "./views/Detail/DetailVacancy";
import { PaginatedItems } from "./views/Test";
import { Admin } from "./components/Admin";
import { AdminUpdate } from "./views/Admin/updateIndex";
import { CreateVacancyPanel } from "./components/Admin/CreateVacancyPanel";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/jobs/:id" element={<DetailVacancy />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/admin/create" element={<CreateVacancyPanel />} />
				<Route path="/admin/edit/:id" element={<AdminUpdate />} />
				<Route path="/test" element={<PaginatedItems itemsPerPage={4} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
