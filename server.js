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


// var clockwork = require("clockwork")({key:"your clockwork key here"});


// // Send a message
// clockwork.sendSms({ To: "9522007356", Content: "Test!"}, function(error, resp) {
//     if (error) {
//         console.log("Something went wrong", error);
//     } else {
//         console.log("Message sent",resp.responses[0].id);
//     }
// });
var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  // this controls the reset of our mysql database
  syncOptions.force = false;
}
 
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions)
  .then(() => {
    // console.log('creating user in db : ' + TEST_USER.user_name); //this is only for the first time when db is recreated
    // return db.User.create({
    //   username: TEST_USER.user_name,
    //   password: TEST_USER.password,
    //   name: TEST_USER.name,
    //   email: TEST_USER.email, 
    //   city: TEST_USER.city,
    //   state: TEST_USER.state,
    //   zipcode: TEST_USER.zipcode
    // })
})
.then(function() {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});



module.exports = app;

