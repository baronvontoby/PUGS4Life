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

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

  //route for a new user to register
  app.get("/register", function (req, res) {

    // console.log("Register route hit by user with ID: " + req.user.id);
    res.render("register", {});
  });

  // //get the current events for logged in user 
  // app.get("/index", function (req, res) {
  //   if (!req.user) {
  //     res.json(401);
  //   }
  //       console.log("Index route hit by user with ID: " + req.user.id);
  //       db.Events.findAll({

  //       })
  //       .then(function (dbJobs) {

  //       })
  //   });

  // // Load event details page by passing in event_id
  // app.get("/events/:id", function (req, res) {

  // });


};
