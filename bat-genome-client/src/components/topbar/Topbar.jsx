import { ThemeProvider, Typography, Box } from "@mui/material";

import { theme } from "../../theme";

export default function Topbar() {
	return (
		<ThemeProvider theme={theme}>
			<Box bgcolor="primary.main">
				<Typography color="primary.white"> This is the topbar page! </Typography>
			</Box>
		</ThemeProvider>
	);
}
