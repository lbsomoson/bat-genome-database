
/* Context */
import { theme } from "../../theme";
import { userDetailsContext } from "../../context/UserDetailsProvider";

/* Hooks and Routing */
import { NavLink } from "react-router-dom";
import {
	useContext,
	useEffect,
	useState
} from "react";

/* Material UI */
import { MenuIcon, AccountCircle } from '@mui/icons-material';
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
	Typography
} from "@mui/material";


/* Menu items */
const pages = [
	{ text: 'Home', href: '/' },
	{ text: 'View Strains', href: '/view/strain' },
	{ text: 'Manage Users', href: '/users' },
	{ text: 'Login', href: '/login' },
	{ text: 'Create Account', href: '/createaccount' },
	// { text: 'Logout', href: '/' }
];
const settings = [
	{ text: 'Profile', href: '/profile' },
	{ text: 'Logout', href: '/' }
];


/**
 * This component is the navigation bar located at the top of every page.
 * Only main navigation pages will be shown for the topbar.
 */
const TopBar = () => {
	const [userDetails, setUserDetails] = useContext(userDetailsContext);
  const [anchorUser, setAnchorUser] = useState(null);

	// for testing with a logged in account
	// useEffect(() => {
	// 	setUserDetails({
	// 		user: 'Lara',
	// 		role: 'admin'
	// 	})
	
	// 	console.log(userDetails);
	// }, []);

  const handleOpenProfileMenu = (event) => {
    setAnchorUser(true);
  };

  const handleCloseProfileMenu = () => {
    setAnchorUser(null);
  };
	
	const renderProfileMenu = (
		<Menu
			sx={{ mt: '45px' }}
			id="menu-appbar"
			anchorEl={anchorUser}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={Boolean(anchorUser)}
			onClose={handleCloseProfileMenu}
		>
			{settings.map((setting) => (
				<MenuItem key={setting.text} onClick={handleCloseProfileMenu}>
					<Typography textAlign="center">{setting.text}</Typography>
				</MenuItem>
			))}
		</Menu>
	);

	const renderNavPages = (excluded) => {
		return (
			<>
				{pages.map((page, idx) => (
					excluded.includes(page.text) ?
						<></>
						: <Button
							key={idx}
							variant="text"
							sx={{ fontSize:'16px', mx:2 }}
						>
							<NavLink
								style={({ isActive }) =>
									isActive ? { fontWeight: '900', textDecoration: 'none', color: "white" }
										: { fontWeight: '400', textDecoration: 'none', color: "white" }
								}
								to={page.href}
							>
								{page.text}
							</NavLink>
						</Button>
				))}
			</>
		)
	}

	return (
		<ThemeProvider theme={theme}>
			<AppBar component="nav" >
				<Container maxWidth="xl" >
					<Toolbar disableGutters>
						<Typography
							noWrap
							component="div"
							sx={{
								fontSize: '25px',
								fontWeight: 700,
								display: { xs: 'none', md: 'block' }
							}}
						>
							Bat Genome Database
						</Typography>

						<Box sx={{ flexGrow: 1 }} />

						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							{userDetails != null ?
									userDetails.role === "admin" ?
											renderNavPages(["Login", "Create Account"])
										: renderNavPages(["Login", "Create Account", "Manage Users"])
								:renderNavPages(["Manage Users"])
							}

							{userDetails == null ?
								<></>
								: <Tooltip title="Open settings">
									<IconButton
										size="large"
										edge="end"
										aria-label="account of current user"
										aria-haspopup="true"
										onClick={handleOpenProfileMenu}
										color="inherit"
									>
										<AccountCircle />
									</IconButton>
								</Tooltip>
							}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
  );
}


export default TopBar;