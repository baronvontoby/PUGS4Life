import React from "react";
import Axios from 'axios';
import API from '../../util/API';
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader} from 'mdbreact';
// import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
import "./pugs.png";

import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";

// const FormPage = props => ( 
class LoginPage extends React.Component {
 
  state = {
    username: "",
    password: ""
  }

  handleInput = field => event => {
    this.setState({[field]: event.target.value})
  }

    handleSubmit = () => {
      let user = { 
        username: this.state.username,
        password: this.state.password
      };
      const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        } 
        // Axios.post('/auth/login', this.state, config )
      //console.log("Valid input:",  " state: ",  this.state);
      API.getUser( {user, config} ).then(userToken => this.setState({token: userToken}))
    }
        //Need to fill this out
        // console.log("Valid input:",  " state: ", this.state);
        // const config = {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   }
        // } 
        // Axios.post('/auth/login', this.state, config )
        //     .then(result => console.log("Result: ", result));
            //.then( result => { console.log(result); localStorage.setItem("token", result.data.token); this.props.history.push("/home") })

    render () {
      return (
      <MDBCard className="mx-auto marginz animated fadeInDown slow wow">
        <MDBCardHeader className="form-header gradient-teal p-3">
          <MDBRow className="justify-content-start">
            <MDBCol xs={6} className="align-self-center">
              <i className="far fa-2x fa-sign-in left mr-3 ml-3" />
            </MDBCol>
            <MDBCol xs={6} className="align-self-center">
              <h3 className="my-3">Sign-in</h3>
            </MDBCol>
          </MDBRow>
        </MDBCardHeader>
        <MDBCardBody>
        <form > {/* onSubmit={props.getWeather}  */} 
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                onChange={this.handleInput('username')}
                value={this.state.username}
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                onChange={this.handleInput("password")}
                value={this.state.password}
                group
                type="password"
                validate
              />
            </div>

            <div className="text-center mt-4">
              <MDBBtn color="light-blue" className="mb-3" type="submit" onClick={this.handleSubmit}>
                Login
              </MDBBtn>
            </div>
          </form>
          <MDBModalFooter>
            <div className="font-weight-light">
              <a href="/register">
                <p>Not a member? Sign Up</p>
              </a>
            </div>
          </MDBModalFooter>
        </MDBCardBody>
      </MDBCard>
      //     </MDBCol>
      //   </MDBRow>
      // </MDBContainer>
      );
    }
  }

export default LoginPage;
