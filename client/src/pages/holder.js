<Card className='george'>
<CardHeader>{props.events.event_name}</CardHeader>
    <CardBody>
        <CardTitle>{props.events.event_city}</CardTitle>
        <CardText>{props.events.description}</CardText>
        <Button className='sugar'>Join   <i className="mr-2 mx-auto fal fa-calendar-plus fa-lg"></i></Button>
    </CardBody>
<CardFooter>{props.events.event_time}</CardFooter>
</Card>