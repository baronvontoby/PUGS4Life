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
    getTheseEvents: id => axios.get('/api/events/' + id)
        .then( response => response.data ),
    createNewEvent : () => axios.post('/api/newevent')
        .then( response => response.data ),
            // Axios.post('/auth/login', this.state, config )        
    createNewUser : (dbUser) => axios.post('/api/newuser')
        .then( response => response.data ),
    updateEvent: id => axios.put('/api/update/' + id)
        .then( response => response.data ),
    removeEvent: id => axios.delete('/api/remove/' + id)
        .then( response => response.data ),
    getUser: (dbLogin, config) => axios.post('/auth/login', dbLogin, config)
        .then( response => response.data)
        //.then( result => { console.log(result); localStorage.setItem("token", result.data.token); this.props.history.push("/home") })
}