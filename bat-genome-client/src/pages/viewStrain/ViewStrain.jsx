import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

import {
	Button,
	Box,
	ThemeProvider,
	Tooltip,
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
import { getFetch } from "../../utils/apiRequest";



export default function ViewStrain() {
	const [pageSize, setPageSize] = useState(5);
	const [query, setQuery] = useState({});
	const [currRows, setCurrRows] = useState([]);

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
	const columns = [
		{
			field: "id",
			headerName: "Strain ID",
			minWidth: 200,
			flex: 1,
		},
		{
			field: "scientificName",
			headerName: "Scientific Name",
			minwidth: 200,
			flex: 1,
		},
		{
			field: "domain",
			headerName: "Domain",
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
			field: "order",
			headerName: "Order",
			minWidth: 110,
			flex: 1,
		},
		{
			field: "actions",
			headerName: "Actions",
			type: "actions",
			minWidth: 80,
			getActions: (data) => [
				<Tooltip title="View Strain Details">
					<GridActionsCellItem
						icon={<Visibility color={"primary"} />}
						label="View Strain Details"
						// TODO: IPASA DITO YUNG ID NG STRAIN PARA YUN YUNG GAGAMITIN SA API CALL
						onClick={() => navigate("/view/specificstrain", {state: data.row})}
					/>
				</Tooltip>,
				<Tooltip title="Edit Strain">
					<GridActionsCellItem
						icon={<Edit color={"primary"} />}
						label="Edit Strain"
						// TODO: IPASA DITO YUNG ID NG STRAIN PARA YUN YUNG GAGAMITIN SA API CALL
						onClick={() => { navigate("/edit/strain", {state: data.row}); console.log(data)}} 
					/>
				</Tooltip>,
				<Tooltip title="Delete Strain">
					<GridActionsCellItem
						icon={<Delete color={"primary"} />}
						label="Delete"
						// TODO: IPASA DITO YUNG ID NG STRAIN PARA YUN YUNG GAGAMITIN SA API CALL
						// onClick={}
					/>
				</Tooltip>,
			],
		},
	];
	

	// This function is used to update UI state.
    async function setDisplay(data) {
		console.log(data);
        let allStrains = [];

        // Checking if the inventory collections in DB is empty.
        if (data.length > 0) {

            // Map out the entries returned by fetch.
            data.forEach((strain, index) => {
                allStrains.unshift({
                    id: strain.strainID,
					scientificName: strain.scientificName,
					domain: strain.domain,
					phylum: strain.phylum,
					order: strain.order,
					family: strain.family,
					genus: strain.genus,
					species: strain.species,
					strainDesignation: strain.strainDesignation,
					strainType: strain.strainType
                });
			});
			
            // Setting UI table state
            setCurrRows([...allStrains]);

        } else {
            setCurrRows([]);
        }
	}
	
	async function handleGetAllStrains() {
        var data = await getFetch("http://localhost:3001/strains", query);
		await setDisplay(data.strains);
	};

	useEffect(() => {
		// Fetch all strains at component mount
		handleGetAllStrains();

		// eslint-disable-next-line
	}, []);

	
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
					rows={currRows}
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