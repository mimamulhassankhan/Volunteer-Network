import { FETCH_EVENTS_DATA, FETCH_EVENTS_FALIURE, FETCH_EVENTS_SUCCESS, LOGIN_NEW_USER } from "../VoluteerActions/VolunteerActions";


const initialState = {
    loading: true,
    user : [],
    events : [],
    error: ''
}


export const volunteerAppReducer = (state = initialState, actions) => {
    switch (actions.type){
        case LOGIN_NEW_USER :
            const newUser = actions.user;
            return {
                ...state,
                user : newUser
            }
        case FETCH_EVENTS_DATA :
            return {
                ...state,
                loading : true
            }
        case FETCH_EVENTS_SUCCESS :
            return {
                ...state,
                loading: false,
                events: actions.events,
                error: ''
            }
        case FETCH_EVENTS_FALIURE :
            return {
                ...state,
                loading: false,
                events: [],
                error: actions.error
            }
        default:
            return state;
    }
}