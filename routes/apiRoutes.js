var db = require("../models");
var router = require('express').Router();
require("dotenv").config();
const jwtConfig = require('../models/config/jwt');

const Nexmo = require('nexmo');
var keys = require("../keys");

const nexmo = new Nexmo({apiKey: keys.API_Key, apiSecret: keys.API_Secret})


sendSms = (user) => 
{
    //console.log('Data is' , user , 'and the key is ',  keys.API_Key );
    if (user.phone_num !== null)
    {
      let phNum = user.phone_num.substring(0,1) == '1' ? user.phone_num : '1' + user.phone_num;
      console.log("the number is : ", user.phone_num.substring(0,1));
      const from =  '17828207989'
      const to = phNum;
      const text = 'Welcome to Pugs! Ready to play?'
      console.log(phNum, text);
      nexmo.message.sendSms(from, to, text, (err, responseData) => {
          if (err) { 
              console.log(err);
          } else {
              if(responseData.messages[0]['status'] === "0") {
                  console.log("Message sent successfully.");
              } else {
                  console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
              }
          }          
      })
    }
    //just send some response
    res.json('');
}

// WORKING - get all outdoor games
router.route('/outdoor/:id')
  .get((req,res,err) => {
  let userId = req.params.id;
  db.sequelize.query(`SELECT E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.event_city,E.event_state, 
  E.description , count(1) as player_count
  FROM Events E
  join Participations AS P2
  join GameCategories AS g
  where E.GameCategoryId = g.id
  AND 	E.id = P2.EventId
  AND 	g.is_outdoor = 1
  AND 	P2.EventId not in ( Select EventId from Participations where UserId = ${userId} )
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
  db.sequelize.query(`SELECT E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.event_city, E.event_state, 
  E.description , count(1) as player_count
  FROM Events E
  join Participations AS P2
  join GameCategories AS g
  where E.GameCategoryId = g.id
  AND 	E.id = P2.EventId
  AND 	g.is_outdoor = 0
  AND 	P2.EventId not in ( Select EventId from Participations where UserId = ${userId} )
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
    start_date: Date.now(),
    UserId: req.body.userId,
    event_city: req.body.eventLoc,
    GameCategoryId: req.body.isOutdoor ? 1 : 2
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
router.route('/join/:userId/:eventId')
  .post((req,res,err) => {
    console.log(req.params.userId, req.params.eventId);
    db.Participation.create({
      EventId: req.params.eventId,
      UserId: req.params.userId
    })
    .then( 
      db.User.findOne( { where: { id: req.params.userId} })
      .then( result => sendSms(result))
      )
   .then( () => 
        db.sequelize.query(`Select E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode,  E.event_city, E.event_state, E.description , count(1) 
        from Events E
        join Participations AS P2
        where E.id = P2.EventId
        and id not in (
        select EventId from Participations
        where UserId = ${ req.params.userId } )
        group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description`
        ) )
    .then(eventsToJoin => {
        console.log("Here are the events: " , eventsToJoin[0]);
        res.json(eventsToJoin[0]);
      }) 
      // .then( (result)  => sendSms(result) )
    
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
  db.sequelize.query(`SELECT E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode,  E.event_city, E.event_state, E.description , count(1) as player_count
  FROM Events E
  Join Participations AS P1
  join Participations AS P2
  where E.id = P1.EventId
  and P1.EventId = P2.EventId
  and P1.UserId = ${uid}
  group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description`)
  .then(myevents=> {
      //console.log(myevents);
      res.json(myevents[0]);
    }
  )
  .catch(err => res.json(500,err));
  });

//Working - get events that available to join (this does not include events I have already signed up for)
router.route('/allevents/:id')
  .get((req, res,err) => {
  let userId = req.params.id;
  db.sequelize.query(`Select E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode,  E.event_city, E.event_state, E.description , count(1) 
  from Events E
  join Participations AS P2
  where E.id = P2.EventId
  and id not in (
  select EventId from Participations
  where UserId = ${userId} )
  group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description `
  )
  .then(eventsToJoin => {
    //console.log(eventsToJoin);
    res.json(eventsToJoin[0]);
  })
  .catch(err => res.json(500,err));
});

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

//WORKING - Deletes event by id and event Id in particpation to 'UNJOIN' and event.
router.route('/unJoin/:userId/:eventId')
  .delete((req, res,err) => {
  db.Participation.destroy({
    where:{
      UserId: req.params.userId,
      EventId: req.params.eventId
    }
  })
  .then( () => 
  db.sequelize.query(`SELECT E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode,  E.event_city, E.event_state, E.description , count(1) as player_count
  FROM Events E
  Join Participations AS P1
  join Participations AS P2
  where E.id = P1.EventId
  and P1.EventId = P2.EventId
  and P1.UserId = ${req.params.userId}
  group by E.id, E.event_name, E.start_date, E.event_time, E.event_zipcode, E.description`)
  .then(myevents => {
      //console.log(myevents);
      res.json(myevents[0]);
    })
  )
  .catch(err => res.json(500,err));
});

module.exports = router;

