import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider, Typography, Box } from "@mui/material";
import Avatar from '@mui/material/Avatar'

import { theme } from "../../theme";
import { display } from "@mui/system";

export default function ManageUsers() {
	const [pageSize, setPageSize] = useState(5);

	//----- For placeholder avatars only (will be replaced by profile photos)
	function stringToColor(string) {
		let hash = 0;
		let i;
	  
		/* eslint-disable no-bitwise */
		for (i = 0; i < string.length; i += 1) {
		  hash = string.charCodeAt(i) + ((hash << 5) - hash);
		}
	  
		let color = '#';
	  
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
		  children: `${name.split(' ')[0][0]}`,
		};
	  }
	//-----

	function getRole(params) {
		switch(params.row.role){
			case 102:
				return "User"
			case 202: 
				return "Admin"
		}
	}

    const rows = [
        { id: 1, name: 'Jon Snow', username: 'jsnow', role: 102, email: "test0@gmail.com", phonenum: "09876543210"  },
        { id: 2, name: 'Cersei Lannister', username: 'clannister', role: 102, email: "test1@gmail.com", phonenum: "09876543210" },
        { id: 3, name: 'Jaime Lannister', username: 'jlannister', role: 202, email: "test2@gmail.com", phonenum: "09876543210" },
        { id: 4, name: 'Arya Stark', username: 'arstark', role: 102, email: "test3@gmail.com", phonenum: "09876543210" },
        { id: 5, name: 'Daenerys Targaryen', username: 'dtargaryen', role: 102, email: "test4@gmail.com", phonenum: "09876543210" },
        { id: 6, name: 'Melisandre', username: 'mel', role: 102, email: "test2@gmail.com", phonenum: "09876543210" },
        { id: 7, name: 'Ferrara Clifford', username: 'ferclifford', role: 202, email: "test7@gmail.com", phonenum: "09876543210" },
        { id: 8, name: 'Rossini Frances', username: 'rossfrances', role: 102, email: "test9@gmail.com", phonenum: "09876543210" },
        { id: 9, name: 'Harvey Roxie', username: 'hrvyroxie', role: 202, email: "test2@gmail.com", phonenum: "09876543210" },
      ];

    const columns = [
		{
			field: "id",
			headerName: "",
			minWidth: 50,
			sortable: false,
			renderCell: (params) => {
				console.log(params);
				return (
				  <>
					<Avatar {...stringAvatar(params.row.name)}/>
				  </>
				);
			  }
		},
		{
			field: "name",
			headerName: "Name",
			minWidth: 200,
			flex: 1,
		},
		{
			field: "username",
			headerName: "Username",
			minwidth: 200,
			flex: 1,
		},
		{
			field: "role",
			headerName: "Role",
			minWidth: 110,
			flex: 1,
			valueGetter: getRole,
		},
		{
			field: "email",
			headerName: "Email",
			minWidth: 110,
			flex: 1,
		},
		{
			field: "phonenum",
			headerName: "Phone #",
			minWidth: 110,
			flex: 1,
		},
		{
			field: "actions",
			headerName: "Actions",
			type: "actions",
			minWidth: 80,
			getActions: (params) => [
				<GridActionsCellItem
					icon={<VisibilityIcon color={"primary"}/>}
					label="View User Details"
				/>,
				<GridActionsCellItem
					icon={<DeleteIcon color={"primary"}/>}
					label="Delete"
				/>
			]
		},
	];
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{display:"flex", flexDirection:"column", mx:"150px", my:"80px"}}>
				<Typography 
					variant={"h3"}
					fontWeight={"bold"} 
					color={theme.palette.primary.main} 
					mb={5}
				> 
					Manage Users
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
