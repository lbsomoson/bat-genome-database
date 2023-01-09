import {
	ThemeProvider,
	Box,
	Button,
	Grid,
	Checkbox,
	TextField,
	FormControlLabel,
	MenuItem,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import { theme } from "../../theme";
import { useState } from "react";
/* import "./AddStrain.css"; */

export default function EditStrain() {
	const [values, setValues] = useState({
		scientificName: "",
		collectionNumber: "",
		strainDesignation: "",
		strainType: "",
		variant: "",
		domain: "",
		phylum: "",
		order: "",
		family: "",
		genus: "",
		species: "",

		/* name: "",
		scientificName: "",
		medium: "",
		mediumGrowth: "",
		mediumGrowthCheckBox: false,
		temperature: "",
		temperatureType: "",
		temperatureRange: "",
		referenceList: "",
		speciesOnly: false,
		species: "",
		fileContent: "", */
	});

	/* const species = [
		{ value: "specie-1", text: "Specie 1" },
		{ value: "specie-2", text: "Specie 2" },
		{ value: "specie-3", text: "Specie 3" },
		{ value: "specie-4", text: "Specie 4" },
		{ value: "specie-5", text: "Specie 5" },
	]; */

	// For input of types text or select
	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});

		console.log(values);
	};

	// For input of type combobox
	/* const handleCBChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.checked,
		});

		console.log(values);
	}; */

	// TODO: Submit data
	// const onSubmit = (data) => {
	// 	console.log(data);
	// 	alert("Clicked submit button!");
	// };

	/* const SpecieSelect = ({ options }) => {
		return (
			<Box>
				<TextField
					label="Select species"
					name="species"
					select
					value={values.species}
					onChange={handleChange}
					fullWidth
				>
					{options.map((choice, i) => {
						return (
							<MenuItem key={i} value={choice.value}>
								{choice.text}
							</MenuItem>
						);
					})}
				</TextField>
			</Box>
		);
	}; */

	/* const handleFileChange = (e) => {
		const uploadFileBtn = document.getElementById("uploadFileBtn");
		const customText = document.getElementById("fileChosen");

		if (uploadFileBtn.value) {
			const fileNameList = Array.prototype.map.call(uploadFileBtn.files, function (file) {
				return file.name;
			});
			const label = fileNameList.join(", ");
			customText.innerHTML = label;
		} else {
			customText.innerHTML = "No file chosen.";
		}
	}; */

	// TODO: read file contents

	return (
		<ThemeProvider theme={theme}>
			<Box className="main">
				<ArrowBack />
				<Box mt={5} mb={5}>
					<h1>Edit Strain</h1>
				</Box>
				{/* Form */}
				<Grid container rowSpacing={2} columnSpacing={3}>
					<Grid item md={6}>
						<TextField
							label="Scientific Name"
							name="scientificName"
							variant="outlined"
							value={values.scientificName}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={6}>
						<TextField
							label="Collection Number"
							name="collectionNumber"
							variant="outlined"
							value={values.collectionNumber}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={4}>
						<TextField
							label="Strain Designation"
							name="strainDesignation"
							variant="outlined"
							value={values.strainDesignation}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={4}>
						<TextField
							label="Strain Type"
							name="strainType"
							variant="outlined"
							value={values.strainType}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={4}>
						<TextField
							label="Variant"
							name="variant"
							variant="outlined"
							value={values.variant}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={4}>
						<TextField
							label="Domain"
							name="domain"
							variant="outlined"
							value={values.domain}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={4}>
						<TextField
							label="Phylum"
							name="phylum"
							variant="outlined"
							value={values.phylum}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={4}>
						<TextField
							label="Order"
							name="order"
							variant="outlined"
							value={values.order}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>

					<Grid item md={4}>
						<TextField
							label="Family"
							name="family"
							variant="outlined"
							value={values.family}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={4}>
						<TextField
							label="Genus"
							name="genus"
							variant="outlined"
							value={values.genus}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={4}>
						<TextField
							label="Species"
							name="species"
							variant="outlined"
							value={values.species}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>

					<Grid item md={6}>
						<Button variant="outlined" sx={{ padding: "10px" }} fullWidth>
							CANCEL
						</Button>{" "}
						{/*TODO: cancel*/}
					</Grid>
					<Grid item md={6}>
						<Button variant="contained" sx={{ padding: "10px" }} fullWidth>
							ADD STRAIN
						</Button>{" "}
						{/*TODO: onlick*/}
					</Grid>
				</Grid>
			</Box>
		</ThemeProvider>
	);
}
