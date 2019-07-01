import React from 'react';
import {Col, Row, Container, Jumbotron} from 'reactstrap';
import Navbar from '../../components/NavBar';
import API from '../../util/API';
import './MainPugs.css';

export default class MainPugs extends React.Component {

    state = {
        events = [],
        user =[]
    }

    fetchAllPugs = () => (
        API.getAllEvents().then( events => this.setState({events: events}))
    )

    fetchUserInfo = () => (
        API.getUser().then( user => this.setState({user: user}))
    )
    componentDidMount () {
        this.fetchAllPugs()
        this.fetchUserInfo()
    }

    render () {
        return (
            <Container>
            <Navbar></Navbar>
                <Row>

                </Row>
            </Container>
        )
    }
}