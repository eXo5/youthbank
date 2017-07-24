var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChildSchema = new Schema({
	childName: {
		type: String,
		required: "Username required"
	},

	childEmail: {
		type: String,
		required:true,
		validate: [
		function(input){
			input.length >= 3;
		},
		"Email must be a valid email"
		]
	},

	password: {
		type: String,
		required: true
		validate: [
		function(input){
			input.length >= 6;
		},
		"Password must be at least 6 characters"
		]
	},

	age: {
		type: Number,
	},

	goal: {
		name: {type: String}, 
		value: {type: Number},
		goalAttained: {type: Boolean}
	}
});

var Child = mongoose.model("Child", UserSchema);

module.exports = Child;