import { combineReducers } from "redux";
import { userLoginReducer } from "./userReducers";

export default combineReducers({
    userLogin:userLoginReducer
})