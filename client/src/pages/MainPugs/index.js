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

    
    handleButtonClick = event => {
        const id = event.target;
        API.getTheseEvents(id).then( events => this.setState({events: events}))
    }
    
    handle2ButtonClick = event => {
        const id = event.target; 
        API.getAllEvents().then( events => this.setState({events: events}))
    }
    
    componentDidMount () {
        this.fetchAllPugs()
        this.fetchUserInfo()
    }

    render () {
        return (
            <div>
            
                <Container>
                    <Row>
                        <Button className='sport' onClick={() => this.handle2ButtonClick()} color='info' size='lg'>View All Events</Button>
                        <Button className='sport' gamecategoryid='1' onClick={() => this.handleButtonClick()} color='info' size='lg'>Indoor Sports</Button>
                        <Button className='sport' gamecategoryid='2' onClick={() => this.handleButtonClick()} color='info' size='lg'>Outdoor Sports</Button>
                        <Button className='sport' gamecategoryid='3' onClick={() => this.handleButtonClick()} color='info' size='lg'>Video Games</Button>
                        <Button className='sport' gamecategoryid='4' onClick={() => this.handleButtonClick()} color='info' size='lg'>Card and Table Top Games</Button>
                    </Row>
<<<<<<< HEAD

=======
>>>>>>> 93eeabc59dadd5885f0f00b0a2390aadfa7a9192
                      <Row>
                         {
                            this.state.events.map((events, id) => (
                                <EventsCard events={events} key={id} />                                
                            ))
                        } 
                    </Row>  
<<<<<<< HEAD

                    <Row>
                        {/* {
                            this.state.events.map((events, id) => (
                                
                            ))
                        } */}
                    </Row>

=======
>>>>>>> 93eeabc59dadd5885f0f00b0a2390aadfa7a9192
                </Container>
            </div>
        )
    }
}

export default MainPugs;