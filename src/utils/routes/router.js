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

app.get("/api/get/childinfo", function(req, res){
	Child.findById(req.user.id)
	.exec(function(err, doc){
		err ? console.log(err):console.log(doc);
		//res.send(doc) only one res at a time.
		Parent.findById(doc.parents[0])
		.populate("chores")
		.populate("children")
			.exec(function(err, doc){
				err ? console.log(err) : console.log(doc)
				res.send(doc)
			})

	})
})
  
//post route for new users, parents AND children
//Routes for new Parents/Children and login/logout found in /auth/index.js
//route for viewing chores
app.get("/api/get/chores/", function(req, res) {
	console.log(req.user)
	console.log("^^^req.user^^^")
	Chore.findById("5982101a182f3c30343c3cd9").exec(function(err,doc){ err ? console.log(err) : console.log(doc) })
})

app.get("/api/get/pchores", function(req, res){
	Parent.find({_id: req.user.id})
	.populate("children")
	.populate("chores")
		.exec(function(err, doc) {
			if (err) {console.log(err)}
			else {
				console.log(doc[0])
				console.log("^^^DOC")
				//console.log(doc[0].chores)
				console.log("^^^CHORENAME?")
				res.send(doc)
			}
		})

})

app.post("/api/get/onechore", function(req, res){
	console.log(req.body._id)
	Chore.findById(req.body._id)
		.populate("child")
		.exec(function(err, doc){
			if (err) {
				console.log(err)
			}else{
				console.log(doc)
				res.send(doc)
			}

		})
})
////////////////////////////////////////  James /////////////////////////////////////////////////////

app.get("/api/get/chores/:choreName", function(req, res){ //here we will get a dueDate for when the chores should be complete
	//we'll use the id it returns after they login, but for testing I used parentFirstName and specified a value to find.
	//We'll also probably end up having /api/:username/:chores?
// if (req.params.chores === "chores"){ 
	//changing this route just a little bit
	var choreName = req.params.choreName;
	Chore.find({choreName}).exec(function(err, doc){
		
		if(err){
			console.log(err)
		}else{
			if(doc[0].dueDate != null){ //if a due date was created
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
			
			if(currentDate > dueDate){ //comparing the current date vs the due date
				console.log("time is up!");
				if(complete == false){
					Chore.findOneAndUpdate({ choreName:choreName},{$set: {"pastDue": true}}, {upsert: true}).exec(function(err,doc){
							if(err){
								console.log(err);
							}else{
								console.log(doc);
								console.log("This Chore is Late");
							}
						})
						//if the task is not complete on time then the value of the chore decreases by 20 percent
					
				}else{
					console.log("The chore has been completed");
					// just in time
					// send money to the child or something
				// }
			}
		}else{
				console.log("you still have time!");
			}
		//JD ///////////////////////////////////////////////////////////////
		// res.send("Ok");
		res.json(doc);
		}else{ ///////////////if the dueDate was never specified in the first place
			console.log("you have all the time in the world!");
			res.json(doc)
		}
	   }
	})

})

////////////////////////////  James ////////////////////////////////////////////////////////

//route for inserting chores
app.post("/api/post/chores", function(req, res){
	//When we have someone logged in we will take one of the values we get from their presence, (either _id or email) and replace my name. It's only my name b/c it was the name I initially inserted into the db.
	//if chores === chores then findAll else if {var theChoreToFind === req.params.chores} and we'll run that chore to update a chore?
	console.log(req.user);
	console.log("^^^req.user^^^")
	console.log(req.body)
	var choreName = req.body.choreName;
	var choreDesc = req.body.choreDesc;
	var choreValue = req.body.choreValue;
	var choreRegExp = choreName.replace(/ /g, "_");
	// moment(req.body.createdAt).add(due, 'day').format("YYYY-MM-DD")
	var dueDate = req.body.dueDate; //parameter that sets when a chore is due by
	var chore = new Chore({ //JD
		choreName: choreRegExp,
		choreDesc: req.body.choreDesc,
		choreValue: req.body.choreValue,
		dueDate: req.body.dueDate
		 ///create a due for when the child

		                      // is to complete the task JD
	})
	chore.save(function(err, doc){ //save the the chores model, this time with a due date
		if(err){
			console.log(err);
			console.log("ERR^^^")
		}else{
			Parent.findByIdAndUpdate({_id: req.user._id}, {$push: {chores: doc}}, {new:true})
			.exec(function(err, doc){
				if (err) {console.log(err)}
					else{res.send(doc)}
			})
			console.log("new chore added");
		}
	})

})//END api/post/chores

app.delete("/api/drop/:collection",function(req, res){
	var collection = req.params.collection;
	console.log(collection);
	collection.drop();
})

app.put("/api/put/chorecomplete", function(req, res){
	var choreId;
	Chore.findByIdAndUpdate(choreId, {$elemMatch: {"chores.choreName": req.params.chorecomplete}}, {$set: {"chores.$.complete": true}}).exec(function(err, doc){
		if (err){ console.log(err); res.send("not ok");}
			else{
				console.log(doc);
				res.send("ok");
			}	
		})
	//}//end if req.params.chorecomplete test condition
})//END CHORE COMPLETE

app.post("/api/post/editedchore", function(req, res){
	console.log(req.body)
	var choreId = req.body.choreId;
	if (req.body.choreComplete === "true") {var complete = true} else {var complete = false};
	if (req.body.childSaysComplete === "true"){var childSaysComplete = true} else {var childSaysComplete = false};
	if (req.body.chorePastDue === "true") {var pastDue = true} else {var pastDue = false};
	Chore.findByIdAndUpdate(choreId, {$set: {choreName: req.body.choreName, choreDesc: req.body.choreDesc, choreValue: req.body.choreValue, complete: complete, childSaysComplete: childSaysComplete, pastDue: pastDue}}, {new: true})
		.then(function(results) {
			console.log(results)
			res.send(results)
		})
})

app.post("/api/post/editchild", function(req, res) {
	Child.findByIdAndUpdate(req.body.id, {$set:{firstName: req.body.firstName,
	 lastName: req.body.lastName,
	 email: req.body.email,
	 age: req.body.age
	}})
	.exec(function(err, doc) {
		if(err) {
			console.log(err)
		}else{
			console.log(doc)
			res.send(doc)
		}
	})
})

////goals
app.post("/api/new/goals", function(req, res){
	// console.log(req.user);
	// c onsole.log(req.body);

	var goalItem = req.body.goalItem;
	// console.log(item);
	var goalValue = req.body.goalValue;
	// console.log(value);

	var goal = new Goal({
		goalItem: req.body.item,
		goalValue: req.body.value
	})

	goal.save(function(err, doc){
		if(err){
			console.log(err);
			console.log("ERR^^^")
		}else{
			Child.findByIdAndUpdate({_id: req.user._id}, {$push: {goal: doc}})
			.exec(function(err, doc){
				if (err) {console.log(err)}
					else{
						res.send(doc)
					}
					console.log(doc);
					console.log("IF DOC^^^^")
			})
			console.log("new goal added");
		}
	})


});

}
