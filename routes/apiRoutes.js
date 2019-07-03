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
var router = require('express').Router();

// call all events WORKING
router.get("/allevents", function(req,res) {
  //console.log("hello")
  // console.log(db.Events);
  db.Events.findAll({})
  .then(function(dbevents) {
      res.json(dbevents);
  });
});

// add new event WORKING (in postman a json of the add event will be returned)
router.post('/newevent', function(req,res) {
  db.Events.create(req.body).then(function(response){
      res.json(response);
  });
});

router.route('/myevents')
  .get((req,res,err) => {
      res.json()
  });

// add new user WORKING
router.route('/newuser') 
  .post((req,res,err) => {
  var newUser = req.body;
  db.User.create(newUser)
      .then(user => res.json(user))
      .catch(err => res.json(500, err))
  });

// update event information WORKING
router.put('/update/:id', function(req, res){
  db.Events.update(
    req.body,
    {
        where: {
            id: req.params.id
        }
    })
    .then( (dbevents) => {
      // this will return the number of rows updated in database
      res.json(dbevents);
    });
});

module.exports = router;

// Deletes event by id and returns json of number of rows affected. 
router.delete('/remove/:id', function(req, res) {
  db.Events.destroy({
    where:{
      id: req.params.id
    }
  })
  .then( (dbdelete) => {
    res.json(dbdelete);
  });
});

// router.route('/user')
//     .get((req,res,err) => {
//         res.json();
//     });

module.exports = router;
