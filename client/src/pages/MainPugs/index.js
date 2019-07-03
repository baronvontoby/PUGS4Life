import React from 'react';
import {Row, Container, Button} from 'reactstrap';
import NavBar from '../../components/NavBar';
import API from '../../util/API';
import './MainPugs.css';
import EventsCard from '../../components/EventsCard';

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

    
    handleButtonClick = category => {
     API.getTheseEvents(category).then( events => this.setState({events: events}))
    }
    
    handle2ButtonClick = () => { 
        API.getAllEvents().then( events => this.setState({events: events}))
    }

    joinClickHandler = () => {
        const data = {
            user: this.user.id,
            events: this.events.id
        }
        API.joinEvent(data).then( data => this.setState({events: data}))
    }
    
    componentDidMount () {
        this.fetchAllPugs()
        this.fetchUserInfo()
    }

    render () {
        return (
            <div className='han'>
                <NavBar />
                <Container className='solo'>
                    <Row>
                        <Button className='sport' onClick={() => this.handle2ButtonClick()} color='info'>View All Events</Button>
                        <Button className='sport' gamecategoryid='true' onClick={() => this.handleButtonClick(1)} color='info'>Indoor Sports</Button>
                        <Button className='sport' gamecategoryid='false' onClick={() => this.handleButtonClick(0)} color='info'>Outdoor Sports</Button>
                    </Row>
                    <Row>
                         {
                            this.state.events.map((events, id) => (
                                <EventsCard clicker={() => joinClickHandler()} events={events} key={id} />                                
                            ))
                        } 
                    </Row>  
                </Container>
            </div>
        )
    }
}

export default MainPugs;