import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import PrivacyPolicy from "pages/PrivacyPolicy";

function App() {
	return (
		<div className="bg-white">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
