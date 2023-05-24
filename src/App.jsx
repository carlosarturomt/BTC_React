import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Jobs } from "./views/Jobs";
import Signup from "./views/Signup";
import Welcome from "./views/Welcome";
import Login from "./views/Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/welcome" element={<Welcome />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
