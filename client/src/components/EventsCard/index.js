import React from 'react';
import {Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText} from 'reactstrap';


const EventsCard = props => (
    <Card>
        <CardHeader>{props.events.name}</CardHeader>
            <CardBody>
                <CardTitle>{props.events.event_city}</CardTitle>
                <CardText>{props.events.description}</CardText>
                <Button>Join</Button>
            </CardBody>
        <CardFooter>{props.events.event_time}</CardFooter>
    </Card>
)

export default EventsCard;