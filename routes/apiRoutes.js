var db = require("../models");
var router = require('express').Router();

// WORKING - get all outdoor games
router.route('/outdoor/:id')
  .get((req,res,err) => {
  let userId = req.params.id;
  db.sequelize.query(`SELECT E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, 
  E.description , count(1) as player_count
  FROM events E
  join participations AS P2
  join gamecategories AS g
  where E.GameCategoryId = g.id
  AND 	E.id = P2.EventId
  AND 	g.is_outdoor = 1
  AND 	P2.EventId not in ( Select EventId from participations where UserId = ${userId} )
  group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description`)
  .then((outdoorEvents) => {
    res.json(outdoorEvents[0]);
  })
  .catch(err => res.json(500, err));
});

// WORKING - get all indoor games
router.route('/indoor/:id')
  .get((req,res,err) => {
  let userId = req.params.id;
  db.sequelize.query(`SELECT E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, 
  E.description , count(1) as player_count
  FROM events E
  join participations AS P2
  join gamecategories AS g
  where E.GameCategoryId = g.id
  AND 	E.id = P2.EventId
  AND 	g.is_outdoor = 0
  AND 	P2.EventId not in ( Select EventId from participations where UserId = ${userId} )
  group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description`)
  .then((indoorEvents) => {
    res.json(indoorEvents[0]);
  })
  .catch(err => res.json(500, err));
});

// WORKING - add new event (in postman a json of the add event will be returned)
router.route('/newevent')
  .post((req,res,err) => {
  console.log(req.body)
  let newEvent = {
    event_name: req.body.eventName,
    event_time: req.body.time,
    description: req.body.eventDes,
    start_date: Date.now()
  }
  db.Events.create(newEvent).then(function(response){
    let eventId = response.id;
    let userId = response.UserId;
    db.Participation.create({
      EventId: eventId,
      UserId: userId
    }).then( () => {
      res.json(response);
    })
})
  .catch(err => res.json(500,err));
});

// WORKING join/participate in an event (sends back of UserId and EventId)
router.route('/join')
  .post((req,res,err) => {
  db.Participation.create(req.body).then(function(response){
    res.json(response);
  })
  .catch(err => res.json(500,err));
});

//Events created WORKING
router.route('/eventscreated/:id')
  .get((req,res,err) => {
  db.Events.findAll({
    where: {
      UserId: req.params.id
    }
  })
  .then(result => 
    res.json(result))
    .catch(err => res.json(500,err))
})

// WORKING - get myevents by id and count the number of participants who have joined. 
router.route('/myevents/:id')
  .get((req,res,err) => {
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
      res.json(myevents[0]);
    }
  )
  .catch(err => res.json(500,err));
  });

//Working - get events that available to join (this does not include events I have already signed up for)
router.route('/allevents/:id')
  .get((req, res,err) => {
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
  .catch(err => res.json(500,err));
});

// // WORKING - add new user
// router.route('/newuser') 
//   .post((req,res,err) => {
  
//   let newUser = {
//     user_name: req.body.username,
//     password: req.body.password,
//     email: req.body.email,
//     name: req.body.username,
//     image_link: req.body.imageUrl,
//     phone_num: req.body.phonenumber,
//     city: req.body.city,
//     state: req.body.state,
//     zipcode: req.body.zipcode,
//     active: 1
//   }
//   db.User.create(newUser)
//       .then(user => res.json(user))
//       .catch(err => res.json(500, err))
//   });

// WORKING - update event information
router.route('/update/:id')
  .put((req, res,err) => {
  db.Events.update(
    req.body,
    {
        where: {
            id: req.params.id
        }
    })
    .then( (dbevents) => {
      res.json(dbevents);
    })
    .catch(err => res.json(500,err));
});

// WORKING - Deletes event by id and returns json of number of rows affected.
router.route('/remove/:id')
  .delete((req, res,err) => {
  db.Events.destroy({
    where:{
      id: req.params.id
    }
  })
  .then( (dbdelete) => {
    res.json(dbdelete);
  })
  .catch(err => res.json(500,err));
});


module.exports = router;


