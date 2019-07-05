import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBJumbotron, MDBIcon, MDBInput } from 'mdbreact';
import { CustomInput, FormGroup, Label} from 'reactstrap';
import CreateForm from '../../components/CreateForm';
import './CreatePug.css';
import '../../components/NavBar';
import NavBar from '../../components/NavBar';
import Moment from 'react-moment';
import TimePickerPage from '../../components/TimePicker/TimePicker.js';

class CreatePug extends React.Component {
        state = {
            eventName: "",
            eventLoc: "",
            isOutdoor: "",
            eventImgUrl: "",
            eventDes: ""
        }
      
        //how is this already happening?
        handleInput = field => event => {
            const { value } = event.target;
            this.setState({
              [field]: value
            });
        };
    

        submitHandler = event => {
            event.preventDefault();
            const newEvent = {
                eventName: this.state.eventName,
                eventLoc: this.state.eventLoc,
                time: this.state.time,
                isOutdoor: false,
                eventImgUrl: this.state.eventImgUrl,
                eventDes: this.state.eventDes
            }

          };
    
    
    render() {
        return (
        <div className="create-background">
          <NavBar />
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
                <MDBRow>
                    <MDBCol sm="6">
                        <MDBInput
                            hint="Event Name" 
                            type="event-name" 
                            name="event"
                            // value= ""
                            // onChange= {this.handleInput("eventName")}
                        />
                    </MDBCol>
                    <MDBCol sm="6">
                        <MDBInput 
                            hint=" Location Address" 
                            type="location-address"
                            name="eventLoc"
                            // value= {this.props.eventLoc}
                            // onChange= {this.handleInput("eventLoc")}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mt-5">
                    <MDBCol sm="6">
                        <TimePickerPage />
                    </MDBCol>
                    <MDBCol sm="6">
                        <FormGroup>
                            <Label className="sm-mt-3" for="category-switch">PUG Category</Label>
                                <div>
                                    {/* <CustomInput type="switch" id="indoor-switch" name="customSwitch" label="Indoor" /> */}
                                    <CustomInput 
                                        type="switch" 
                                        id="outdoor-switch" 
                                        label="Outdoor" 
                                        name="isOutdoor"
                                        // value={false}
                                        // onChange={this.handleInput("isOutdoor")}
                                    />
                                </div>
                        </FormGroup>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol sm="6" className="my-5">
                        <MDBInput 
                            label="Add URL to Event Image" 
                            name="event image"
                            // value={this.props.eventImgUrl}
                            // onChange={this.handleInput("eventImgUrl")}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                            <MDBInput 
                                className="my-2" 
                                type="textarea" 
                                rows="5" 
                                hint="What are we doing?" 
                                label="PUG Description"
                                name="event description"
                                // value={this.props.eventDes}
                                // onChange={this.handleInput("eventDes")} 
                            />
                        </MDBCol>
                    </MDBRow>
                <MDBRow>
                    <MDBCol sm={12} className="text-center">
                        <MDBBtn 
                        className="createBtn create-color mx-auto mt-3" onClick={this.submitHandler}>
                            Create</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
        )
         
    }
}

export default CreatePug;