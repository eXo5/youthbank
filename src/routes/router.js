var path = require("path");
var Parent = require("../models/parent-model.js");
var Child = require("../models/kid-model.js");

module.exports = function(app) {

app.get("/", function(req, res){
  res.sendFile(__dirname + "./public/index.html");
});
//post route for new users, parents AND children
app.post("/api/new/:person", function(req, res) {
//if person is newparent, then add a new parent to the db: 
	if (req.params.person === "parent") {
		console.log(req.body);
	//define new Parent by req.body inputs
	var parent = new Parent({
		parentFirstName: req.body.parentFirstName,
		parentLastName: req.body.parentLastName,
		parentEmail: req.body.parentEmail,
		password: req.body.parentPassword
	})
	//save a parent to the parents collection
	parent.save(function(err) {
		if (err) {
			console.log(err)
		}
			else {
				console.log(parent);
				console.log("New Parent Added");
			}
		})
	res.send("Parent Added");
}
//if person is newkid then add a new kid to the db
//THIS IS MISSING THE PARENT REFERENCE AND ADDING THE CHILD TO THE PARENT's CHILDREN ARRAY.
else if (req.params.person === "kid") {
	//define new child by req.body inputs
	var child = new Child({
		childFirstName: req.body.childFirstName,
		childLastName: req.body.childLastName,
		childEmail: req.body.childEmail,
		password: req.body.childPassword
	})
	//save new child to the children collection
	child.save(function(err){
		if (err) {
			console.log(err);
		}
			else{
				console.log(child);
				console.log("New Kid on the Block!");//lol
			}
	})
	res.send("New Kid on the Block")
}

	});//end New Person
//route for viewing chores
app.get("/api/get/:chores", function(req, res){
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
app.post("/api/post/:chores", function(req, res){
	//When we have someone logged in we will take one of the values we get from their presence, (either _id or email) and replace my name. It's only my name b/c it was the name I initially inserted into the db.
	//if chores === chores then findAll else if {var theChoreToFind === req.params.chores} and we'll run that chore to update a chore?
	var choreName = req.body.choreName;
	var choreReqs = req.body.choreReqs;
	Parent.findOneAndUpdate({parentFirstName:"Michael", parentLastName: "Yingling"}, {$push: {chores: {choreName: choreName, choreReqs: choreReqs, complete: false}}}).exec(function(err, doc){
		if(err) {console.log(err)}
		console.log(doc);
	})
	res.send("Ok");
})//END new Chores

app.post("/api/post/:chorecomplete", function(req, res){
	Parent.findOneAndUpdate({})
})
}