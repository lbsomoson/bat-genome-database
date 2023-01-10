/*
 * SERVER
 * Launchpoint file for the database
*/

const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
const uri = require('./uri.js');

mongoose.connect('mongodb://127.0.0.1/BatGenomeDB', {
    useNewUrlParser: true, useUnifiedTopology: true
});


// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Allow CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", uri.frontend);
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers,Access-Control-Allow-Methods,Origin,Accept,Content-Type");
  res.setHeader("Access-Control-Allow-Authorization",true);
  next();
});

// Add the router exports to server
router(app);

// Listen to port
app.listen(3001,()=> {
  console.log("Server has initialized on Port 3001.");
})
