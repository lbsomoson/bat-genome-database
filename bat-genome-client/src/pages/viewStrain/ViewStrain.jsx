import { ThemeProvider, Typography, Box, Button, Breadcrumbs } from "@mui/material";
import { ArrowBack, Edit, FileDownload, Link } from '@mui/icons-material';
import { theme } from "../../theme";

import "./ViewStrain.css";
import { useEffect, useState } from "react";
import { getFetch } from "../../utils/apiRequest";

const values = {
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
	const [values, setValues] = useState({
		id: "",
		scientificName: "",
		// commonName: "",
		domain: "",
		phylum: "",
		order: "",
		// kingdom: "",
		family: "",
		genus: "",
		// medium: "",
		// mediumComposition: "",
		// temperature: "",
		// temperatureRange: "",
		// referenceList: "",
		species: "",
		typeStrain: "",
		strainDesignation: "",
		variant: "",
	});

	useEffect(() => {
		getFetch('http://localhost:3001/view/strain'+ values.id).then((res) => {
			if (!res) {
				console.error("Strain cannot be viewed");
			} else {
				const strain = res.data;
				console.log("Strain successfully viewed");
				setValues({
					id: strain.id,
					scientificName: strain.scientificName,
					domain: strain.domain,
					phylum: strain.phylum,
					order: strain.order,
					family: strain.family,
					genus: strain.genus,
					species: strain.species,
					typeStrain: strain.typeStrain,
					strainDesignation: strain.strainDesignation,
					variant: strain.variant,
				});
			};
		})
	}, [values]);

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
									{values.scientificName}
								</h1>
								
								{/* TODO: Update handling events in breadcrumbs */}
								<Breadcrumbs aria-label='breadcrumb'>
									<Link undeline='hover' href="#">
										Strain
									</Link>
									<Typography color="primary.main">{values.scientificName}</Typography>
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
								<div className="right"><Typography color="primary.main">{values.scientificName}</Typography></div>
							</div>
							{/* <div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Common Name</Typography></div>
								<div className="right"><Typography color="primary.main">{values.commonName}</Typography></div>
							</div> */}
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Domain</Typography></div>
								<div className="right"><Typography color="primary.main">{values.domain}</Typography></div>
							</div>
							{/* <div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Kingdom</Typography></div>
								<div className="right"><Typography color="primary.main">{values.kingdom}</Typography></div>
							</div> */}
							<div className="item">
								<div className="left"><Typography fontWeight="bold"  color="primary.grey">Phylum</Typography></div>
								<div className="right"><Typography color="primary.main">{values.phylum}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold"  color="primary.grey">Order</Typography></div>
								<div className="right"><Typography color="primary.main">{values.order}</Typography></div>
							</div>
							{/* <div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Medium</Typography></div>
								<div className="right"><Typography color="primary.main">{values.medium}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Medium Composition</Typography></div>
								<div className="right"><Typography color="primary.main">{values.mediumComposition}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Temperature</Typography></div>
								<div className="right"><Typography color="primary.main">{values.temperature}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Temperature Range</Typography></div>
								<div className="right"><Typography color="primary.main">{values.temperatureRange}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Reference List</Typography></div>
								<div className="right"><Typography color="primary.main">{values.referenceList}</Typography></div>
							</div> */}
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Family</Typography></div>
								<div className="right"><Typography color="primary.main">{values.family}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Genus</Typography></div>
								<div className="right"><Typography color="primary.main">{values.genus}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Species</Typography></div>
								<div className="right"><Typography color="primary.main">{values.species}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Type Strain</Typography></div>
								<div className="right"><Typography color="primary.main">{values.typeStrain}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">Strain Designation</Typography></div>
								<div className="right"><Typography color="primary.main">{values.strainDesignation}</Typography></div>
							</div>
							<div className="item">
								<div className="left"><Typography fontWeight="bold" color="primary.grey">variant</Typography></div>
								<div className="right"><Typography color="primary.main">{values.variant}</Typography></div>
							</div>
						</div>

					</Typography>
				</div>
			</Box>
		</ThemeProvider>
	);
}
