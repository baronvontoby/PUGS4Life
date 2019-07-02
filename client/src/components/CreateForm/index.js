import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";


const createForm = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol sm={6}>
                    <MDBInput hint="Event Name" type="event-name" />
                </MDBCol>
                <MDBCol sm={6}>
                    <MDBInput hint="Location Address" type="location-address" />
                </MDBCol>
            </MDBRow>
            
            
        </MDBContainer>
    );
  }
  
  export default createForm;