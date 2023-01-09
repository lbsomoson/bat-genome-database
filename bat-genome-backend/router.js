/**
 * ROUTER
 * File for the url routes for accessing the database functions
*/

const strains = require('./api/strain.js');
const users = require('./api/user.js');
const uri = require('./uri.js');

// Allow Cross Origin Resource Sharing (CORS) for the specified URL
const setCORSHeader = (req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", uri.frontend);
	res.setHeader("Access-Control-Allow-Methods", ["POST","GET","PUT","DELETE"]);
	res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Authorization");
	res.setHeader("Access-Control-Allow-Authorization", true);
	next();
}

module.exports = (app) => {

	// STRAIN ROUTES
	app.post('/strains', setCORSHeader, strains.addStrain);
	app.put('/strains/:id',setCORSHeader, strains.editStrain);
	
	// USER ROUTES
	app.post('/signup', setCORSHeader, users.signUp);
	app.post('/login', setCORSHeader, users.login);
}
