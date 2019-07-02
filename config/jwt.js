const JWT_SECRET_KEY = '6aRYMci5oqLQtpFkpeFrid7BbAjB'; //hide the key in the config vars
var db = require("../models");

//use dummy user until we are ready with real users database
const TEST_USER = { 
  user_name: "pugs",
  password: "pass",
  name: "Pugs Gamer",
  email: "pugs2@gmail.com",
  city: "Minneapolis",
  zipcode: "55346"
  // ,
  // createdAt: new Date(),
  // updatedAt: new Date()
};

const JWT_OPTIONS = { //this is boilerplate. 
  algorithm: "HS256",
  expiresIn: "2 days"
}

module.exports = {
  TEST_USER: TEST_USER,
  JWT_OPTIONS: JWT_OPTIONS,
  JWT_SECRET_KEY: JWT_SECRET_KEY,
}