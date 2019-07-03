import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBJumbotron, MDBIcon } from 'mdbreact';
import CreateForm from '../../components/CreateForm';
import './CreatePug.css';

class CreatePug extends React.Component {
        // state = {
        //     eventName: "",
            // eventLocation: "",
            // time,
            // isOutdoor: false,
            // eventImage: "",


        // }
      
      handleInput = field => event => {
        const { value } = event.target;
        this.setState({
          [field]: value
        });
      };
    
      submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
      };
    
    
    render() {
        return <div className="create-background">
        <div>
        {/* Jumbotron */}
          <MDBRow>
            <MDBCol>
              <MDBJumbotron className="image-jumbo">
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
      </div>
            {/* Input Form */}
            <MDBContainer fluid>
            <MDBRow>
                <MDBCol sm={12} className="text-center">
                    <MDBIcon far icon="calendar-plus fa-2x" />
                    <h2>Create a PUG!</h2>
                </MDBCol>
            </MDBRow>
            <CreateForm 
                // eventName= {this.state.eventName},

            />
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