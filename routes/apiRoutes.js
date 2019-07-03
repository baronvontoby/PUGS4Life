var db = require("../models");
var router = require('express').Router();

// call all events WORKING
router.get("/allevents", function(req,res) {
  //console.log("hello")
  console.log(db.Events);
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