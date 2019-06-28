import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Route exact path='/' component={() => <div>hello world</div>}></Route>
            <Route exact path='/home' component={() => <div>Main Pugs Page</div>}></Route>
            <Route exact path='/mypugs' component={() => <div>My Pugs Page</div>}></Route>
            <Route exact path='/create' component={() => <div>Create a pug here</div>}></Route>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
