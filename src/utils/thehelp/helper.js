// Here we will utilize the axios library to perform GET/POST requests
import axios from 'axios';

var helper = {

	logOneIn: function(email, password) {
		console.log(email)
		console.log(password)
		  axios.post("/auth/login/parent", {
		 	email: email, 
		 	password: password
		 })
		.then(function(results) {
			return console.log(results)
		})
	},

	postParent: function(email, password, firstName, lastName) {
	 return axios.post("/auth/api/new/parent", {
		 	email: email, 
		 	password: password,
		 	firstName: firstName, 
		 	lastName: lastName 
		 	});
	 		// .then(function(results){
	 		// 	return console.log(results)
	 		// })

	},

	postChild: function(email, password, firstName, lastName, age) {
		return axios.post("/auth/api/new/child", {
			email: email, 
			password: password,
			firstName: firstName, 
			lastName: lastName, 
			age: age
		})
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