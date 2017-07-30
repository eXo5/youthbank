var path = require("path");
var axios = require("axios");
var Parent = require("../db/models/parent-model.js");
var Child = require("../db/models/kid-model.js");
var Chore = require("../db/models/chore-model.js"); //JD 

module.exports = function(app) {

app.get("/", function(req, res){
  res.sendFile(__dirname + "./public/index.html");
});

//Routes for new Parents and Children found in /auth/index.js

//route for viewing chores
app.get("/api/get/chores", function(req, res){
	//we'll use the id it returns after they login, but for testing I used parentFirstName and specified a value to find.
	//We'll also probably end up having /api/:username/:chores?
if (req.params.chores === "chores"){ 
	Parent.findOne({parentFirstName: "Michael" }).exec(function(err, doc) {if(err){console.log(err)}
		console.log("Document Response: " + doc);
		console.log(doc.chores);
	})
	}
	res.send("Ok");
})//END get Chores

//route for inserting chores
app.post("/api/post/chores", function(req, res){
	//When we have someone logged in we will take one of the values we get from their presence, (either _id or email) and replace my name. It's only my name b/c it was the name I initially inserted into the db.
	//if chores === chores then findAll else if {var theChoreToFind === req.params.chores} and we'll run that chore to update a chore?
	var parentFirstName = req.body.parentFirstName;
	var parentLastName = req.body.parentLastName;
	var choreName = req.body.choreName;
	var choreDesc = req.body.choreDesc;
	var choreValue = req.body.choreValue;
	var choreRegExp = choreName.replace(/ /g, "_");
	
	var chore = new Chore({ //JD
		choreName: choreRegExp,
		choreDesc: req.body.choreDesc,
		choreValue: req.body.choreValues,
		complete: false
	})

	chore.save(function(err){
		if(err){
			console.log(err);
		}else{
			console.log(chore);
			console.log("new chore added");
		}
	})
	
	Parent.findOneAndUpdate({parentFirstName: req.body.parentFirstName, parentLastName: req.body.parentLastName}, {$push: {chores: {chore}}}).exec(function(err, doc){
		if(err) {console.log(err)}
		console.log(doc);
	})
	res.send("Ok");
})//END new Chores

app.delete("/api/drop/:collection",function(req, res){
	var collection = req.params.collection;
	console.log(collection);
	collection.drop();
})

app.post("/api/post/:chorecomplete", function(req, res){
	//if (req.params.chorecomplete === 'chorecomplete'){
	Parent.findOneAndUpdate({parentFirstName: req.body.parentFirstName, parentLastName: req.body.parentLastName, "chores.choreName": req.params.chorecomplete}, {$set: {"chores.$.complete": true}}).exec(function(err, doc){
		if (err){ console.log(err); res.send("not ok");}
			else{
				console.log(doc);
				res.send("ok");
			}
		})
	//}//end if req.params.chorecomplete test condition
})

}