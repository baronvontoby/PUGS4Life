import React from 'react';
import {Row, Container, Button} from 'reactstrap';
import API from '../../util/API';
import './MainPugs.css';
import EventsCard from '../../components/EventsCard';
import NavBarRe from '../../components/NavBarRe';
import nexmo from 'nexmo';

class MainPugs extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            user: this.props.user,
            events: []
        }
    }

    // sendSms = () => {
    // // console.log('Data is' , user);
    //     if (this.state.user.ph_num !== null) {
    //             let phNum = this.state.user.ph_num.substring(0,1) == '1' ? user.ph_num : '1' + this.state.user.ph_num;
    //             console.log("the number is : ", user.ph_num.substring(0,1));
    //             const from =  '17828207989'
    //             const to = phNum;
    //             const text = 'Welcome to Pugs! Ready to play?'
    //             console.log(phNum, text);
    //             nexmo.message.sendSms(from, to, text, (err, responseData) => {
    //                 if (err) {
    //                     console.log(err);
    //                 } else {
    //                     if(responseData.messages[0]['status'] === "0") {
    //                         console.log("Message sent successfully.");
    //                     } else {
    //                         console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
    //                     }
    //                 }
    //         })
    //     }
    // }

    setTheUser = () => {
        let user = JSON.parse(localStorage.getItem('user'))
        this.setState({ user: user })
        console.log(this.state.user);
    }

    fetchAllPugs = () => {
        API.getAllEvents(this.state.user.id).then(events => this.setState({events: events}))
    }

    handleOutdoorClick = () => {
        API.getOutdoor(this.state.user.id).then( events => this.setState({events: events}))
    }

    handleIndoorClick = () => {
        API.getIndoor(this.state.user.id).then( events => this.setState({ events: events}))
    }
    
    handle2ButtonClick = () => { 
        API.getAllEvents(this.state.user.id).then( events => this.setState({events: events}))
    }

    joinClickHandler = (userId, eventId) => {
        // this.sendSms();
        API.joinEvent(userId, eventId).then(events => this.setState({events: events}))
    }
    
    componentDidMount () {
        // this.setTheUser();
        this.fetchAllPugs();
    }
render () {
    return (
        <div>
            <NavBarRe />         
            <div className='han mx-auto'> 
                <Container className='solo'>
                    <Row className="justify-content-center">
                        <Button className='sport rounded-pill' onClick={() => this.handle2ButtonClick()} color='info'> View All Events <i className="fal fa-angle-double-down fa-lg"></i></Button>
                        <Button className='sport rounded-pill' onClick={() => this.handleIndoorClick()} color='info'>Indoor Sports <i className="fal fa-chess-pawn-alt fa-lg right"></i></Button>
                        <Button className='sport rounded-pill' onClick={() => this.handleOutdoorClick()} color='info'>Outdoor Sports  <i className="fal fa-basketball-hoop fa-lg"></i></Button>
                    </Row>
                      <Row className="justify-content-center px-3">
                        {
                            this.state.events.map((events, id) => (
                                <EventsCard joinEvent={this.joinClickHandler} user={this.state.user} events={events} key={id} />                                
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