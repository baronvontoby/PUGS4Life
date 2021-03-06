import React from 'react';
import { MDBCard, MDBCardBody,MDBCardText, MDBCardHeader, MDBCol, MDBCardImage, MDBBtn, MDBCardTitle, MDBCardFooter } from 'mdbreact';
import './index.css';
import avatar from './avatar.png'
import EditModal from '../Edit Modal';




const MyPugsCard = props => (
     
            <MDBCard className="card mx-auto row my-3 justify-content-center px-2">
                <MDBCol className="col-md-3">
                    <MDBCardImage src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.iconexperience.com%2F_img%2Fv_collection_png%2F512x512%2Fshadow%2Fsoccer_ball.png&f=1" className="img-thumbnail">
                        
                    </MDBCardImage>
                </MDBCol>
                <MDBCol className="col-md-9 position-relative p-0">
                    <span className="position-absolute right joinBtn">
                        <MDBBtn className="btn btn-default Ripple-parent sugar py-2 px-3 rounded"  onClick={() => props.unJoinEvent(localStorage.getItem('user.id'),props.events.id)}>Delete</MDBBtn>
                    </span>
                    <span>
                        <EditModal />
                    </span>

                    <MDBCardHeader className="row justify-content-center mx-auto align-content-center px-0">
                        <h3 className="h3 col-md-6 my-0 px-0 text-left">
                            {props.events.event_name}
                        </h3>
                        <h6 className="h6 col-md-5 text-left px-0 mr-0 ml-2 my-0">
                            {props.events.event_time}
                        </h6>
                    </MDBCardHeader>

                    <MDBCardBody className="row py-1 px-1 w-100 mx-auto">
                        <MDBCardTitle className="col-md-12 px-0 py-1 m-0">           
                            {props.events.event_city}
                        </MDBCardTitle>

                        <MDBCardText className="card-text col-md-12 eventDesc px-0 py-1">
                            {props.events.description}
                        </MDBCardText>
                    </MDBCardBody>
               
                </MDBCol>
                <MDBCardFooter className="row m-0 px-4">
                <img src={avatar} alt="Avatar" style={{maxWidth:"25px"}} />

                    Created By:
                </MDBCardFooter>
            </MDBCard>

     
)


export default MyPugsCard;