# PUGS - Pick Up Games Web Application
### Created By
  * Lorenzo Dandrea 
  * Jeff Samuels
  * Deepa Bhujle
  * Esther Hwang
  * Sabrina Thong
  * Ash Feijoo
  * Ellen Buelow
### Overview
* PUGS is an application for spontaneously finding Pick Up Games in your area!
* PUGS allows users to quickly form teams for indoor and outdoor sports, table-top games, video-games & more.
  
## **<a href="https://lit-citadel-88830.herokuapp.com/create" target="_blank">++++ PUGs Site ++++</a>**
#### Dependencies
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [Path](https://github.com/mtrpcic/pathjs)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [React](https://www.npmjs.com/package/react)
* [MomentJs](https://momentjs.com/docs/#/plugins)
* [OpenWeatherAPI](https://openweathermap.org/api)
* [MySQL](https://www.npmjs.com/package/sql)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [SMS Nexmo](https://www.npmjs.com/package/nexmo) * _New Technology_
* [JWT Token](https://www.npmjs.com/package/json-web-token) * _New Technology_
***
### How It Works
* Users can sign up or sign in using a email and password.
* Once signed in a, user will be redirected to the 'Home'/'Search Pugs' page.
* On the 'Search Pugs' page a user can search PUGs by 'View All Pugs', 'Indoor' or 'Outdoor' and join a PUG.
* Users are sent a text message as confirmation when they join a PUG.
* If a user would like to create a PUG they can select 'Create a PUG' in the upper right hand corner which will redirect the user to the 'Create A PUG Form'.
* Once a PUG is created, the user will automatically be participating in that event. However, if Users removes/unjoins themselves from that event the event will no longer be active or visible to any participants since they are the creater.
* To view or unjoin PUGs you have signed up for you can visit the 'My Pugs Page' which is accessible through the person icon on the top right of each page. Here the user can view PUGs create, PUGs joined, and unjoin.

*** 
### Demos

#### Sign in/Create a New User
![Pugs Landing Page.](client\public\videos\signup_signin.gif)
***
#### Join PUG (View Indoor, Outdoor, or All)
![Pugs User Page](client\public\videos\view_events_join.gif)
***
#### Create a PUG
![Pugs User Page](client\public\videos\create_event.gif)
***
#### View My PUGs (Unjoin event)
![Pugs User Page](client\public\videos\unjoin.gif)
***