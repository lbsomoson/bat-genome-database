import { ThemeProvider, Typography, Box } from "@mui/material";

import { theme } from "../../theme";

export default function CreateAccount() {
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Typography color="primary.gray"> This is the Create Account page! </Typography>
			</Box>
		</ThemeProvider>
	);
}
