import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./components/SignUpForm";
import MainPugs from "./pages/MainPugs";
import MyPugs from "./pages/MyPugs";
import CreatePug from "./pages/CreatePug";
// import jwt_decode from 'jwt-decode';



// const PrivateRoute = ({ component: Component, path}) => {
//   <Route {...rest} render = {(props) => (
//     this.state.loggedIn === true ?
//     <Component {...props}/>
//     : <Redirect to = '/'/>
//   )}/>
// }
// const PrivateRoute = ({ component, path}) => {
//   if ( this.state.loggedIn === true )
//     { 
//     if ( path === '/home')
//     {
//       return component = <MainPugs/>
//     }
//     else if ( path === '/mypugs') {
//       return component = <MyPugs />
//     }
//     else if ( path === '/create') {
//       return component = <CreatePug />
//     }
//     }
//     else if ( this.state.loggedIn !== false )
//     {
//       if ( path === '/' )
//       {
//         return component = <LandingPage />
//       }
//       else if ( path === '/register' ){
//         return component = <RegisterPage />
//       }
//     }
//     else {
//       return component = <LandingPage />
//     }
// }



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
    return (
      <div className="App">
        <div className="main">
         <BrowserRouter>
            <Switch>
              {/* <PrivateRoute /> */}
              <Route exact path="/" component={() => <LandingPage />} />
              <Route exact path="/register" component={() => <RegisterPage className="text-left mx-auto"/>}/>
              <Route exact path='/home' component={() => <MainPugs />} />
              <Route exact path='/mypugs' component={() => <MyPugs />} />
              <Route exact path='/create' component={() => <CreatePug />} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }  
}

export default App;
