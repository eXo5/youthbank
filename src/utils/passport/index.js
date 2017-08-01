const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Parent = require("../db/models/parent-model");

passport.serializeUser((user, done) => {
	done(null, {_id: Parent._id, email: Parent.email }) //take out email in production?
})

passport.deserializeUser((id, done) => {
	Parent.findOne({_id: id }, "email", (err, user) => {
	done(null, false)
	})
})

// === REGISTER LOCAL STRAT ===
passport.use(
	new LocalStrategy(
	{
		usernameField: "email"
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

// passport.use(
// 	new LocalStrategy(
// 	{
// 		usernameField: "email"
// 	},
// 	function(username, password, done) {
// 		Child.findOne({email: username}, (err, userMatch) => {
// 			if (err) {
// 				return done(err)
// 			}
// 			if(!userMatch) {
// 				return done(null, false, {message: "Incorrect Username"})
// 			}
// 			if(!userMatch.checkPassword(password)) {
// 				return done(null, false, {message: "Incorrect password"})
// 			}
// 			return done(null, userMatch)
			
// 			})
// 		}
// 	)
// )

module.exports = passport