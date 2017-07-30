//Chore Schema
var mongoose = require("mongoose"); //JD

require('mongoose-moment')(mongoose);
var Schema = mongoose.Schema;
var moment = require("moment");



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
	createdAt:{
		type: String, ///////must be given datatype of string in order to to be formatted by the moment function
		default: moment().format("MMM Do YY")
	},
	dueDate:{
		type:String,
	
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