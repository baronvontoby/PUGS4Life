import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './CreatePug.css';

class CreatePug extends React.Component {
    render() {
        return <div className="create-background">
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol sm={12} className="text-center">
                        <MDBBtn className="createBtn create-color mx-auto">Create</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
        
         
    }
}

export default CreatePug;