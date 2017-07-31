const express = require("express");
const router = express.Router();
const Parent = require("../db/models/parent-model")
const Child = require("../db/models/kid-model");
const passport = require("../passport");


router.get("/user", (req, res, next) => {
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user})
	} else {
		return res.json({user: null})
	}
})

router.post("/login", passport.authenticate("local"), (req, res) => {
	res.json({user: {email: req.user.email, _id: req.user._id} })
})

router.post("/api/new/parent", (req, res) => {
    const {email, password, parentFirstName, parentLastName } = req.body
    //ADD VALIDATION
    const newParent= new Parent({ email, password, parentFirstName, parentLastName })
    newParent.save((err, savedUser) => {
        if (err) return res.json(err)
            return res.json(savedUser)
    })
})

router.post("/logout", (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie("connect.sid") //clean up!
		return res.json({ msg: "Logging Out" })
	} else {
		return res.json({ msg: "No user to log out" })
	}
})

router.post("/signup", (req, res) => {
	const {email, password } = req.body
	//ADD VALIDATION
	const newParent= new Parent({ email, password })
	newParent.save((err, savedUser) => {
		if (err) return res.json(err)
			return res.json(savedUser)
	})
})

module.exports = router