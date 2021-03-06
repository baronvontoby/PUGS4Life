import React from 'react';
import './index.css';

import {
    MDBContainer,
    MDBRow,
    MDBCol
  } from "mdbreact";

import FormPage from '../../components/LoginForm'
// import WeatherWidget from '../../components/weatherWidget'
// import NavbarPage from '../../components/NavBar';


export default class LandingPage extends React.Component{
    render(){
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md={10} sm={12} lg={9}
                     className="text-left mx-auto">
                    <FormPage finishLogin={this.props.finishLogin} className="text-left mx-auto" />
                </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}
