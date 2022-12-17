import { ThemeProvider, Typography, Box, TextField, Button, Grid } from "@mui/material";

// Import theme
import { theme } from "../../theme";

// Import Icons
import GroupWorkIcon from "@mui/icons-material/GroupWork";
/* import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"; */

// Import Styles
import "./createAccount.css";

export default function CreateAccount() {
	return (
		<ThemeProvider theme={theme}>
			<Box className="mainDiv" bgcolor="primary.white">
				{/* Left Side */}
				<Box bgcolor="primary.main" className="leftDiv">
					<Box className="pageName">
						<GroupWorkIcon color="white" sx={{ width: "70px", height: "70px" }} />
						<Typography
							color="primary.white"
							sx={{ fontSize: "40px", fontWeight: " 700", letterSpacing: "0.15px", lineHeight: "44px" }}
						>
							Bat Genome Database
						</Typography>
					</Box>
					<Typography
						color="primary.white"
						sx={{ marginTop: "20px", marginBottom: "20px", fontWeight: "400", lineHeight: "28px" }}
					>
						Bat Genome Database is ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
						ut aliquip ex ea commodo consequat.
					</Typography>
				</Box>

				{/* Right Side */}
				<Box className="rightDiv">
					<Typography
						color="primary.main"
						sx={{ fontSize: "40px", fontWeight: "500px", marginBottom: "30px" }}
					>
						Create an Account
					</Typography>
					{/* Form */}
					<Grid container spacing={2}>
						<Grid item md={6}>
							<TextField label="Name" variant="outlined" fullWidth />
						</Grid>

						<Grid item md={6}>
							<TextField label="Username" variant="outlined" fullWidth />
						</Grid>

						{/* TODO: Add validation */}
						<Grid item md={6}>
							<TextField label="Email" variant="outlined" fullWidth />
						</Grid>

						<Grid item md={6}>
							<TextField label="Phone Number" variant="outlined" fullWidth />
						</Grid>

						<Grid item md={12}>
							<TextField label="Address" variant="outlined" fullWidth />
						</Grid>

						<Grid item md={12}>
							<TextField label="Password" variant="outlined" fullWidth />
						</Grid>

						<Grid item md={12}>
							<TextField label="Confirm Password" variant="outlined" fullWidth />
						</Grid>
					</Grid>

					{/* Button */}
					<Box className="buttonDiv">
						<Button variant="contained" fullWidth sx={{ padding: "10px" }}>
							Create Account
						</Button>
						<Typography color="primary.gray" sx={{ marginTop: "10px" }}>
							Already have an account?
							<Typography
								display="inline"
								color="primary.main"
								sx={{ margin: "0 4px", fontWeight: "500", cursor: "pointer" }}
							>
								Login.
							</Typography>
						</Typography>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
