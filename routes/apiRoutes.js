var db = require("../models");
var router = require('express').Router();

// WORKING call all events
router.get("/allevents", function(req,res) {
  //console.log("hello")
  console.log(db.Events);
  db.Events.findAll({})
  .then(function(dbevents) {
      res.json(dbevents);
  });
});

// WORKING - get all outdoor games
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

// WORKING - get all indoor games
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

// WORKING - add new event (in postman a json of the add event will be returned)
router.post('/newevent', function(req,res) {
  db.Events.create(req.body).then(function(response){
      res.json(response);
  });
});

// WORKING join/participate in an event (sends back of UserId and EventId)
router.post('/joinevent', function(req,res) {
  db.Participation.create(req.body).then(function(response){
    res.json(response);
  });
});


//========================================================================
// WORKING - get myevents by id and count the number of participants who have joined. 
router.get("/myevents/:id", function(req,res) {
  let uid = req.params.id;
  db.sequelize.query(`SELECT E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description , count(1) as player_count
  FROM events E
  Join participations AS P1
  join participations AS P2
  where E.id = P1.EventId
  and P1.EventId = P2.EventId
  and P1.UserId = ${uid}
  group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description`)
  .then(myevents=> {
      console.log(myevents);
      res.json(myEvents[0]);
    }
  )
  });
//==========================================================================

//========================================================================
//Working - get events that available to join (this does not include events I have already signed up for)
router.get("/eventsToJoin/:id", function(req, res) {
  let userId = req.params.id;
  db.sequelize.query(`Select E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description , count(1) 
  from events E
  join participations AS P2
  where E.id = P2.EventId
  and id not in (
  select EventId from participations
  where UserId = ${userId} )
  group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description`
  )
  .then(eventsToJoin => {
    console.log(eventsToJoin);
    res.json(eventsToJoin[0]);
  })
});


//========================================================================

// WORKING - add new user
router.route('/newuser') 
  .post((req,res,err) => {
  var newUser = req.body;
  db.User.create(newUser)
      .then(user => res.json(user))
      .catch(err => res.json(500, err))
  });

// WORKING - update event information
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


// WORKING - Deletes event by id and returns json of number of rows affected.
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