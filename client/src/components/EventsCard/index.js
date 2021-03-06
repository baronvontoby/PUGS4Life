import React from "react";
// import {Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText} from 'reactstrap';
// import moment from 'moment';
import {
  MDBRow,
  MDBCard,
  MDBCol,
  MDBCardImage,
  MDBBtn
} from "mdbreact";

import "./index.css";
// import avatar from "./avatar.png";
// var createdBy = JSON.parse(localStorage.getItem('user'));
// var creator = createdBy.username;


const EventsCard = props => (
  <MDBCard className="my-3 mx-auto p-2 w-75 z-depth-3">
    <MDBRow className="mx-auto">
      <MDBCol md="3 align-self-center">
        <MDBCardImage
          src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.iconexperience.com%2F_img%2Fv_collection_png%2F512x512%2Fshadow%2Fsoccer_ball.png&f=1"
          className="img-thumbnail w-100 rounded-circle mx-auto img-responsive p-0 waves"
        />
      </MDBCol>
      <MDBCol md="7" style={{ backgroundColor: "white" }}>
        <MDBRow className="align-items-center flex-wrap pt-3">
          <MDBCol md="8 h3">{props.events.event_name}</MDBCol>
          <MDBCol md="4 h5">{props.events.event_time}</MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="12">
            <h6>
              {props.events.event_city}, {props.events.event_state}
            </h6>
          </MDBCol>
          <MDBCol md="12 mx-auto">
            <p className=" border-bottom p-1 text-left my-2">
              {props.events.description}
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mx-auto justify-content-center">
          {/* <MDBCol md="2 mx-auto">
            <MDBCardImage src={avatar} className="img-fluid img avatar" />
          </MDBCol> */}
          <MDBCol md="8 text-left px-0 py-2">
            <p className="font-italic m-0 p-0 text-muted"><i className="text-center mx-auto left fas fa-user-circle fa-lg"></i> Created By: {props.user.id}</p>
          </MDBCol>
          <MDBCol md="4 align-self-center">
            <p className="font-italic m-0 p-0 text-muted font-smaller "><i className="fas fa-circle green-text text-sm-right fa-sm"></i> 10 Friends</p>
          </MDBCol>
        </MDBRow>
      </MDBCol>
      <MDBCol md="2 mx-auto text-center">
      <MDBRow className="align-items-end">
        <MDBCol md="12">
            <MDBBtn
            className="btn btn-default Ripple-parent  mx-auto rounded py-2 px-4"
            onClick={() => props.joinEvent(props.user.id, props.events.id)            
            }
            >
            Join <i className="mr-2 mx-auto fal fa-calendar-plus fa-lg" />
            </MDBBtn>
        </MDBCol>

      </MDBRow>
      </MDBCol>
    </MDBRow>

  </MDBCard>
 
);

export default EventsCard;
