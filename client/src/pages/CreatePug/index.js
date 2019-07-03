import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBJumbotron, MDBCardImage, MDBIcon } from 'mdbreact';
import CreateForm from '../../components/CreateForm';
import './CreatePug.css';

class CreatePug extends React.Component {
   

    render() {
        return <div className="create-background">
        <div>
        {/* Jumbotron */}
        <MDBJumbotron className="p-0">
          <MDBCardImage
            className="img-fluid"
            src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </MDBJumbotron>
      </div>
            {/* Input Form */}
            <MDBContainer fluid>
            <MDBRow>
                <MDBCol sm={12} className="text-center">
                    <MDBIcon far icon="calendar-plus fa-2x" />
                    <h2>Create a PUG!</h2>
                </MDBCol>
            </MDBRow>
            <CreateForm />
                <MDBRow>
                    <MDBCol sm={12} className="text-center">
                        <MDBBtn className="createBtn create-color mx-auto mt-3">Create</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
        
         
    }
}

export default CreatePug;