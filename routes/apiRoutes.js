<<<<<<< HEAD
var db = require("../models");
var router = require('express').Router();

router.route('/allevents')
    .get((req,res,err) => {
        db.Events.findAll({})
        .then(function(dbevents) {
            res.json(dbevents);
            console.log("IT was sent")
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
=======
var router = require("express").Router();
var db = require("../models");

router.get("/allevents", function(req,res) {
    // console.log("hello")
    // console.log(db.Events);
    db.Events.findAll({})
    .then(function(dbevents) {
        res.json(dbevents);
    });
});
>>>>>>> 88560a8524acb53391b24eac1b728bd20c027692

module.exports = router;