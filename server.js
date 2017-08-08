// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// --- here is the passport/session reqs
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
var dbConnection = require("./src/utils/db");
var passport = require("./src/utils/passport");
// --- end passport/session reqs;

//parent-model module.exports === Parent;
var Parent = require("./src/utils/db/models/parent-model.js");
//kid-model module.exports === Child;
var Child = require("./src/utils/db/models/kid-model.js");
var Chore = require("./src/utils/db/models/chore-model.js");


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


// Run session for reasons
app.use(
	session({
		secret: process.env.APP_SECRET || "this is the default passphrase",
		store: new MongoStore({ mongooseConnection: dbConnection}),
		resave: false,
		saveUninitialized: false
	})
)
// ==== testing middleware ====
app.use(function(req, res, next) {
	console.log("=== passport user ===");
	console.log(req.session);
	console.log(req.user);
	console.log("=== END ===");
	next()
})

app.use(passport.initialize())
app.use(passport.session())
// === if production env
if(process.env.NODE_ENV === 'production') {
	const path = require("path")
	console.log("YOU ARE IN THE PRODUCTION ENV")
	app.use("/static", express.static(path.join(__dirname, + "../build/static")))
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'))
	})
}

// Express app ROUTING??
app.use("/auth", require("./src/utils/auth"))
require("./src/utils/routes/router.js")(app, passport)

//set the static build.
app.use(express.static("build"));

app.get("/", function(req,res){

	res.sendFile(__dirname + "/build/static/index.html");

});
// -------------------------------------------------
mongoose.Promise = global.Promise;
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
// require("./src/utils/routes/router.js")(app);


	

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
