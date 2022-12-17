import { ThemeProvider, Typography, Box } from "@mui/material";

import { theme } from "../../theme";

export default function Login() {
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Typography color="primary.gray"> This is the Login page! </Typography>
			</Box>
		</ThemeProvider>
	);
}
