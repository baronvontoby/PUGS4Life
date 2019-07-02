import axios from 'axios';

export default {
    getAllEvents: () => axios.get('/api/allevents')
        .then( response => response.data),
    getMyEvents: () => axios.get('/api/myevents')
        .then( response => response.data),
<<<<<<< HEAD
    getTheseEvents: () => axios.get('/api/events/:id')
=======
    getTheseEvents: id => axios.get('/api/events/' + id)
>>>>>>> d22f89d53824d37ce143c7c5a9690f015bd8fdab
        .then( response => response.data ),
    createNewEvent : () => axios.post('/api/newevent')
        .then( response => response.data ),
    createNewUser : () => axios.post('/api/newuser')
        .then( response => response.data ),
    updateEvent: id => axios.put('/api/update/' + id)
        .then( response => response.data ),
    removeEvent: id => axios.delete('/api/remove/' + id)
        .then( response => response.data ),
    getUser: () => axios.get('/api/user')
        .then( response => response.data)
}