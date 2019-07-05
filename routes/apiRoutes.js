var db = require("../models");
var router = require('express').Router();
var sequelize = require("sequelize");
// call all events WORKING

// Select E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description , count(1) 
// from events E
// join participations AS P2
// where E.id = P2.EventId
// group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description

router.get("/allevents", function(req,res) {
  //console.log("hello")
  console.log(db.Events);
  db.Events.findAll({})
  .then(function(response) {
    res.json(response)
  })
  .then(function() {
    sequelize.query("Select E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description , count(1) from events E join participations AS P2 where E.id = P2.EventId group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description")
});
    
  });


router.get('/outdoor', function(req,res) {
  db.GameCategory.findAll({
    where: {is_outdoor: true},
    include: [{
      model: db.Events,
    }]   
  })
  .then(function(outdoor) {
    let events = [];
    for (let i=0; i < outdoor.length; i++ ){
      for(let e=0; e < outdoor[i].Events.length; e++){
        events.push(outdoor[i].Events[e]);
      }
    }
    res.json(events);
  });
});
router.get('/indoor', function(req,res) {
  db.GameCategory.findAll({
    where: {is_outdoor: false},
    include: [{
      model: db.Events,
    }]   
  })
  .then(function(outdoor) {
    let events = [];
    for (let i=0; i < outdoor.length; i++ ){
      for(let e=0; e < outdoor[i].Events.length; e++){
        events.push(outdoor[i].Events[e]);
      }
    }
    res.json(events);
  });
});

// add new event WORKING (in postman a json of the add event will be returned)
router.post('/newevent', function(req,res) {
  db.Events.create(req.body).then(function(response){
    // let partcipant = {
    //   UserId = response.UserId,
    //   EventId = response.EventId
    // }
    db.Participations.create(partcipant).then(function(res){
      res.json(res);
  });
  });
});

// join/participate in an event WORKING (sends back of UserId and EventId)
router.post('/joinevent', function(req,res) {
  db.Participation.create(req.body).then(function(response){
    res.json(response);
  });
});

router.get("/myevents", function(req,res) {
  Sequelize.query('SELECT E.id, E.event_name, E.start_date, E.event_time, E.event_city, E.event_state, E.event_zipcode, E.description , count(1) as noOfPart FROM events E Join participations AS P1 join participations AS P2 where E.id = P1.EventId and P1.EventId = P2.EventId and P1.UserId = 1 group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description')
  .then(myevents=> {
    let events = [];
    for (let i=0; i < myevents.length; i++)
    {
      
      id = myevents[i].id,
      event_name  = myevents[i].event_name,
      start_date = myevents[i].start_date,
      event_time = myevents[i].event_time,
      event_city = myevents[i].event_city,
      event_state = myevents[i].event_state,
      event_zipcode = myevents[i].event_zipcode,
      description = myevents[i].description,
      noOfParticipants = myevents[i].noOfPart
      // Each record will now be an instance of Event with Count of Participants
      events.push(myevents[i]);
      }
      res.json(myevents[i])
    }
  );
})
// query above with count added to it
// SELECT E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description , count(1)
// FROM events E
// Join participations AS P1
// join participations AS P2
// where E.id = P1.EventId
// and P1.EventId = P2.EventId
// and P1.UserId = 1
// group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description

//   .get((req,res,err) => {
//     db.Events.findAll({})
//     .then(function(response) {
//       res.json(response)
//     })
//     .then(function() {
//       sequelize.query("SELECT E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description , count(1) FROM events E Join participations AS P1 join participations AS P2 where E.id = P1.EventId and P1.EventId = P2.EventId and P1.UserId = 1 group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description")
//         });
// });
// router.get("/myevents", function(req,res) {

// sequelize.query('SELECT E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description , count(1) FROM events E Join participations AS P1 join participations AS P2 where E.id = P1.EventId and P1.EventId = P2.EventId and P1.UserId = 1 group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description', {
//    model: Events,
//    mapToModel: true // pass true here if you have any mapped fields
//  })
//  .then(myevents=> {
//    res.json(myevents)
//    // Each record will now be an instance of Project
//  });
// })
  //console.log("hello")
  // db.Events.findAll({})
  // .then(function(response) {
  //   res.json(response)
  // })
  // .then(function() {
  //   sequelize.query("SELECT E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description , count(1) FROM events E Join participations AS P1 join participations AS P2 where E.id = P1.EventId and P1.EventId = P2.EventId and P1.UserId = 1 group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description")


    


// Not my events
// Select * from events
// where id not in (
// select EventId from participations
// where UserId = 4 )

// NOT MY EVENTS with count : of participatns joined but I have not
// Select E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description , count(1) 
// from events E
// join participations AS P2
// where E.id = P2.EventId
// and id not in (
// select EventId from participations
// where UserId = 4 )
// group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description


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

router.route('/api/user')
    .get((req,res,err) => {
        res.json();
    });






module.exports = router;