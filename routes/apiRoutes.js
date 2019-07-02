var db = require("../models");
var router = require('express').Router();

router.get("/allevents", function(req,res) {
     //console.log("hello")
    // console.log(db.Events);
    db.Events.findAll({})
    .then(function(dbevents) {
        res.json(dbevents);
    });
});

router.route('/myevents')
    .get((req,res,err) => {
        res.json()
    });

    router.post('/newevent', function(req,res) {
        db.Events.create(req.body).then(function(response){
            console.log(response);
        });
    });
router.route('/newevent') 
    .post((req,res,err) => {
    var newEvent = req.body;
    db.Events.create(newEvent)
        .then(event => res.json(event))
        .catch(err => res.json(500, err))
        //res.json()
    });

router.route('/newuser') 
    .post((req,res,err) => {
    var newUser = req.body;
    db.User.create(newUser)
        .then(user => res.json(user))
        .catch(err => res.json(500, err))
        //res.json()
    });

router.route('/update/:id') 
    .put((req,res,err) => {
        res.json()
    });

router.route('/remove/:id')
    .delete((req,res,err) => {
        res.json()
    });

router.route('/user')
    .get((req,res,err) => {
        res.json();
    });




module.exports = router;