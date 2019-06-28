import React, { Component } from "react";
import { MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBRow, MDBCardHeader, MDBContainer } from "mdbreact";
import "./pugs.png";
class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      emailconfirm:"",
      phonenumber: "",
      password: "",
      city:"",
      imageurl:"",
      state:"",
      zipcode: ""

    };
  }
  handleInput = field => event => {
    const {value} = event.target;
    this.setState( {
        [field] : value
    })
}

  // handleInput = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  sendForm = () => {
    fetch('https://some/url', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
        phonenumber: this.state.phonenumber
      })
    })
    .then(res => res.json())
    .catch(err => console.log(err));
  }

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
                    validate
                    name="password"
                    value={this.state.password}
                    onInput={this.handleInput}
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
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
                  
                    maxLength='10'
                    value={this.state.phonenumber}
                    onInput={this.handleInput}
                  />
                  <MDBRow>
                  <MDBCol>
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
                  <MDBCol>
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
                    maxLength= "5"
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
                    icon="picture"
                    group
                    // type="text"
                    // validate
                    // error="wrong"
                    // name="image"
                    // success="right"
                    name= "imageurl"
                    value={this.state.imageurl}
                    onChange={this.handleInput("imageurl")}
                    
                  />
                  <div className="mx-auto text-center">
      <img alt="" src={this.state.imageurl} className="img-fluid img-circle "></img>
      </div>
                  
              </div>

              <div className="text-center py-4 mt-3">
                <MDBBtn color="cyan" onClick={this.sendForm}>
                  Send Message
                </MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>


      </MDBCol>

    </MDBRow>
  </MDBContainer>    
    );
  }
}

export default RegisterPage;