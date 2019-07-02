var db = require("../models");
var router = require('express').Router();

router.get("/api/allevents", function(req,res) {
     //console.log("hello")
    // console.log(db.Events);
    db.Events.findAll({})
    .then(function(dbevents) {
        res.json(dbevents);
    });
});

router.route('/api/myevents')
    .get((req,res,err) => {
        res.json()
    });

router.route('/api/newevent') 
    .post((req,res,err) => {
    var newEvent = req.body;
    db.Events.create(newEvent)
        .then(event => res.json(event))
        .catch(err => res.json(500, err))
        //res.json()
    });

router.route('/api/newuser') 
    .post((req,res,err) => {
    var newUser = req.body;
    db.User.create(newUser)
        .then(user => res.json(user))
        .catch(err => res.json(500, err))
        //res.json()
    });

router.route('/api/update/:id') 
    .put((req,res,err) => {
    db.Events.update({
        where: {
            id: req.params.id
        }}
        )
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