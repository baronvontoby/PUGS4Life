var router = require("express").Router();
var db = require("../models");

router.get("/allevents", function(req,res) {
    // console.log("hello")
    console.log(db.Events);
    db.Events.findAll({})
    .then(function(dbevents) {
        res.json(dbevents);
    });
});

module.exports = router;