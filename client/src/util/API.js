import axios from 'axios';

export default {
    getAllEvents: () => axios.get('/api/allevents')
        .then( response => response.data ),
    getMyEvents: () => axios.get('/api/myevents')
        .then( response => response.data),
    createNewEvent : () => axios.post('/api/newevent')
        .then( response => response.data ),
    createNewUser : () => axios.post('/api/newuser')
        .then( response => response.data ),
    updateEvent: () => axios.put('/api/update')
        .then( response => response.data ),
    removeEvent: () => axios.delete('/api/remove')
        .then( response => response.data )
}