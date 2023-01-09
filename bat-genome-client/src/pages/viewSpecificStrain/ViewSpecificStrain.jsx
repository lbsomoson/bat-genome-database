import { ThemeProvider, Typography, Box, Button, Breadcrumbs } from "@mui/material";
import { ArrowBack, Edit, FileDownload, Link } from '@mui/icons-material';
import { theme } from "../../theme";

import "./ViewSpecificStrain.css";

const detail = {
	scientificName: "Abditibacterium utsteinense",
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

export default function ViewSpecificStrain() {

	function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

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
								<div role="navigation" onClick={handleClick}>
									<Breadcrumbs aria-label="breadcrumb">
										<Link underline="hover" 
											color="inherit" 
											href="/"
										>
											Strain
										</Link>
										<Link
											underline="hover"
											color="inherit"
											href="/strain"
										>
											Strain
										</Link>
										<Link
											underline="hover"
											color="text.primary"
											href="/strain"
											aria-current="page"
										>
											{detail.scientificName}
										</Link>
									</Breadcrumbs>
								</div>
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
								<div className="left"><Typography fontWeight="bold" color="primary.gray">Scientific Name</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.scientificName}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.gray">Common Name</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.commonName}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.gray">Domain</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.domain}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.gray">Kingdom</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.kingdom}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold"  color="primary.gray">Phylum</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.phylum}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.gray">Medium</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.medium}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.gray">Medium Composition</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.mediumComposition}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.gray">Temperature</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.temperature}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.gray">Temperature Range</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.temperatureRange}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.gray">Reference List</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.referenceList}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.gray">Species</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.species}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.gray">Type Strain</Typography></div>
								<div className="right"><Typography color="primary.main">{detail.typeStrain}</Typography></div>
							</div>
						</div>

					</Typography>
				</div>
			</Box>
		</ThemeProvider>
	);
}
