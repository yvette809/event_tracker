import { combineReducers } from "redux";
import { userLoginReducer, userRegisterReducer } from "./userReducers";
import { eventsReducer, eventDetailsReducer } from "./eventReducers";

export default combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    eventList: eventsReducer,
    eventDetails: eventDetailsReducer
})