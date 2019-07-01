import React from "react";
import { Formik } from "formik";
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
import imagelogo from "./user-circle-solid.svg";
const RegisterPage = () => (
  <div>
    <h1>My Form</h1>
    <MDBContainer className="">
      <MDBRow className=" mx-auto ">
        <MDBCol md={12} sm={12} className="text-left mx-auto mt-1 mb-1">
          <MDBCard className="mx-auto mt-2 animated fadeInUp  wow">
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
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                  email: "",
                  emailconfirm: "",
                  phonenumber: "",
                  city: "",
                  imageurl: imagelogo,
                  state: "",
                  zipcode: ""
                }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }, 1000);
                }}
                render={props => (
                  <form
                    onSubmit={props.handleSubmit}
                    className="needs-validation"
                  >
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
                            value={props.values.username}
                            onInput={props.handleChange("username")}
                            required
                          />
                        </MDBCol>
                        <MDBCol md={6}>
                          <MDBInput
                            label="Your password"
                            icon="lock"
                            group
                            type="password"
                            // required
                            // validate
                            // error="Please enter a valid password"
                            // success="Looks good!"
                            name="password"
                            value={props.values.password}
                            onInput={props.handleChange("password")}
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
                            validate
                            required
                            // error="Please enter a valid email"
                            // success="Looks good!"
                            name="email"
                            value={props.values.email}
                            onInput={props.handleChange("email")}
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
                            value={props.values.emailconfirm}
                            onInput={props.handleChange("emailconfirm")}
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
                            value={props.values.phonenumber}
                            onInput={props.handleChange("phonenumber")}
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
                            value={props.values.zipcode}
                            onInput={props.handleChange("zipcode")}
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
                            value={props.values.imageurl}
                            onChange={props.handleChange("imageurl")}
                          />
                        </MDBCol>
                        <MDBCol className="p-0" md={6}>
                          <div className="mx-auto text-center w-75 p-0 m-0">
                            <figure>
                              <img
                                alt="Your Image Here"
                                src={props.values.imageurl}
                                className="img-fluid img-circle image-av"
                              />
                              <figcaption>Your Image Here</figcaption>
                            </figure>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </div>
                    {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                    {props.errors.email && <div id="feedback">{props.errors.email}</div>}

                    <div className="text-center p-2 my-4 ">
                      <MDBBtn color="cyan" type="submit">Submit</MDBBtn>
                    </div>
                  </form>
                )}
              />
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
  </div>
);
//       <form onSubmit={props.handleSubmit}>
//         <input
//           type="text"
//           onChange={props.handleChange}
//           onBlur={props.handleBlur}
//           value={props.values.name}
//           name="name"
//         />
//         {props.errors.name && <div id="feedback">{props.errors.name}</div>}
//         <button type="submit">Submit</button>
//       </form>
//     )}
//   />
// </div>

export default RegisterPage;
