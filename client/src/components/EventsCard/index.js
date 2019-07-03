import React from 'react';
import {Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText} from 'reactstrap';
import './index.css';


const EventsCard = props => (
    <Card className='george'>
        <CardHeader>{props.events.event_name}</CardHeader>
            <CardBody>
                <CardTitle>{props.events.event_city}</CardTitle>
                <CardText>{props.events.description}</CardText>
                <Button className='sugar'>Join   <i className="mr-2 mx-auto fal fa-calendar-plus fa-lg"></i></Button>
            </CardBody>
        <CardFooter>{props.events.event_time}</CardFooter>
    </Card>
)

export default EventsCard;