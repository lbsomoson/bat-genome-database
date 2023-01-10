import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider, Typography, Box, Button, Breadcrumbs } from "@mui/material";
import { ArrowBack, Edit, FileDownload, Link } from "@mui/icons-material";
import { theme } from "../../theme";

import "./ViewSpecificStrain.css";


export default function ViewSpecificStrain() {
	const [values, setValues] = useState({
		strainID: "",
		scientificName: "",
		domain: "",
		phylum: "",
		order: "",
		family: "",
		genus: "",
		species: "",
		typeStrain: "",
		strainDesignation: "",
	});

	const { state } = useLocation();

	useEffect(() => {
		// set values to strain values
		setValues({ ...values, ...state });

		// eslint-disable-next-line
	}, []);

	function handleClick(event) {
		event.preventDefault();
		console.info("You clicked a breadcrumb.");
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
								<h1>{values.scientificName}</h1>
								{/* <div role="navigation" onClick={handleClick}>
									<Breadcrumbs aria-label="breadcrumb">
										<Link underline="hover" color="inherit" href="/">
											Strain
										</Link>
										<Link underline="hover" color="inherit" href="/strain">
											Strain
										</Link>
										<Link underline="hover" color="text.primary" href="/strain" aria-current="page">
											{values.scientificName}
										</Link>
									</Breadcrumbs>
								</div> */}
							</div>
							<div className="topRight">
								{/* TODO: Hide edit button when user is logged in */}
								{/* <Button
									startIcon={<Edit style={{ color: "#fff" }} />}
									variant="contained"
									size="medium"
									sx={{ width: 150, padding: 1, margin: 2 }}
								>
									Edit
								</Button>
								<Button
									startIcon={<FileDownload style={{ color: "#fff" }} />}
									variant="contained"
									size="medium"
									sx={{ width: 150, padding: 1, margin: 2 }}
								>
									Export
								</Button> */}
							</div>
						</div>
						<div className="container">
							<div className="item">
								<div className="left">
									<Typography fontWeight="bold" color="primary.gray">
										Strain ID
									</Typography>
								</div>
								<div className="right">
									<Typography color="primary.main">{values.strainDesignation}</Typography>
								</div>
							</div>
							<div className="item">
								<div className="left">
									<Typography fontWeight="bold" color="primary.gray">
										Scientific Name
									</Typography>
								</div>
								<div className="right">
									<Typography color="primary.main">{values.scientificName}</Typography>
								</div>
							</div>
							<div className="item">
								<div className="left">
									<Typography fontWeight="bold" color="primary.gray">
										Strain Designation
									</Typography>
								</div>
								<div className="right">
									<Typography color="primary.main">{values.strainDesignation}</Typography>
								</div>
							</div>
							<div className="item">
								<div className="left">
									<Typography fontWeight="bold" color="primary.gray">
										Strain Type
									</Typography>
								</div>
								<div className="right">
									<Typography color="primary.main">{values.strainType}</Typography>
								</div>
							</div>
							<div className="item">
								<div className="left">
									<Typography fontWeight="bold" color="primary.gray">
										Domain
									</Typography>
								</div>
								<div className="right">
									<Typography color="primary.main">{values.domain}</Typography>
								</div>
							</div>
							<div className="item">
								<div className="left">
									<Typography fontWeight="bold" color="primary.gray">
										Phylum
									</Typography>
								</div>
								<div className="right">
									<Typography color="primary.main">{values.phylum}</Typography>
								</div>
							</div>
							<div className="item">
								<div className="left">
									<Typography fontWeight="bold" color="primary.gray">
										Order
									</Typography>
								</div>
								<div className="right">
									<Typography color="primary.main">{values.order}</Typography>
								</div>
							</div>
							<div className="item">
								<div className="left">
									<Typography fontWeight="bold" color="primary.gray">
										Family
									</Typography>
								</div>
								<div className="right">
									<Typography color="primary.main">{values.family}</Typography>
								</div>
							</div>
							<div className="item">
								<div className="left">
									<Typography fontWeight="bold" color="primary.gray">
										Genus
									</Typography>
								</div>
								<div className="right">
									<Typography color="primary.main">{values.genus}</Typography>
								</div>
							</div>
							<div className="item">
								<div className="left">
									<Typography fontWeight="bold" color="primary.gray">
										Species
									</Typography>
								</div>
								<div className="right">
									<Typography color="primary.main">{values.species}</Typography>
								</div>
							</div>
						</div>
					</Typography>
				</div>
			</Box>
		</ThemeProvider>
	);
}
