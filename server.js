const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// by default the require will look for the index.js file in the models folder
const db = require("./models");

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


const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '4821ffa6',
  apiSecret: 'dXwIKJrXzb3ZEbZe',
});

const from = '19522007356';
const to = '6124198226';
const text = 'Hello from Nexmo';

nexmo.message.sendSms(from, to, text);
// // var clockwork = require("clockwork")({key:"your clockwork key here"});


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
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});



module.exports = app;

