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
//Routes for new Parents/Children and login/logout found in /auth/index.js
//route for viewing chores

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

})//END get Chores

////////////////////////////  James ////////////////////////////////////////////////////////

//route for inserting chores
app.post("/api/post/chores", function(req, res){

    //importing a user session
    var auth = require("../passport/index.js")(app,user);


	//When we have someone logged in we will take one of the values we get from their presence, (either _id or email) and replace my name. It's only my name b/c it was the name I initially inserted into the db.
	//if chores === chores then findAll else if {var theChoreToFind === req.params.chores} and we'll run that chore to update a chore?
	console.log(req.body);
	console.log("^^^req.body^^^")
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
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

	chore.save(function(err){ //save the the chores model, this time with a due date
		if(err){
			console.log(err);
		}else{
			// console.log(chore);
			console.log("new chore added");
		}
	})

	Parent.findOneAndUpdate({_id: req.user._id}, {$push: {chores: chore}}).exec(function(err, doc){

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
	parent.findOneAndUpdate({firstName: req.body.firstName, lastName: req.body.lastName, "chores.choreName": req.params.chorecomplete}, {$set: {"chores.$.complete": true}}).exec(function(err, doc){
		if (err){ console.log(err); res.send("not ok");}
			else{
				console.log(doc);
				res.send("ok");
			}
		})
	//}//end if req.params.chorecomplete test condition
})//END CHORE COMPLETE




}