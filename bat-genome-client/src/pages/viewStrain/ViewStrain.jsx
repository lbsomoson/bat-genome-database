// import React, { Component } from "react";
// // import { withRouter } from "react-router-dom";
// import StrainList from "../../components/strain_content/StrainList";
// import Sidebar from "../../components/sidebar/Sidebar";
// import "./Strain.css";
// import AddStrain from "../../components/strain_content/AddStrain";


// export class Strain extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       component: "list",
//       search_type: "id",
//       // search_term: "1",
//     };

//     this.handleComponent = this.handleComponent.bind(this);
//   }

//   handleComponent() {
//     if (this.state.component === "list") {
//       return <StrainList />;
//     } else {
//       return <AddStrain />;
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Sidebar Crumb={this.props.Crumb} Match={this.props.match} />
//         <div className="strain_content">
//           <div className="title_bar">
//             <div className="left_title_bar">
             
// 			 	<br/><br/><br/>
//                 <h1 className="title">Strain Database</h1>
            
//             </div>

//             <div className="right_title_bar">
//               {this.state.component === "list" ? (
//                 <svg
//                   className="title_bar_button"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                   onClick={() =>
//                     this.setState({
//                       component: "add",
//                     })
//                   }
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               ) :
// 			   (
//                 <svg
//                   className="title_bar_button"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                   onClick={() =>
//                     this.setState({
//                       component: "list",
//                     })
//                   }
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               )}
//             </div>
//           </div>
//           {this.handleComponent()}
//         </div>
//       </div>
//     );
//   }
// }


// // ako nagcomment out nung withRouter to remove errors kasi deprecated na to sa react-router-v6
// // recreate it using useNavigate - lara

// // export default withRouter(Strain);
// export default Strain;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider, Typography, Box } from "@mui/material";
import Avatar from '@mui/material/Avatar'

import { theme } from "../../theme";
import { display } from "@mui/system";
import "./viewStrain.css"
import { ArrowBack, Edit, FileDownload, Link } from '@mui/icons-material';


export default function ViewStrain() {
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

	// function getcommon_name(params) {
	// 	switch(params.row.common_name){
	// 		case 102:
	// 			return "User"
	// 		case 202: 
	// 			return "Admin"
	// 	}
	// }

    const rows = [
        { id: 1, name: '1', sci_name: 'Cistugo', common_name: "Lesueur's Wing-gland Bat", domain: "Eukaryote", kingdom: "Animal",  phylum: "Chordate" },
        { id: 2, name: '2', sci_name: 'Cistugo', common_name: "Angolan Wing-gland Bat", domain: "Eukaryote", kingdom: "Animal", phylum: "Chordate" },
        { id: 3, name: '3', sci_name: 'Craseonycteris', common_name: "Bumblebee Bat", domain: "Eukaryote", kingdom: "Animal", phylum: "Chordate" },
        { id: 4, name: '4', sci_name: 'Balantiopteryx', common_name: "Ecuadorian Sac-winged Bat", domain: "Eukaryote", kingdom: "Animal", phylum: "Chordate" },
        { id: 5, name: '5', sci_name: 'Balantiopteryx', common_name: "Thomas's Sac-winged Bat", domain: "Eukaryote", kingdom: "Animal", phylum: "Chordate" },
        // { id: 6, name: '6', sci_name: 'mel', common_name: 102, domain: "test2@gmail.com", kingdom: "09876543210", phylum: "09876543210"},
        // { id: 7, name: '7', sci_name: 'ferclifford', common_name: 202, domain: "test7@gmail.com", kingdom: "09876543210", phylum: "09876543210" },
        // { id: 8, name: '8', sci_name: 'rossfrances', common_name: 102, domain: "test9@gmail.com", kingdom: "09876543210", phylum: "09876543210" },
        // { id: 9, name: '9', sci_name: 'hrvyroxie', common_name: 202, domain: "test2@gmail.com", kingdom: "09876543210", phylum: "09876543210" },
      ];

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
		{
			field: "common_name",
			headerName: "Common Name",
			minWidth: 110,
			flex: 1,
		},
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
				<GridActionsCellItem
					icon={<VisibilityIcon color={"primary"}/>}
					label="View User Details"
				/>,
        <GridActionsCellItem
        icon={<EditIcon color={"primary"}/>}
        label="Edit"
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
					Strain Database
          <br/>
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

        <div className="boxedtext">+ ADD STRAIN</div>
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
