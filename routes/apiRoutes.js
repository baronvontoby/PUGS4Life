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

router.route('/newevent') 
    .post((req,res,err) => {
        res.json()
    });

router.route('/newuser') 
    .post((req,res,err) => {
        res.json()
    });

router.route('/update') 
    .put((req,res,err) => {
        res.json()
    });

router.route('/remove')
    .delete((req,res,err) => {
        res.json()
    });

router.route('/user')
    .get((req,res,err) => {
        res.json();
    });




module.exports = router;