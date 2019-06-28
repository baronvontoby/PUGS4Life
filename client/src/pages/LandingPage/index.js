import React from 'react';
import {Col, Row, Container, Jumbotron} from 'reactstrap';
// import seeds from './charSeeds.json';
import './index.css';
import API from '../../util/API';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn
  } from "mdbreact";

  import RegisterPage from '../../components/SignUpForm'
  import FormPage from '../../components/LoginForm'


export default class LandingPage extends React.Component{
    // handleInput = field => event => {
    //     const {value} = event.target;
    //     this.setState( {
    //         [field] : value
    //     })
    // }
    // submitUser = () => {
    //     const User = {
    //         name: this.state.name,
    //         imageUrl: this.state.imageUrl,
    //         //Stats:
    //         STR: this.state.STR,
    //         DEX: this.state.DEX,
    //         CON: this.state.CON,
    //         INT: this.state.INT,
    //         WIS: this.state.WIS,
    //         CHA: this.state.CHA,
    //     }
    //     API.createCharacter(newChar)
    //         .then(() => this.clearForm())
    // }
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

