import React from 'react';
import {Col, Row, Container, Jumbotron, Button} from 'reactstrap';
import NavBar from '../../components/NavBar';
import API from '../../util/API';
import './MainPugs.css';

class MainPugs extends React.Component {

    // state = {
    //     events = [],
    //     user =[]
    // }

    // fetchAllPugs = () => (
    //     API.getAllEvents().then( events => this.setState({events: events}))
    // )

    // fetchUserInfo = () => (
    //     API.getUser().then( user => this.setState({user: user}))
    // )

    // componentDidMount () {
    //     this.fetchAllPugs()
    //     this.fetchUserInfo()
    // }


    render () {
        return (
            <div>
                <NavBar></NavBar>
                <Container>
                    <Row>
                        <Button className='info' color='info' size='lg'>Sport</Button>
                        <Button className='sport' color='info' size='lg'>Sport</Button>
                        <Button className='sport' color='info' size='lg'>Sport</Button>
                        <Button className='sport' color='info' size='lg'>Sport</Button>
                        <Button className='sport' color='info' size='lg'>Sport</Button>
                    </Row>
                    <Row>
                        {
                            this.state.events.map((events, id) => (
                                
                            ))
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}

export default MainPugs;