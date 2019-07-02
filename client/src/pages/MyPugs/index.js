import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBJumbotron, MDBCardImage, MDBIcon, } from 'mdbreact';
import './MyPugs.css';
import WeatherWidget from '../../components/weatherWidget'
import NavbarPage from '../../components/NavBar';

class MyPugs extends React.Component {

    render () {
        return (
            <div>
            
                <MDBContainer>
                    <MDBRow>
                        <MDBBtn className='sport' onClick={() => this.handle2ButtonClick()} color='info' size='lg'>Edit Profile</MDBBtn>

                    </MDBRow>
                        
  
                </MDBContainer>
            </div>
        )
    }

}

export default MyPugs;