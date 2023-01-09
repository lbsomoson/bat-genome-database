import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

import {
	Button,
	Box,
	ThemeProvider,
	Typography
} from "@mui/material";
import "./viewStrain.css";
import {
	Add,
	ArrowBack,
	Delete,
	Edit,
	FileDownload,
	Link,
	Visibility
} from "@mui/icons-material";

import { theme } from "../../theme";



const rows = [
	{
		id: 1,
		name: "1",
		sci_name: "Cistugo",
		common_name: "Lesueur's Wing-gland Bat",
		domain: "Eukaryote",
		kingdom: "Animal",
		phylum: "Chordate",
	},
	{
		id: 2,
		name: "2",
		sci_name: "Cistugo",
		common_name: "Angolan Wing-gland Bat",
		domain: "Eukaryote",
		kingdom: "Animal",
		phylum: "Chordate",
	},
	{
		id: 3,
		name: "3",
		sci_name: "Craseonycteris",
		common_name: "Bumblebee Bat",
		domain: "Eukaryote",
		kingdom: "Animal",
		phylum: "Chordate",
	},
	{
		id: 4,
		name: "4",
		sci_name: "Balantiopteryx",
		common_name: "Ecuadorian Sac-winged Bat",
		domain: "Eukaryote",
		kingdom: "Animal",
		phylum: "Chordate",
	},
	{
		id: 5,
		name: "5",
		sci_name: "Balantiopteryx",
		common_name: "Thomas's Sac-winged Bat",
		domain: "Eukaryote",
		kingdom: "Animal",
		phylum: "Chordate",
	},
	// { id: 6, name: '6', sci_name: 'mel', common_name: 102, domain: "test2@gmail.com", kingdom: "09876543210", phylum: "09876543210"},
	// { id: 7, name: '7', sci_name: 'ferclifford', common_name: 202, domain: "test7@gmail.com", kingdom: "09876543210", phylum: "09876543210" },
	// { id: 8, name: '8', sci_name: 'rossfrances', common_name: 102, domain: "test9@gmail.com", kingdom: "09876543210", phylum: "09876543210" },
	// { id: 9, name: '9', sci_name: 'hrvyroxie', common_name: 202, domain: "test2@gmail.com", kingdom: "09876543210", phylum: "09876543210" },
];



export default function ViewStrain() {
	const [pageSize, setPageSize] = useState(5);

	const navigate = useNavigate();

	//----- For placeholder avatars only (will be replaced by profile photos)
	function stringToColor(string) {
		let hash = 0;
		let i;

		/* eslint-disable no-bitwise */
		for (i = 0; i < string.length; i += 1) {
			hash = string.charCodeAt(i) + ((hash << 5) - hash);
		}

		let color = "#";

		for (i = 0; i < 3; i += 1) {
			const value = (hash >> (i * 8)) & 0xff;
			color += `00${value.toString(16)}`.slice(-2);
		}
		/* eslint-enable no-bitwise */

		return color;
	}

	function stringAvatar(name) {
		return {
			sx: {
				bgcolor: stringToColor(name),
			},
			children: `${name.split(" ")[0][0]}`,
		};
	}
	//-----

	// function getcommon_name(params) {
	// 	switch(params.row.common_name){
	// 		case 102:
	// 			return "User"
	// 		case 202:
	// 			return "Admin"
	// 	}
	// }

	

	const columns = [
		// {
		// 	field: "id",
		// 	headerName: "",
		// 	minWidth: 50,
		// 	sortable: false,
		// 	renderCell: (params) => {
		// 		console.log(params);
		// 		return (
		// 		  <>
		// 			<Avatar {...stringAvatar(params.row.name)}/>
		// 		  </>
		// 		);
		// 	  }
		// },
		{
			field: "name",
			headerName: "ID",
			minWidth: 200,
			flex: 1,
		},
		{
			field: "sci_name",
			headerName: "Scientific Name",
			minwidth: 200,
			flex: 1,
		},
		/* {
			field: "common_name",
			headerName: "Common Name",
			minWidth: 110,
			flex: 1,
		}, */
		{
			field: "domain",
			headerName: "Domain",
			minWidth: 110,
			flex: 1,
		},
		{
			field: "kingdom",
			headerName: "Kingdom",
			minWidth: 110,
			flex: 1,
		},
		{
			field: "phylum",
			headerName: "Phylum",
			minWidth: 110,
			flex: 1,
		},
		{
			field: "actions",
			headerName: "Actions",
			type: "actions",
			minWidth: 80,
			getActions: (params) => [
				<GridActionsCellItem icon={<Visibility color={"primary"} />} label="View User Details" />,
				<GridActionsCellItem icon={<Edit color={"primary"} />} label="Edit" />,
				<GridActionsCellItem icon={<Delete color={"primary"} />} label="Delete" />,
			],
		},
	];
	
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: "flex", flexDirection: "column", mx: "150px", my: "80px" }}>
				<Typography variant={"h4"} fontWeight={"bold"} color={theme.palette.primary.main} mb={5}>
					Strain Database
					<br />
					<input
						name="search_term"
						className="search_bar"
						placeholder={"Search"}
						// onChange={this.handleInputChange}
					/>
					{/* <GridActionsCellItem
					icon={<AddIcon color={"primary"}/>}
					label="Add Strain"
				/> */}
					<Button
						variant="contained"
						startIcon={<Add />}
						onClick={() => navigate("/add/strain")}
					>
						Add Strain
					</Button>

				</Typography>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={pageSize}
					onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
					rowsPerPageOptions={[5, 10, 20]}
					pagination
					autoHeight
				/>
			</Box>
		</ThemeProvider>
	);
}
