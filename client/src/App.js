import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./components/SignUpForm";
import MainPugs from "./pages/MainPugs";
import MyPugs from "./pages/MyPugs";
import CreatePug from "./pages/CreatePug";

class App extends Component {
  state = {
    loggedIn : false,
    user: []
  }

  setUser = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    if ( user !== null ) {
      this.setState({ user: user, loggedIn: true })
    }
  }
  
  componentDidMount () {
    this.setUser();
  }

  render() {
  
    if ( this.state.loggedIn === true ){
    return (
        <div className="App">
          <div className="main">
           <BrowserRouter>
              <Switch>
                <Route exact path='/home' component={() => <MainPugs user={this.state.user} />} />
                <Route exact path='/' component={() => <MainPugs user={this.state.user} />} />
                <Route exact path='/register' component={() => <MainPugs user={this.state.user}  />} />
                <Route exact path='/mypugs' component={() => <MyPugs user={this.state.user} />} />
                <Route exact path='/create' component={() => <CreatePug user={this.state.user} />} />
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
              <Route exact path="/" component={ () => <LandingPage finishLogin={this.setUser} />} />
              <Route exact path="/register" component={() => <RegisterPage finishLogin={this.setUser} className="text-left mx-auto"/>}/>
              <Route exact path="/home" component={ () => <LandingPage finishLogin={this.setUser} />}  />
              <Route exact path="/create" component={ () => <LandingPage finishLogin={this.setUser} />}  />
              <Route exact path="/mypugs" component={ () => <LandingPage finishLogin={this.setUser} />}  />
            </Switch>          
          </BrowserRouter>
          </div>
        </div>
        );
      }
  }  
}

export default App;
