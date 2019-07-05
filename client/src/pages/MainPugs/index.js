import React from 'react';
import {Row, Container, Button} from 'reactstrap';
import API from '../../util/API';
import './MainPugs.css';
import EventsCard from '../../components/EventsCard';
import NavBar from '../../components/NavBar';

class MainPugs extends React.Component {

    state = {
        events : [],
        user : []
    }

    fetchAllPugs = () => (
       API.getAllEvents().then(events => this.setState({events: events}))
    )

    fetchUserInfo = () => (
        API.getUser().then( user => this.setState({user: user}))
    )

    handleOutdoorClick = () => {
        API.getOutdoor().then( events => this.setState({events: events}))
    }

    handleIndoorClick = () => {
        API.getIndoor().then( events => this.setState({ events: events}))
    }
    
    handle2ButtonClick = () => { 
        API.getAllEvents().then( events => this.setState({events: events}))
    }

    joinClickHandler = id => {
        API.joinEvent(id).then( events => this.setState({events: events}))
    }
    
    componentDidMount () {
        this.fetchAllPugs()
        this.fetchUserInfo()
    }

    render () {

    return (
        <div>
            <NavBar />         
            <div className='han mx-auto'> 
                <Container className='solo'>
                    <Row className="justify-content-center">
                        <Button className='sport' onClick={() => this.handle2ButtonClick()} color='info'> View All Events <i className="fal fa-angle-double-down fa-lg"></i></Button>
                        <Button className='sport' onClick={() => this.handleIndoorClick()} color='info'>Indoor Sports <i className="fal fa-chess-pawn-alt fa-lg right"></i></Button>
                        <Button className='sport' onClick={() => this.handleOutdoorClick()} color='info'>Outdoor Sports  <i className="fal fa-basketball-hoop fa-lg"></i></Button>
                    </Row>
                      <Row className="justify-content-center px-3">
                         {
                             this.state.events.map((events, id) => (
                                 <EventsCard joinEvent={this.joinClickHandler} events={events} key={id} />                                
                                 ))
                                } 
                    </Row>  
                </Container>
            </div>
        </div>
        )
    }
}

export default MainPugs;