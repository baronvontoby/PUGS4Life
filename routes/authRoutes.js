const router = require('express').Router();
const db = require('../models'); //get the models
const SECRET_KEY = 'b0TX6u4GeLJ0EUHcR9iMxH02HLEacArt';

var jwt = require('jsonwebtoken');
// config jwtConfig = express

router.route('/login')
    .post((req, res, err) => {
        
        db.User.findOne({ where: {email: req.body.username} })
            .then(dbUser => dbUser ? dbUser : Promise.reject("no such user found") ) //check if the user exists
            .then(dbUser => {
                if (req.body.password === dbUser.password ) {
                    return dbUser;
                }
                else {
                    Promise.reject('Incorrect Password! the user is: ' , dbUser)
                }
            })   
            .then(dbUser => {
            
                const token = jwt.sign(
                    {
                    data: [ { username: dbUser.username, email: dbUser.email, ph_num:dbUser.phone_num, zipcode: dbUser.zipcode } ]
                    }, SECRET_KEY) ; //created the key
        
                    res.json({sucess: true, token: token, user: { id: dbUser.id , username: dbUser.username, email: dbUser.email, ph_num:dbUser.phone_num, zipcode: dbUser.zipcode } } ) //send back the token            
                })
            .catch( err => res.json(401, err)); 
    });

    router.route('/signUp') 
    .post((req, res, err) => {
        //console.log(req.body);
        db.User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name,
            image_link: req.body.image_link,
            phone_num: req.body.phone_num,
            city: req.body.phone_num,
            state: req.body.city,
            zipcode: req.body.state
        })
        .then((newUser) => {
            const token = jwt.sign(
                {
                    data: [ { username: dbUser.username, email: dbUser.email, ph_num:dbUser.phone_num, zipcode: dbUser.zipcode } ]
                }, SECRET_KEY) ; //created the key
                //console.log(dbUser);
                res.json({sucess: true, token: token, user: { id: dbUser.id , username: dbUser.username, email: dbUser.email, ph_num:dbUser.phone_num, zipcode: dbUser.zipcode } } ) //send back the token
      });    
    }); 
 
  
module.exports = router;

 
