export const LOGIN_NEW_USER = 'LOGIN_NEW_USER';
export const FETCH_EVENTS_DATA = 'FETCH_EVENTS_DATA';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FALIURE = 'FETCH_EVENTS_FALIURE';



export const addLoggedinUser = user => {
    return {type: LOGIN_NEW_USER, user}
}


export const fetchEventsData = () => {
    return { type: FETCH_EVENTS_DATA}
}

export const fetchEventsSuccess = events => {
    return {type: FETCH_EVENTS_SUCCESS, events}
}

export const fetchEventsFailure = error => {
    return {type: FETCH_EVENTS_FALIURE, error}
}