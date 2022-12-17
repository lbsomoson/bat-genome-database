import { Outlet, MemoryRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
// import history from "./history";
import routes from "./Routes";

/* Components */
import CategoryList from "./components/taxonomy_handler/CategoryList";
import Topbar from "./components/topbar/Topbar";

/* Main Pages */
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Strain from "./pages/strain/Strain";
import Taxonomy from "./pages/taxonomy/Taxonomy";

/**
 * Function that will set the common layout for all pages (except login page)
 */
function Layout() {
	return (
		<>
			<nav>
				<Topbar />
			</nav>
			<Outlet />
		</>
	);
}

export default function App() {
	if (localStorage.logged_in === undefined) {
		localStorage.logged_in = false;
	}

	// axios.defaults.baseURL = "http://127.0.0.1:8000/";
	axios.defaults.baseURL = "http://202.92.144.124:8000/";
	axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.access;

	// window.onScroll = (e) => console.log("scrolled!");

	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/strain" element={<Strain />} />
					<Route exact path="/taxonomy" element={<Taxonomy />} />
				</Route>
			</Routes>
		</Router>
	);
}
