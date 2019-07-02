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
            <MDBContainer>
                <MDBRow>
                    <MDBCol md={8} sm={12} className="text-left mx-auto">
                    <FormPage className="text-left mx-auto" />
           
                </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

