import "./Topbar.css";
import { useState } from "react";
import {
	NavLink,
	useNavigate,
	useLocation
} from "react-router-dom";



/**
 * This component is the navigation bar shown at the top of every page after a user has logged in.
 */
const Topbar = () => {
	const [login, setLogin] = useState(false);
	console.log("user has logged_in", login);
	
	let navigate = useNavigate();

	let currLoc = useLocation();
	console.log(currLoc);

	return (
		<div className="topBar">
			<div className="topBarWrapper">

				{/* app icon and app name */}
				<div className="topLeft">
					<h1>
						<a className="logo" href="http://localhost:3000/">
							Bat Genome Database
						</a>
					</h1>
				</div>
				
				{/* navigation pages */}
				<div className="topRight">
					<ul className="pages">
						<li className="topBarButton">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive? "active" : "inactive"
								}
							>
								Home
							</NavLink>
						</li>

						<li className="topBarButton">
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive? "active" : "inactive"
								}
							>
								About
							</NavLink>
						</li>

						<li className="topBarButton">
							<NavLink
								to="/strain"
								className={({ isActive }) =>
									isActive? "active" : "inactive"
								}
							>
								Strain
							</NavLink>
						</li>

						<li className="topBarButton">
							<NavLink
								to="/taxonomy"
								className={({ isActive }) =>
									isActive? "active" : "inactive"
								}
							>
								Taxonomy
							</NavLink>
						</li>

						<li className="topBarButton">
							<NavLink
								className={({ isActive }) =>
									isActive? "active" : "inactive"
								}
								to={
								login === undefined || login === "false"
									? "/login"
									: "/profile"
								}
							>
								{login === undefined || login === "false"
								? "Login"
								: "Profile"}{" "}
							</NavLink>
						</li>

						{login === undefined || login === "false" ? (
							<div></div>
						) : (
							<li
								className="topBarButton"
								onClick={() => {
									localStorage.clear();
									navigate("/login");
									window.location.reload();
								}}
							>
								<NavLink
									to="/login"
									className={({ isActive }) =>
										isActive? "active" : "inactive"
									}
								>
									<svg
										className="w-6 h-6 logout_button"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
										/>
									</svg>
								</NavLink>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	)
}


export default Topbar;