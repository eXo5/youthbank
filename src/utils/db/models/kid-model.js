var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

var ChildSchema = new Schema({
	childFirstName: {
		type: String,
		required: true
	},

	childLastName: {
		type: String,
		required: true
	},

	email: {
		type: String,
		required:true,
		unique: true,
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
})

ChildSchema.methods = {
	checkPassword: function(inputPassword){
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: function(plainTextPassword){
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

ChildSchema.pre("save", function(next) {
		this.password = this.hashPassword(this.password);
		next();
})

var Child = mongoose.model("Child", ChildSchema);

module.exports = Child;