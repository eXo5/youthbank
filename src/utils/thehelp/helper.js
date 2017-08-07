import Goals from '../../components/ChildView/Goal.js';
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

	logInChild: function(email, password) {
		console.log(email)
		console.log(password)
		  axios.post("/auth/login/child", {
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

	postChore: function(choreName, choreDesc, choreValue){
		console.log(choreName)
		console.log(choreDesc)
		console.log(choreValue)
			//when new chore is posted, drop spaces and input underscores in choreName.
			var choreRegExp = choreName.replace(/ /g, "_");
		axios.post("/api/post/chores", {choreName: choreRegExp, choreDesc: choreDesc, choreValue: parseFloat(choreValue)})
		.then(function(results){
			return results;
		});
	},

	getChores: function(){
		 return axios.get("/api/get/pchores")
		 	
	},

	choreComplete: function(parentId, choreName ){ 

	},
	
//NOt 100% sure about returning axios verbs other than get.
	deleteChore: function(event, choreName) {
		console.log(choreName);
		axios.delete("/api/delete/" + choreName, function(results){
			console.log(results);
		});
	},

	postGoal: function(event,goalItem, goalValue){ //helper function for kids to post goals
		console.log(goalItem);
		console.log(goalValue);
		axios.post("/api/post/goals", {goalItem:goalItem, goalValue:goalValue}).then(function(results){
			return results
		})
	},

	getGoal:function(){
			var currentGoals = []; 
		//trying to get goals to display in realtime with accordance to user
		// getGoal = () => {
		axios.get("api/get/goals").then(function(results){
			for(var i = 0;i<results.data.goal.length;i++){
			console.log(results.data.goal[i].goalItem);
			currentGoals.push(results.data.goal[i].goalItem);
			}
			console.log(currentGoals);
			this.setState({currentGoals:currentGoals});
			console.log(this.state.currentGoals);
			
		}).catch(function(error){
			console.log(error);
		})
	}







};

export default helper;