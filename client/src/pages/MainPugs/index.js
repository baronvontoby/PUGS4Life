import React from 'react';
import {Row, Container, Button} from 'reactstrap';
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
    
    componentDidMount () {
        this.fetchAllPugs()
        this.fetchUserInfo()
    }

    render () {

        return (
            <div className='han mx-auto'>
            
                <Container className='solo'>
                    <Row className="justify-content-center">
                        <Button className='sport' onClick={() => this.handle2ButtonClick()} color='info'> View All Events <i className="fal fa-angle-double-down fa-lg"></i></Button>
                        <Button className='sport' gamecategoryid='true' onClick={() => this.handleButtonClick(1)} color='info'>Indoor Sports <i className="fal fa-chess-pawn-alt fa-lg right"></i></Button>
                        <Button className='sport' gamecategoryid='false' onClick={() => this.handleButtonClick(2)} color='info'>Outdoor Sports  <i className="fal fa-basketball-hoop fa-lg"></i></Button>
                    </Row>
                      <Row className="justify-content-center px-3">
                         {
                            this.state.events.map((events, id) => (
                                <EventsCard events={events} key={id} />                                
                            ))
                        } 
                    </Row>  
                </Container>
            </div>
        )
    }
}

export default MainPugs;