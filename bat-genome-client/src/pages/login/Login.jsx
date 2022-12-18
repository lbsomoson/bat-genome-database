import { useState } from "react";
import { useNavigate } from "react-router-dom";

// For input validation
import { useForm } from "react-hook-form";

import {	ThemeProvider,
	Typography,
	Box,
	TextField,
	Button,
	Grid,
	InputAdornment,
	IconButton,} from "@mui/material";

import { theme } from "../../theme";

// Import Icons
import { GroupWork, Visibility, VisibilityOff } from "@mui/icons-material";

import { errorMsgs } from "./errors";
// Import Styles
import "./login.css";

export default function Login() {
		// Navigation
		const navigate = useNavigate();

		// States to toggle password visibility
		const [showPassword, setShowPassword] = useState(false);
	
		const togglePassword = () => {
			setShowPassword(!showPassword);
		};
	
		// For input validation
		const {
			register,
			handleSubmit,
			formState: { errors },
		} = useForm();
	
		// Submit data
		const onSubmit = (data) => {
			console.log(data);
			alert("Click login");
		};
	return (
		<ThemeProvider theme={theme}>
			<Box className="mainDiv" bgcolor="primary.main">
				{/* Form */}
				<Box className="wholeDiv">
					<Box className="pageName" bgcolor="primary.main" width="100%">
							<GroupWork color="white" sx={{ width: "70px", height: "70px" }} />
							<Typography
								color="primary.white"
								sx={{ fontSize: "40px", fontWeight: " 700", letterSpacing: "0.15px", lineHeight: "44px" }}
							>
								Bat Genome Database
							</Typography>
					</Box>
					<Box className="bottomDiv" bgcolor="primary.white">
						<Typography
							color="primary.main"
							display="inline"
							sx={{ fontSize: "32px", fontWeight: "500px", marginBottom: "20px"}}
						>	
							Login
						</Typography>
						{/* Form */}
						<Grid container spacing={2}>
							<Grid item md={12}>
								<TextField
									required
									label="Email"
									variant="outlined"
									fullWidth
									type="email"
									{...register("email", {
										required: errorMsgs.email.required,
										pattern: {
											value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
											message: errorMsgs.email.invalid,
										},
									})}
									error={!!errors?.email}
									helperText={errors?.email ? errors.email.message : ""}
								/>
							</Grid>
							<Grid item md={12}>
								<TextField
									required
									label="Password"
									variant="outlined"
									fullWidth
									type={showPassword ? "text" : "password"}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton onClick={togglePassword}>
													{showPassword ? <Visibility /> : <VisibilityOff />}
												</IconButton>
											</InputAdornment>
										),
									}}
									{...register("password", {
										required: errorMsgs.password.required,
										pattern: {
											value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$$/,
											message: errorMsgs.password.invalid,
										},
									})}
									error={!!errors?.password}
									helperText={errors?.password ? errors.password.message : ""}
								/>
							</Grid>

						</Grid>

						{/* Button */}
						<Box className="buttonDiv">
							<Button
								type="submit"
								variant="contained"
								fullWidth
								sx={{ padding: "10px" }}
								onClick={handleSubmit(onSubmit)}
							>
								Login
							</Button>
							<Typography color="primary.gray" sx={{ marginTop: "10px" }}>
								Don't have an account?
								<Typography
									display="inline"
									color="primary.main"
									sx={{ margin: "0 4px", fontWeight: "500", cursor: "pointer" }}
									onClick={() => {
										navigate("/createaccount");
									}}
								>
									Create one here.
								</Typography>
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
