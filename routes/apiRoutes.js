var db = require("../models");
var router = require('express').Router();

// call all events
router.get("/api/allevents", function(req,res) {
     //console.log("hello")
    // console.log(db.Events);
    db.Events.findAll({})
    .then(function(dbevents) {
        res.json(dbevents);
    });
});

// add new event (but doesn't have unique id associated) WORKING
router.post('/newevent', function(req,res) {
    db.Events.create(req.body).then(function(response){
        console.log(req.body);
        console.log(response);
    });
});


// get users events WORKING
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


router.route('/update/:id') 
    .put((req,res,err) => {
    db.Events.update({
        event_name: "basketball"})
        .then(function(dbupdate) {
            res.json(dbupdate)
        });
    });

router.route('/api/remove/:id')
    .delete((req,res,err) => {
     db.Events.destroy({
         where:{
             id: req.params.id}
         })
        .then(function(dbdelete) {
            res.json(dbdelete)
        });
    });

router.route('/api/user')
    .get((req,res,err) => {
        res.json();
    });




module.exports = router;