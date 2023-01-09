/*
 * Strain API
 * This file will contain all the methods for the strains.
*/

const mongoose = require('mongoose');

// Schema
const strain = mongoose.model('strain', {
	strainID: { type: String, required: true },
	scientificName: { type: String, required: true },
	domain: { type: String, required: true },
	phylum: { type: String, required: true },
	order: { type: String, required: true },
	family: { type: String, required: true },
	genus: { type: String, required: true },
	species: { type: String, required: true },
	strainDesignation: String,
	strainType: String
});


//----------------------------------- M E T H O D S -------------------------------------------

// Adds a strain to DB
exports.addStrain = async(req, res) => {

	var body = req.body;

	// Return 400 error code if a required field is missing or is empty
	if(!(body				&&
		body.strainID	&&
		body.domain		&&
		body.phylum		&&
		body.order		&&
		body.family		&&
		body.genus		&&
		body.species	&&
		body.scientificName)) {
			res.status(400).send("Bad request");
			return(0);
	}

	try {
		// Insert the new strain into db
		const newStrain = new strain(req.body);
		newStrain.save();
		res.status(200);
		res.send({ "success": true });
		
	} catch(err) {
		// Throw 500 error and log error
		res.status(500);
		res.send("Internal server error");
		console.error("Failure in DB insertion has occured.");
	}
}

// Updates a strain in DB
exports.editStrain = async (req,res) => {

	try {
		const item = await strain.findById(req.params.id);
		Object.assign(item, req.body);
		item.save();
		res.send({ success:true })
    
	} catch(err) {
		res.status(500);
		res.send("Internal server error");
		console.error("Failed to update a document.");    
	}
}