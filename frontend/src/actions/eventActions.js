import axios from 'axios'
import {
    GET_EVENTS_REQUEST,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAIL,
    CREATE_EVENT,
    GET_EVENTDETAILS_REQUEST,
    GET_EVENTDETAILS_SUCCESS,
    GET_EVENTDETAILS_FAIL
} from '../constants/eventConstants'


// get events
export const getEvents = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_EVENTS_REQUEST
        })


        const { data } = await axios.post('http://localhost:4010/events')

        dispatch({
            type: GET_EVENTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_EVENTS_FAIL,
            payload: error
        })
    }


}


// GET EVENTS BY ID
// get events
export const getEventById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_EVENTDETAILS_REQUEST
        })


        const { data } = await axios.post(`http://localhost:4010/events/${id}`)

        dispatch({
            type: GET_EVENTDETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_EVENTDETAILS_FAIL,
            payload: error
        })
    }


}

// add events

export const addEvent = (formData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_EVENTS_REQUEST
        })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post('http://localhost:4010/events', formData, config)

        dispatch({
            type: CREATE_EVENT,
            payload: data
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_EVENTS_FAIL,
            payload: error
        })
    }


}


