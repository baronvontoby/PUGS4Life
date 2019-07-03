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
                <MDBRow className="mt-5">
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
                    <MDBCol sm={12} className="my-5">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01">
                              Event Image
                            </span>
                          </div>
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="inputGroupFile01"
                              aria-describedby="inputGroupFileAddon01"
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                              Choose file
                            </label>
                          </div>
                        </div>
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