import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Jobs } from "./views/Jobs";
import Signup from "./views/Signup";
import Login from "./views/Login";
import { Create } from "./components/Create";
import { DetailVacancy } from "./views/Detail/DetailVacancy";
// import { Test } from "./views/Test";
import { PaginatedItems } from "./views/Test";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/create" element={<Create />} />
				<Route path="/jobs/:id" element={<DetailVacancy />} />
				<Route path="/test" element={<PaginatedItems itemsPerPage={4} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
