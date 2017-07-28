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
	}


});

var Chore = mongoose.model("Chore", ChoreSchema);

module.exports = Chore; 