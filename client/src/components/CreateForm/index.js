import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import { CustomInput, FormGroup, Label } from 'reactstrap';
import TimePickerPage from '../TimePicker/TimePicker.js';


const CreateForm = () => {
    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol sm={6}>
                        <MDBInput 
                            // value={this.props.value}
                            hint="Event Name" 
                            type="event-name" 
                        />
                    </MDBCol>
                    <MDBCol sm={6}>
                        <MDBInput 
                            hint=" Location Address" 
                            type="location-address" 
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-5">
                    <MDBCol sm={6}>
                        <TimePickerPage />
                    </MDBCol>
                    <MDBCol sm={6}>
                        <FormGroup>
                            <Label for="category-switch">PUG Category</Label>
                                <div>
                                    {/* <CustomInput type="switch" id="indoor-switch" name="customSwitch" label="Indoor" /> */}
                                    <CustomInput 
                                        type="switch" 
                                        id="outdoor-switch" 
                                        name="customSwitch" 
                                        label="Outdoor" 
                                    />
                                </div>
                        </FormGroup>
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
                        />
                    </MDBCol>
                </MDBRow>
        </MDBContainer>
        </div>
        
    );
  }
  
  export default CreateForm;    