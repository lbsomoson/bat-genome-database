import { useState } from "react";
import { theme } from "../../theme";
import { postFetch } from "../../utils/apiRequest.js";
import "./AddStrain.css";

import { useNavigate } from "react-router-dom";

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

/* const species = [
	{ value: "specie-1", text: "Specie 1" },
	{ value: "specie-2", text: "Specie 2" },
	{ value: "specie-3", text: "Specie 3" },
	{ value: "specie-4", text: "Specie 4" },
	{ value: "specie-5", text: "Specie 5" },
]; */

export default function AddStrain() {
	const navigate = useNavigate();

	const [values, setValues] = useState({
		strainID: "",
		scientificName: "",
		strainDesignation: "",
		strainType: "",
		domain: "",
		phylum: "",
		order: "",
		family: "",
		genus: "",
		species: "",
	});

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

	// Handles POST request for strain creation
	const handleAddStrain = async () => {
		// Object to be added to DB
		let newStrain = {
			strainID: values.strainID.toUpperCase(),
			scientificName: values.scientificName.charAt(0).toUpperCase() + values.scientificName.slice(1),
			strainDesignation: values.strainDesignation,
			strainType: values.strainType,
			domain: values.domain.charAt(0).toUpperCase() + values.domain.slice(1),
			phylum: values.phylum.charAt(0).toUpperCase() + values.phylum.slice(1),
			order: values.order.charAt(0).toUpperCase() + values.order.slice(1),
			family: values.family.charAt(0).toUpperCase() + values.family.slice(1),
			genus: values.genus.charAt(0).toUpperCase() + values.genus.slice(1),
			species: values.species,
		};

		// Perform POST request
		postFetch("http://localhost:3001/strains", newStrain).then((res) => {
			// Checking if the action is successful
			if (!res) {
				console.error("Strain not added");
			} else {
				console.log("Strain successfully added");
				navigate("/view/strain");
			}
		});
	};

	return (
		<ThemeProvider theme={theme}>
			<Box className="main">
				<ArrowBack />
				<Box mt={5} mb={5} sx={{ marginTop: "100px" }}>
					<h1>Add Strain</h1>
				</Box>
				{/* Form */}
				<Grid container rowSpacing={2} columnSpacing={3}>
					<Grid item md={12}>
						<TextField
							label="Scientific Name"
							name="scientificName"
							variant="outlined"
							value={values.scientificName}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={4}>
						<TextField
							label="Strain ID"
							name="strainID"
							variant="outlined"
							value={values.strainID}
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
						<Button
							variant="outlined"
							sx={{ padding: "10px" }}
							fullWidth
							onClick={() => navigate("/view/strain")}
						>
							CANCEL
						</Button>{" "}
					</Grid>
					<Grid item md={6}>
						<Button
							variant="contained"
							sx={{ padding: "10px" }}
							fullWidth
							onClick={handleAddStrain}
							disabled={
								!(values.strainID &&
								values.scientificName &&
								values.domain &&
								values.phylum &&
								values.order &&
								values.family &&
								values.genus &&
								values.species)
							}
						>
							ADD STRAIN
						</Button>
					</Grid>
				</Grid>
			</Box>
		</ThemeProvider>
	);
}
