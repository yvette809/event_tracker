
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
} from '../constants/userConstants'

const initialState = {
    userInfo: {},
    loading: false,
    error: {}
}


export const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                loading: false
            }
        case USER_LOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                loading: false,
                userInfo: {}

            }

        default:
            return state
    }
}


export const userRegisterReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case USER_REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}