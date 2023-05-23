import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Jobs } from "./views/Jobs";
import { Loading } from "./views/Loading";
// import Login from "./views/Login";
import Signup from "./views/Signup";
import Welcome from "./views/Welcome";
import Login from "./views/Login";

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading/>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/jobs" element={<Jobs />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/welcome" element={<Welcome />} />
					{/* <Route path="/edit/:id" element={<EditEmployee />} /> */}
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
