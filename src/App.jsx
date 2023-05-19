import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Jobs } from "./views/Jobs";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/jobs" element={<Jobs />} />
				{/* <Route path="/edit/:id" element={<EditEmployee />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
