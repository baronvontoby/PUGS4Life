import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBJumbotron, MDBIcon, MDBInput } from 'mdbreact';
import { CustomInput, FormGroup, Label, Form, Input} from 'reactstrap';
import './CreatePug.css';
import NavBarRe from '../../components/NavBarRe';
import API from '../../util/API';
import moment from 'moment';

class CreatePug extends React.Component {
        state = {
            eventName: "",
            eventLoc: "",
            isOutdoor: false,
            eventImgUrl: "",
            eventDes: "",
            eventTime: ""
        }
      
        handleInput = field => event => {
            const { value } = event.target;
            this.setState({
              [field]: value
            });
        };

        handleSwitchInput = () => {
            this.setState(state => ({
                isOutdoor: !state.isOutdoor
              }));
        }

    
        // clearForm = () => {
        //     this.setState({ 
        //         eventName: "",
        //         eventLoc: "",
        //         isOutdoor: "",
        //         eventImgUrl: "",
        //         eventDes: "",
        //         eventTime: ""
        //     }) 
        // }

        submitHandler = event => {
            event.preventDefault();
            const newEvent = {
                eventName: this.state.eventName,
                eventLoc: this.state.eventLoc,
                time: moment(this.state.time).format("HH:mm"),
                isOutdoor: this.state.isOutdoor,
                eventImgUrl: this.state.eventImgUrl,
                eventDes: this.state.eventDes
            }
            API.createNewEvent(newEvent).then(() => console.log('Success'))
          };
    
    
    render() {
        return (
        <div className="create-background">
          <NavBarRe />
          <div>
          {/* Jumbotron */}
            <MDBJumbotron className="image-jumbo">
            </MDBJumbotron>
          </div>
            {/* Input Form */}
            <MDBContainer >
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
                            value= {this.state.eventName}
                            onChange={this.handleInput('eventName')}
                            name="event"
                        />
                    </MDBCol>
                    <MDBCol sm="6">
                        <MDBInput 
                            hint=" Location Address" 
                            value={this.state.eventLoc}
                            onChange={this.handleInput('eventLoc')}
                            name="eventLoc"
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mt-5">
                    <MDBCol sm="6">
                        <Form>
                            <FormGroup>
                                <Label for="event-time">Time (12HR Format)</Label>
                                  
                                        <Input
                                        className="w-50"
                                        type="time"
                                        name="eventTime"
                                        id="event-time"
                                        placeholder="time placeholder"
                                        value={this.state.eventTime}
                                        onChange={this.handleInput('eventTime')}
                                        />
                                   
                            </FormGroup>
                    </Form>
                    </MDBCol>
                    <MDBCol sm="6">
                        <FormGroup>
                            <Label className="sm-mt-3" for="category-switch">PUG Category</Label>
                                <div>  
                                    <CustomInput 
                                    type="switch" 
                                    id="outdoor" 
                                    name="customSwitch" 
                                    value={this.state.isOutdoor}
                                    onChange={this.handleSwitchInput}
                                    label="Outdoor" 
                                    />
                                </div>
                        </FormGroup>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol sm="12" className="my-5">
                        <MDBInput 
                            label="Add URL to Event Image" 
                            name="event image"
                            value={this.state.eventImgUrl}
                            onChange={this.handleInput('eventImgUrl')}
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
                                value={this.state.eventDes}
                                onChange={this.handleInput('eventDes')}
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