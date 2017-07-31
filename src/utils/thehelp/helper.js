// Here we will utilize the axios library to perform GET/POST requests
import axios from 'axios';

var helper = {

	postParent: function(parentInfo) {

		console.log(JSON.stringify(parentInfo));

		return axios.post("/api/new/parent", parentInfo);

	},

	postChild: function(firstName, lastName, email, age, password ) {
		axios.post("/api/new/kid", {firstName: firstName, lastName: lastName, email: email, age: age, password: password})
		.then(function(results){
			console.log(results);
		});
	},

	postChore: function(parentId, choreName, choreDesc, choreValue){
			//when new chore is posted, drop spaces and input underscores in choreName.
			var choreRegExp = choreName.replace(/ /g, "_");
		axios.post("/api/post/chores", {parentId: parentId, choreName: choreRegExp, choreDesc: choreDesc, chorValue: choreValue})
		.then(function(results){
			console.log(results);
		});
	},

	getChores: function(){
		return axios.get("/api/get/chores");
	},

	choreComplete: function(parentId, choreName,  ){ 

	},
	
//NOt 100% sure about returning axios verbs other than get.
	deleteChore: function(event, choreName) {
		console.log(choreName);
		axios.delete("/api/delete/" + choreName, function(results){
			console.log(results);
		});
	}
};

export default helper;