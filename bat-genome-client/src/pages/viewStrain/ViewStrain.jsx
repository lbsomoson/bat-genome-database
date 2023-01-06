import { ThemeProvider, Typography, Box, Button, Breadcrumbs } from "@mui/material";
import { ArrowBack, Edit, FileDownload, Link } from '@mui/icons-material';
import { theme } from "../../theme";

import "./ViewStrain.css";

const detail = {
	scientificName: "Parastratiosphecomyia stratiosphecomyioides",
	commonName: "Common Name",
	domain: "Domain",
	kingdom: "Kingdom",
	phylum: "Phylum",
	medium: "Medium",
	mediumComposition: "Medium Composition",
	temperature: "Temperature",
	temperatureRange: "Temperature Range",
	referenceList: "Reference List",
	species: "Species",
	typeStrain: "Type Strain",
}

export default function ViewStrain() {

	return (
		<ThemeProvider theme={theme}>
			<Box>
				{/* <Typography color="primary.gray"> This is the View Strains page! </Typography> */}
				<div className="main">
					<ArrowBack />
					<Typography fontFamily="Inter">
						<div className="topText">
							<div className="topLeft">
								<h1>
									{detail.scientificName}
								</h1>
								
								{/* TODO: Update handling events in breadcrumbs */}
								<Breadcrumbs aria-label='breadcrumb'>
									<Link undeline='hover' href="#">
										Strain
									</Link>
									<Typography color="primary.main">{detail.scientificName}</Typography>
								</Breadcrumbs>

							</div>
							<div className="topRight">
								{/* TODO: Hide edit button when user is logged in */}
								<Button
									startIcon={<Edit style={{ color: '#fff' }}/>}
									variant="contained" 
									size="medium"
									sx={{ width: 150, padding: 1, margin: 2 }}
									>
										Edit
								</Button>
								<Button 
									startIcon={<FileDownload style={{ color: '#fff' }}/>}
									variant="contained" 
									size="medium"
									sx={{ width: 150, padding: 1, margin: 2 }}
									>
										Export
								</Button>
							</div>
						</div>
						<div className="container">
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Scientific Name</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.scientificName}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Common Name</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.commonName}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Domain</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.domain}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Kingdom</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.kingdom}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold"  color="primary.grey">Phylum</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.phylum}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Medium</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.medium}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Medium Composition</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.mediumComposition}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Temperature</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.temperature}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Temperature Range</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.temperatureRange}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Reference List</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.referenceList}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Species</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.species}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Type Strain</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.typeStrain}</Typography></div>
							</div>
						</div>

					</Typography>
				</div>
			</Box>
		</ThemeProvider>
	);
}
