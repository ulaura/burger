// Bringing in npm dependencies
var express = require("express");
var methodOver = require("method-override");
var bodyParser = require("body-parser");

//creating the express server
var app = express();

//setting up the port
//this means the server will either listen to the port assigned to it (like when hosted on Heroku),
//OR it will listen to port 3000 (like when running localhost:3000 on an individual computer)
var PORT = process.env.PORT || 3000;

//Handling data parsing with Express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// The routes for the server.
// It's not what's seen below. I left them in for reference.
// I need to change these!!

// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

//The listener. Starts the server. 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

