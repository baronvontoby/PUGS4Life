const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// by default the require will look for the index.js file in the models folder
const db = require("./models");

//auth test user
const jwt_express = require('express-jwt');
const JWT = require('./models/config/jwt');

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

const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: '4821ffa6',
  apiSecret: 'dXwIKJrXzb3ZEbZe'
})

// require the Twilio module and create a REST client}
const from =  '17828207989'
const to = ''
const text = 'A text message sent using the Nexmo SMS API'

nexmo.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})

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

