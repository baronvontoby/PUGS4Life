var db = require("../models");
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'b0TX6u4GeLJ0EUHcR9iMxH02HLEacArt'; //hide it
const expressJwt = require('express-jwt');
const jwtProtect = expressJwt({secret: SECRET_KEY});
var router = require("express").Router();
var router = require('express').Router();

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
router.route("/allevents") 
  .get(jwtProtect, (req,res) =>  {
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

router.post("/myevents", function(req,res) {
  let uid = req.body.userId;
  console.log("User id is: ", uid);
  db.sequelize.query('SELECT E.id, E.event_name, E.start_date, E.event_time, E.event_city, E.event_state, E.event_zipcode, E.description , count(1) as noOfPart FROM events E Join participations AS P1 join participations AS P2 where E.id = P1.EventId and P1.EventId = P2.EventId and P1.UserId = ' + uid + ' group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description')
  .then(myevents=> {      
      let events = [];
      for (let i=0; i < myevents.length; i++)
      {
        let event = {
        id: myevents[i].id,
        event_name: myevents[i].event_name,
        start_date: myevents[i].start_date,
        event_time: myevents[i].event_time,
        event_city: myevents[i].event_city,
        event_state: myevents[i].event_state,
        event_zipcode: myevents[i].event_zipcode,
        description: myevents[i].description,
        noOfParticipants: myevents[i].noOfPart
        };
        // Each record will now be an instance of Event with Count of Participants
        events.push(event);
      }
      res.json(myevents);
    }
  )
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

router.route('/signUp') 
    .post((req, res, err) => {
        //console.log(req.body);
        db.User.create({
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
          name: req.body.name,
          image_link: req.body.image_link,
          phone_num: req.body.phone_num,
          city: req.body.phone_num,
          state: req.body.city,
          zipcode: req.body.state
      }).then( newUser => res.json( newUser));
    }); 

module.exports = router;


