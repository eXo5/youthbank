var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChildSchema = new Schema({
	childFirstName: {
		type: String,
		required: true
	},

	childLastName: {
		type: String,
		required: true
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
		required: true,
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
	},

	parents: [{
		type: Schema.Types.ObjectId,
		ref: "Parent"
	}]
});

var Child = mongoose.model("Child", ChildSchema);

module.exports = Child;