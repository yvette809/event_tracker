import { combineReducers } from "redux";
import { userLoginReducer } from "./userReducers";
import { userRegisterReducer } from "./userReducers";

export default combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer
})