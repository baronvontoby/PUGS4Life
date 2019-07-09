const router = require('express').Router();
const db = require('../models'); //get the models
const jwtConfig = require('../models/config/jwt');
const SECRET_KEY = jwtConfig.JWT_SECRET_KEY;

var jwt = require('jsonwebtoken');
// config jwtConfig = express

router.route('/login')
    .post((req, res, err) => {
        db.User.findOne({ where: {email: req.body.username} })
            .then(dbUser => dbUser ? dbUser : Promise.reject("no such user found") ) //check if the user exists
            .then(dbUser => {
                if (req.body.password === dbUser.password ) {
                    console.log("All good!", dbUser)
                    return dbUser;
                }
                else {
                    Promise.reject('Incorrect Password! the user is: ' , dbUser)
                }
            })   // console.log( "the password is: ", dbUser.password , "the request password is " , req.body.password)
            //.then(dbUser => {console.log(req.body.password === dbUser.password ); console.log("Is Undefined", dbUser); return dbUser })
            .then(newUser => {
                // console.log("It is validated ", SECRET_KEY );
                //let user = {};
                const token = jwt.sign(
                    {
                    data: [ { id: newUser.id, username: newUser.username, email: newUser.email, ph_num: newUser.phone_num, zipcode: newUser.zipcode } ]
                    }, SECRET_KEY) ; //created the key
                    console.log(token);
                    res.json({sucess: true, token: token, user: { id: newUser.id , username: newUser.username, email: newUser.email, ph_num: newUser.phone_num, zipcode: newUser.zipcode } } ) //send back the token            
                })
            .catch( err => res.json(401, err)); 
    });

    router.route('/signUp') 
    .post((req, res, err) => {
        console.log(req.body);
        db.User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name,
            image_link: req.body.image_link,
            phone_num: req.body.phone_num,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode
        })
        .then((dbUser) => {
            const token = jwt.sign(
                {
                    data: [ { id: dbUser.id, username: dbUser.username, email: dbUser.email, ph_num:dbUser.phone_num, zipcode: dbUser.zipcode } ]
                }, SECRET_KEY) ; //created the key
                console.log("Heres the user", dbUser);
                res.json({sucess: true, token: token, user: { id: dbUser.id , username: dbUser.username, email: dbUser.email, ph_num:dbUser.phone_num, zipcode: dbUser.zipcode } } ) //send back the token
      });    
    }); 
 
  
module.exports = router;

 
