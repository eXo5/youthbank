var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

var ChildSchema = new Schema({
	firstName: {
		type: String
	//	required: true
	},

	lastName: {
		type: String
	//	required: true
	},

	email: {
		type: String,
	//	required:true,
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
	//	required: true,
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

	goals: [{
		type: Schema.Types.ObjectId,
		ref: "Goal"
	}],

	parents: [{
		type: Schema.Types.ObjectId,
		ref: "Parent"
	}],
	chore: [{
		type: Schema.Types.ObjectId,
		ref: "Chore"
	}]
})

ChildSchema.methods = {
	checkPassword: function(password){
		return bcrypt.compareSync(password, this.password)
	},
	hashPassword: function(password){
		return bcrypt.hashSync(password, 10)
	}
}

ChildSchema.pre("save", function(next) {
		this.password = this.hashPassword(this.password);
		next()
})

var Child = mongoose.model("Child", ChildSchema);

module.exports = Child;