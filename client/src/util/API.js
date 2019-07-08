import axios from 'axios';

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token")
    config.headers.Authorization =  "Bearer " + token;

    return config;
});

export default {     
    getAllEvents: id=> axios.get('/api/allevents/' + id)
        .then( response => response.data),
    getMyEvents: id => axios.get('/api/myevents/' + id)
        .then( response => response.data),
    getOutdoor: id => axios.get('/api/outdoor/' + id)
        .then( response => response.data ),
    getIndoor: id => axios.get('/api/indoor/' + id)
        .then( response => response.data ),
    createNewEvent : newEvent => axios.post('/api/newevent', newEvent)
        .then( response => response.data ),
    createNewUser : newUser => axios.post('/api/newuser', newUser)
        .then( response => response.data ),
    joinEvent : (userId, eventId ) => axios.post('/api/join/'+ userId + '/' + eventId)
        .then(response => response.data),
    updateEvent: id => axios.put('/api/update/' + id )
        .then( response => response.data ),
    unJoinEvent : ( userId,eventId ) => axios.delete('/api/unjoin', userId, eventId )
        .then( response => response.data),
    removeEvent: id => axios.delete('/api/remove/' + id )
        .then( response => response.data )
}