import React, { Component } from "react";
import {
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCardHeader,
  MDBContainer,
  MDBModalFooter
} from "mdbreact";
import "./pugs.png";
import './index.css';
import imagelogo from "./user-circle-solid.svg"
import API from "../../util/API";
class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      emailconfirm: "",
      phonenumber: "",
      city: "",
      imageUrl: imagelogo,
      state: "",
      zipcode: ""
    };
  }
  handleInput = field => event => {
    const { value } = event.target;
    this.setState({
      [field]: value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };


  sendForm = event => {
    event.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      emailconfirm: this.state.emailconfirm,
      phonenumber: this.state.phonenumber,
      city: this.state.city,
      imageUrl: this.state.imageurl,
      state: this.state.state,
      zipcode: this.state.zipcode
    }
    API.createNewUser(newUser).then(() => console.log('Success'))
  };

  render() {
    return (
      <MDBContainer className="">
        <MDBRow className=" mx-auto ">
          <MDBCol md={12} sm={12} className="text-left mx-auto mt-1 mb-5">
            <MDBCard className="mx-auto mt-2 animated fadeInDown  wow">
              <MDBCardHeader className="form-header gradient-teal rounded">
                <MDBRow className="justify-content-start">
                  <MDBCol xs={6} className="align-self-center">
                    <i className="far fa-2x fa-sign-in left mr-3 ml-3" />
                  </MDBCol>
                  <MDBCol xs={6} className="align-self-center">
                    <h3 className="my-3">Sign-Up</h3>
                  </MDBCol>
                </MDBRow>
                {/* <MDBIcon icon="lock" />  */}
              </MDBCardHeader>
              <MDBCardBody className="p-3">
                <form noValidate
                className="needs-validation"
          onSubmit={this.submitHandler}>
                  <div className="grey-text border-bottom">
                  <MDBRow>
                    <MDBCol md={6}>
                        <MDBInput
                          label="Username"
                          icon="user"
                          group
                          type="text"
                          validate
                          error="Please enter a valid username"
                          success="Looks good!"
                          name="name"
                          value={this.state.username}
                          onInput={this.handleInput("username")}
                          required
                        />
                      </MDBCol>
                    <MDBCol md={6}>
                        <MDBInput
                          label="Your password"
                          icon="lock"
                          group
                          type="password"
                          required
                          // validate
                          error="Please enter a valid password"
                          success="Looks good!"
                          name="password"
                          value={this.state.password}
                          onInput={this.handleInput("password")}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md={6}>
                          <MDBInput
                            label="Your email"
                            icon="envelope"
                            group
                            type="email"
                            // validate
                            required
                            error="Please enter a valid email"
                            success="Looks good!"
                            name="email"
                            value={this.state.email}
                            onInput={this.handleInput("email")}
                            
                          />
                      </MDBCol>
                      <MDBCol md={6}>
                          <MDBInput
                            label="Confirm your email"
                            icon="exclamation-triangle"
                            group
                            type="text"
                            validate
                            required
                            error="Your email does not match"
                            success="Looks good!"
                            name="emailconfirm"
                            value={this.state.emailconfirm}
                            onInput={this.handleInput("emailconfirm")}
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                      <MDBCol md={6}>
                    <MDBInput
                      label="Your Phone Number"
                      icon="phone"
                      group
                      type="tel"
                      validate
                      required
                      error="Please enter a valid phone number"
                      success="Looks good!"
                      maxLength="10"
                      value={this.state.phonenumber}
                      onInput={this.handleInput("phonenumber")}
                    />
              </MDBCol>
                      <MDBCol>
                        <MDBInput
                          label="Zipcode"
                          icon="compass"
                          iconClass="icon-class"
                          group
                          type="text"
                          // pattern="[0-9-0-9-0]"
                          maxLength="5"
                          minLength="5"
                          validate
                          required
                          error="Please enter a valid zip"
                          success="Looks good!"
                          name="zipcode"
                          value={this.state.zipcode}
                          onInput={this.handleInput("zipcode")}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol className="imageurlDiv" md={6}> 
                        <MDBInput
                          label="Avatar Image URL"
                          icon="image"
                          group
                          name="imageurl"
                          value={this.state.imageurl}
                          onChange={this.handleInput("imageurl")}
                        />
                      </MDBCol>
                      <MDBCol className="p-0" md={6} >
                        <div className="mx-auto text-center w-75 p-0 m-0">
                        <figure>
                          <img
                            alt =''
                            src={this.state.imageurl}
                            className="img-fluid img-circle image-av"
                          />
                          {/* <figcaption>Your Image Here</figcaption> */}
                          </figure>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </div>

                  <div className="text-center p-2 my-4 ">
                    <MDBBtn color="cyan" onClick={this.sendForm}>
                      Submit
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter className="p-0">
                  <div className="font-weight-light">
                    <a href="/">
                      <p>Already a member? Sign In</p>
                    </a>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default RegisterPage;
