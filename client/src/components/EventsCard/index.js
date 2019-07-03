import React from 'react';
import {Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText} from 'reactstrap';
// import moment from 'moment';
import './index.css';

const EventsCard = props => (

    <Card className='george'>
        <CardHeader>{props.events.event_name}</CardHeader>
            <CardBody>
                <CardTitle>{props.events.event_city}</CardTitle>
                <CardText>{props.events.description}</CardText>
<<<<<<< HEAD
                <Button className='sugar' >Join</Button>
=======
                <Button className='sugar'>Join   <i className="mr-2 mx-auto fal fa-calendar-plus fa-lg"></i></Button>
>>>>>>> c42e3c14a657e588dcaaf4eb5f40a290fd149b06
            </CardBody>
        <CardFooter>{props.events.event_time}</CardFooter>
    </Card>
)

console.log(EventsCard);

export default EventsCard;