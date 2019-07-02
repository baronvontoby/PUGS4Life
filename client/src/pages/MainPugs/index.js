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
            
                <Container>
                    <Row>
                        <Button className='info' color='info' size='lg'>Sport</Button>
                        <Button className='sport' color='info' size='lg'>Sport</Button>
                        <Button className='sport' color='info' size='lg'>Sport</Button>
                        <Button className='sport' color='info' size='lg'>Sport</Button>
                        <Button className='sport' color='info' size='lg'>Sport</Button>
                    </Row>
<<<<<<< HEAD

                    {/*
<<<<<<< HEAD
                      <Row>
                         {
                            this.state.events.map((events, id) => (
                                
                            ))
                        } 
                    </Row>  
=======
=======
>>>>>>> 3d6e953a8c0e6de01b1bb6351e739b309ac19358
                    <Row>
                        {/* {

                            this.state.events.map((events, id) => ())


                            this.state.events.map((events, id) => (
                                
                            ))
<<<<<<< HEAD
>>>>>>> 615d1337142b8ceb731edf9ff37d817f9e612ab4
                        } 
                    </Row> 
>>>>>>> 9f1496908d96c943e3e13afc53be5e604a7ea791 */}
=======
                        } */}
                    </Row>
>>>>>>> 3d6e953a8c0e6de01b1bb6351e739b309ac19358
                </Container>
            </div>
        )
    }
}

export default MainPugs;