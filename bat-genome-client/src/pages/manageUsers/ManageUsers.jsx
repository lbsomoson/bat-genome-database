import { ThemeProvider, Typography, Box } from "@mui/material";

import { theme } from "../../theme";

export default function ManageUsers() {
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Typography color="primary.gray"> This is the Manage Users page! </Typography>
			</Box>
		</ThemeProvider>
	);
}
