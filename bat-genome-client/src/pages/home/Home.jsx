import { ThemeProvider, Typography, Box, Button } from "@mui/material";

import { theme } from "../../theme";
import { useNavigate } from "react-router-dom";

import "./home.css";

export default function Home() {
	// Navigation
	const navigate = useNavigate();

	return (
		<ThemeProvider theme={theme}>
			<Box className="homeDiv" width="100%" height="700px">
				<Box className="aboutDiv" width="1200px" height="300px">
					<Box className="pageName">
						<Typography
							color="primary.main"
							display="inline"
							sx={{ fontSize: "40px", fontWeight: " 700", letterSpacing: "0.15px", lineHeight: "44px" }}
						>
							Bat Genome Database
						</Typography>
					</Box>
					<Box className="aboutInfo">
						<Typography
							color="primary.gray"
							sx={{
								marginTop: "20px",
								marginBottom: "20px",
								fontWeight: "400",
								lineHeight: "28px",
								textAlign: "center",
							}}
						>
							The <b> Bat Genome Database</b> is a web-based platform that enables users to access and
							contribute information about the genomes of various strains of bats. At present, users of the
							database are able to submit data about a strain's scientific name, identification number,
							strain designation, strain type, and taxonomic rank. The purpose of the database is to
							provide a centralized resource for accessing and sharing information about the genomic
							characteristics of different strains of bats, which can be useful for a variety of research
							and conservation purposes.
						</Typography>
					</Box>
					{/* Button */}
					<Box className="viewButton">
						<Button
							type="submit"
							variant="contained"
							sx={{ padding: "10px", width: "400px", height: "60px", fontSize: "18px" }}
							onClick={() => {
								navigate("/view/strain");
							}}
						>
							<b> View Strains </b>
						</Button>
					</Box>
				</Box>
				{/* <Box className="graphDiv" bgcolor="primary.main" width="100%" height="300px">
					<Typography
						color="primary.white"
						display="inline"
						sx={{ fontSize: "32px", fontWeight: "500", letterSpacing: "0.15px", lineHeight: "44px" }}
					>
						Statistics
					</Typography>
				</Box> */}
			</Box>
		</ThemeProvider>
	);
}
