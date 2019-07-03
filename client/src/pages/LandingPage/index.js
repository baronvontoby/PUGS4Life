import React from 'react';
import './index.css';

import {
    MDBContainer,
    MDBRow,
    MDBCol
  } from "mdbreact";

import FormPage from '../../components/LoginForm'


export default class LandingPage extends React.Component{
    render(){
        return (
            <div>
            {/* <MDBHeader>Yo</MDBHeader> */}
            <MDBContainer>
                <MDBRow>
                    <MDBCol md={10} sm={12} lg={9}
                     className="text-left mx-auto">
                    <FormPage className="text-left mx-auto" />
            
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
        )
    }

}
