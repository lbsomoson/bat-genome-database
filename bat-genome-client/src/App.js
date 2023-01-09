/* Router and Context */
import { Outlet, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserDetailsProvider } from "./context/UserDetailsProvider";

/* Components */
import { Topbar } from "./components/index";

/* Pages */
import {
	AddStrain,
	EditStrain,
	CreateAccount,
	Home,
	Login,
	ManageUsers,
	ViewStrain,
	ViewSpecificStrain,
} from "./pages/index";

/**
 * This will set the common layout for all pages (except login and create account page)
 */
function Layout() {
	return (
		<UserDetailsProvider>
			<nav>
				<Topbar />
			</nav>
			<Outlet />
		</UserDetailsProvider>
	);
}

/**
 * Main function for App.jsx
 */
export default function App() {
	return (
		<Router>
			<Routes>
				{/* Login and Create Account page do not have the topbar */}
				<Route path="/login" element={<Login />} />
				<Route path="/createaccount" element={<CreateAccount />} />

				{/* Pages with topbar */}
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="view/strain" element={<ViewStrain />} />
					<Route path="view/specificstrain" element={<ViewSpecificStrain />} />
					<Route path="add/strain" element={<AddStrain />} />
					<Route path="edit/strain" element={<EditStrain />} />
					<Route path="users" element={<ManageUsers />} />
				</Route>
			</Routes>
		</Router>
	);
}
