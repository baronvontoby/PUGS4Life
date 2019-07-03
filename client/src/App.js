import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "./App.css";
import LandingPage from './pages/LandingPage';
import RegisterPage from './components/SignUpForm';
import WeatherWidget from './components/weatherWidget';
import MainPugs from './pages/MainPugs';
import MyPugs from './pages/MyPugs';
import NavbarPage from './components/NavBar'
import CreatePug from './pages/CreatePug';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
         <BrowserRouter>
            <Switch>
              <Route exact path="/" component={() => <LandingPage />} />
              <Route exact path="/register" component={() => <RegisterPage className="text-left mx-auto"/>}/>
              <Route exact path='/home' component={() => <MainPugs />}></Route>
              <Route exact path='/mypugs' component={() => <div>My Pugs Page</div>}></Route>
              <Route exact path='/create' component={() => <CreatePug />}></Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
