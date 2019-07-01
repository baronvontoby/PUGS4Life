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
      imageurl: "",
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

  sendForm = () => {
    fetch("/weather", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        phonenumber: this.state.phonenumber,
        city: this.state.city,
        imageurl: this.state.imageurl,
        state: this.state.state,
        zipcode: this.state.zipcode
      })
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow className=" mx-auto">
          <MDBCol md={12} sm={12} className="text-left mx-auto">
            <MDBCard className="mx-auto mt-2 animated fadeInUp  wow">
              <MDBCardHeader className="form-header gradient-teal rounded p-3">
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
              <MDBCardBody>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Username"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="name"
                      value={this.state.username}
                      onInput={this.handleInput}
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                    
                      name="password"
                      value={this.state.password}
                      onInput={this.handleInput}
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                  
                      name="email"
                      value={this.state.email}
                      onInput={this.handleInput}
                    />
                    <MDBInput
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="emailconfirm"
                      value={this.state.emailconfirm}
                      onInput={this.handleInput}
                    />
                    <MDBInput
                      label="Your Phone Number"
                      icon="phone"
                      group
                      type="tel"
                      validate
                      error="wrong"
                      success="right"
                      maxLength="10"
                      value={this.state.phonenumber}
                      onInput={this.handleInput}
                    />
                    <MDBRow>
                      <MDBCol md={4}>
                        <MDBInput
                          label="City"
                          icon="city"
                          // iconClass="mr-5"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          name="city"
                          value={this.state.city}
                          onInput={this.handleinput}
                        />
                      </MDBCol>
                      <MDBCol md={4}>
                        <MDBInput
                          label="State"
                          icon="compass"
                          iconClass="icon-class"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          name="stateloc"
                          value={this.state.stateloc}
                          onInput={this.handleinput}
                        />
                      </MDBCol>
                      <MDBCol>
                        <MDBInput
                          label="Zipcode"
                          icon="compass"
                          iconClass="icon-class"
                          group
                          type="text"
                          pattern="[0-9-0-9-0-9]"
                          maxLength="5"
                          validate
                          error="wrong"
                          success="right"
                          name="zipcode"
                          value={this.state.zipcode}
                          onInput={this.handleinput}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBInput
                      label="Avatar Image URL"
                      icon="image"
                      group
                      // type="text"
                      // validate
                      // error="wrong"
                      // name="image"
                      // success="right"
                      name="imageurl"
                      value={this.state.imageurl}
                      onChange={this.handleInput("imageurl")}
                    />
                    <div className="mx-auto text-center">
                      <img
                        alt=""
                        src={this.state.imageurl}
                        className="img-fluid img-circle "
                      />
                    </div>
                  </div>

                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" onClick={this.sendForm}>
                      Submit
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
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
