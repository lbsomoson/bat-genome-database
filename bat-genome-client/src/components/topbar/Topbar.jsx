/* Context */
import { theme } from "../../theme";
import { userDetailsContext } from "../../context/UserDetailsProvider";

/* Hooks and Routing */
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";

/* Material UI */
import { AccountCircle, GroupWork, MenuRounded } from "@mui/icons-material";
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	ThemeProvider,
	Typography,
} from "@mui/material";

/* Main Navigation Pages */
const pages = [
	{ text: "Home", href: "/" },
	{ text: "View Strains", href: "/view/strain" },
	{ text: "Manage Users", href: "/users" },
	{ text: "Login", href: "/login" },
	{ text: "Create Account", href: "/createaccount" },
];

/**
 * This component is the navigation bar located at the top of every page.
 * Only main navigation pages will be shown for the topbar.
 */
const TopBar = () => {
	const [userDetails, setUserDetails] = useContext(userDetailsContext);

	const [anchorUser, setAnchorUser] = useState(null);
	const [anchorNav, setAnchorNav] = useState(null);

	const anchorRef = useRef();

	/**
	 *  -----for testing with a logged in account
	 * initial state will show that an account is logged in
	 */
	useEffect(() => {
		setUserDetails({
			user: "Sample User",
			role: "admin",
		});

		console.log(userDetails);

		// eslint-disable-next-line
	}, []);

	/**
	 * Handlers for opening and closing of the user account and mobile navigation menu
	 */
	const handleOpenAccountMenu = (event) => {
		setAnchorUser(event.currentTarget);
	};

	const handleOpenNavMenu = (event) => {
		setAnchorNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorNav(null);
	};

	const handleCloseAccountMenu = () => {
		setAnchorUser(null);
	};

	/**
	 * Handler for user account logout event
	 */
	const handleLogout = () => {
		setUserDetails(null);
	};

	/**
	 * Renders desktop navigation pages based on user role
	 */
	const renderNavPages = (excluded) => {
		return (
			<>
				{pages.map((page, idx) =>
					excluded.includes(page.text) ? null : (
						<Button key={idx} variant="text" sx={{ fontSize: "16px", mx: 2 }}>
							<NavLink
								to={page.href}
								style={({ isActive }) =>
									isActive
										? { fontWeight: "900", textDecoration: "none", color: "white" }
										: { fontWeight: "400", textDecoration: "none", color: "white" }
								}
							>
								{page.text}
							</NavLink>
						</Button>
					)
				)}
			</>
		);
	};

	/**
	 * Renders mobile navigation pages based on user role
	 */
	const renderMobilePages = (excluded) => {
		return (
			<div>
				{pages.map((page, idx) =>
					excluded.includes(page.text) ? null : (
						<MenuItem key={idx} component={NavLink} to={page.href} onClick={handleCloseNavMenu}>
							{page.text}
						</MenuItem>
					)
				)}
			</div>
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<AppBar component="nav">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						{/* -----Mobile View----- */}
						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							{/* Menu Burger Icon */}
							<IconButton
								size="large"
								aria-controls="nav-mobile-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuRounded />
							</IconButton>

							{/* Menu for navigation pages */}
							<Menu
								id="pages-mobile"
								anchorEl={anchorNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorNav)}
								sx={{ display: { xs: "block", md: "none" } }}
							>
								{userDetails != null
									? userDetails.role === "admin"
										? renderMobilePages(["Login", "Create Account"])
										: renderMobilePages(["Login", "Create Account", "Manage Users"])
									: renderMobilePages(["Manage Users"])}
							</Menu>
						</Box>

						{/* App Name */}
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{
								fontWeight: 700,
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
							}}
						>
							Bat Genome Database
						</Typography>
						{/* ----- */}

						{/* -----Desktop View----- */}
						{/* App Name */}
						<GroupWork color="white" sx={{ width: { xs:"", md:"50px" }  }} />
						<Typography
							noWrap
							component="div"
							sx={{
								fontSize: "25px",
								fontWeight: 700,
								display: { xs: "none", md: "block" },
							}}
						>
							Bat Genome Database
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

						{/* Navigation Pages */}
						<Box sx={{ display: { xs: "none", md: "flex" } }}>
							{userDetails != null
								? userDetails.role === "admin"
									? renderNavPages(["Login", "Create Account"])
									: renderNavPages(["Login", "Create Account", "Manage Users"])
								: renderNavPages(["Manage Users"])}
						</Box>
						{/* ----- */}

						<Box>
							{/* User Icon */}
							{userDetails == null ? null : (
								<Tooltip title="Open settings">
									<IconButton
										size="large"
										edge="end"
										aria-label="account of current user"
										aria-haspopup="true"
										onClick={handleOpenAccountMenu}
										color="inherit"
										ref={anchorRef}
									>
										<AccountCircle />
									</IconButton>
								</Tooltip>
							)}

							{/* User Account Menu */}
							<Menu
								id="menu-appbar"
								anchorEl={anchorRef.current}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorUser)}
								sx={{ mt: "34px" }}
							>
								<MenuItem
									component={NavLink}
									// to='/profile'
									onClick={() => {
										handleCloseAccountMenu();
									}}
								>
									Profile
								</MenuItem>
								<MenuItem
									component={NavLink}
									to="/"
									onClick={() => {
										handleCloseAccountMenu();
										handleLogout();
									}}
								>
									Logout
								</MenuItem>
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
	);
};

export default TopBar;
