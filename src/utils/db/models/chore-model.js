//Chore Schema
var mongoose = require("mongoose"); //JD
var Schema = mongoose.Schema;

var ChoreSchema = new Schema({
	choreName: {
		type: String,
		required: true
	},
	choreDesc: {
		type: String,
	},
	choreValue: {
		type: String,

	},
	complete: {
		type: Boolean,
		default: false
	},
	createdAt: {
		type: Date,
		default: Date.now,
		required: true
	},
	dueDate:{
		type:Date
	},
	pastDue:{
		type:Boolean,
		default: false
	},
//This might allow us to add children to specific chores.
	child: [{
		type: Schema.Types.ObjectId,
		ref: "Child"
	}]


});

var Chore = mongoose.model("Chore", ChoreSchema);

module.exports = Chore; 