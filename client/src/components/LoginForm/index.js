import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader} from 'mdbreact';
// import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
import './pugs.png';


import {   MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn } from 'mdbreact';

const FormPage = props => (

          // <MDBContainer>
          
          // <MDBRow>
          //   <MDBCol md={8} sm={12} className="text-left mx-auto" >
              <MDBCard className= "mx-auto marginz animated fadeInDown slow wow" >
                <MDBCardHeader className="form-header gradient-teal rounded p-3">
                  <MDBRow className="justify-content-start">
                    <MDBCol xs={6} className="align-self-center">
                      <i className="far fa-2x fa-sign-in left mr-3 ml-3"></i> 

                    </MDBCol>  
                    <MDBCol xs={6} className="align-self-center">
                      <h3 className="my-3">Sign-in</h3>
                    </MDBCol>
                  </MDBRow>
                        {/* <MDBIcon icon="lock" />  */}
                  </MDBCardHeader>
                <MDBCardBody>
                  <form>
                    <div className="grey-text">
                      <MDBInput
                        label="Type your email"
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
                        group
                        type="password"
                        validate
                      />
                    </div>
    
                  <div className="text-center mt-4">
                    <MDBBtn
                      color="light-blue"
                      className="mb-3"
                      type="submit"
                    >
                      Login
                    </MDBBtn>
                  </div>
                  </form>
                  <MDBModalFooter>
                    <div className="font-weight-light">
                      <a href="/register"><p>Not a member? Sign Up</p></a>
                  
                    </div>
                  </MDBModalFooter>
                </MDBCardBody>
              </MDBCard>
        //     </MDBCol>
        //   </MDBRow>
        // </MDBContainer>

    
  )
  

export default FormPage;

