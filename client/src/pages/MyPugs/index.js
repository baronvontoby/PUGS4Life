import React from 'react';
import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBIcon, View, MDBJumbotron } from 'mdbreact';
import './MyPugs.css';
import NavBarRe from '../../components/NavBarRe';
import API from '../../util/API';
import MyEventsCard from '../../components/MyEventsCard';



class MyPugs extends React.Component {

    state = {
        events: []
    }


<<<<<<< HEAD
    fetchMyPugs = () => {
        let userId = localStorage.getItem('newUser.id');
        API.getMyEvents(userId).then(events => this.setState({ events: events }))
    }


=======
fetchMyPugs = () => {
    let userId = localStorage.getItem('user.id');
    API.getMyEvents(userId).then( events => this.setState({events: events}) )
}
    


unJoinClickHandler = eventId => {
    API.unJoinEvent(localStorage.getItem("user.id"), eventId).then( events => this.setState({events: events}) )
}
>>>>>>> 3f97cb33d31e7339657943902b4d98b7817f2852

    unJoinClickHandler = eventId => {
        API.unJoinEvent(localStorage.getItem("newUser.id"), eventId).then(events => this.setState({ events: events }))
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
                            <img src="https://grfpublishers.com/assets/vendor/img/board.png" alt="avatar" className="img-thumbnail" />
                            <h1><strong>NAME(this.userId.name)</strong></h1>
                            {/* <h2><small className="text-muted">Pro Pugger since 2019</small></h2> */}
                        </MDBCol>
                        <MDBCol className="justify-content-center">

                        </MDBCol>
                    </MDBRow>


                    <MDBRow>

                        <MDBCol sm="3" className="text-center">

                            <MDBIcon id="pup" icon="dog" size="5x" />

                        </MDBCol>

                        <MDBCol sm="6" className="">
                            <div className="mt-5">

                                <input type="range" className="custom-range" id="customRange1" />

                            </div>

                        </MDBCol>

                        <MDBCol sm="3" className="text-center">
                            <MDBIcon icon="fire-alt" size="5x" />

                        </MDBCol>

                    </MDBRow>

                    <MDBRow>

                        <MDBCol sm="3" className="text-center">

                            <p>

                                <h1><strong>PUP</strong></h1>

                            </p>

                        </MDBCol>

                        <MDBCol sm="6" className="text-center">

                            <p>

                                <h1><strong>SKILL LEVEL</strong></h1>

                            </p>

                        </MDBCol>

                        <MDBCol sm="3" className="text-center">

                            <p>

                                <h1><strong>PRO</strong></h1>

                            </p>

                        </MDBCol>

                    </MDBRow>

                    <MDBRow className="justify-content-center">
                        {/* <MDBBtn className='sport' onClick={} color='info' size='lg'>Edit Profile</MDBBtn> */}

                    </MDBRow>

                    <MDBRow className="pugsIveMade">

                        <MDBCol>

                            <h1><strong>Pugs I've created:</strong></h1>
                            <hr className="hrTag1"></hr>

                        </MDBCol>

                    </MDBRow>

                    <MDBRow className="pugsIveJoined">

                        <MDBCol>

                            <h1><strong>Pugs I've joined:</strong></h1>
                            {
                                this.state.events.map((events, id) => (
                                    <MyEventsCard unJoinEvent={this.unJoinClickHandler} events={events} key={id} />
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