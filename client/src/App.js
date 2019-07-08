import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./components/SignUpForm";
import MainPugs from "./pages/MainPugs";
import MyPugs from "./pages/MyPugs";
import CreatePug from "./pages/CreatePug";
// import jwt_decode from 'jwt-decode';


// let theToken = localStorage.getItem('token');
// let decoded = jwt_decode(theToken);
// localStorage.setItem("user", JSON.stringify(decoded.data[0]));

class App extends Component {
  state = {
    loggedIn : false,
    user: []
  }

  setUser = () => {
    let user = localStorage.getItem('newUser');
    this.setState({ user: user});
    if ( user.id !== null ) {
      this.setState({ loggedIn: true })
    }
  }
  
  componentDidMount () {
    this.setUser();
  }

  // render() {
  //   return (
      
  //     <div className="App">
  //       <div className="main">
  //        <BrowserRouter>
  //           <Switch>
  //             <Route exact path="/" component={() => <LandingPage />} />
  //             <Route exact path="/register" component={() => <RegisterPage className="text-left mx-auto"/>}/>
  //             <Route exact path='/home' component={() => <MainPugs />}></Route>
  //             <Route exact path='/mypugs' component={() => <MyPugs />}></Route>
  //             <Route exact path='/create' component={() => <CreatePug />}></Route>
  //           </Switch>
  //         </BrowserRouter>
  //       </div>
  //     </div>
  //   );
  // }
  renderPage(){

      if( this.state.loggedIn){
      render() {
        return (
      <div className="App">
      <div className="main">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <LandingPage />} />
            <Route exact path="/register" component={() => <RegisterPage className="text-left mx-auto"/>}/>
            <Route exact path='/home' component={() => <MainPugs />}></Route>
            <Route exact path='/mypugs' component={() => <MyPugs />}></Route>
            <Route exact path='/create' component={() => <CreatePug />}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
    }
    // else
    // {
    //   this.props.history.push("/");
    // }
  }
  }
  
}

export default App;
