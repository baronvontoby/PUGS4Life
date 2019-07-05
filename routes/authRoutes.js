const router = require('express').Router();
const db = require('../models'); //get the models
const SECRET_KEY = 'b0TX6u4GeLJ0EUHcR9iMxH02HLEacArt';

var jwt = require('jsonwebtoken');
// config jwtConfig = express

router.route('/login')
    .post((req, res, err) => {
        console.log(req.body);
        console.log("username is" , req.body.username);
        db.User.findOne({ where: {email: req.body.username} })
            .then(dbUser => {console.log(dbUser); return dbUser})
            .then(dbUser => dbUser ? dbUser : Promise.reject("no such user found") ) //check if the user exists
            .then(dbUser => {dbUser.password === req.body.password ? dbUser: Promise.reject('Incorrect Password! the user is: ' , dbUser)})   // console.log( "the password is: ", dbUser.password , "the request password is " , req.body.password)
            .then(dbUser => {
            console.log("It is validated");
            const token = jwt.sign(
                {
                data: dbUser  // [ { username: dbUser.username, email: dbUser.email, ph_num:dbUser.phone_num, zipcode: dbUser.zipcode } ]
                }, SECRET_KEY) ; //created the key
                res.json({sucess: true, token: token }) //send back the token            
            })
            .catch( err => res.json(401, err)); 
        //res.json(req.body.Authorization);
    });

 
  
module.exports = router;

 
