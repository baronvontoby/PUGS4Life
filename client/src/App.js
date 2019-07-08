import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./components/SignUpForm";
import MainPugs from "./pages/MainPugs";
import MyPugs from "./pages/MyPugs";
import CreatePug from "./pages/CreatePug";
// import jwt_decode from 'jwt-decode';

class App extends Component {
  state = {
    loggedIn : false,
    user: []
  }

  setUser = () => {
    let user = localStorage.getItem('user');
    this.setState({ user: user});
    if ( user.id !== null ) {
      this.setState({ loggedIn: true })
    }
  }
  
  render() {
    if ( this.state.loggedIn === true ){
    return (
        <div className="App">
          <div className="main">
           <BrowserRouter>
              <Switch>
                <Route exact path='/home' component={() => <MainPugs />} />
                <Route exact path='/mypugs' component={() => <MyPugs />} />
                <Route exact path='/create' component={() => <CreatePug />} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
    );
      }
      else
      {
        return (
        <div className="App">
          <div className="main">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={() => <LandingPage />} />
              <Route exact path="/register" component={() => <RegisterPage className="text-left mx-auto"/>}/>
            </Switch>          
          </BrowserRouter>
          </div>
        </div>
        );
      }
  }  
}

export default App;
