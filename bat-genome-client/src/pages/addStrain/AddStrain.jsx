import { ThemeProvider, Typography, Box } from "@mui/material";

import { theme } from "../../theme";

export default function AddStrain() {
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Typography color="primary.gray"> This is the Add Strain page! </Typography>
			</Box>
		</ThemeProvider>
	);
}
