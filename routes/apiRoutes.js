var db = require("../models");
const jwt = require('jsonwebtoken');

module.exports = function (app) {
  // Load index page

  app.get("/", function (req, res) {
    console.log("req.user at slash route: " + req.user);

    // if (!req.user) return res.sendStatus(401);
    if (!req.user) {
      res.render("login", {
      });
    } else {
      console.log('req.user exists');
    }

  });

  //route for a new user to register
  app.get("/register", function (req, res) {

    // console.log("Register route hit by user with ID: " + req.user.id);
    res.render("register", {});
  });

};
var router = require("express").Router();
var db = require("../models");

router.get("/allevents", function(req,res) {
    // console.log("hello")
    // console.log(db.Events);
    db.Events.findAll({})
    .then(function(dbevents) {
        res.json(dbevents);
    });
});

module.exports = router;
