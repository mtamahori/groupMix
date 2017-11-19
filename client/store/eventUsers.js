import axios from 'axios'

// Actions

// Fetches the events a user is hosting
const GET_HOST_EVENTS = 'GET_HOST_EVENTS'
const GET_ALL_USER_EVENTS = 'GET_ALL_USER_EVENTS'

// Action Creators
const getHostEvents = (hostEvents) => ({ type: GET_HOST_EVENTS, hostEvents })
const getAllUserEvents = (userEvents) => ({ type: GET_ALL_USER_EVENTS, userEvents })

// Reducer

const reducerMethods = {
    GET_HOST_EVENTS(state, action) {
        return action.hostEvents
    },
    GET_ALL_USER_EVENTS(state, action) {
        return action.userEvents
    }
}

export default (state = [], action) => {
    if (reducerMethods[action.type]) return reducerMethods[action.type](state, action)
    return state
}

// Thunks 

export const fetchHostEvents = (userId) =>
    dispatch =>
        axios.get(`/api/eventUsers/${userId}/hosted`)
            .then(res => res.data)
            .then(hostedEvents => console.log(hostedEvents))
            .catch(err => console.log(err))

export const fetchAllUserEvents = (userId) => 
    dispatch =>
        axios.get(`/api/eventUsers/${userId}/events`)
        .then(res => res.data)
        .then(events => console.log(events))
        .catch(err => console.log(err))
