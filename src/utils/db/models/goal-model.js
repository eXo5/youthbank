var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.promise = Promise;

var GoalSchema = new Schema({
	goalItem: {
		type: String,
		},
	goalValue: {
		type: Number,
		},
	GoalAttained: {
			type:Boolean,
			default:false
		},
	createdAt: {
			type: Date,
			default: Date.now()
		}

})
var Goal = mongoose.model("Goal", GoalSchema)

module.exports = Goal;