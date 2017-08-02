var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.promise = Promise;

var GoalSchema = new Schema({
	goal: {
		type: String,
		value: Number,
		GoalAttained: Boolean,
		createdAt: {
			type: Date,
			default: Date.now()
		}
	}
})
var Goal = new mongoose.model("Goal", GoalSchema)