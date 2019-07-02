const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// by default the require will look for the index.js file in the models folder
const db = require("./models");

//auth test user
const jwt_express = require('express-jwt');
const JWT = require('./config/jwt');

const JWT_SECRET_KEY = JWT.JWT_SECRET_KEY;
const TEST_USER =  JWT.TEST_USER; 


//auth test
app.use(jwt_express({
  secret: JWT_SECRET_KEY,
  getToken: function fromHeaderOrQuerystring(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    } else if (req.cookies && req.cookies.token) {
      return req.cookies.token;
    }
    return null;
  }
}).unless({path: ['/','/login','/token', '/favicon.ico','/register','/api/register']}));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// require("./routes")(app);
app.use(require("./routes"));

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Starting the server, syncing our models ------------------------------------/
var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  console.log("option is true");
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions)
  .then(function() {
    console.log('creating user in db : ' + TEST_USER.user_name);
    return db.User.create({
      user_name: TEST_USER.user_name,
      password: TEST_USER.password,
      name: TEST_USER.name,
      email: TEST_USER.email, 
      city: TEST_USER.city,
      zipcode: TEST_USER.zipcode
    })
})
.then(function() {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});

module.exports = app;

