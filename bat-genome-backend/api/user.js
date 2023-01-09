/*
 * User API
 * This file will contain all the methods for the users.
*/

const mongoose = require('mongoose');

// Schema
const User = mongoose.model('user', {
	username: { type: String, required: true },
	name: { type: String, required: true },
	email: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	address: { type: String, required: true },
	password: { type: String, required: true },
    role: String,
});


//----------------------------------- M E T H O D S -------------------------------------------

// Adds a user to DB
exports.signUp = async(req, res) => {

    var body = req.body;

    // Return 400 error code if a required field is missing or is empty
    if(!(body					&&
			body.username    &&
			body.name		&&
			body.email		&&
			body.phoneNumber			&&
			body.address		&&
			body.password)) {
				res.status(400);
				res.send('Bad request');
				return(0);
    }

    try {
      // Insert the new user into db
      const newUser = new User(req.body);
      newUser.save();
      res.status(200);
			res.send({ "success": true });
			
    } catch(err) {
      // Throw 500 error and log error
      res.status(500);
      res.send("Internal server error");
      console.error("Failure in DB insertion has occured.");
    }
}

// Log in
exports.login = (req, res) => {
    // const email = req.body.email.trim();
    // const password = req.body.password;
    
    var body = req.body;

    // Return 400 error code if a required field is missing or is empty
    if(!(body					&&
        body.email		&&
        body.password)) {
            res.status(400);
            res.send("asd")
            res.send('Bad request');
            return(0);
    }

    const email = body.email;
    const password = body.password;

    User.findOne({ email }, (err, user) => {
      // check if email exists
      if (err || !user) {
        //  Scenario 1: FAIL - User doesn't exist
        console.log("user doesn't exist");
        return res.send({ success: "no exist" });
      }
  
      // check if password is correct
      if (user.password != password) {
        return res.send({ success: "wrong" });
      } else {
        return res.send({ success: true });
      }
    })
  }