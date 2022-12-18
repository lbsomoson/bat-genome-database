import { ThemeProvider, Typography, Box, Button} from "@mui/material";

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
							sx={{ marginTop: "20px", marginBottom: "20px", fontWeight: "400", lineHeight: "28px" }}
						>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque velit corrupti sequi placeat ducimus atque quis a harum officia quos ipsam labore porro iusto ratione dignissimos tenetur tempora, nisi perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, exercitationem consequatur! Eaque sunt possimus soluta sapiente deserunt. Odio perspiciatis tenetur fugiat iure animi, corporis sunt incidunt fugit odit laudantium harum.
						</Typography>
					</Box>
					{/* Button */}
					<Box className="viewButton">
						<Button
							type="submit"
							variant="contained"
							sx={{ padding: "10px", width: "400px", height: "50px"}}
							onClick={() => {
								navigate("/view/strain");
							}}
						>
							View Strains
						</Button>
					</Box>
				</Box>
				<Box className="graphDiv" bgcolor="primary.main" width="100%" height="300px">
					<Typography
						color="primary.white"
						display="inline"
						sx={{ fontSize: "32px", fontWeight: "500", letterSpacing: "0.15px", lineHeight: "44px" }}
					>	
						Statistics
					</Typography>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
