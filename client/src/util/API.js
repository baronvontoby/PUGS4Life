import axios from 'axios';

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token")
    config.headers.Authorization =  "Bearer " + token;

    return config;
});

export default {     
    getAllEvents: () => axios.get('/api/allevents')
        .then( response => response.data),
    getMyEvents: () => axios.get('/api/myevents')
        .then( response => response.data),
    getOutdoor: () => axios.get('/api/outdoor')
        .then( response => response.data ),
    getIndoor: () => axios.get('/api/indoor')
        .then( response => response.data ),
    createNewEvent : newEvent => axios.post('/api/newevent', newEvent)
        .then( response => response.data ),
    createNewUser : newUser => axios.post('/api/newuser', newUser)
        .then( response => response.data ),
    joinEvent : eventId => axios.post('/api/join/' + eventId )
        .then(response => response.data),
    updateEvent: id => axios.put('/api/update/' + id )
        .then( response => response.data ),
    removeEvent: id => axios.delete('/api/remove/' + id )
        .then( response => response.data ),
    // getUser: (dbLogin, config) => axios.post('/auth/login', dbLogin, config)
    //     .then( response => response.data)
        //.then( result => { console.log(result); localStorage.setItem("token", result.data.token); this.props.history.push("/home") })
}