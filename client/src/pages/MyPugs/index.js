import React from 'react';
import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBIcon } from 'mdbreact';
import './MyPugs.css';
import NavBar from '../../components/NavBar';
import API from '../../util/API';
import MyEventsCard from '../../components/MyEventsCard';


class MyPugs extends React.Component {

state = {
    events: []
}


fetchMyPugs = () => {
    let userId = localStorage.getItem('user.id');
    API.getMyEvents(userId).then( events => this.setState({events: events}) )
}
    


unJoinClickHandler = eventId => {
    API.unJoinEvent(localStorage.getItem("user.id"), eventId).then( events => this.setState({events: events}) )
}

componentDidMount () {
    this.fetchMyPugs();
}

    render() {
        return (
            <div>
                <NavBar />
                <MDBContainer>

                    <MDBRow class="text-center">
                        <MDBCol></MDBCol>

                        <MDBCol class="text-center" className="justify-content-center">
                            <img src="https://grfpublishers.com/assets/vendor/img/board.png" alt="avatar" className="img-thumbnail" />
                            <h1><strong>NAME</strong></h1>
                            {/* <h2><small className="text-muted">Pro Pugger since 2019</small></h2> */}
                        </MDBCol>
                        <MDBCol className="justify-content-center">

                        </MDBCol>
                    </MDBRow>

                    <MDBRow>

                    </MDBRow>

                    <MDBRow>

                        <MDBCol class="col-sm" className="justify-content-center">
                            <MDBIcon icon="dog" size="5x" />
                            <h1><strong>PUP</strong></h1>
                        </MDBCol>
                        <MDBCol></MDBCol>
                        <MDBCol class="col-sm" className="justify-content-center">
                            <div className="my-5">
                                <label htmlFor="customRange1"></label>
                                <input type="range" className="custom-range" id="customRange1" />
                                <h2 className="justify-content-center"><strong>SKILL LEVEL</strong></h2>
                            </div>
                        </MDBCol>
                        <MDBCol></MDBCol>
                        <MDBCol class="col-sm" className="justify-content-center">
                            <MDBIcon icon="fire-alt" size="5x" />
                            <h1><strong>PRO</strong></h1>
                        </MDBCol>

                    </MDBRow>

                    <MDBRow className="justify-content-center">
                        {/* <MDBBtn className='sport' onClick={} color='info' size='lg'>Edit Profile</MDBBtn> */}

                    </MDBRow>

                    <MDBRow className="pugsIveMade">

                        <MDBCol>

                            <h1><strong>Games I have Created</strong></h1>
                            <hr className="hrTag1"></hr>
                            
                        </MDBCol>

                    </MDBRow>

                    <MDBRow className="pugsIveJoined">

                    <MDBCol>

                    <h1><strong>Pick Up Games I have Joined</strong></h1>
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