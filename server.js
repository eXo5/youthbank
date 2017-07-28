// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//parent-model module.exports === Parent;
var Parent = require("./src/utils/models/parent-model.js");
//kid-model module.exports === Child;
var Child = require("./src/utils/models/kid-model.js");



 // Create express app
var app = express();
// Sets initial port to environment variable or 3001 for localhost proxy. 
var PORT = process.env.PORT || 3001;

// Run Morgan and bodyParser for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//set the static build.
app.use(express.static("build"));

// -------------------------------------------------
mongoose.Promise = Promise;
// MongoDB configuration (Change this URL to your own DB)
if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI)
	}
	else {
		mongoose.connect("mongodb://localhost/testingdb");
}

var db = mongoose.connection;
// MongoDB connection assurance.
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});
//-------------------------------------------------
//routes:
require("./src/utils/routes/router.js")(app);


	

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
