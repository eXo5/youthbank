const express = require("express");
const router = express.Router();
const Parent = require("../db/models/parent-model")
const Child = require("../db/models/kid-model");
const passport = require("../passport");

//ALL THESE ROUTES ARE PREFACED WITH /AUTH

router.get("/user", (req, res, next) => {
	//router.get("/auth/user")
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user})
	} else {
		return res.json({user: null})
	}
})
	
router.post("/login/parent", passport.authenticate("local-parent"), (req, res) => {
	//router.post("/auth/login")
	return res.json({user: {email: req.user.email, _id: req.user._id} })	
})

router.post("/login/child", passport.authenticate("local-child"), (req, res) => {
	//router.post("/auth/login")
	return res.json({user: {email: req.user.email, _id: req.user._id} })
})

router.post("/logout", (req, res) => {
	//router.post("/auth/logout")
	if (req.user) {
		req.session.destroy()
		res.clearCookie("connect.sid") //clean up!
		return res.json({ msg: "Logging Out" })
	} else {
		return res.json({ msg: "No user to log out" })
	}
})

router.post("/api/new/parent", (req, res) => {
	//router.post("/auth/api/new/parent")
	const { email, password, firstName, lastName } = req.body
	console.log(req.body)
	//ADD VALIDATION
	console.log(password)
	const newParent = new Parent({ email, password, firstName, lastName })
	newParent.save((err, savedUser) => {
		if (err) return res.json(err)
			return res.json(savedUser)
	})
})

router.post("/api/new/child", (req, res) => {
		//router.post("/auth/api/new/parent")
		const { email, password, firstName, lastName, age } = req.body
	//ADD VALIDATION
	const newChild = new Child({ email, password, firstName, lastName, age })
	newChild.save((err, savedUser) => {
		if (err) console.log(err);
				Parent.findByIdAndUpdate(req.user.id, {$push: {children: savedUser}})
				.exec(function(err, doc){
					if (err) console.log(err);
					console.log(doc)
				})
				console.log(savedUser)
				Child.findByIdAndUpdate(savedUser._id, {$push: {parents:req.user.id}}, {new:true}).exec(function(err, doc){
					err ? console.log(err) : console.log(doc);
				})
			return res.json(savedUser)
	})

	
})

module.exports = router