require("dotenv").config();
var keys = require("../../keys");

const JWT_SECRET_KEY = keys.JWT_SECRET_KEY;    //hide the key in the config vars
// process.env.JWT_SECRET_KEY; 
var db = require("../");

//use dummy user until we are ready with real users database
const TEST_USER = { 
  user_name: "pugs",
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