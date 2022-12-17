import { ThemeProvider, Typography, Box } from "@mui/material";

import { theme } from "../../theme";

export default function ViewStrain() {
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Typography color="primary.gray"> This is the View Strains page! </Typography>
			</Box>
		</ThemeProvider>
	);
}
