import axios from 'axios';

export default {
    getAllEvents: () => axios.get('/api/allevents')
        .then( response => response.data ),
    getMyEvents: () => axios.get('/api/myevents')
        .then( response => response.data),
    getOutdoor: () => axios.get('/api/outdoor')
        .then( response => response.data ),
    getIndoor: () => axios.get('/api/indoor')
        .then( response => response.data ),
    createNewEvent : newEvent => axios.post('/api/newevent/' + newEvent)
        .then( response => response.data ),
    createNewUser : newUser => axios.post('/api/newuser/' + newUser)
        .then( response => response.data ),
    joinEvent : () => axios.post('/api/join/')
        .then(response => response.data),
    updateEvent: id => axios.put('/api/update/' + id)
        .then( response => response.data ),
    removeEvent: id => axios.delete('/api/remove/' + id)
        .then( response => response.data ),
    getUser: () => axios.get('/api/user')
        .then( response => response.data)
}