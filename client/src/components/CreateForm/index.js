import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import { CustomInput, FormGroup, Label } from 'reactstrap';
import TimePickerPage from '../../components/TimePicker/TimePicker.js';


class CreateForm extends React.Component {
    render() {
        
        return (
            <div>
                <MDBContainer>
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
                </MDBContainer>
            </div> 
        );
    }
}
  
export default CreateForm;    
