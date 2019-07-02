var db = require("../models");
var router = require('express').Router();

<<<<<<< HEAD
router.get("/api/allevents", function(req,res) {
=======
// call all events
router.get("/allevents", function(req,res) {
>>>>>>> dc3778883bcf605e6a3b2d04ec466ae125760ac5
     //console.log("hello")
    // console.log(db.Events);
    db.Events.findAll({})
    .then(function(dbevents) {
        res.json(dbevents);
    });
});

<<<<<<< HEAD
router.route('/api/myevents')
=======
// add new event (but doesn't have unique id associated) WORKING
router.post('/newevent', function(req,res) {
    db.Events.create(req.body).then(function(response){
        console.log(req.body);
        console.log(response);
    });
});


// get users events WORKING
router.route('/myevents')
>>>>>>> dc3778883bcf605e6a3b2d04ec466ae125760ac5
    .get((req,res,err) => {
        res.json()
    });

<<<<<<< HEAD
router.route('/api/newevent') 
    .post((req,res,err) => {
    var newEvent = req.body;
    db.Events.create(newEvent)
        .then(event => res.json(event))
        .catch(err => res.json(500, err))
        //res.json()
    });

router.route('/api/newuser') 
=======
// add new user WORKING
router.route('/newuser') 
>>>>>>> dc3778883bcf605e6a3b2d04ec466ae125760ac5
    .post((req,res,err) => {
    var newUser = req.body;
    db.User.create(newUser)
        .then(user => res.json(user))
        .catch(err => res.json(500, err))
    });

<<<<<<< HEAD
router.route('/api/update/:id') 
    .put((req,res,err) => {
    db.Events.update({
        where: {
            id: req.params.id
        }}
        )
=======

router.route('/update/:id') 
    .put((req,res,err) => {
    db.Events.update({
        event_name: "basketball"})
>>>>>>> dc3778883bcf605e6a3b2d04ec466ae125760ac5
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

<<<<<<< HEAD
router.route('/api/user')
    .get((req,res,err) => {
        res.json();
    });
=======


// router.route('/user')
//     .get((req,res,err) => {
//         res.json();
//     });
>>>>>>> dc3778883bcf605e6a3b2d04ec466ae125760ac5




module.exports = router;