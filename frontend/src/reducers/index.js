import { combineReducers } from "redux";
import { userLoginReducer, userRegisterReducer } from "./userReducers";
import { eventsReducer, eventDetailsReducer } from "./eventReducers";

export default combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    events: eventsReducer,
    eventDetails: eventDetailsReducer
})