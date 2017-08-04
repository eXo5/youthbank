const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Parent = require("../db/models/parent-model");
const Child = require("../db/models/kid-model");

passport.serializeUser((user, done) => {
	console.log(user.id)
	console.log(user.email)
	console.log("^^^SERIALIZATION^^^")
	done(null, {_id: user._id, email: user.email }) //take out email in production?
	//done(null, { _id: user._id, email: user.email }) // take out email in production
})

passport.deserializeUser((id, done) => {
	Parent.findOne({_id: id }, "email", (err, user) => {
		if (!user){
			Child.findOne({_id: id }, "email", (err, user) => {
				done(null, user)
			})
		}else{
			done(null, user)
		}
	})
})

// passport.deserializeUser((id, done) => {
// 	Parent.findOne({_id: id }, "email", (err, user) => {
// 	done(null, user)
// 	})
// })

// === REGISTER LOCAL STRAT ===
passport.use("local-parent",
	new LocalStrategy(
	{
		usernameField: "email",
		passwordField: "password"
	},
	function(username, password, done) {
		Parent.findOne({email: username}, (err, userMatch) => {
			if (err) {
				return done(err)
			}
			if(!userMatch) {
				return done(null, false, {message: "Incorrect Username"})
			}
			if(!userMatch.checkPassword(password)) {
				return done(null, false, {message: "Incorrect password"})
			}
			return done(null, userMatch)
			})
		}
	)
)

passport.use("local-child",
	new LocalStrategy(
	{
		usernameField: "email",
		passwordField: "password"
	},
	function(username, password, done) {
		Child.findOne({email: username}, (err, userMatch) => {
			if (err) {
				return done(err)
			}
			if(!userMatch) {
				return done(null, false, {message: "Incorrect Username"})
			}
			if(!userMatch.checkPassword(password)) {
				return done(null, false, {message: "Incorrect password"})
			}
			return done(null, userMatch)
			
			})
		}
	)
)

module.exports = passport