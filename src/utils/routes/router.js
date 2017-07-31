var path = require("path");
var axios = require("axios");
var moment = require("moment");//bringing in the moment package JD
// moment.format()// from the documentation JD
var Parent = require("../db/models/parent-model.js");
var Child = require("../db/models/kid-model.js");
var Chore = require("../db/models/chore-model.js"); //JD 

module.exports = function(app) {

app.get("/", function(req, res){
  res.sendFile(__dirname + "./public/index.html");
});
//post route for new users, parents AND children
app.post("/api/new/:person", function(req, res) {
//if person is newparent, then add a new parent to the db: 
console.log(req.body);
	if (req.params.person === "parent") {
	//define new Parent by req.body inputs
	var parent = new Parent({
		parentFirstName: req.body.parentFirstName,
		parentLastName: req.body.parentLastName,
		email: req.body.email,
		password: req.body.password
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
	var parentFirstName = req.body.parentFirstName; //testing link between parent and child
	var parentLastName = req.body.parentLastName;
	var child = new Child({
		childFirstName: req.body.childFirstName,
		childLastName: req.body.childLastName,
		email: req.body.email,
		password: req.body.password
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
	///Linking the parent and the child
	Parent.findOneAndUpdate({parentFirstName: parentFirstName, parentLastName: parentLastName}, {$push: {children: child}}).exec(function(err, doc){
		if(err) {console.log(err)}
		console.log(doc);
	})
	res.send("New Kid on the Block")


}//THESE 2 ROUTES NEED TO BE IN THE AUTH ROUTER

	});//end New Person
//route for viewing chores





////////////////////////////////////////  James /////////////////////////////////////////////////////

app.get("/api/get/chores/:choreName", function(req, res){ //here we will get a dueDate for when the chores should be complete
	//we'll use the id it returns after they login, but for testing I used parentFirstName and specified a value to find.
	//We'll also probably end up having /api/:username/:chores?
// if (req.params.chores === "chores"){ 
	//changing this route just a little bit
	var choreName = req.params.choreName;
	Chore.find({choreName}).exec(function(err, doc) {if(err){console.log(err)}
		
		if(err){
			console.log(err)
		}else{
			console.log("Document Response: " + doc);
		     // console.log(doc);
		     console.log(doc[0].dueDate); //getting stored dueDate //
		     const dueDate = new Date(moment(doc[0].dueDate).utcOffset(240)).getTime(); //converting to unix time
		     //utcOffset used to allign our timezone(EDT) with UTC time which is four hours ahead



		     console.log("due date:     " + dueDate); //unix format of the due date
		    
		     var complete = doc[0].complete //getting boolean value of the complete
		     // console.log(complete);
		//JD ///////////////////////////////////////////////////////////////
		var currentDate = moment(Date.now()); //converting to unix time

	

		console.log("current date: " + currentDate); //unix time of the current date
			
			if(currentDate > dueDate){
				console.log("time is up!");
				if(complete == false){
					console.log(doc[0].choreValue)
					Chore.findOneAndUpdate({ choreName:req.body.choreName},{$set: {"chores.$.pastDue": true}}).exec(function(err,doc){
							if(err){
								console.log(err);
							}else{
								console.log(doc);
								console.log("This Chore is Late");
							}
						})
						//if the task is not complete on time then the value of the chore decreases by 20 percent
					
				}else{
					// just in time
					// send money to the child or something
				// }
			}
		}else{
				console.log("you still have time!");
			}


		// if(currentDate > dueDate ){
			// Child.findOne({choreName: findAll({})})
		// }
		//JD ///////////////////////////////////////////////////////////////
		// res.send("Ok");
		res.json(doc);
		}
		
	})
	// }


})//END get Chores


////////////////////////////  James ////////////////////////////////////////////////////////



//route for inserting chores
app.post("/api/post/chores/", function(req, res){
	//When we have someone logged in we will take one of the values we get from their presence, (either _id or email) and replace my name. It's only my name b/c it was the name I initially inserted into the db.
	//if chores === chores then findAll else if {var theChoreToFind === req.params.chores} and we'll run that chore to update a chore?
	var parentFirstName = req.body.parentFirstName;
	var parentLastName = req.body.parentLastName;
	var choreName = req.body.choreName;
	var choreDesc = req.body.choreDesc;
	var choreValue = req.body.choreValue;
	var choreRegExp = choreName.replace(/ /g, "_");
	var due = parseInt(req.body.due); //parameter that sets when a chore is due by
	
	var chore = new Chore({ //JD
		choreName: choreRegExp,
		choreDesc: req.body.choreDesc,
		choreValue: req.body.choreValue,
		dueDate: moment(req.body.createdAt).add(due, 'second').format("YYYY-MM-DD") ///create a due for when the child
		                      // is to complete the task JD
	})

	chore.save(function(err){ //save the the chores model, this time with a due date
		if(err){
			console.log(err);
		}else{
			// console.log(chore);
			console.log("new chore added");
		}
	})
	
	Parent.findOneAndUpdate({parentFirstName: parentFirstName, parentLastName: parentLastName}, {$push: {chores: chore}}).exec(function(err, doc){
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
	parent.findOneAndUpdate({parentFirstName: req.body.parentFirstName, parentLastName: req.body.parentLastName, "chores.choreName": req.params.chorecomplete}, {$set: {"chores.$.complete": true}}).exec(function(err, doc){
		if (err){ console.log(err); res.send("not ok");}
			else{
				console.log(doc);
				res.send("ok");
			}
		})
	//}//end if req.params.chorecomplete test condition
})

}