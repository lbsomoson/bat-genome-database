import { Outlet, BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components and pages
import { Topbar } from "./components/index";
import { Login, CreateAccount, Home, ViewStrain, AddStrain, ManageUsers } from "./pages/index";

/**
 * Function that will set the common layout for all pages (except login and create account page)
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
	return (
		<Router>
			<Routes>
				{/* Login and Create Account page do not have topbars */}
				<Route path="/login" element={<Login />} />
				<Route path="/createaccount" element={<CreateAccount />} />

				{/* Pages with topbars */}
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="view/strain" element={<ViewStrain />} />
					<Route path="add/strain" element={<AddStrain />} />
					<Route path="users" element={<ManageUsers />} />
				</Route>
			</Routes>
		</Router>
	);
}
