import { ThemeProvider, Typography, Box } from "@mui/material";

import { theme } from "../../theme";

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Typography color="primary.gray"> This is the home page! </Typography>
			</Box>
		</ThemeProvider>
	);
}
