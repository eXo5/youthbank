// Here we will utilize the axios library to perform GET/POST requests
import axios from 'axios';

var helper = {

	postParent: function(parentFirstName, parentLastName, parentEmail, password) {
		axios.post("/api/new/parent", {parentFirstName: print_headline, parentLastName: date, parentEmail: web_url, password: password})
		.then(function(results){
			console.log(results);
		});
	},

	postChild: function(childFirstName, childLastName, childEmail, age, password ) {
		axios.post("/api/new/kid", {childFirstName: childFirstName, childLastName: childLastName, childEmail: childEmail, age: age, password: password})
		.then(function(results){
			console.log(results);
		});
	},
	postChore: function(parentId, choreName, choreDesc, choreValue){
			//when new chore is posted, drop spaces and input underscores.
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