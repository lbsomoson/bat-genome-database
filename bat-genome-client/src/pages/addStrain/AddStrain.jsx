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
import "./AddStrain.css";

export default function AddStrain() {
	const [values, setValues] = useState({
		name: "",
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
		fileContent: "",
	});

	const species = [
		{ value: "specie-1", text: "Specie 1" },
		{ value: "specie-2", text: "Specie 2" },
		{ value: "specie-3", text: "Specie 3" },
		{ value: "specie-4", text: "Specie 4" },
		{ value: "specie-5", text: "Specie 5" },
	];

	// For input of types text or select
	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});

		console.log(values);
	};

	// For input of type combobox
	const handleCBChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.checked,
		});

		console.log(values);
	};

	// TODO: Submit data
	// const onSubmit = (data) => {
	// 	console.log(data);
	// 	alert("Clicked submit button!");
	// };

	const SpecieSelect = ({ options }) => {
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
	};

	const handleFileChange = (e) => {
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
	};

	// TODO: read file contents

	return (
		<ThemeProvider theme={theme}>
			<Box className="main">
				<ArrowBack />
				<Box mt={5} mb={5}>
					<h1>Add Strain</h1>
				</Box>
				{/* Form */}
				<Grid container rowSpacing={2} columnSpacing={3}>
					<Grid item md={6}>
						<TextField
							label="Name"
							name="name"
							variant="outlined"
							value={values.name}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
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
							label="Medium"
							name="medium"
							variant="outlined"
							value={values.medium}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={6}>
						<TextField
							label="Medium Growth"
							name="mediumGrowth"
							variant="outlined"
							value={values.mediumGrowth}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={12}>
						<FormControlLabel
							control={
								<Checkbox
									checked={values.mediumGrowthCheckBox}
									name="mediumGrowthCheckBox"
									onChange={handleCBChange}
								/>
							}
							label="Medium Growth"
						/>
					</Grid>
					<Grid item md={4}>
						<TextField
							label="Temperature"
							name="temperature"
							variant="outlined"
							value={values.temperature}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={4}>
						<TextField
							label="Temperature Type"
							name="temperatureType"
							variant="outlined"
							value={values.temperatureType}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={4}>
						<TextField
							label="Temperature Range"
							name="temperatureRange"
							variant="outlined"
							value={values.temperatureRange}
							onChange={handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item md={12}>
						<TextField
							label="Reference List"
							name="referenceList"
							variant="outlined"
							value={values.referenceList}
							onChange={handleChange}
							fullWidth
							multiline
							rows={4}
						/>
					</Grid>
					<Grid item md={12}>
						<FormControlLabel
							control={
								<Checkbox checked={values.speciesOnly} name="speciesOnly" onChange={handleCBChange} />
							}
							label="Species Only"
						/>
					</Grid>
					<Grid item md={12}>
						<SpecieSelect options={species} />
					</Grid>
					<Grid item md={12}>
						<label className="label">Type Strain (file)</label>
					</Grid>
					<Grid item md={4}>
						<Button variant="contained" component="label" fullWidth>
							CHOOSE FILE
							<input
								type="file"
								accept=".xlsx, .xls, .csv"
								onChange={handleFileChange}
								id="uploadFileBtn"
								multiple
								hidden
							/>
						</Button>
					</Grid>
					<Grid
						item
						md={8}
						style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}
					>
						<span className="label" id="fileChosen">
							No file chosen.
						</span>
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
