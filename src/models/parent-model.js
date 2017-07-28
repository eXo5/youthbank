//article Schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ParentSchema = new Schema({
	parentFirstName: {
		type: String,
		required: true
	},

	parentLastName: {
		type: String,
		required: true
	},

	parentEmail: {
		type: String,
		required: true,
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

	chores: { 
		type: Array,
	},

	children: [{
		type: Schema.Types.ObjectId,
		ref: "Child"
	}]
});

var Parent = mongoose.model("Parent", ParentSchema);

module.exports = Parent;