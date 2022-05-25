
import {
    GET_EVENTS_REQUEST,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAIL,
    CREATE_EVENT,
    GET_EVENTDETAILS_REQUEST,
    GET_EVENTDETAILS_SUCCESS,
    GET_EVENTDETAILS_FAIL
} from '../constants/eventConstants'

const initialState = {
    events: [],
    loading: false,
    error: {}
}


export const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_EVENTS_SUCCESS:
            return {
                ...state,
                loading:false,
                events: action.payload
            }
        case GET_EVENTS_FAIL:
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        case CREATE_EVENT:
            
            return {
                ...state,
                events: [action.payload, ...state.events],
                loading: false
            };

        default:
            return state
    }
}


export const eventDetailsReducer = (state = { event: {} }, action) => {
    switch (action.type) {
        case GET_EVENTDETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_EVENTDETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                event: action.payload
            }

        case GET_EVENTDETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}