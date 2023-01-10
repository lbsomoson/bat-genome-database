import { useState } from "react";
import { useNavigate } from "react-router-dom";

// For input validation
import { useForm } from "react-hook-form";

// Import MUI components
import {
	ThemeProvider,
	Typography,
	Box,
	TextField,
	Button,
	Grid,
	InputAdornment,
	IconButton,
} from "@mui/material";

// Import theme
import { theme } from "../../theme";

// Import Icons
import { GroupWork, Visibility, VisibilityOff } from "@mui/icons-material";

// Import Styles
import "./createAccount.css";

// Import error messages
import { errorMsgs } from "./errors";

export default function CreateAccount() {
	// Navigation
	const navigate = useNavigate();

	// States to toggle password visibility
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPass, setShowConfirmPass] = useState(false);

	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	const toggleConfirmPass = () => {
		setShowConfirmPass(!showConfirmPass);
	};

	// For input validation
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	// Submit data
	const onSubmit = (data) => {
		const user = {
			username: data.username,
			name: data.name,
			email: data.email,
			phoneNumber: data.phoneNum,
			address: data.address,
			password: data.password,
			role: "user",
		};

		// send a POSt request to localhost:3001/login
		fetch("http://localhost:3001/signUp", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((body) => {
				// For other prompts
				if (body.success) {
					alert("Successfully saved");
					navigate("/login");
				} else {
					alert("Failed to save user");
				}
			});
	};

	return (
		<ThemeProvider theme={theme}>
			<Box className="mainDiv" bgcolor="primary.white">
				{/* Left Side */}
				<Box bgcolor="primary.main" className="leftDiv">
					<Box className="pageName">
						<GroupWork color="white" sx={{ width: "70px", height: "70px" }} />
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
						The <b> Bat Genome Database</b> is a web-based platform that enables users to access and
						contribute information about the genomes of various strains of bats.
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
							<TextField
								required
								label="Name"
								name="name"
								variant="outlined"
								fullWidth
								{...register("name", {
									required: errorMsgs.name.required,
								})}
								error={!!errors?.name}
								helperText={errors?.name ? errors.name.message : ""}
							/>
						</Grid>

						<Grid item md={6}>
							<TextField
								required
								label="Username"
								variant="outlined"
								fullWidth
								{...register("username", {
									required: errorMsgs.username.required,
								})}
								error={!!errors?.username}
								helperText={errors?.username ? errors.username.message : ""}
							/>
						</Grid>

						<Grid item md={6}>
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

						<Grid item md={6}>
							<TextField
								required
								label="Phone Number"
								variant="outlined"
								fullWidth
								{...register("phoneNum", {
									required: errorMsgs.phone.required,
									pattern: {
										value: /^(09|\+639)\d{9}$/,
										message: errorMsgs.phone.invalid,
									},
								})}
								error={!!errors?.phoneNum}
								helperText={errors?.phoneNum ? errors.phoneNum.message : ""}
							/>
						</Grid>

						<Grid item md={12}>
							<TextField
								required
								label="Address"
								variant="outlined"
								fullWidth
								{...register("address", {
									required: errorMsgs.address.required,
								})}
								error={!!errors?.address}
								helperText={errors?.address ? errors.address.message : ""}
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

						<Grid item md={12}>
							<TextField
								required
								label="Confirm Password"
								variant="outlined"
								fullWidth
								type={showConfirmPass ? "text" : "password"}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={toggleConfirmPass}>
												{showConfirmPass ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									),
								}}
								{...register("confirmPass", {
									required: errorMsgs.confirmPass.required,
									validate: (value) => {
										if (watch("password") != value) {
											return errorMsgs.confirmPass.invalid;
										}
									},
								})}
								error={!!errors?.confirmPass}
								helperText={errors?.confirmPass ? errors.confirmPass.message : ""}
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
							Create Account
						</Button>
						<Typography color="primary.gray" sx={{ marginTop: "10px" }}>
							Already have an account?
							<Typography
								display="inline"
								color="primary.main"
								sx={{ margin: "0 4px", fontWeight: "500", cursor: "pointer" }}
								onClick={() => {
									navigate("/login");
								}}
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
