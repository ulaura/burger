// Importing dependencies: npm express to create a router
// and burger.js to use the database
var express = require("express");
var burger = require("../models/burger.js");

// adding ability to route
var router = express.Router();

// Creating all the routes and setting up logic within those 
// routes where required.

// GET request reads
// The route created ("/") is made up by us
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		// handlebars will only accept objects,
		// so an object must be passed here to make this work
		var handlebarsObject = {
			burgers: data
		};
		// to so us the result on the back end
		console.log(handlebarsObject); 

		// to make the result appear on the index.handlebars page
		res.render("index", handlebarsObject);
	});
});

// POST request creates new data for database
// Remember that we make up the route name here, too
router.post("/api/burgers", function(req, res) {
	burger.insertOne([
		"burger_name"
	], [
		req.body.burger_name
	], function(result) {
		// Send back the ID of the new burger
		res.json({ id: result.insertId });
	});
});


// PUT request updates data.
// This is where the burger goes from "not devoured" to "devoured"

