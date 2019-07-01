import React from 'react';
// import seeds from './charSeeds.json';
import './index.css';
import API from '../../util/API';
import {
    MDBContainer,
    MDBRow,
    MDBCol
  } from "mdbreact";

//   import RegisterPage from '../../components/SignUpForm'
  import FormPage from '../../components/LoginForm'


export default class LandingPage extends React.Component{
    render(){
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md={8} sm={12} className="text-left mx-auto">
                    <FormPage className="text-left mx-auto">

                    </FormPage>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }

}

