import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { volunteerAppReducer } from "../VolunteerReducers/VolunteerReducers";


export const volunteerAppStore = createStore(volunteerAppReducer, applyMiddleware(thunk));