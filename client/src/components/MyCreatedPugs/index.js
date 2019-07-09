import React from 'react';
import { MDBCard, MDBRow, MDBCardBody,MDBCardText, MDBCardHeader, MDBCol, MDBCardImage, MDBBtn, MDBCardTitle, MDBCardFooter } from 'mdbreact';
import './index.css';





const MyCreatedPugs = props => (
    <MDBCard className="my-3 mx-auto p-2 w-75 z-depth-3">
    <MDBRow className="mx-auto">
      <MDBCol md="3 align-self-center">
        <MDBCardImage
          src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F3%2F3b%2FSpongeBob_SquarePants_character.svg%2F1200px-SpongeBob_SquarePants_character.svg.png&f=1"
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
            <p className="font-italic m-0 p-0 text-muted"><i className="text-center mx-auto left fas fa-user-circle fa-lg"></i> Created By: Liz Lemon</p>
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
            onClick={() => props.unJoinEvent(props.user.id, props.events.id)            
            }
            >
            Delete <i className="mr-2 mx-auto fal fa-calendar-plus fa-lg" />
            </MDBBtn>
            <MDBBtn
            className="btn btn-default Ripple-parent  mx-auto rounded py-2 px-4"
            onClick={() => props.unJoinEvent(props.events.id)            
            }
            >
            Update <i className="mr-2 mx-auto fal fa-calendar-plus fa-lg" />
            </MDBBtn>
        </MDBCol>

      </MDBRow>
      </MDBCol>
    </MDBRow>
  </MDBCard>
)


export default MyCreatedPugs;