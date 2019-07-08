import React from 'react';
import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBIcon, View, MDBJumbotron } from 'mdbreact';
import './MyPugs.css';
import NavBarRe from '../../components/NavBarRe';
import API from '../../util/API';
import MyEventsCard from '../../components/MyEventsCard';



class MyPugs extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            user: this.props.user,
            events: []
        }
    }

    fetchMyPugs = () => {
        API.getMyEvents(this.state.user.id).then(events => this.setState({ events: events }))
    }

    unJoinClickHandler = (userId,eventId) => {
        API.unJoinEvent( userId, eventId).then(events => this.setState({ events: events }))
    }

    componentDidMount() {
        this.fetchMyPugs();
    }

    render() {
        return (
            <div className="myPugs-background">
                <NavBarRe />
                <MDBJumbotron className="my-jumbo z-depth-2">

                </MDBJumbotron>
                <MDBContainer>

                    <MDBRow>

                        <MDBCol sm="12" className="text-center">
                            <img src="https://grfpublishers.com/assets/vendor/img/board.png" alt="avatar" className="rounded-circle img-thumbnail" />
                            <h1><strong>NAME(this.userId.name)</strong></h1>
                            {/* <h2><small className="text-muted">Pro Pugger since 2019</small></h2> */}
                        </MDBCol>

                        
                    </MDBRow>


                    <MDBRow className="skillDiv resp">

                        <MDBCol sm="3" className="text-center">

                            <MDBIcon id="pup" icon="dog" size="5x" />
                            <p className="skill">

                                <h1><strong>PUP</strong></h1>

                            </p>
                        </MDBCol>

                        <MDBCol sm="6" className="text-center">
                            <div className="mt-5">

                                <input type="range" className="custom-range" id="customRange1" />

                                <p className="skill">
                                    <br></br>
                                    <h3><strong>SKILL LEVEL</strong></h3>

                                </p>


                            </div>

                        </MDBCol>

                        <MDBCol sm="3" className="text-center">
                            <MDBIcon icon="fire-alt" size="5x" />
                            <p className="skill">

                                <h1><strong>PRO</strong></h1>

                            </p>
                        </MDBCol>

                    </MDBRow>

                  

                    <MDBRow className="justify-content-center">
                        {/* <MDBBtn className='sport' onClick={} color='info' size='lg'>Edit Profile</MDBBtn> */}

                    </MDBRow>

                    <MDBRow >

                        <MDBCol className="pugsIveMade">

                            <h1><strong>Pugs I've hosting:</strong></h1>
                            <hr className="hrTag1"></hr>

                        </MDBCol>

                    </MDBRow>

                    <MDBRow >

                        <MDBCol className="pugsIveJoined">

                            <h1><strong>Pugs I've joined:</strong></h1>
                            {
                                this.state.events.map((events, id) => (
                                    <MyEventsCard unJoinEvent={this.unJoinClickHandler} user={this.state.user} events={events} key={id} />
                                ))
                            }
                            <hr className="hrTag2"></hr>
                            <hr></hr>

                        </MDBCol>

                    </MDBRow>

                </MDBContainer>
            </div >
        )
    }

}

export default MyPugs;