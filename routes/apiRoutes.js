var db = require("../models");
var router = require('express').Router();

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

//SELECT E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, 
// E.description , count(1) as player_count
// FROM events E
// join participations AS P2
// join gamecategories AS g
// where E.GameCategoryId = g.id
// AND 	E.id = P2.EventId
// AND 	g.is_outdoor = 0
// group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description;

router.get('/indoor', function(req,res) {
  db.sequelize.query("E.description , count(1) as player_count FROM events E join participations AS P2 join gamecategories AS g where E.GameCategoryId = g.id AND 	E.id = P2.EventId AND 	g.is_outdoor = 0 group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description");
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
  console.log(req.body)
  let newEvent = {
    event_name: req.body.eventName,
    event_time: req.body.eventTime,
    description: req.body.eventDes,
  }
  //console.log(newEvent)

  db.Events.create(newEvent).then(function(response){
      res.json(response);
  });
});
// WORKING join/participate in an event (sends back of UserId and EventId)
router.post('/join', function(req,res) {
  db.Participation.create(req.body).then(function(response){
    res.json(response);
  });
});

router.get('/eventscreated/:id', function(req,res) {
  db.Events.findAll({
    where: {
      UserId: req.params.id
    }
  })
  .then(result => 
    res.json(result))
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
router.get("/allevents/:id", function(req, res) {
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
