import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBCol, MDBRow, MDBIcon } from
'mdbreact';
import { CustomInput, FormGroup, Label, Form, Input} from 'reactstrap';


class EditModal extends Component {
state = {
  modal16: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    
      <MDBContainer>
        <MDBBtn onClick={this.toggle(16)}>MDBModal</MDBBtn>
        <MDBModal isOpen={this.state.modal16} toggle={this.toggle(16)}>
          <MDBModalHeader toggle={this.toggle(16)}>Edit PUG Event</MDBModalHeader>
          <MDBModalBody>
          <MDBContainer fluid>
                {/* Edit Input Form */}
                <MDBRow>
                    <MDBCol sm="6">
                        <MDBInput
                            hint="Event Name" 
                            // value= {this.state.eventName}
                            // onChange={this.handleInput('eventName')}
                            name="event"
                        />
                    </MDBCol>
                    <MDBCol sm="6">
                        <MDBInput 
                            hint=" Location Address" 
                            // value={this.state.eventLoc}
                            // onChange={this.handleInput('eventLoc')}
                            name="eventLoc"
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mt-5">
                    <MDBCol sm="6">
                        <Form className="float-left">
                            <FormGroup>
                                <Label for="event-time">Time (12HR Format)</Label>
                                  
                                        <Input
                                        className="w-50"
                                        type="time"
                                        name="eventTime"
                                        id="event-time"
                                        placeholder="time placeholder"
                                        // value={this.state.eventTime}
                                        // onChange={this.handleInput('eventTime')}
                                        />
                                   
                            </FormGroup>
                    </Form>
                    </MDBCol>
                    <MDBCol sm="6">
                        <Form className="float-left">
                            <FormGroup>
                                <Label for="category-switch">PUG Category</Label>
                                    <div>  
                                        <CustomInput 
                                        type="switch" 
                                        id="outdoor" 
                                        name="customSwitch" 
                                        // value={this.state.isOutdoor}
                                        // onChange={this.handleSwitchInput}
                                        label="Outdoor" 
                                        />
                                    </div>
                            </FormGroup>
                        </Form>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol sm="12" className="my-5">
                        <MDBInput 
                            label="Add URL to Event Image" 
                            name="event image"
                            // value={this.state.eventImgUrl}
                            // onChange={this.handleInput('eventImgUrl')}
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
                                // value={this.state.eventDes}
                                // onChange={this.handleInput('eventDes')}
                            />
                        </MDBCol>
                    </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          {/* <MDBModalFooter> */}
          <MDBRow className="mb-3">
              <MDBCol sm="6">
                <MDBBtn className="float-sm-right" color="secondary" onClick={this.toggle(16)}>Save</MDBBtn>
              </MDBCol>
              <MDBCol sm="6">
                <MDBBtn className="float-sm-left" color="primary">Cancel</MDBBtn>
              </MDBCol>
          </MDBRow>
          {/* </MDBModalFooter> */}
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default EditModal;