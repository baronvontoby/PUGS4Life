const JWT_SECRET_KEY = 'b0TX6u4GeLJ0EUHcR9iMxH02HLEacArt'; //hide the key in the config vars

var db = require("../");
var db = require("../../models");


//use dummy user until we are ready with real users database
const TEST_USER = { 
  user_name: "pugs",
  password: "pass",
  name: "Pugs Gamer",
  email: "pugs2@gmail.com",
  city: "Minneapolis",
  state: "MN",
  zipcode: "55346"
  // ,
  // createdAt: new Date(),
  // updatedAt: new Date()
};

const JWT_OPTIONS = { //this is boilerplate. 
  algorithm: "HS256",
  expiresIn: "10 days"
}

module.exports = {
  TEST_USER: TEST_USER,
  JWT_OPTIONS: JWT_OPTIONS,
  JWT_SECRET_KEY: JWT_SECRET_KEY,
}